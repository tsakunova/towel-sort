
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix){
    return [];
  }
  const sortArr =[...matrix];
  let newArr = [];
  for(let i = 0; i<sortArr.length; i++){
    if(i === 0 || i%2 === 0){
      newArr = [...newArr, ...sortArr[i]];
    } else {
      let elem = sortArr[i].reverse();
      newArr = [...newArr, ...elem];
    }
  }
 return newArr;
}
