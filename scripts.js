document.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll('.link');
    const megaman = document.querySelector('.megaman');
    const piso = document.querySelector('.piso');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
          // Obter a posição do offsetLeft do elemento
        const newPosition = piso.offsetLeft;

        // Obter a posição do background
        const computedStyle = window.getComputedStyle(piso);
        const backgroundPosition = computedStyle.backgroundPosition;

        // Extrair o valor do backgroundPosition
        const backgroundPositionX = parseFloat(backgroundPosition.split(' ')[0]);

        console.log('Offset Left:', newPosition);
        console.log('Background Position X:', backgroundPositionX);

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
});
