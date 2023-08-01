const boxes = document.querySelectorAll('.box');

effectBox();

window.addEventListener('scroll', effectBox);

function effectBox() {
    const viewport = window.innerHeight * 0.8;

    boxes.forEach((el) => {
        const boxView = (el.getBoundingClientRect().top).toFixed(1);

        if (boxView < viewport) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }
    });
}