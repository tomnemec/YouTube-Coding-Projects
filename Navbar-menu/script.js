const menu = document.getElementById('menu');
const profPic = document.getElementById('prof-pic');

profPic.addEventListener('click', function () {
    menu.classList.remove('fade-out');  
    menu.classList.add('fade-in');      
});


document.addEventListener('click', function (event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnProfPic = profPic.contains(event.target);

   
    if (!isClickInsideMenu && !isClickOnProfPic) {
        menu.classList.remove('fade-in'); 
        menu.classList.add('fade-out');    
    }
});
