// Box-sizing, font and margin/padding zeroing
const customStyle= document.createElement('style');

customStyle.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');  

html {
    box-sizing: border-box;
  }
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
`;

document.head.appendChild(customStyle);