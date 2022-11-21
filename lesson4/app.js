// // // const btn = document.querySelectorAll("button");

// // // console.log(btn);

// // // btn.forEach((item) => {
// // //   item.addEventListener("click", (e) => {
// // //     console.log(e.target);
// // //   });
// // // });

// // const obj = {
// //   name: "John",
// //   age: 25,
// // };

// // console.log(obj, "obj");

// // const data = JSON.stringify(obj);

// // console.log(data, "stringify");

// // console.log(JSON.parse(data), "parse");

// const btn = document.querySelector("button");

// // btn.addEventListener("click", () => {
// //   const request = new XMLHttpRequest(); //создание запроса
// //   request.open("GET", "data.json"); //объявляем метод запроса и указываем путь
// //   request.setRequestHeader("Content-type", "application/json"); // задание заголовков
// //   request.send(); //отправка запроса
// //   request.addEventListener("load", () => {
// //     console.log(JSON.parse(request.response));
// //     const data = JSON.parse(request.response);
// //     document.querySelector(".name").innerHTML = data.name;
// //     document.querySelector(".age").innerHTML = data.age;
// //   });
// // });

// const getData = () => {
//   const request = new XMLHttpRequest(); //создание запроса
//   request.open("GET", "data.json"); //объявляем метод запроса и указываем путь
//   request.setRequestHeader("Content-type", "application/json"); // задание заголовков
//   request.send(); //отправка запроса
//   request.addEventListener("load", () => {
//     console.log(JSON.parse(request.response));
//     const data = JSON.parse(request.response);
//     document.querySelector(".name").innerHTML = data.name;
//     document.querySelector(".age").innerHTML = data.age;
//   });
// };

// getData();

// string boolean int NaN undef - primitive
// arr obj - obj

// const obj = { name: "name" };
// const arr = [1, 2, 3, 4];

// console.log(typeof arr);

// const a = 5;

// const b = a * 7;

// console.log(a);
// console.log(b);

const obj = {
  name: "John",
  id: 1,
};

const obj2 = { ...obj };

obj2.name = "Alex";
obj2.number = "+996 555 55 55 55";

console.log(obj, "1");
console.log(obj2, "2");

const arr = [1, obj2];

console.log(arr);
