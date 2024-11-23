import { fetchGifs } from "./api.js";
import {
  displayGifs,
  getUserMessage,
  getGifQuery,
  clearMessage,
} from "./ui.js";

let selectedGifUrl = null; // Declare selectedGifUrl here to store the selected GIF URL

// Fetch GIFs when the "Find GIFs" button is clicked
document.getElementById("fetch-gifs").addEventListener("click", async () => {
  const query = getGifQuery() || "I miss you"; // Use user input or default to 'I miss you'
  const gifs = await fetchGifs(query);
  displayGifs(gifs);
});

// Send the message when the "Send Message" button is clicked
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

// Listen for the DOM content being loaded
document.addEventListener("DOMContentLoaded", function () {
  const fetchGifsButton = document.getElementById("fetch-gifs");
  const sendMessageButton = document.getElementById("send-message");

  // Fetch GIFs when the "Find GIFs" button is clicked
  fetchGifsButton.addEventListener("click", async function () {
    const query = getGifQuery();
    if (!query) {
      alert("Please enter a search term.");
      return;
    }

    const gifs = await fetchGifs(query);
    displayGifs(gifs);
  });

  // Listen for the click event on each displayed GIF
  document
    .getElementById("gif-results")
    .addEventListener("click", function (e) {
      if (e.target.tagName === "IMG") {
        // Check if clicked element is an image (GIF)
        selectedGifUrl = e.target.src; // Update selectedGifUrl with the clicked GIF URL
        const selectedGif = document.getElementById("selected-gif");
        selectedGif.innerHTML = `<img src="${selectedGifUrl}" alt="Selected GIF">`;
      }
    });

  // Handle sending the message when the "Send Message" button is clicked
  sendMessageButton.addEventListener("click", function () {
    const message = getUserMessage();
    if (!message) {
      alert("Please write a message before sending.");
      return;
    }

    if (!selectedGifUrl) {
      alert("Please select a GIF.");
      return;
    }

    // Handle message submission (e.g., send to a server or log to console)
    console.log("Message:", message);
    console.log("Selected GIF:", selectedGifUrl);

    alert("Message sent!");

    // Clear inputs after sending
    clearMessage();
  });
});
