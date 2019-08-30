let arr = [
  {
    name: 'hehe',
    age: 3
  },
  {
    name: 'huhu',
    age: 1
  },
  {
    name: 'haha',
    age: 2
  }
  
]
const compareKey = (_key) => {
  return function(obj1, obj2) {
    var val1 = obj1[_key];
    var val2 = obj2[_key];
      
    if(val1 < val2) {
      return -1;
    }else if(val1 > val2) {
      return 1;
    }else{
      return 0;
    }
  }
}

const arrSort = (_key, _arr) => {
  return _arr.sort(compareKey(_key))
}

console.log(arrSort('age', arr))