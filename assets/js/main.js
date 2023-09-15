let back = document.querySelector('.back')
let planet = document.querySelector('.animation-bg')
let modal = document.querySelector('.btn-modal')
let modalblock = document.getElementById('modal-block')
let close = document.querySelector('.close-block')




back.addEventListener('click', function(){
    planet.style.display = 'block';
})

modal.addEventListener('click', function(){
    modalblock.style.left = '0';
    modalblock.style.display = 'flex';
    modalblock.style.justifyContent = 'center';
    modalblock.style.alignItem = 'center';
    modalblock.style.flexDirection = 'column';
})

close.addEventListener('click', function(){
    modalblock.style.left = '-100vw';
})