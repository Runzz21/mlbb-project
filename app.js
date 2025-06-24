const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');
const source = video.querySelector('source');

const movieList = [
  'mlbb-1.mp4',
  'mlbb-2.mp4',
  'mlbb-3.mp4',
  'mlbb-4.mp4',
  'mlbb-5.mp4',
];

let index = 0;

nextButton.addEventListener('click', function () {
  index = (index + 1) % movieList.length;
  source.src = movieList[index]; 
  video.load()
  video.play()
});
