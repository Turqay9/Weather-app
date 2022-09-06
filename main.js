//Task 1 hazir



const title = document.querySelector("#title")

const icon = document.querySelector("#icon")
const description = document.querySelector("#description")

const temp = document.querySelector("#temp")

 const minmax = document.querySelector(".minmax")

navigator.geolocation.getCurrentPosition(showPosition)
function showPosition(position) {
     a = position.coords.latitude 
     b = position.coords.longitude;

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=a6e4f7f7fb2b3000fbcec455898fce71`).then(resp =>resp.json())
.then(baku =>{
    console.log(baku)
        create(baku)
} )


}

const create = (data)=>{
    title.innerHTML=data.name
    console.log(data);
    

    icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">`
    description.innerHTML = data.weather[0].description
 temp.innerHTML = Math.round((parseFloat(data.main.temp)-273.15)) + " °C"
 minmax.children[1].innerHTML = "MAX:" +Math.round((parseFloat(data.main.temp_max)-273.15)) + " °C"
 minmax.children[0].innerHTML = "MIN:" +Math.round((parseFloat(data.main.temp_min)-273.15)) + " °C"
 minmax.children[2].innerHTML = "PRS:" +Math.round((parseFloat(data.main.pressure)-273.15)) + " hPa"
 minmax.children[3].innerHTML = "HMD:" +data.main.humidity + " %"
 }




//!===


//Task 2 hazir



//callback:

// function login(name, password, callback) {
//     setTimeout(() => {
//       callback(name);
//     }, 3000);
//   }
  
//   function welcome(name) {
//     console.log(`Welcome ${name}`);
//   }
  
//   function showFriends(callback) {
//     const friends = ["Ismet", "Fikret", "Leyla"];
//     setTimeout(() => {
//       callback(friends);
//     }, 2000);
//   }
  
//   function test(callback) {
//     callback(10);
//   }
  
//   // //! Callback hell
  
//   login("Kamran", 12345, function (name) {
//     welcome(name);
//     showFriends(function (frinends) {
//       oneFriend(frinends, (haha) => {
//         console.log(haha);
//         test((n) => {
//           console.log(n);
//         });
//       });
//     });
//   });








//Promise:

// const promise = function(name){
//     return new Promise((res)=>{
//         setTimeout(() => {
//              res(name);
//         }, 3000);
//     })
// }

// function getList() {
//     const friends = ["Ismet", "Fikret", "Leyla"];

//     return new Promise((res)=>{
//         setTimeout(() => {
//             res(friends)
//         }, 2000);
//     })
//   }


// promise("turqay").then((data)=>{
//     console.log(`Welcome ${data}`)
// }).then(()=>getList()
// ).then((friends)=>{
//     console.log(friends[0]);
// })




