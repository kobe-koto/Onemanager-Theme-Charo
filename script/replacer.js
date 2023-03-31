import fs from "fs";
const Domain = "https://aom.koto.gq",
    JavaScriptsPath = "/aom-assets/_astro/";

const RootAssetsArray = fs.readdirSync("./dist/");
let TargetHTMLs = MatchList(RootAssetsArray, /.html$/i);

let JavaScriptsArray =
    MatchList(
        MatchList(
            fs.readdirSync(`./dist/${JavaScriptsPath}`),
            /.js$/i
        ),
        /-legacy./
    )

for (let i=0; i<TargetHTMLs.length; i++) {
    // read the HTML
    let HTMLData = fs.readFileSync(`./dist/${TargetHTMLs[i]}`, {encoding:"utf8"});


    // replace assets URL
    for (let i=0; i<RootAssetsArray.length; i++) {
        // remove the `https://aom.koto.gq/` from the source to avoid do stress replace.
        HTMLData = HTMLData.replace(new RegExp(`${Domain}/${RootAssetsArray[i]}`, "gi"), `/${RootAssetsArray[i]}`)

        let exp = new RegExp(`/${RootAssetsArray[i]}`, "gi")
        HTMLData = HTMLData.replace(exp, `${Domain}/${RootAssetsArray[i]}`)
    }

    // patch js asset url to polyfilled url JavaScriptsArray
    let ScriptElement = `<script nomodule src="$JavaScriptPath"></script>`,
        Scripts = "" +
            ScriptElement.replace(
                /\$JavaScriptPath/gi,
                Domain + "/aom-assets/" + MatchList(
                    MatchList(
                        fs.readdirSync("./dist/aom-assets/"),
                        /.min.js$/i
                    ),
                    /^s./i
                )[0]
            );
    for (let i=0; i<JavaScriptsArray.length; i++) {
        let JavaScriptPath = Domain + JavaScriptsPath + JavaScriptsArray[i]
        Scripts += ScriptElement.replace(/\$JavaScriptPath/gi, JavaScriptPath)
    }
    
    // apply JavaScripts Patch.
    HTMLData = HTMLData.replace(/<\/head>/i, Scripts + "</head>")


    // write changes.
    try {
        fs.writeFileSync(`./dist/${TargetHTMLs[i]}`, HTMLData);
        console.log(`Replace ${TargetHTMLs[i]} done.`)
    } catch (err) {
        console.eror(err)
    }
}

function MatchList (ListArray, reg) {
    let Targets = [];
    for (let i=0, i1 =0; i<ListArray.length; i++) {
        if (ListArray[i].match(reg)) {
            Targets[i1] = ListArray[i];
            i1++;
        }
    }
    return Targets;
}

