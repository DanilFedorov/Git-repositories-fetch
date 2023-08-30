import { createRepoCard } from "./createRepoCard";

export function createListItem(data, container) {
    const listItem = document.createElement('li');

    listItem.textContent = data.name;
    listItem.style.fontSize = '30px';
    listItem.style.height = '45px';
    listItem.style.backgroundColor = '#fff';
    listItem.style.border = '1px solid black';
    listItem.style.paddingLeft = '10px';
    listItem.style.cursor = 'pointer';

    listItem.addEventListener('mouseenter', () => {
        listItem.style.backgroundColor = '#65CDF9'; 
    });

    listItem.addEventListener('mouseleave', () => {
        listItem.style.backgroundColor = '#fff'; 
    });

    listItem.addEventListener('click', () => {
        createRepoCard(data, collectionList);
        searchInput.value = '';
        autocomList.innerHTML = '';
    });
    
    container.appendChild(listItem);
}