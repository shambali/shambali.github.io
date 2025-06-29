document.addEventListener('DOMContentLoaded', () => {
    let modal = document.getElementById('imageModal');
    let modalImage = document.getElementById('modalImage');
    let closeButton = document.getElementById('modalCloseButton');

    // Eğer modal elemanları henüz oluşturulmamışsa, onları dinamik olarak oluştur
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.style.cssText = `
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0,0,0,0.85);
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        document.body.appendChild(modal);

        closeButton = document.createElement('span');
        closeButton.id = 'modalCloseButton';
        closeButton.innerHTML = '&times;';
        closeButton.style.cssText = `
            position: absolute;
            top: 20px;
            right: 30px;
            color: #f1f1f1;
            font-size: 40px;
            font-weight: bold;
            cursor: pointer;
            transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
            text-shadow: 0 0 5px rgba(0,0,0,0.5);
        `;
        closeButton.onmouseover = () => closeButton.style.color = '#bbb';
        closeButton.onmouseout = () => closeButton.style.color = '#f1f1f1';
        closeButton.onmousedown = () => closeButton.style.transform = 'scale(0.9)';
        closeButton.onmouseup = () => closeButton.style.transform = 'scale(1)';
        modal.appendChild(closeButton);

        modalImage = document.createElement('img');
        modalImage.id = 'modalImage';
        modalImage.style.cssText = `
            display: block;
            max-width: 90%;
            max-height: 90%; /* Başlık kaldırıldığı için max-height artırıldı */
            object-fit: contain;
            opacity: 0;
            transform: scale(0.9);
            transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
            box-shadow: 0 5px 15px rgba(0,0,0,0.5);
            border-radius: 8px;
        `;
        modal.appendChild(modalImage);
    }

    const images = document.querySelectorAll('.enlargeable-image');

    images.forEach(image => {
        image.style.cursor = 'zoom-in';
        image.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImage.src = image.src;
            modalImage.alt = image.alt;

            setTimeout(() => {
                modal.style.opacity = 1;
                modalImage.style.opacity = 1;
                modalImage.style.transform = 'scale(1)';
            }, 50);
        });
    });

    function closeModal() {
        modal.style.opacity = 0;
        modalImage.style.opacity = 0;
        modalImage.style.transform = 'scale(0.9)';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    closeButton.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target === closeButton) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
});