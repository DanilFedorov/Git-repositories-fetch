import closeBtn from '../img/close.svg'

export function createRepoCard(data, container) {
    const repoCard = document.createElement('li');
    const repoCardList = document.createElement('ul');
    const repoCardListName = document.createElement('li');
    const repoCardListOwner = document.createElement('li');
    const repoCardListStars = document.createElement('li');
    const repoCardListBtn = document.createElement('button');

    repoCard.style.backgroundColor = '#E27BEB';
    repoCard.style.fontSize = '24px';
    repoCard.style.border = '1px solid black'

    repoCardList.style.listStyle = 'none';
    repoCardList.style.position = 'relative';

    repoCardListName.textContent = `Name: ${data.name}`;
    repoCardListOwner.textContent = `Owner: ${data.owner.login}`;
    repoCardListStars.textContent = `Stars: ${data.stargazers_count}`;

    repoCardListBtn.style.position = 'absolute';
    repoCardListBtn.style.top = '20px';
    repoCardListBtn.style.right = '10px';
    repoCardListBtn.style.width = '45px';
    repoCardListBtn.style.height = '45px';
    repoCardListBtn.style.background = `url(${closeBtn}) no-repeat center`;
    repoCardListBtn.style.border = 'none';
    repoCardListBtn.style.cursor = 'pointer';
    repoCardListBtn.onclick = function removeParentLi(event) {
        const li = event.target.closest('li');
            if (li) {
            li.remove();
            }
    }

    repoCardList.appendChild(repoCardListName);
    repoCardList.appendChild(repoCardListOwner);
    repoCardList.appendChild(repoCardListStars);
    repoCardList.appendChild(repoCardListBtn);

    repoCard.appendChild(repoCardList);

    container.appendChild(repoCard);
}

