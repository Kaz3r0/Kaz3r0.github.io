var photos = document.querySelectorAll('.photo');
var modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

photos.forEach(function(photo) {
  photo.addEventListener('click',
  function() {
    var modalContent = document.createElement('img');
    modalContent.src = this.src;
    modal.appendChild(modalContent);
    modal.style.display = 'block';
  });
});

modal.addEventListener('click',
function() {
  modal.style.display = 'none';
  modal.innerHTML = '';
});