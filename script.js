document.querySelector('.open-menu').addEventListener('click', e =>{

    document.querySelector('header .menu').classList.add('open');

});

document.querySelector('.close-menu button').addEventListener('click', e =>{

    document.querySelector('header .menu').classList.remove('open');

});

document.querySelector('.menu .backdrop').addEventListener('click', e =>{

    document.querySelector('header .menu').classList.remove('open');

});




let imagens= document.querySelectorAll('.small-img');
let modal= document.querySelector('.modal');
let modalimg= document.querySelector('#modal-img');
let btclose= document.querySelector('#bt-close');
let srcval="";

for(let i =0; i<imagens.length; i++){
    imagens[i].addEventListener('click', function(){
        
        srcval= imagens[i].getAttribute('src');
        modalimg.setAttribute('src', srcval);
        modal.classList.toggle('modal-active');

    });
}

btclose.addEventListener('click', function(){

    modal.classList.toggle('modal-active');

});