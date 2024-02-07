let input = document.querySelector('.btns').querySelector('input'),
    dirs = document.querySelector('.dir').querySelectorAll('input'),
    container = document.querySelector('.container'),
    flexitem = document.querySelector('.extra');

input.addEventListener('input', function() {
  flexitem.style.flexGrow = this.value;
}, false);

let i;
for (i of dirs) {
  (function(i) {
    i.addEventListener('click', function() {
      clearClasses(container, dirs);
      container.classList.add(i.value);
    }, false);
  })(i);
}

function clearClasses (el, cl) {
  for (i of cl) {
    el.classList.remove(i.value);
  }
}
