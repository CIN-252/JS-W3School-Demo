// For Loop Array -> List
// const fruits = ['a', 'b', 'c', 'd'];

/* let text = `<ul>`;
for (var i = 0; i < fruits.length; i++)
{
  text = text + `<li>${fruits[i]}</li>`;
}
text = text + `</ul>`; */

// => Su dung forEach:
/* let text = `<ul>`;
fruits.forEach(myFunction);
text = text + `</ul>`;
function myFunction(para) {
  text = text + `<li>${para}</li>`;
} */


// Sort Number:
/* const arr = [40, 100, 1, 5, 25, 10];
arrAscending = [...arr].sort(ascendingSort);
arrDescending = [...arr].sort(descendingSort);

function ascendingSort(para1, para2) {
  return para1 - para2;
} // Neu kq am thi giu nguyen vi tri

function descendingSort(para1, para2) {
  return para2 - para1;
}

function randomSort(para1, para2) {
  return 0.5 - Math.random();
} */

// Tim so lon nhat:
// Cach 1: Dung ham co san
/* function maxNumber(para) {
  return Math.max.apply(null, para); //min tuong tu: Math.min.apply
}
maxNumber(arr); */
// Cach 2: Loop for: So sanh voi -Infinity
/* function maxNumber(para) {
  let max = -Infinity;
  for (var i = 0; i < para.length; i++)
  {
    if (para[i] > max)
      max = para[i];
  }
  return max;
}
maxNumber(arr); */

// Sap xep chuoi doi tuong:
/* const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

document.getElementById("demo").innerHTML =
`${cars[0].type}  ${cars[0].year} <br>
${cars[1].type}  ${cars[1].year} <br>
${cars[2].type}  ${cars[2].year}`;


function stringSort() {
  cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  document.getElementById("demo2").innerHTML =
  `${cars[0].type}  ${cars[0].year} <br>
  ${cars[1].type}  ${cars[1].year} <br>
  ${cars[2].type}  ${cars[2].year}`;
}*/

// .forEach():
/* const numbers = [45, 5, 6, 7];
let txt = "";
numbers.forEach(myFunction); //Lap qua cac phan tu mang va xuat ra man hinh
function myFunction(value, index, array) {
  txt = txt + value + "<br>";
} */
// Method:
/* const numbers = [5, 6, 45, 7];
numbersMap = numbers.map(myMap);
numbersFilter = numbers.filter(myFilter);
numbersReduce = numbers.reduce(myReduce, 0); // 0: gia tri khoi tao total
numbersReduceR = numbers.reduceRight(myReduce, 0);
numbersEvery = numbers.every(myEvery); // Tra ve true/false
numbersSome = numbers.some(mySome);
numbersFind = numbers.find(myFind); //Tra ve 1 phan tu dau tien thoa dk 
numbersFindIndex = numbers.findIndex(myFindIndex); // Tra ve vi tri trong mang thoa dk

function myMap(value) {
  return value * 2;
}
function myFilter(value) {
  return value < 10;
}
function myReduce(total, value) {
  return total + value;
}
function myEvery(value) {
  return value > 18;
}
function mySome(value) {
  return value > 18;
}
function myFind(value) {
  return value > 5;
}
function myFindIndex(value) {
  return value > 5;
}
// keys():
const keys = numbers.keys();
for (let x of keys)
{
  console.log(x);
}
// entries():
const entries = numbers.entries();
for (let y of entries)
{
  console.log(y);
} */

// Object.defineProperty:
/* const myObj = {
  counter: 100,
};

Object.defineProperty(myObj, "reset", {
  get: function() {
    this.counter = 0;
  }
});

Object.defineProperty(myObj, "add", {
  set: function(value) {
    this.counter += value;
  }
});

myObj.reset;
myObj.add = 5;

document.getElementById('demo').innerHTML = myObj.counter; */
