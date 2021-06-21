let btns = document.querySelector('.btns').querySelectorAll('input'),
    dirs = document.querySelector('.dir').querySelectorAll('input'),
    container = document.querySelector('.container'),
    extra = document.querySelector('.extra');

for (i of btns) {
  (function(i) {
    i.addEventListener('click', function() {
      clearClasses(extra, btns);
      extra.classList.add(i.value);
    }, false);
  })(i);
}

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
