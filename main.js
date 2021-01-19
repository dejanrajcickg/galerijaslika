var mainImg = document.querySelector('#mainImg');
var img = document.querySelectorAll('.img');

for(i = 0; i < img.length; i++) {
    img[i].addEventListener('click', display);
}

function display() {
    var klik = this.getAttribute('src');
    mainImg.setAttribute('src', klik);
}

