import { debounce } from './debounce.js'; 
import { createListItem } from './createListItem.js'; 


function fetchData(searchTerm) {
  fetch(`https://api.github.com/search/repositories?q=${searchTerm}&per_page=5`)
    .then(response => response.json())
    .then(data => {
      const repositories = data.items;
      autocomList.innerHTML = '';

      repositories.forEach(repo => {
        console.log(repo);
        createListItem(repo);
      });
    })
    .catch(error => {
      console.error('Error fetching repositories:', error);
    });
}

const debouncedFetchData = debounce(fetchData, 300);

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.trim();

  if (searchTerm === '') {
    autocomList.innerHTML = '';
    return;
  }

  debouncedFetchData(searchTerm);
});

document.addEventListener('click', event => {
  if (!autocomList.contains(event.target)) {
    autocomList.innerHTML = '';
  }
});