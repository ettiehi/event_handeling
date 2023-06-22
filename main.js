//1
// document.querySelector('button').addEventListener('click', display)
// const image = document.querySelector('img')
// function display(evt) {
//     if (image.style.display === 'none') {
//         image.style.display = 'block'
//     }else {
//         image.style.display = 'none'
//     }    
//     }
   

//2
const balloon = document.getElementById('balloon');

    function inflateBalloon() {
      const fontSize = balloon.style.fontSize;
      if (fontSize >= 100) {
        burstBalloon();
      } else {
        fontSize = (fontSize * 1.1) + 'px';
      }
    }

    function deflateBalloon() {
      const fontSize = balloon.style.fontSize;
      if (fontSize <= 10) {
        burstBalloon();
      } else {
        fontSize = (fontSize * 0.9) + 'px';
      }
    }

    function burstBalloon() {
      balloon.innerHTML = '💥';
      document.removeEventListener('keydown', handleKeyPress);
    }

    function handleKeyPress(event) {
      if (event.key === 'ArrowUp') {
        inflateBalloon();
      } else if (event.key === 'ArrowDown') {
        deflateBalloon();
      }
    }

    document.addEventListener('keydown', handleKeyPress);