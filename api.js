//api.js: Functions for API calls.

const API_KEY = "1WR15IYZ4yC7CGTEkriR81gIZWfhkXam";
const BASE_URL = "https://api.giphy.com/v1/gifs/search";

export async function fetchGifs(query) {
  const url = `${BASE_URL}?api_key=${API_KEY}&q=${query}&limit=10`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data; // Return the array of GIFs
  } catch (error) {
    console.error("Error fetching GIFs:", error);
    return [];
  }
}
