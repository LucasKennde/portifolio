
    const links = document.querySelectorAll('.link');
    const megaman = document.querySelector('.megaman');
    const piso = document.querySelector('.wrapperFooter');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
         

            if(link){
                megaman.src = `./assets/megaWalk.gif`; 
                piso.classList.add('movimento')
            }
            setTimeout(() => {
                megaman.src = './assets/person2.png';
                piso.classList.remove('movimento')
              
                }, 600);
        });
    });