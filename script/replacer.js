import fs from 'fs';
const Domain = "https://aom.koto.gq"

fs.readdir("./dist/", (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    let TargetFile = [];
    for (let i=0, i1 =0; i<files.length; i++) {
        if (files[i].match(/.html$/gi)) {
            TargetFile[i1] = files[i];
            i1++;
        }
    }
    DoReplace(TargetFile, files);
});

function DoReplace(FileArray, PathArray) {
    for (let i=0; i<FileArray.length; i++) {
        fs.readFile(`./dist/${FileArray[i]}`, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            let ReplacedText = data;
            for (let i=0; i<PathArray.length; i++) {
                let exp = new RegExp(`/${PathArray[i]}`, "gi")
                ReplacedText = ReplacedText.replace(exp, `${Domain}/${PathArray[i]}`)
            }

            fs.writeFile(`./dist/${FileArray[i]}`, ReplacedText, err => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(`Replace ${FileArray[i]} done.`)
            })
        })
    }
}



