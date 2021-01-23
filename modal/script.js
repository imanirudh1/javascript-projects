const showModal = document.querySelectorAll('.show-modal');
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');

showModal.forEach(btn =>
  btn.addEventListener('click', () => {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
);

closeBtn.addEventListener('click', () => {
  closeModel();
});

overlay.addEventListener('click', () => {
  closeModel();
});

function closeModel() {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closeModel();
  }
});
