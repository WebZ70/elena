let currentSlide = 0; // Индекс текущего слайда
const slides = document.querySelectorAll('.slides img'); // Получаем все изображения слайдов
const thumbnails = document.querySelectorAll('.thumbnail'); // Получаем все миниатюры

function showSlide(index) {
    currentSlide = index;
    updateSlides();
    updateThumbnails();
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Переход к последнему слайду
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Переход к первому слайду
    }
    updateSlides();
    updateThumbnails();
}

function updateSlides() {
    const offset = -currentSlide * 100; // Сдвиг слайдов
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function updateThumbnails() {
    thumbnails.forEach((thumbnail, index) => {
        if (index === currentSlide) {
            thumbnail.classList.add('active'); // Добавляем класс активной миниатюре
        } else {
            thumbnail.classList.remove('active'); // Убираем класс с неактивных миниатюр
        }
    });
}

function zoomImage(img) {
    const overlay = document.querySelector('.overlay');
    const zoomedImage = document.getElementById('zoomedImage');
    zoomedImage.src = img.src; // Устанавливаем источник увеличенного изображения
    overlay.style.display = 'flex'; // Показываем оверлей
}

function closeZoom() {
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none'; // Скрываем оверлей
}

// Инициализация
updateThumbnails();

