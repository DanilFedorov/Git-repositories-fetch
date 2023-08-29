// Wrapper for search input
const search = document.createElement('div');
search.id = 'search';
application.appendChild(search)

// Search input
const searchInput = document.createElement('input');

searchInput.id = 'searchInput';
searchInput.type = 'text';
searchInput.placeholder = 'Redux';
searchInput.style.width = '540px';
searchInput.style.height = '65px';
searchInput.style.fontSize = '48px';
searchInput.style.paddingLeft = '10px';

search.appendChild(searchInput);


