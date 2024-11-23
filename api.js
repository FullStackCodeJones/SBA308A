const API_KEY = "1WR15IYZ4yC7CGTEkriR81gIZWfhkXam";
const BASE_URL = "https://api.giphy.com/v1/gifs/search";

// Function to fetch GIFs from the Giphy API
export async function fetchGifs(query) {
  const url = `${BASE_URL}?api_key=${API_KEY}&q=${query}&limit=10`; // Make API request
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data; // Return GIF data
  } catch (error) {
    console.error("Error fetching GIFs:", error);
    return []; // Return empty array in case of error
  }
}
