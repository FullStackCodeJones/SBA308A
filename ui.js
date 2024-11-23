//ui.js: Functions for DOM manipulation.

export function displayGifs(gifs) {
  const gifResults = document.getElementById("gif-results");
  gifResults.innerHTML = ""; // Clear previous results

  gifs.forEach((gif) => {
    const gifElement = document.createElement("img");
    gifElement.src = gif.images.fixed_height.url;
    gifElement.alt = "GIF";
    gifElement.classList.add("gif");

    // Add click event to store the selected GIF
    gifElement.addEventListener("click", () => {
      selectedGifUrl = gif.images.fixed_height.url; // Update the selectedGifUrl
      displaySelectedGif(selectedGifUrl); // Update the selected GIF display
    });

    gifResults.appendChild(gifElement);
  });
}

export function displaySelectedGif(gifUrl) {
  const selectedGif = document.getElementById("selected-gif");
  selectedGif.innerHTML = ""; // Clear previous selection

  const imgElement = document.createElement("img");
  imgElement.src = gifUrl;
  imgElement.alt = "Selected GIF";
  selectedGif.appendChild(imgElement);
}

export function getUserMessage() {
  return document.getElementById("message-input").value;
}

export function getGifQuery() {
  return document.getElementById("gif-query").value;
}

export function clearMessage() {
  document.getElementById("message-input").value = "";
  document.getElementById("gif-query").value = ""; // Clear the query input
  document.getElementById("gif-results").innerHTML = ""; // Clear the GIF results
}
