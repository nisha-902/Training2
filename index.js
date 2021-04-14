const fs=require("fs")
const readfile=fs.readFileSync('meanstack.txt', 'utf-8')
console.log(readfile)

const newtext="hello class, this is new file and created at "+Date.now();
fs.writeFileSync('newfile.txt',newtext)
console.log('writing complete')