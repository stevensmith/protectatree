const npmPackage = require("../package.json");
const fs = require("fs");
const copyfiles = require("copyfiles");

async function insertTime() {
  const fileName = "index.html";
  const buildDir = "./dist/";
  const timeStamp = `Build version ${npmPackage.version}: ${new Date()}`;

  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
  }

  var content = fs.readFileSync(`./${fileName}`, "utf8");
  content = content.replace("BUILD_TIMESTAMP_GOES_HERE", timeStamp);
  fs.writeFile(`${buildDir}${fileName}`, content, ()=>{console.log('HTML updated')});
  // console.log(content);

  copyfiles(['img/**', 'css/**', buildDir], {verbose: false}, ()=>{console.log('files copied')})

}

insertTime();
