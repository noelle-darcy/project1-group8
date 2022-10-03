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
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var recommendedGames = [];
var neededVarArr = [];
var checkedBoxes = {
    pcTrue: 0,
    xboxTrue: 0,
    playstationTrue: 0,
    everyoneTrue: 0, 
    kidsTrue: 0, 
    teensTrue: 0, 
    matureTrue: 0, 
    adventureTrue: 0, 
    indieTrue: 0, 
    puzzleTrue: 0, 
    actionTrue: 0,
    rpgTrue: 0,
    shooterTrue: 0
}

var formBtn = document.getElementById("form-button");
formBtn.addEventListener('click', mainFunction);
// var selectedItem = "";

function mainFunction(event) {
  event.preventDefault();
  var checkedItem = document.getElementById("jungfun");
  if(checkedItem.checked) {
    window.open("https://www.playlostark.com/en-us")//redirect to another url
  }else {
    // checkedCategories(event.path)
    page1.style.display = "none";
    page2.style.display = "block";
    checkedCategories(event);
    console.log(checkedBoxes);
    callingApi(checkedBoxes);
    // var neededVarArr2 = callingApi();
    console.log('it worked so far');
    console.log(neededVarArr);
  }
}

function callingApi (checkedBoxes) {
  const apiKey = "4fde65f23f6d46c2aba8a6a1773fe57f";

fetch(`https://rawg.io/api/games?page=1&token&key=${apiKey}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
   neededVarArr = sortingData(data);
   console.log(neededVarArr);
   if(checkedBoxes.pcTrue === 1) {
    for (var i = 0; i < neededVarArr.length; i++) {
      for (var j = 0; j < neededVarArr[i].platforms.length; j++) {
        if (neededVarArr[i].platforms[j] == 1) {
          recommendedGames.push(neededVarArr[i].name);
        }}}}
  if(checkedBoxes.xboxTrue === 1) {
    for (var i = 0; i < neededVarArr.length; i++) {
      for (var j = 0; j < neededVarArr[i].platforms.length; j++) {
          if (neededVarArr[i].platforms[j] == 3) {
            recommendedGames.push(neededVarArr[i].name);
              }}}}
              if(checkedBoxes.playstationTrue === 1) {
                for (var i = 0; i < neededVarArr.length; i++) {
                  for (var j = 0; j < neededVarArr[i].platforms.length; j++) {
                    if (neededVarArr[i].platforms[j] == 2) {
                      recommendedGames.push(neededVarArr[i].name);
                    }}}}
                    if(checkedBoxes.shooterTrue === 1) {
                      for (var i = 0; i < neededVarArr.length; i++) {
                        for (var j = 0; j < neededVarArr[i].genres.length; j++) {
                          if (neededVarArr[i].genres[j] == 2) {
                            recommendedGames.push(neededVarArr[i].name);
                          }}}}
                          if(checkedBoxes.adventureTrue === 1) {
                            for (var i = 0; i < neededVarArr.length; i++) {
                              for (var j = 0; j < neededVarArr[i].genres.length; j++) {
                                if (neededVarArr[i].genres[j] == 3) {
                                  recommendedGames.push(neededVarArr[i].name);
                                }}}}
                                if(checkedBoxes.actionTrue === 1) {
                                  for (var i = 0; i < neededVarArr.length; i++) {
                                    for (var j = 0; j < neededVarArr[i].genres.length; j++) {
                                      if (neededVarArr[i].genres[j] == 4) {
                                        recommendedGames.push(neededVarArr[i].name);
                                      }}}}
                                      if(checkedBoxes.rpgTrue === 1) {
                                        for (var i = 0; i < neededVarArr.length; i++) {
                                          for (var j = 0; j < neededVarArr[i].genres.length; j++) {
                                            if (neededVarArr[i].genres[j] == 5) {
                                              recommendedGames.push(neededVarArr[i].name);
                                            }}}}
                                            if(checkedBoxes.puzzleTrue === 1) {
                                              for (var i = 0; i < neededVarArr.length; i++) {
                                                for (var j = 0; j < neededVarArr[i].genres.length; j++) {
                                                  if (neededVarArr[i].genres[j] == 7) {
                                                    recommendedGames.push(neededVarArr[i].name);
                                                  }}}}
                                                  if(checkedBoxes.indieTrue === 1) {
                                                    for (var i = 0; i < neededVarArr.length; i++) {
                                                      for (var j = 0; j < neededVarArr[i].genres.length; j++) {
                                                        if (neededVarArr[i].genres[j] == 51) {
                                                          recommendedGames.push(neededVarArr[i].name);
                                                        }}}}
                                                        if(checkedBoxes.everyoneTrue === 1) {
                                                          for (var i = 0; i < neededVarArr.length; i++) {
                                                              if (neededVarArr[i].esrb == 1) {
                                                                recommendedGames.push(neededVarArr[i].name);
                                                              }}}if(checkedBoxes.kidsTrue === 1) {
                                                                for (var i = 0; i < neededVarArr.length; i++) {
                                                                    if (neededVarArr[i].esrb == 2) {
                                                                      recommendedGames.push(neededVarArr[i].name);
                                                                    }}}if(checkedBoxes.teensTrue === 1) {
                                                                      for (var i = 0; i < neededVarArr.length; i++) {
                                                                          if (neededVarArr[i].esrb == 3) {
                                                                            recommendedGames.push(neededVarArr[i].name);
                                                                          }}}if(checkedBoxes.matureTrue === 1) {
                                                                            for (var i = 0; i < neededVarArr.length; i++) {
                                                                                if (neededVarArr[i].esrb == 4) {
                                                                                  recommendedGames.push(neededVarArr[i].name);
                                                                                }}}
                                                                                console.log(recommendedGames);
                                                                                var uniqueRecommendedGames = [...new Set(recommendedGames)];
                                                                                console.log(uniqueRecommendedGames);
                                                                                gameNameEl.textContent=uniqueRecommendedGames;
}); 
}



function sortingData(data) {
  arr = [];
  platformsArray = [];
  genresArray = [];
    for (var i = 0; i < data.results.length; i++) {
      for(var j = 0; j < data.results[i].parent_platforms.length; j++) {
        platformsArray.push(data.results[i].parent_platforms[j].platform.id); 
      }
      for(var k = 0; k < data.results[i].genres.length; k++) {
        genresArray.push(data.results[i].genres[k].id);
      }

      arr.push({
        name: " " + data.results[i].name,
        platforms: platformsArray,
        genres: genresArray,
        esrb: data.results[i].esrb_rating.id 
      })
      platformsArray = [];
      genresArray = [];
    }
   return arr;
  }


  function checkedCategories(event) {
    if(pcItem.checked) {
      checkedBoxes.pcTrue = 1;
  }if(xboxItem.checked) {
      checkedBoxes.xboxTrue = 1;
  }if(playstationItem.checked) {
    checkedBoxes.playstationTrue = 1;
  }if(everyoneItem.checked) {
    checkedBoxes.everyoneTrue = 1;
  }if(kidsItem.checked) {
    checkedBoxes.kidsTrue = 1;
  }if(teensItem.checked) {
    checkedBoxes.teensTrue = 1;
  }if(matureItem.checked) {
    checkedBoxes.matureTrue = 1;
  }if(adventureItem.checked) {
    checkedBoxes.adventureTrue = 1;
  }if(indieItem.checked) {
    checkedBoxes.indieTrue = 1; 
  }if(puzzleItem.checked) {
    checkedBoxes.puzzleTrue = 1; 
  }if(actionItem.checked) {
    checkedBoxes.actionTrue = 1;
  }if(rpgItem.checked) {
    checkedBoxes.rpgTrue = 1;
  }if(shooterItem.checked) {
    checkedBoxes.shooterTrue = 1;
  }}