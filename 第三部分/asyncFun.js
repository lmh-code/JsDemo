const fs = require('fs')
const readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if(err) {
        reject(err)
      }else {
        resolve(data)
      }
    })
  })
}
// readFile('1.txt').then(res=>{
//   console.log(res.toString());
// })
// readFile('2.txt').then(res=>{
//   console.log(res.toString());
// })
// readFile('3.txt').then(res=>{
//   console.log(res.toString());
// })
// 或者
// readFile('1.txt').then(res => {
//   console.log(res.toString());
//   return readFile('2.txt'); // 返回新的数据，然后输出
// }).then(res => {
//   console.log(res.toString());
//   return readFile('3.txt'); // 返回新的数据，然后输出
// }).then(res => {
//   console.log(res.toString())
// })

async function readFileHandel() {
  let a1 = await readFile('1.txt');
  let a2 = await readFile('2.txt');
  let a3 = await readFile('3.txt');
  console.log(a1.toString())
  console.log(a2.toString())
  console.log(a3.toString())
}
readFileHandel()