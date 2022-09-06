// // // console.log("first");

// // // setTimeout(() => {
// // //   console.log("setTimeOut1");
// // // }, 4);

// // // setTimeout(() => {
// // //   console.log("setTimeOut2");
// // // }, 4);

// // // for (let i = 0; i <= 10000000; i++) {
// // //   if (i === 10000000) {
// // //     console.log("end");
// // //   }
// // // }

// // // const btn = document.querySelector("button");

// // // setTimeout(() => {
// // //   console.log("setTimeOut2");
// // // }, 4000);

// // // btn.addEventListener("click", function () {
// // //   console.log("cklick");
// // // });

// // // setTimeout(() => {
// // //   console.log("setTimeOut");
// // // }, 0); //,macrostak, call

// // // Promise.resolve(3).then(() => console.log("Fetch")); // mictrotask

// // // console.log("Console");

// // console.log(process);

function login(name, password, callback) {
  setTimeout(() => {
    callback(name);
  }, 3000);
}

function welcome(name) {
  console.log(`Welcome ${name}`);
}

function showFriends(callback) {
  const friends = ["Ismet", "Fikret", "Leyla"];
  setTimeout(() => {
    callback(friends);
  }, 2000);
}

function test(callback) {
  callback(10);
}

// //! Callback hell

login("Kamran", 12345, function (name) {
  welcome(name);
  showFriends(function (frinends) {
    oneFriend(frinends, (haha) => {
      console.log(haha);
      test((n) => {
        console.log(n);
      });
    });
  });
});






//======

welcome(name);
const friends = showFriends();
oneFriend(friends);

const btn = document.querySelector("button");
const p = document.querySelector("p");

const server = false;

btn.addEventListener("click", () => {
  const promise = new Promise(function (res, rej) {
    setTimeout(() => {
      if (server) {
        res("okay!");
      } else {
        rej("not okay!");
      }
    }, 3000);
  });

  promise
    .then((data) => {
      console.log("okay first");
      return new Promise((res, rej) => {
        setTimeout(() => {
          res("okay again");
        }, 2000);
      });
    })
    .then((anotherData) => {
      console.log(anotherData);
    })
    .catch((error) => {
      p.innerHTML = error;
    })
    .finally(() => {
      console.log("finally");
    });
});

// //! Request

// const form = document.querySelector("form");
// const h1 = document.querySelector("h1");
// let loading = false;
// const container = document.querySelector(".container");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const value = document.querySelector("input").value;

//   h1.innerText = "loading...";
//   const res = fetch(`https://api.github.com/users/${value}`);
//   res
//     .then((data) => {
//       if (!data.ok) {
//         throw Error("Sometign went wrong!");
//       }
//       const js = data.json();
//       return js;
//     })
//     .then((user) => {
//       container.innerHTML += `<div class="card" style="width: 18rem;">
//       <img src="${user.avatar_url}" class="card-img-top" alt="...">
//       <div class="card-body">
//           <h5 class="card-title">${user.id}</h5>
//           <p class="card-text">${user.login}</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//       </div>
//   </div>`;

//       h1.innerText = "";
//     })

//     .catch((err) => {
//       //   h1.innerHTML = "404 not found!";
//       h1.innerText = err;
//     });
// });
