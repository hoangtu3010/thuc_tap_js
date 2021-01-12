//Summation, subtraction, multiplication, division
function summation(number_1, number_2) {
  return number_1 + number_2;
}
console.log("Summation = " + summation(20, 30));

function subtraction(number_1, number_2) {
  return number_1 - number_2;
}
console.log("Subtraction = " + subtraction(20, 10));

function multiplication(number_1, number_2) {
  return number_1 * number_2;
}
console.log("Multiplication = " + multiplication(10, 20));

function division(number_1, number_2) {
  return number_1 / number_2;
}
console.log("Division = " + division(30, 5));

//Chain
function chain(string_1, string_2) {
  return string_1 + string_2;
}
console.log("Chain: " + chain("Hello", "World !!!"));

//Quadratic equation
function quadraticEquation(x, y, z) {
  let delta = y * y - 4 * x * z;
  let x1, x2;
  if (delta == 0) {
    console.log("Phương trình có nghiệm kép");
    x1 = -y / (2 * x);
    x2 = -y / (2 * x);
    console.log("x1 = " + x1);
    console.log("x2 = " + x2);
  } else if (delta > 0) {
    x1 = (-y - Math.sqrt(delta)) / (2 * x);
    console.log("x1 = " + x1);
    x2 = (-y + Math.sqrt(delta)) / (2 * x);
    console.log("x2 = " + x2);
  } else {
    console.log("Phương trình vô nghiệm");
  }
}
console.log(quadraticEquation(3, 5, 1));

// let a = 3, b = 5, c = 1, delta;
// delta = b * b - 4 * a * c;
// console.log(delta);
// if(delta == 0){
//     console.log('Phương trình có nghiệm kép');
//     x1 = -b / (2 * a);
//     x2 = -b / (2 * a);
//     console.log('x1 = ' + x1);
//     console.log('x2 = ' + x2);
// }else if(delta < 0){
//     console.log('Phương trình vô nghiệm');
// }else{
//     x1 = ((-b - Math.sqrt(delta)) / (2*a));
//     console.log('x1 = ' + x1);
//     x2 = ((-b + Math.sqrt(delta)) / (2*a));
//     console.log('x2 = ' + x2);
// }

//manage
let theGioiDong = [
  {
    name: "iphone22",
    price: 1000,
    trademark: "apple"
  },
  {
    name: "iphone23",
    price: 2000,
    trademark: "apple"
  },
  {
    name: "samsung1000",
    price: 1500,
    trademark: "samsung"
  },
  {
    name: "oppoz",
    price: 12000,
    trademark: "oppo"
  },
  {
    name: "redmi",
    price: 200,
    trademark: "redmi"
  }
];

//Count cellphone
console.log("Count = " + theGioiDong.length);

//Total money cellphone
function totalMoneyCellPhone(sum) {
  for (let i = 0; i < theGioiDong.length; i++) {
    sum += theGioiDong[i].price;
  }
  return sum;
}
console.log("Total money cellphone = " + totalMoneyCellPhone(0));
// let sum = 0;
// for (let i = 0; i<theGioiDong.length; i++){
//     sum += theGioiDong[i].price;
// };
// console.log('Total money cellphone = ' + sum);

//search
function searchInformation(search) {
  for (let i = 0; i < theGioiDong.length; i++) {
    if (theGioiDong[i].name == search) {
      console.log(theGioiDong[i]);
    }
  }
  return search;
}
console.log("Thông Tin: " + searchInformation("iphone22"));

//Total money cellphone trademark
function totalTrademark(trademark) {
  let x = 0;
  for (let i = 0; i < theGioiDong.length; i++) {
    if (theGioiDong[i].trademark == trademark) {
      x += theGioiDong[i].price;
    }
  }
  return x;
}
console.log("Total money cellphone trademark = " + totalTrademark("apple"));
// let total_trademark = 0;
// for (let i = 0; i < theGioiDong.length; i++){
//     if (theGioiDong[i].trademark == 'apple'){
//         total_trademark += theGioiDong[i].price
//     }
// }
// console.log('Total money cellphone trademark = ' + total_trademark);

//Max
let max;
function maxPrice(max) {
  for (let i = 1; i < theGioiDong.length; i++) {
    if (max < theGioiDong[i].price) {
      max = theGioiDong[i].price;
    }
  }
  return max;
}
console.log("Max = " + maxPrice((max = theGioiDong[0].price)));

//Min
let min;
function minPrice(min) {
  for (let i = 1; i < theGioiDong.length; i++) {
    if (min > theGioiDong[i].price) {
      min = theGioiDong[i].price;
    }
  }
  return min;
}
console.log("Min = " + minPrice((min = theGioiDong[0].price)));
// let Max = theGioiDong[0].price;
// let Min = theGioiDong[0].price;
// for (let i = 1; i<theGioiDong.length; i++){
//     if (Max < theGioiDong[i].price){
//         Max = theGioiDong[i].price;
//     }else{
//         Min = theGioiDong[i].price;
//     }
// };
// console.log('Max = ' + Max);
// console.log('Min = ' + Min);
