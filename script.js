//images container and display it
function showImage(imageIndex) {
//hidden all images
    const images = document.querySelectorAll('main div img');
    images.forEach(image => {
        image.style.display = 'none';
    });

    const selectedImage = document.querySelector(`img:nth-child(${imageIndex})`);
     header = document.querySelector(`header`),
     container = document.querySelector(`body`),//wrong
     footer = document.querySelector(`footer`),
     tran = document.querySelectorAll(`.tran`),
     count = document.querySelector(`#count`);
//image style with js
    selectedImage.style.display = 'block';
    selectedImage.style.cursor= "auto";
    selectedImage.style.transform = "scale(2)";
    selectedImage.style.margin = "auto";
    selectedImage.style.transition = ".5s ease-in-out";
    header.style.visibility = "visible";
    header.style.transition = ".5s ease-in-out";
    footer.style.visibility = "visible";
    footer.style.transition = ".5s ease-in-out";
    container.style.background = "linear-gradient(black)";
    container.style.paddingTop = "0px";
    container.style.height = "100vh";
    tran.forEach(tr => {
        tr.style.visibility = 'visible';
        tr.style.color = '#558f9f';
    });
    count.innerHTML = `${imageIndex}`;  
    
}

function x(){
    location.reload()
}


const images = document.querySelectorAll('main div img');

function rotleft() {
    images.forEach(image => {
        image.style.transform += 'rotate(90deg)';
    });
}

function roteright() {
    images.forEach(image => {
        image.style.transform += 'rotate(-90deg)';
    });
}

function exleftright() {
    images.forEach(image => {
            image.style.transform += "rotateY(180deg)";
    });
}

function exupdown() {
    images.forEach(image => {
            image.style.transform += "rotatex(180deg)";
    });
}

let myInterval = setInterval(function inter() {
        carousel.style.transform += "translateX(-500px)";
}, 3000)


function stopColor() {
    clearInterval(myInterval);
}