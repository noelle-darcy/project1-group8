const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "43e4f0813bmshaeb0bec60abdfdbp1c70e2jsn4d7c11d14ce6",
    "X-RapidAPI-Host": "gaming-news.p.rapidapi.com",
  },
};

fetch("https://gaming-news.p.rapidapi.com/news", options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    var min = 0;
    var max = response.length;
    var randomNum = Math.floor(Math.random() * (max - min) + min);
    console.log(randomNum);
    var art = (document.querySelector(
      ".articleUrl"
    ).innerText = `Url: ${response[randomNum].url}`);
    document.querySelector(
      ".title"
    ).innerText = `Title: ${response[randomNum].title}`;
    document.querySelector(
      ".src"
    ).innerText = `Source: ${response[randomNum].source}`;
  })
  .catch((err) => console.error(err));
