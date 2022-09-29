const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "43e4f0813bmshaeb0bec60abdfdbp1c70e2jsn4d7c11d14ce6",
    "X-RapidAPI-Host": "video-games-trailers.p.rapidapi.com",
  },
};

fetch("https://video-games-trailers.p.rapidapi.com/trailers", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
