<<<<<<< HEAD
// var submitBtn = document.querySelector(".generateBtn");

// function generate(e) {
//   window.location.href = "p2.index.html";
// }
=======
var submitBtn = document.querySelector(".generateBtn");
var gameNameEl = document.getElementById("gameName");

function generate(e) {
  if (e.target === submitBtn) {
    window.location.href = "p2.index.html";
  }
}
>>>>>>> 5b48819742cf558b30e9c8f88dbd30b553ca0556

// addEventListener("click", generate);

<<<<<<< HEAD
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
=======
const apiKey = "4fde65f23f6d46c2aba8a6a1773fe57f";

fetch(`https://rawg.io/api/games?page=1&token&key=${apiKey}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var ratings = [];
    // console.log(data);
    for (var i = 0; i < data.results.length; i++) {
      // esrbRating(data.results[i]);
      ratings.push(data.results[i]);
    }

    var genresArray = [];
    //if(input:checked == genres) Array
    for (let i = 0; i < ratings.length; i++) {
      // console.log(" Do it do be?", ratings[i]);
      //genresArray.push(genres(ratings[i]));
      genresArray.push(genres(ratings[i]));
    }
    // console.log("this is outside genresArray", genresArray);
    for (let i = 0; i < genresArray.length; i++) {
      for (let j = 0; j < genresArray[i].genres.length; j++) {
        //console.log(genresArray[i].genres[j]);
        if (genresArray[i].esrbRating != null) {
          if (genresArray[i].genres[j].id == 3) {
            var gameName = document.createElement("p");
            gameName.textContent = genresArray[i].name;
            gameNameEl.append(gameName);
          }
        }
      }
    }

    // var filteredGenresArray = genresArray.filter(genres => {
    //   if(ratings.genres)
    //})
    // console.log(ratings);
  });

function genres(data) {
  var filteredObj = {
    name: "",
    genres: [],
    esrbRating: "",
  };
  // console.log(data);
  filteredObj.name = data.name;
  filteredObj.genres = data.genres;
  return filteredObj;
  // if(data[i].genres[i] == 2 ) {

  // }
  // else if(data[i].id == 3){
  //     return data[i];
  // } else if (data[i].id == 4) {
  //     return data[i];
  // } else {
  //     console.log('it no exist');
  // }
}

function esrbRating(data) {
  // console.log(data.results[i]);
  // console.log(data);
  // var rating_id = data.results[i].esrb_rating.id;
  if (data.esrb_rating != null) {
    rating_id = data.esrb_rating;
    // console.log(rating_id);
  }

  // console.log(rating_id);
}
// console.log(rating_id);
// ratings.push(rating_id);
// }
//   function eachGame (data) {
//     esrbRating (data.results[i].esrb_rating.id);

//   }

//   function esrbRating (ratingID) {
//     console.log(ratingID);
//   }

//ALL ONE MORE BC OF NULL
//esrb rating: 1=everyone, 2=10+, 3=teen, 4=mature, 5=adult only

//genres: 2=shooter, 3=adventure, 4=action, 5=RPG, 7=puzzle, 51=indie
//data.results[5].genres[0].id
//will need a for loop to look at all genres

//platform: 1=PC, 2=Playstation, 3=XBox
//data.results[5].parent_platforms[0].platform.id
//will need a for loop to look at all offered platforms
>>>>>>> 5b48819742cf558b30e9c8f88dbd30b553ca0556
