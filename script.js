document.addEventListener('DOMContentLoaded', function() {
    const movingDiv = document.querySelector('.circle');

    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        setTimeout(function() {
            movingDiv.style.left = mouseX + 'px';
            movingDiv.style.top = mouseY + 'px';
        }, 10);
    });
});



const hero = document.querySelector('.hero');

hero.addEventListener('click', popUp);

function popUp(e) {
    const newDiv = document.createElement('div');
    const clickX = e.clientX;
    const clickY = e.clientY;

    newDiv.style.height = '0px'; 
    newDiv.style.width = '300px';
    newDiv.style.position = 'absolute';
    newDiv.style.left = clickX + 'px';
    newDiv.style.top = clickY + 'px';
    newDiv.style.border = '1px solid white';
    newDiv.style.transition = 'height 0.5s ease'; 

    const newImg = document.createElement('img');
    const randomImageUrl = `https://picsum.photos/${randomWidth()}/${randomHeight()}`;
    newImg.onload = function() {
        hero.appendChild(newDiv);
        newDiv.appendChild(newImg);

        setTimeout(function() {
            newDiv.style.height = '300px';
        }, 100);

        setTimeout(function() {
            hero.removeChild(newDiv);
        }, 3000);
    };
    newImg.src = randomImageUrl;

    newImg.style.width='300px';
    newImg.style.height = '300px';
    newDiv.style.overflow = 'hidden';



 
}

function randomWidth() {
    return Math.floor(Math.random() * (200 - 20 + 1)) + 200; // Random width between 200 and 600
}

function randomHeight() {
    return Math.floor(Math.random() * (100 - 20 + 1)) + 200; // Random height between 200 and 600
}
