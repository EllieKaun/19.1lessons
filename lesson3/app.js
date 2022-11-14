// function varTest() {
//   var x = 1;
//   console.log(x, "a");
//   if (true) {
//     var x = 2; та же самая
//     console.log(x, "b");
//   }
//   console.log(x, "c");
// }

// varTest();

// const letTest = () => {
//   let x = 1;
//   console.log(x, "a");
//   if (true) {
//     let x = 2; //новая переменная
//     console.log(x, "b");
//   }
//   console.log(x, "c");
// };

// letTest();

// const doHomework = (callback, subject = "abc") => {
//   alert(`Starting my ${subject} homework`);
//   callback();
// };

// const alertFinish = () => {
//   alert("Done!!!");
// };

// doHomework(alertFinish);

const btn = document.querySelectorAll("button");

// btn.forEach((item) => {
//   //   console.log(item);
//   item.addEventListener("click", (event) => {
//     // if (!event.target.classList.contains("red")) {
//     //   event.target.classList.add("red");
//     // } else {
//     //   event.target.classList.remove("red");
//     // }
//     event.target.classList.toggle("red");
//   });
// });

const container = document.querySelector(".container");
const newBtn = document.createElement("button");
container.append(newBtn);

container.addEventListener("click", (event) => {
  console.dir(event.target);
  if (event.target.tagName === "BUTTON") {
    event.target.classList.toggle("red");
  }
});
