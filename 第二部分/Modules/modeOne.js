// 直接使用export
// export const a = 12;
// export const b = 5; 
// export function getSum (_a, _b) {
//   return _a + _b
// }



// 先定义  后export出来
const a = 12;
const b = 5; 
function getSum (_a, _b) {
  return _a + _b
}
export {
  a,
  b,
  getSum
}