

document.addEventListener('DOMContentLoaded', () => {
    
    const modalOpenBtns = [
        { id: 'skills-btn', modalId: 'skills-modal' },
        { id: 'contact-btn', modalId: 'contact-modal' },
        { id: 'more-me-btn', modalId: 'bio-modal' }
    ];

    modalOpenBtns.forEach(({ id, modalId }) => {
        const btn = document.getElementById(id);
        const modal = document.getElementById(modalId);

        if (btn && modal) {
            
            btn.addEventListener('click', () => {
                modal.style.display = 'flex';
                
                document.body.style.overflow = 'hidden';
            });
        }
    });

    
    document.querySelectorAll('.close-btn').forEach(closeBtn => {
        const targetModalId = closeBtn.getAttribute('data-close-target');
        const modal = document.getElementById(targetModalId);

        if (modal) {
            const closeModal = () => {
                modal.style.display = 'none';
                document.body.style.overflow = ''; 
            };

            
            closeBtn.addEventListener('click', closeModal);

            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }
    });

    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(modal => {
                if (modal.style.display === 'flex') {
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                }
            });
        }
    });
});

