console.log('hi');

const images = document.querySelectorAll('.article_image');
const sounds = document.querySelectorAll('.article_audio');

let activeImageId = -1;
let activeSoundId =  -1;

console.log(images, sounds);

sounds.forEach((sound, key) => {
    console.log(sound, key);

    sound.addEventListener('play', () => {
        console.log('is playing', key, activeImageId);
        activeSoundId = key;
    })
})

images.forEach((image, key) => {
    console.log(image);
    console.log(key);

    image.addEventListener('click', () => {
        console.log('how are you', sounds[key]);
        
        if (activeSoundId === key ) {
            sounds[key].pause();
            image.classList.remove('is-playing');
            activeSoundId = -1;
            return; 
        }

        if (activeImageId > -1) {
            sounds[activeImageId].pause();
            images[activeImageId].classList.remove('is-playing');
        }
        activeImageId = key;
        sounds[key].play();

        image.classList.add('is-playing');
    })
})