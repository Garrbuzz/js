function slider(params) {
    let controls = document.querySelectorAll('.arrow');
    let { images, currentImage, imageWidth } = params;
    let list = document.querySelector('.gallery ul');
    let currentImageIndex = images.indexOf(currentImage);
    list.style = `transform:translateX(${-imageWidth*currentImageIndex}px)`;
    console.log(currentImageIndex);
    switch (currentImageIndex) {
        case 0:
            controls[0].classList.add('hide')
            break
        case images.length - 1:
            controls[1].classList.add('hide')
            break
        default:
            break
    };
    controls.forEach((el) => el.addEventListener('click', moveSlide));

    function moveSlide() {
        if (this.dataset.direction === 'next') {
            if (currentImageIndex === 0 && controls[0].classList.contains('hide')) {
                controls[0].classList.remove('hide');
            }
            if (currentImageIndex < images.length - 2) {
                list.style = `transform:translateX(${-imageWidth*++currentImageIndex}px)`
            } else {
                list.style = `transform:translateX(${-imageWidth*++currentImageIndex}px)`
                this.classList.add('hide');
                currentHideArrow = this;
            }
        } else
        if (this.dataset.direction === 'prev') {
            if (currentImageIndex === images.length - 1 && controls[1].classList.contains('hide')) {
                controls[1].classList.remove('hide');
            }
            if (currentImageIndex > 1) {
                list.style = `transform:translateX(${-imageWidth*--currentImageIndex}px)`;
            } else {
                list.style = `transform:translateX(${-imageWidth*--currentImageIndex}px)`;
                this.classList.add('hide');
            }
        };
    }
}
let params = {
    images: [
        'col-1-001.jpg',
        'col-1-002.jpg',
        'col-1-003.jpg',
        'col-1-004.jpg',
        'col-1-005.jpg'
    ],
    currentImage: 'col-1-002.jpg',
    imageWidth: 350
}
slider(params);