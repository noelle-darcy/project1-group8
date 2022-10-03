var gameNameEl = document.getElementById("gameName");
var pcItem = document.getElementById("pc");
var xboxItem = document.getElementById("xbox");
var playstationItem = document.getElementById("playstation");
var everyoneItem = document.getElementById("everyone");
var kidsItem = document.getElementById("kids");
var teensItem = document.getElementById("teen");
var matureItem = document.getElementById("mature");
var adventureItem = document.getElementById("adventure");
var indieItem = document.getElementById("indie");
var puzzleItem = document.getElementById("puzzle");
var actionItem = document.getElementById("action");
var rpgItem = document.getElementById("rpg");
var shooterItem = document.getElementById("shooter");
var gameName = document.createElement("p");

var pcTrue = 0;
var xboxTrue = 0;
var playstationTrue = 0;
var everyoneTrue = 0;
var kidsTrue = 0;
var teensTrue = 0;
var matureTrue = 0;
var adventureTrue = 0;
var indieTrue = 0;
var puzzleTrue = 0;
var actionTrue = 0;
var rpgTrue = 0;
var shooterTrue = 0;



var formBtn = document.getElementById("form-button");
formBtn.addEventListener('click', validateSelection);
var selectedItem = "";

function validateSelection(event){
  event.preventDefault();
  var checkedItem = document.getElementById("jungfun");
//   console.log("check", checkedItem.checked);
  if(checkedItem.checked) {
    window.open("https://www.playlostark.com/en-us")//redirect to another url
  }else {
    if(pcItem.checked) {
        pcTrue = 1;
    }if(xboxItem.checked) {
        xboxTrue = 1;
    }if(playstationItem.checked) {
        playstationTrue = 1;
    }if(everyoneItem.checked) {
        everyoneTrue = 1;
    }if(kidsItem.checked) {
        kidsTrue = 1;
    }if(teensItem.checked) {
        teensTrue = 1;
    }if(matureItem.checked) {
        matureTrue = 1;
    }if(adventureItem.checked) {
        adventureTrue = 1;
    }if(indieItem.checked) {
        indieTrue = 1; 
    }if(puzzleItem.checked) {
        puzzleTrue = 1; 
    }if(actionItem.checked) {
        actionTrue = 1;
    }if(rpgItem.checked) {
        rpgTrue = 1;
    }if(shooterItem.checked) {
        shooterTrue = 1;
    }
    window.open("/assets/html/p2.index.html");
  }
}

//   if(actionItem.checked) {

//   }


//   if(pcItem.checked) {
//     // console.log("success"); //whatever you want to load on the page
//     selectedItem = "pc";
//     localStorage.setItem("checkedItem", selectedItem);
//     //ask Noelle what information she needs to load the matching content 
//     //probably pass id for the checked box 
//     //localStorage.getItem("checkedItem");
//   }
// }

const apiKey = "4fde65f23f6d46c2aba8a6a1773fe57f";

fetch(`https://rawg.io/api/games?page=1&token&key=${apiKey}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
   seperatingGenres(data);
});

function seperatingGenres(data) {
    var ratings = [];
    for (var i = 0; i < data.results.length; i++) {
      ratings.push(data.results[i]);
    }
 var genresArray = [];
    for (let i = 0; i < ratings.length; i++) {
      genresArray.push(genres(ratings[i]));
    }
    for (let i = 0; i < genresArray.length; i++) {
      for (let j = 0; j < genresArray[i].genres.length; j++) {
        if (genresArray[i].esrbRating != null) {
          if (genresArray[i].genres[j].id == 3) {
            var gameName = document.createElement("p");
            gameName.textContent = genresArray[i].name;
            gameNameEl.append(gameName);
          }
        }
      }
    }
}

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


//     console.log(data);
//     var ratings = [];
//     for (var i = 0; i < data.results.length; i++) {
//       ratings.push(data.results[i]);
//     }
//  var genresArray = [];
//     for (let i = 0; i < ratings.length; i++) {
//       genresArray.push(genres(ratings[i]));
//     }
//     for (let i = 0; i < genresArray.length; i++) {
//       for (let j = 0; j < genresArray[i].genres.length; j++) {
//         if (genresArray[i].esrbRating != null) {
//           if (genresArray[i].genres[j].id == 3) {
//             // gameName.textContent = genresArray[i].name;
//             gameNameEl.append(gameName);
//           }
//         }
//       }
//     }

//     // var filteredGenresArray = genresArray.filter(genres => {
//     //   if(ratings.genres)
//     //})
//     // console.log(ratings);
//   });

// function genres(data) {
//   var filteredObj = {
//     name: "",
//     genres: [],
//     esrbRating: "",
//   };
//   // console.log(data);
//   filteredObj.name = data.name;
//   filteredObj.genres = data.genres;
//   return filteredObj;
//   // if(data[i].genres[i] == 2 ) {

//   // }
//   // else if(data[i].id == 3){
//   //     return data[i];
//   // } else if (data[i].id == 4) {
//   //     return data[i];
//   // } else {
//   //     console.log('it no exist');
//   // }
// }

//   function esrbRating(data) {
//     // console.log(data.results[i]);
//     // console.log(data);
//     // var rating_id = data.results[i].esrb_rating.id;
//     if (data.esrb_rating != null) {
//         rating_id = data.esrb_rating;
//         // console.log(rating_id);
//     }

    // console.log(rating_id);
  }
  // console.log(rating_id);
  // ratings.push(rating_id);

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
//will need a for loop to look at all offered platform;
