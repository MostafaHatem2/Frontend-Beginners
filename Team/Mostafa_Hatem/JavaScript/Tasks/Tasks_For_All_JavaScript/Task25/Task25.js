let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];

myArr = [];
console.log(myArr);

myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];
myArr.length = 0;
console.log(myArr);

myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];
myArr.splice(0, myArr.length);
console.log(myArr);
myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];
while (myArr.length) {
  myArr.pop();
}
console.log(myArr);
