const form = document.querySelector("#gif-form");
const input = document.querySelector("#search-input");
const apiKey = "NKlM1M17nIWedDiCKNDIF5J0xCSQLJOb";
const gifContainer = document.querySelector("#gif-container");

async function requestGIF(inputValue) {
  const results = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: { api_key: apiKey, q: inputValue },
  });
  appendGIF(results.data);
}

function appendGIF({ data }) {
  const randomIndex = Math.floor(Math.random() * 50) + 1;
  const imgURL = data[randomIndex].images.original.url;
  const newImg = document.createElement("img");
  newImg.setAttribute("src", imgURL);
  gifContainer.append(newImg);
}

function removeAllGIFs() {
  gifContainer.innerHTML = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  requestGIF(input.value);
  input.value = "";
});

const removeBtn = document.querySelector("#remove-button");
removeBtn.addEventListener("click", removeAllGIFs);
