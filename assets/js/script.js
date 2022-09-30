// var submitBtn = document.querySelector(".generateBtn");

// function generate(e) {
//   window.location.href = "p2.index.html";
// }

// addEventListener("click", generate);

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "43e4f0813bmshaeb0bec60abdfdbp1c70e2jsn4d7c11d14ce6",
//     "X-RapidAPI-Host": "gaming-news.p.rapidapi.com",
//   },
// };

// fetch("https://gaming-news.p.rapidapi.com/news", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

var formBtn = document.getElementById("form-button");
formBtn.addEventListener('click', validateSelection);
var selectedItem = "";

function validateSelection(event){
  event.preventDefault();
  var checkedItem = document.getElementById("jungfun");
  console.log("check", checkedItem.checked);
  if(checkedItem.checked) {
    window.open("https://www.playlostark.com/en-us")//redirect to another url
  }

  var pcItem = document.getElementById("pc");
  // console.log("pc", pcItem.checked);
  if(pcItem.checked) {
    // console.log("success"); //whatever you want to load on the page
    selectedItem = "pc";
    localStorage.setItem("checkedItem", selectedItem);
    window.open("/assets/html/p2.index.html");

    //ask Noelle what information she needs to load the matching content 
    //probably pass id for the checked box 
    //localStorage.getItem("checkedItem");
  }
}