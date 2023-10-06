document.getElementById('menuButton').addEventListener('click', function () {
  var menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
});

document.getElementById('menu').addEventListener('mouseleave', function () {
  var menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
});
