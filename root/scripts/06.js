// // alert('działa');

var body = document.querySelector('body');
var sp1 = document.querySelector('#sp-1');
var sp2 = document.querySelector('#sp-2');
var sp3 = document.querySelector('#sp-3');
var sp4 = document.querySelector('#sp-4');

sp1.addEventListener('mouseover', function (e) {
    body.classList.remove('bg');
    body.classList.remove('bg2');
    body.classList.remove('bg3');
    body.classList.remove('bg4');
    body.classList.add('bg1');
    e.preventDefault();
});


sp2.addEventListener('mouseover', function (e) {
    body.classList.remove('bg');
    body.classList.remove('bg1');
    body.classList.remove('bg3');
    body.classList.remove('bg4');
    body.classList.add('bg2');
    e.preventDefault();
});

sp3.addEventListener('mouseover', function (e) {
    body.classList.remove('bg');
    body.classList.remove('bg2');
    body.classList.remove('bg1');
    body.classList.remove('bg4');
    body.classList.add('bg3');
    e.preventDefault();
});

sp4.addEventListener('mouseover', function (e) {
    body.classList.remove('bg');
    body.classList.remove('bg2');
    body.classList.remove('bg1');
    body.classList.remove('bg3');
    body.classList.add('bg4');
    e.preventDefault();
});