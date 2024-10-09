const logosContainer = document.getElementById('logos-container');

// Функція для створення логотипів
function createLogo() {
    const logo = document.createElement('img');
    logo.src = 'https://cryptologos.cc/logos/base-base-logo.png?v=026'; // Логотип Base
    logo.classList.add('logo');
    
    // Випадкове розташування логотипу
    logo.style.left = Math.random() * (window.innerWidth - 80) + 'px';
    logo.style.top = Math.random() * (window.innerHeight - 80) + 'px';

    // Додати логотип на сторінку
    logosContainer.appendChild(logo);

    // Додати обробник події для натискання на логотип
    logo.onclick = function() {
        logo.classList.add('catch-animation'); // Додати анімацію при ловлі
        setTimeout(() => {
            logo.remove(); // Видалити логотип з DOM
        }, 500); // Затримка на анімацію
    };

    // Видалити логотип через 5 секунд, якщо його не впіймали
    setTimeout(() => {
        if (logo.parentElement) {
            logo.remove();
        }
    }, 5000);
}

// Створювати 7-8 логотипів
for (let i = 0; i < 8; i++) {
    createLogo();
}

// Додати нових логотипів кожні 3 секунди
setInterval(createLogo, 3000);
