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
    for (i = 0; i < response.length; i++) {
      var art = (document.querySelector(
        ".articleUrl"
      ).innerText = `Url: ${response[i].url}`);
      document.querySelector(
        ".title"
      ).innerText = `Title: ${response[i].title}`;
      document.querySelector(
        ".src"
      ).innerText = `Source: ${response[i].source}`;
    }
  })
  .catch((err) => console.error(err));
