var person =['MIshra',27];
var person2= ['Mama', 26];

function addName(name,age){
    return "Hi" +" "+name + "!!you are" + age;
}
console.log(addName(...person2));
console.log(addName(...person));
// Hi abhsihek you are 27

var names= ['anup','kslaye','prashant'];
var final = ['lipakshi', ...names];

final.forEach(function(name) {
    console.log("Hi"+" "+ name);
}, this);


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBRPlIq0sdzIYpmEs5GbN-9u0_sd2Dxydg",
    authDomain: "abhi-todo-app-798dc.firebaseapp.com",
    databaseURL: "https://abhi-todo-app-798dc.firebaseio.com",
    projectId: "abhi-todo-app-798dc",
    storageBucket: "abhi-todo-app-798dc.appspot.com",
    messagingSenderId: "239671725381"
  };
  firebase.initializeApp(config);

  