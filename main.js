//main.js: Main logic to bring the app together.

import { fetchGifs } from "./api.js";
import {
  displayGifs,
  getUserMessage,
  getGifQuery,
  clearMessage,
} from "./ui.js";

let selectedGifUrl = null;

document.getElementById("fetch-gifs").addEventListener("click", async () => {
  const query = getGifQuery() || "I miss you"; // Default if the user hasn't typed anything
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
    clearMessage();
  } else {
    alert("Please write a message and select a GIF.");
  }
});
