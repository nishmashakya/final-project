let gifUrls = [
    'gifs/gif1.gif',
    'gifs/gif2.gif',
    'gifs/gif3.gif',
    'gifs/gif4.gif',
    'gifs/gif5.gif',
    'gifs/gif6.gif',
    ];


let randomUrl = gifUrls[Math.floor(Math.random() * gifUrls.length)];

document.querySelector('.gifBg').style.backgroundImage = 'url(' + randomUrl + ')';




