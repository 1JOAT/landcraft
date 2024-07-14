const animatedText = document.getElementById('animated-text');
const toggleBtn = document.getElementById('toggle-btn');

let isPaused = false;

toggleBtn.addEventListener('click', () => {
  
  if (isPaused){
    animatedText.classList.add('dynamic-text');
    animatedText.classList.remove('text-span');
    toggleBtn.textContent = "Pause"
  }
  else  {
    animatedText.classList.remove('dynamic-text');
    animatedText.classList.add('text-span')
    toggleBtn.textContent = "Play";
  }
  isPaused = !isPaused
});