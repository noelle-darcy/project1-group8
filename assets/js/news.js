var newsArticle = document.querySelector("aside");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "43e4f0813bmshaeb0bec60abdfdbp1c70e2jsn4d7c11d14ce6",
    "X-RapidAPI-Host": "gaming-news.p.rapidapi.com",
  },
};

fetch("https://gaming-news.p.rapidapi.com/news", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
