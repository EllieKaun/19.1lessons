// // let string = prompt("tell me ur name!");

// // let regExp = /Y/i;

// // console.log(string.match(regExp));

// // const letter = "AaaaABbbbCcccCDddD";

// // const regExp = /b/gi;

// // console.log(letter.match(regExp));

// // const numbers = "1d23zx32v1vv2v35z23vb4";

// // const regExp = /\w/g;

// // // const reg = new RegExp("")

// // console.log(numbers.match(regExp));
// // console.log(numbers.replace(regExp, "*"));

// const phoneInput = document.querySelector("#phoneInput");
// const phoneCheck = document.querySelector(".phoneCheck");
// const phoneResult = document.querySelector(".phoneResult");

// const phoneRegExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;

// phoneCheck.addEventListener("click", () => {
//   if (phoneRegExp.test(phoneInput.value)) {
//     phoneResult.innerText = "ok";
//     phoneResult.style.color = "green";
//   } else {
//     phoneResult.innerText = "not ok";
//     phoneResult.style.color = "red";
//   }
// });

// let num = 0;

// const count = () => {
//   num++;
//   console.log(num);
//   if (num < 580) {
//     count();
//   }
// };

// count();

const people = {
  John: {
    age: 25,
    parents: {
      Kelly: {
        age: 45,
        parents: {
          Kayn: {
            age: 75,
            parents: {
              Kayn: {
                age: 75,
                parents: {
                  Kayn: {
                    age: 75,
                    parents: {
                      Kayn: {
                        age: 75,
                        parents: {
                          Kayn: {
                            age: 75,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      Tony: {
        age: 50,
        parents: {
          Dave: {
            age: 70,
          },
        },
      },
    },
  },
  Sam: {
    age: 15,
    parents: {
      Jean: {
        age: 35,
      },
    },
  },
};

const parentsList = (obj) => {
  if (obj.parents) {
    for (let key in obj.parents) {
      console.log(key);
      parentsList(obj.parents[key]);
    }
  } else {
    console.log("ooops...");
  }
};

// parentsList(people.John);

for (let key in people) {
  parentsList(people[key]);
}
