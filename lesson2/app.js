// // let a = 0;

// // const func = () => {
// //   a += 15;
// //   console.log(a);
// //   if (a < 500) {
// //     func();
// //   }
// // };

// // func();

// // console.log(1);
// // console.log(2);
// // console.log(3);
// // console.log(4);

// // setTimeout(() => {
// //   console.log("hi");
// // }, 1000);

// // console.log("ok");

// // const hi = () => {
// //   console.log("hi");
// // };

// // setTimeout(hi, 2000);

// // setTimeout(() => {
// //   console.log(0);
// // }, 0);

// // setTimeout(() => {
// //   console.log(1);
// // }, 1000);
// // setTimeout(() => {
// //   console.log(2);
// // }, 2000);
// // setTimeout(() => {
// //   console.log(3);
// // }, 3000);

// // console.log("a");
// // console.log("b");
// // console.log("c");

// // const interval = setInterval(() => {
// //   console.log("interval");
// // }, 1000);

// // setTimeout(() => {
// //   clearInterval(interval);
// // }, 6000);

// // const block = document.querySelector(".block");

// // let postionX = 0;
// // let postionY = 0;

// // const move = () => {
// //   if (postionX <= 440) {
// //     postionX += 16;
// //     block.style.left = `${postionX}px`;
// //     setTimeout(move, 200);
// //   } else if (postionX >= 440 && postionY <= 440) {
// //     postionY += 16;
// //     block.style.top = `${postionY}px`;
// //     setTimeout(move, 200);
// //   }
// // };

// // move();

// // const doHomework = (subject, callback) => {
// //   alert(`starting my ${subject} homework`);
// //   callback();
// // };

// // const alertFinish = () => {
// //   alert("DONE!!!");
// // };

// // doHomework("math", alertFinish);

// // arr.map((item) => {
// //   let element = item + "123123";
// //   console.log(element);
// // });

// // console.log(arr);

// // const arr = [1, 2, 3, 4, 5];

// // arr.reduce((prev, curr) => {
// //   console.log(prev, "prev", curr, "curr");
// //   return prev + curr;
// // }, 0);

// // const fruits = ["apple", "banana", "watermelon", "peach"];

// // const result = fruits.filter((item) => {
// //   return item.length > 5;
// // });

// // console.log(result);
// // console.log(fruits);

// setTimeout(() => {
//   console.log(2);
// }, 1000);

// setTimeout(() => {
//   console.log("dsf;lksdplfksd;lfk;lsdfk");
// }, 1000);

// setTimeout(() => {
//   console.log(3);
// }, 1000);

// setTimeout(() => {
//   console.log(4);
// }, 1000);

const func = (num) => {
  console.log(num, "orig");
  const culk = () => {
    var newNum = num * 8;
    console.log(newNum, "new");
  };
  culk();
  //   console.log(newNum);
  console.log(num);
};

func(42);
