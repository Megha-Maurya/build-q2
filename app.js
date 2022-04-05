var in1 = document.querySelector('.in1');
var in2 = document.querySelector('.in2');
var add = document.querySelector('.add');
var sub = document.querySelector('.sub');
var multi = document.querySelector('.multi');
var div = document.querySelector('.div');
var out = document.querySelector('#out');

add.addEventListener('click', () => {
    out.innerText = Number(in1.value) + Number(in2.value) ;

});

sub.addEventListener('click', () => {
    out.innerText = Number(in1.value) - Number(in2.value);
});

multi.addEventListener('click', () => {
    out.innerText = Number(in1.value) * Number(in2.value);
});

div.addEventListener('click', () => {
    out.innerText = Number(in1.value) / Number(in2.value);
});