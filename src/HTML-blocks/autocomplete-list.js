// Autocomplete list
const autocomList = document.createElement('ul');

autocomList.id = 'autocomList';
autocomList.style.listStyle = 'none';

search.appendChild(autocomList);

// Autocomplete items
for (let i = 1; i < 6; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `Redux ${i}`;
    listItem.style.width = '500px';
    listItem.style.height = '45px';
    listItem.style.fontSize = '30px';
    listItem.style.backgroundColor = 'white';
    listItem.style.border = '1px solid black';
    listItem.style.paddingLeft = '10px';
    autocomList.appendChild(listItem);
}