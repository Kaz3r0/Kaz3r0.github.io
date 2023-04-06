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

  if (body.style.backgroundColor === 'rgb(46, 66, 114)') {
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
  } else if (body.style.backgroundColor === 'rgb(179, 75, 73)') {
    body.style.backgroundColor = '#A8CD1B';
    head.style.backgroundColor = '#3E651D';
    header.style.backgroundColor = '#3E651D';
    videoWeek.style.backgroundColor = '#3E651D';
    patchNotes.style.backgroundColor = '#3E651D';
    musicMonth.style.backgroundColor = '#3E651D';
    button.forEach(function(element) {
      element.style.backgroundColor = '#4E804D';
    });
    buttonhover.forEach(function(element) {
      element.style.backgroundColor = '#B4D4B4';
    });
    text.forEach(function(element) {
      element.style.color = '#6C1D5F';
    });
  } else if (body.style.backgroundColor === 'rgb(168, 205, 27)') {
    body.style.backgroundColor = '#2E4272';
    head.style.backgroundColor = '#0D1B2A';
    header.style.backgroundColor = '#0D1B2A';
    videoWeek.style.backgroundColor = '#0D1B2A';
    patchNotes.style.backgroundColor = '#0D1B2A';
    musicMonth.style.backgroundColor = '#0D1B2A';
    button.forEach(function(element) {
      element.style.backgroundColor = '#1B2B46';
    });
    buttonhover.forEach(function(element) {
      element.style.backgroundColor = '#7389AE';
    });
    text.forEach(function(element) {
      element.style.color = '#F5D0C5';
    });
}
  
  
  else {
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
        element.style.backgroundColor = '#fe5f6a';
    });
    text.forEach(function(element) {
        element.style.color = '#0B73BD';
    });
  }
}

const button = document.querySelector('#colorButton');
button.addEventListener('click', changeColor);

