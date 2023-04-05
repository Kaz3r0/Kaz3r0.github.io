function changeColor() {
  const body = document.querySelector('body');
  const head = document.querySelector('head');
  const header = document.querySelector('header');
  const videoWeek = document.querySelector('.video-week');
  const patchNotes = document.querySelector('.patch-notes');
  const musicMonth = document.querySelector('.music-month');
  const button = document.querySelectorAll('button');
  const buttonhover = document.querySelectorAll('button:hover');
  const text = document.querySelectorAll('.title')

  if (body.style.backgroundColor === 'rgb(179, 75, 73)') {
    body.style.backgroundColor = '#9e829c';
    head.style.backgroundColor = '#291528';
    header.style.backgroundColor = '#291528';
    videoWeek.style.backgroundColor = '#291528';
    patchNotes.style.backgroundColor = '#291528';
    musicMonth.style.backgroundColor = '#291528';
    button.forEach(function(element) {
        element.style.backgroundColor = '#753c72';
    });
    buttonhover.forEach(function(element) {
        element.style.backgroundColor = '#b56fb1';
    });
    text.forEach(function(element) {
        element.style.color = '#ff8c87';
    });
  } else {
    body.style.backgroundColor = '#B34B49';
    head.style.backgroundColor = '#700E0C';
    header.style.backgroundColor = '#700E0C';
    videoWeek.style.backgroundColor = '#700E0C';
    patchNotes.style.backgroundColor = '#700E0C';
    musicMonth.style.backgroundColor = '#700E0C';
    button.forEach(function(element) {
        element.style.backgroundColor = '#BD010E';
    });
    buttonhover.forEach(function(element) {
        element.style.backgroundColor = '#b56fb1';
    });
    text.forEach(function(element) {
        element.style.color = '#0B73BD';
    });
  }
}

const button = document.querySelector('#colorButton');
button.addEventListener('click', changeColor);

