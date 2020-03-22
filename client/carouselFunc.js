function carouselSlider(carouselClass, entryClass, prevButtonClass, nextButtonClass) {
  const entries = document.querySelectorAll(`.${entryClass}`);
  const carousel = document.querySelector(`.${carouselClass}`);
  const prevButt = document.querySelector(`.${prevButtonClass}`);
  const nextButt = document.querySelector(`.${nextButtonClass}`);
  const size = entries[0].clientWidth;
  let counter = 0;


  nextButt.addEventListener('click', handleNext);
  prevButt.addEventListener('click', handlePrev);


  function handleNext() {
    if (counter === 7) {
      return;
    }
    counter++;
    entries.forEach(entry => {
      entry.style.transition = 'transform 0.4s ease-in-out';
      entry.style.transform = `translateX(-${size * counter}px)`;
    })
  }

  function handlePrev() {
    if (counter === 0) {
      return;
    }
    counter--;
    entries.forEach(entry => {
      entry.style.transition = 'transform 0.4s ease-in-out';
      entry.style.transform = `translateX(-${size * counter}px)`;
    })
  }
}

export default carouselSlider;