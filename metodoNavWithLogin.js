const wrapper=document.querySelector('.wrapper'),
loginLink=document.querySelector('.login-link'),
registerLink=document.querySelector('.register-link'),
btnPopup=document.querySelector('.btnLogin-popup'),
iconClose=document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup')
})
