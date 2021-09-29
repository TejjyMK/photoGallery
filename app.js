const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');

const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const selectedIndex = null;

imageIndexes.forEach(i => {
    const image = document.createElement('img');
    image.src = `/images/cover__episode-${i}.jpg`;
    image.alt = `Cover for episode ${i} of podcast`;
    image.classList.add('galleryImg');

    gallery.appendChild(image);

    // ? popup stuff
    image.addEventListener('click', (e)=> {
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `/images/cover__episode-${i}.jpg`;
    });
});

popup.addEventListener('click', (e)=> {
    popup.style.transform = `translateY(-100%)`;
    popup.src = '';
    popup.alt = '';
});