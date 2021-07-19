

module.exports = towelSort = (arr = []) => {
  const newArr = [];
  arr.forEach((item, index)=>
    index%2 === 0 ? newArr.push(...item) : newArr.push(...item.reverse()));

 return newArr;
}
