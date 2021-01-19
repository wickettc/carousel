const nextSlide = document.querySelector('#next-slide');
const playSlide = document.querySelector('#play-slide');
const pauseSlide = document.querySelector('#pause-slide');
const lastSlide = document.querySelector('#last-slide');
const imgs = document.querySelectorAll('img');
const bubblesDiv = document.querySelector('.carousel-bubbles');
let clearIntID, curIndex;
const imgArr = Array.from(imgs);

imgArr.forEach((el, index) => {
        const bub = document.createElement('div');
        bub.classList.add('bubble');
        bub.id = `bub${index}`;
        bubblesDiv.appendChild(bub);
});

const bubbles = document.querySelectorAll('.bubble');
const bubblesArr = Array.from(bubbles);
bubblesArr[0].classList.add('cur-bubble');

bubblesArr.forEach((el, index) => {
        el.addEventListener('click', function () {
                getCurIndex();
                imgArr[curIndex].classList.remove('active');
                imgArr[index].classList.add('active');
                bubblesArr[curIndex].classList.remove('cur-bubble');
                bubblesArr[index].classList.add('cur-bubble');
        });
});

const getCurIndex = () => {
        imgArr.forEach((img, index) => {
                if (img.classList.contains('active')) {
                        curIndex = index;
                }
        });
};

const getNextSlide = () => {
        getCurIndex();
        if (curIndex === imgArr.length - 1) {
                imgArr[curIndex].classList.remove('active');
                imgArr[0].classList.add('active');
                bubblesArr[curIndex].classList.remove('cur-bubble');
                bubblesArr[0].classList.add('cur-bubble');
        } else {
                imgArr[curIndex].classList.remove('active');
                imgArr[curIndex + 1].classList.add('active');
                bubblesArr[curIndex].classList.remove('cur-bubble');
                bubblesArr[curIndex + 1].classList.add('cur-bubble');
        }
};

const getLastSlide = () => {
        getCurIndex();
        if (curIndex === 0) {
                imgArr[curIndex].classList.remove('active');
                imgArr[imgArr.length - 1].classList.add('active');
                bubblesArr[curIndex].classList.remove('cur-bubble');
                bubblesArr[imgArr.length - 1].classList.add('cur-bubble');
        } else {
                imgArr[curIndex].classList.remove('active');
                imgArr[curIndex - 1].classList.add('active');
                bubblesArr[curIndex].classList.remove('cur-bubble');
                bubblesArr[curIndex - 1].classList.add('cur-bubble');
        }
};

const play = () => {
        playSlide.style.display = 'none';
        pauseSlide.style.display = 'inline-block';
        clearIntID = setInterval(() => {
                getNextSlide();
        }, 2500);
};

const pause = () => {
        playSlide.style.display = 'inline-block';
        pauseSlide.style.display = 'none';
        clearInterval(clearIntID);
};

playSlide.addEventListener('click', play);
pauseSlide.addEventListener('click', pause);
nextSlide.addEventListener('click', getNextSlide);
lastSlide.addEventListener('click', getLastSlide);
