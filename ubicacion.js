//CARTEL LOS ESPERAMOS//

const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 150
});

typewriter
    .typeString('LOS ESPERAMOS!!')
    .pauseFor(1500)
    .start();



// CONSUMO DE API //


const URL = "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d6286.887768489696!2d-57.5448894578926!3d-38.01343003478736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x9584dc1fd6ea4999%3A0x4d60f3978bffb231!2sMart%C3%ADn%20Miguel%20de%20G%C3%BCemes%202600%2C%20B7600EML%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!3m2!1d-38.0134386!2d-57.5397396!5e0!3m2!1ses-419!2sar!4v1682344125061!5m2!1ses-419!2sar"

fetch(URL)

.then(data => {
    const iframe = document.getElementById('mapa');
    iframe.src = data.url;
});