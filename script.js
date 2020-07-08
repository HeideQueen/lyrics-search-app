const form = document.getElementById('form');
const input = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiURL = 'https://api.lyrics.ovh';

// search by song or artist
async function searchSongs(term) {
  try {
    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();
    showData(data);
  } catch (err) {
    console.log(err);
  }
}

// show song and artist in DOM
function showData(data) {}

// Event listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert('please type in a search term');
  } else {
    searchSongs(searchTerm);
  }
});
