const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let current = 0;

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active', 'prev', 'next');
    if(index === current) {
      slide.classList.add('active');
    } else if(index === (current - 1 + slides.length) % slides.length) {
      slide.classList.add('prev');
    } else if(index === (current + 1) % slides.length) {
      slide.classList.add('next');
    }
  });
}

prevBtn.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlides();
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  updateSlides();
});

// Initialize
updateSlides();

const video = document.getElementById('bg-video');

// list your videos in order
const videos = [
  'IMG_2681.mp4',
  'IMG_2683.mp4'
];

let currentIndex = 0;

// function to play a video by index
function playVideo(index) {
  video.src = videos[index];
  video.play();
}

// when a video ends, play the next one
video.addEventListener('ended', () => {
  currentIndex = (currentIndex + 1) % videos.length;
  playVideo(currentIndex);
});

// start with the first video
playVideo(currentIndex);

