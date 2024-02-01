
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.features');
    
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      features.classList.toggle('active');
    });
