
        // Seleciona a imagem placeholder
        const placeholderImg = document.querySelector('.placeholder-img');

        // Adiciona o evento de arrastar (drag) à imagem
        placeholderImg.addEventListener('drag', (event) => {
            // Obtém a posição atual do mouse
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // Define as novas coordenadas da imagem com base na posição do mouse
            placeholderImg.style.right = `${window.innerWidth - mouseX}px`;
            placeholderImg.style.bottom = `${window.innerHeight - mouseY}px`;
        });
    