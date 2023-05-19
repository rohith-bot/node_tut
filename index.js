const path = require("node:path")

console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename))
console.log(path.basename(__dirname))

console.log(path.extname(__filename))
console.log(path.extname(__dirname))

console.log(path.parse(__filename))
let obj1 = path.parse(__filename);

console.log(path.format(obj1))

console.log(path.join("folder1","folder2","index.js"))
console.log(path.resolve("folder1","folder2","index.js"))
console.log(path.resolve("/folder1","folder2","index.js"))
console.log(path.resolve("/folder1","//folder2","index.js"))
console.log(path.resolve("/folder1","//folder2","../index.js"))