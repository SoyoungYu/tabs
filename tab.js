const tabBtn1 = document.querySelector('.tab01');
const tabBtn2 = document.querySelector('.tab02');
const tabBtn3 = document.querySelector('.tab03');

let tabToggle = 1;

tabBtn1.addEventListener("click", ()=>{
    document.querySelector('.content1').classList.add('active');

    document.querySelector('.tab01').style.backgroundColor = 'palevioletred';
    document.querySelector('.tab02').style.backgroundColor = 'pink';
    document.querySelector('.tab03').style.backgroundColor = 'pink';

    document.querySelector('.content2').classList.remove('active');
    document.querySelector('.content3').classList.remove('active');
});
tabBtn2.addEventListener("click", ()=>{
    document.querySelector('.content2').classList.add('active');

    document.querySelector('.tab01').style.backgroundColor = 'pink';
    document.querySelector('.tab02').style.backgroundColor = 'palevioletred';
    document.querySelector('.tab03').style.backgroundColor = 'pink';

    document.querySelector('.content1').classList.remove('active');
    document.querySelector('.content3').classList.remove('active');
});
tabBtn3.addEventListener("click", ()=>{
    document.querySelector('.content3').classList.add('active');

    document.querySelector('.tab01').style.backgroundColor = 'pink';
    document.querySelector('.tab02').style.backgroundColor = 'pink';
    document.querySelector('.tab03').style.backgroundColor = 'palevioletred';

    document.querySelector('.content1').classList.remove('active');
    document.querySelector('.content2').classList.remove('active');
});

