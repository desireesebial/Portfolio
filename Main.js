document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-link');
    const contents = document.querySelectorAll('.content');
    const ripple = document.getElementById('ripple');
    const modal = document.getElementById('contactModal');

    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            createRipple(event);
            const target = tab.getAttribute('data-target');

            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            contents.forEach(content => {
                if (content.classList.contains(target)) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });

            // Reset dropdown buttons and contents
            const activeContent = document.querySelector('.content.active');
            const dropdownBtns = activeContent.querySelectorAll('.dropdown-btn');
            const dropdownContents = activeContent.querySelectorAll('.dropdown-content');

            dropdownBtns.forEach(btn => btn.classList.remove('active'));
            dropdownContents.forEach(content => content.classList.remove('active'));

            dropdownBtns[0].classList.add('active');
            dropdownContents[0].classList.add('active');
        });
    });

    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const target = btn.getAttribute('data-where');
            const activeContent = btn.closest('.content');

            const dropdownBtns = activeContent.querySelectorAll('.dropdown-btn');
            const dropdownContents = activeContent.querySelectorAll('.dropdown-content');

            dropdownBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            dropdownContents.forEach(content => {
                if (content.id === target) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.classList.contains('contact-button')) {
            createRipple(event);
        }
    });

    function createRipple(event) {
        const x = event.clientX;
        const y = event.clientY;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.animation = 'none';
        ripple.offsetHeight; 
        ripple.style.animation = null;
    }

    window.openModal = function(event) {
        modal.style.display = 'block';
    }

    window.closeModal = function() {
        modal.style.display = 'none';
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});

