// Your code here
function mapToNegativize(arr) {
  let newArr = [];
  arr.forEach((ele) => {
    newArr.push(ele * -1);
  });
  return newArr;
}

function mapToNoChange(arr) {
  let newArr = [];
  arr.forEach((ele) => {
    newArr.push(ele);
  });
  return newArr;
}

function mapToDouble(arr) {
  let newArr = [];
  arr.forEach((ele) => {
    newArr.push(ele * 2);
  });
  return newArr;
}
function mapToSquare(arr) {
  let newArr = [];
  arr.forEach((ele) => {
    newArr.push(ele * ele);
  });
  return newArr;
}

function reduceToTotal(arr, start = 0) {
  arr.forEach((ele) => {
    start += ele;
  });
  return start;
}
