import fs from "fs";

let Platform = DetectPlatform();
let TargetDir = ListNodeModules();
console.log(`Currect: ${Platform}.\r\n`)
Switch(Platform, TargetDir);

function Switch(Platform, TargetDir) {
    if (TargetDir.includes("node_modules")) {
        try {
            fs.renameSync("node_modules", `node_modules.${(TargetDir.includes("node_modules.linux") ? "Windows" : "Linux").toLowerCase()}`)
        } catch(err) {
            console.log(err)
        }
    }

    Platform = DetectPlatform();

    try {
        fs.renameSync(`node_modules.${Platform.toLowerCase()}`, "node_modules")
        console.log(`Succ to switch to ${Platform}.\r\n`)
    } catch(err) {
        console.log(err)
    }
}

function DetectPlatform () {
    try {
        const data = fs.readFileSync("/etc/issue", {encoding:"UTF8"}); 
        return data.match(/Linux/i) ? "Linux" : "Windows";
    } catch (e) {
        return "Windows"
    }
}

function ListNodeModules () {
    const files = fs.readdirSync("./"); 
  
    let TargetDir = [];
    for (let i=0, i1 =0; i<files.length; i++) {
        if (files[i].match(/^node_modules/i)) {
            TargetDir[i1] = files[i];
            i1++;
        }
    }
    return TargetDir;
}
