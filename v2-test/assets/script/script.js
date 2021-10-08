document.addEventListener('DOMContentLoaded',()=>{
    let number_area = document.querySelector('.number-area');
    let sign_area = document.querySelector('.sign-area');
    number_area.innerHTML='bish lasaña';
    sign_area.innerHTML='+';
    
    let btn = document.querySelectorAll('button');
    console.log(btn);
    btn.forEach(element => {
        console.log(element);
        console.log(element.getAttribute('data-type'));
    });
});
