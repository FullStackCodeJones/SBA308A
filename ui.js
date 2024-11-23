// Function to get the user's message
export function getUserMessage() {
  return document.getElementById("message-input").value.trim();
}

// Function to get the GIF query from the user input
export function getGifQuery() {
  return document.getElementById("gif-query").value.trim();
}

// Function to display the fetched GIFs
export function displayGifs(gifs) {
  const gifResultsContainer = document.getElementById("gif-results");
  gifResultsContainer.innerHTML = ""; // Clear previous results

  if (gifs.length === 0) {
    gifResultsContainer.innerHTML =
      "<p>No GIFs found. Please try another search.</p>";
    return;
  }

  gifs.forEach((gif) => {
    const img = document.createElement("img");
    img.src = gif.images.fixed_height_small.url;
    img.alt = gif.title;
    img.classList.add("gif");
    img.addEventListener("click", () => selectGif(gif.images.fixed_height.url));
    gifResultsContainer.appendChild(img);
  });
}

// Function to select a GIF
export function selectGif(gifUrl) {
  const selectedGif = document.getElementById("selected-gif");
  selectedGif.innerHTML = `<img src="${gifUrl}" alt="Selected GIF" />`;
}

// Function to clear the message input and selected GIF
export function clearMessage() {
  document.getElementById("message-input").value = "";
  document.getElementById("gif-query").value = "";
  document.getElementById("gif-results").innerHTML = "";
  document.getElementById("selected-gif").innerHTML = "";
}
