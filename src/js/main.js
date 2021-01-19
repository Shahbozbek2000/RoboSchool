var a1 = document.querySelector('.right-side-inner a:first-child');
var a2 = document.querySelector('.right-side-inner a:nth-child(2)');
var a3 = document.querySelector('.right-side-inner a:nth-child(3)');

a1.addEventListener('click',function(one){
    a1.classList.add('active');
    a2.classList.remove('active');
    a3.classList.remove('active');
});

a2.addEventListener('click',function(one){
    a2.classList.add('active');
    a1.classList.remove('active');
    a3.classList.remove('active');
});

a3.addEventListener('click',function(one){
    a3.classList.add('active');
    a2.classList.remove('active');
    a1.classList.remove('active');
});