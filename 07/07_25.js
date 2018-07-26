function mchall(str) {
  let ans = {};
  for(var i = 0; i <str.length; i ++) {
    let a = str[i];
    if(ans[a]) {
     return false;  
    }
    else ans[a] = true;
  }
  return true;
}
console.log(mchall("abcdefgh"));

console.log(mchall("aa"));

console.log(mchall("bcahnk"))

console.log(mchall("kilogram"))

console.log(mchall("15abheid6c893hjxh"))

console.log(mchall("123afsjdl3856"))

console.log(mchall("12345g"))

function isPermut(a, b) {
//   let permut = []
    if (a.length !== b.length) {
        return false;
    }
    return a.split("").sort().join() === b.split("").sort().join();
  permut.push('isPermut')
  

}console.log(isPermut('job','lob'))

console.log(isPermut('add','dad'))

console.log(isPermut('leon','noel'))

console.log(isPermut('quest','tribe'))

console.log(isPermut('live','evil'))

function compress(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const val = str[i];
    let count = 0;
    while (str[i + count] === val) {
      count++;
    }
    result += val + count;
    i += count - 1;
  }
  if (str.length <= result.length) return str;
  return result;
}
console.log(compress('aaaanndddggoooooo'))
console.log(compress('aaasasjndwancdjansll'))
console.log(compress('aaassffffhg'))
