//main.js: Main logic to bring the app together.

import { fetchGifs } from "./api.js";
import {
  displayGifs,
  getUserMessage,
  getGifQuery,
  clearMessage,
} from "./ui.js";

let selectedGifUrl = null; // Store the selected GIF URL

document.getElementById("fetch-gifs").addEventListener("click", async () => {
  const query = getGifQuery() || "I miss you"; // Use user input or default to 'I miss you'
  const gifs = await fetchGifs(query);
  displayGifs(gifs);
});

document.getElementById("send-message").addEventListener("click", () => {
  const message = getUserMessage();
  if (message && selectedGifUrl) {
    console.log("Sending message:", message);
    console.log("With GIF:", selectedGifUrl);
    // Here you would send the message and GIF
    alert(`Message sent: ${message}\nWith GIF: ${selectedGifUrl}`);
    clearMessage(); // Clear the input and selected GIF after sending
  } else {
    alert("Please write a message and select a GIF.");
  }
});
