let dataReload = document.querySelectorAll('[data-reload]');

let translations = {
    esp: {
        home: 'Inicio',
        about: 'Sobre mí',
        skills: 'Habilidades',
        portfolio: 'Portafolio',
        contact: 'Contacto',

        software_developer: 'Desarrollador de Software',

        about_text: 'Soy un desarrollador apasionado de la informática y la tecnología. Disfruto de aprender nuevas habilidades y mejorar las que ya poseo. Soy capaz de adaptarse a nuevas tecnologías y tendencias. \n\n Cuando no estoy programando, me encuentro jugando videojuegos, viendo películas o pasando el tiempo con mis amigos y familia.',
        download_cv: '<i class="fas fa-file-download"></i>Descargar CV',

        app_ideas_text: 'Una aplicación web usada para tomar nota de ideas de aplicaciones. Guarda detalles como los requerimientos del proyecto, las tecnologías a usar, y un indicador de dificultad para cualquiera que quiera implementar la idea del proyecto basado en sus habilidades.',

        used_text: 'Utilizado:',

        view_demo: '<i class="fas fa-laptop"></i>Ver Demo',
        watch_video: '<i class="fas fa-film"></i>Ver Video',
        view_code: '<i class="fab fa-github"></i>Ver Código',

        xelsher_text: 'Una pequeña aplicación web de red social donde cualquiera puede hacer pequeños pixelarts y compartirlos con el mundo. Puedes hacer amigos, comentar y dar me gusta a todas las publicaciones que ves; así como también poder usar el creador de pixelart para crear de manera rápida algo de arte.',

        mp3_player_text: 'Reproductor MP3 de escritorio donde puedes escuchar tus canciones favoritas y hacer una lista de reproducción. Usa las flechas para controlar el volumen y adelantar o atrasar la canción.',

        download_app: '<i class="fas fa-laptop"></i>Descargar App',

        pendroid_text: 'Aplicación de Android donde puedes realizar dibujos y almacenarlos como imágenes.',

        tic_tac_toe_text: 'Juego de Tres en Línea de escritorio. Diviértete jugando contra la IA. Solo para un jugador. Puedes jugar como los ceros (O) o como las cruces (X), usa las Flechas y Enter en el teclado para realizar tu decisión. Usa el ratón para seleccionar la casilla correspondiente a tu turno.',

        name_text: 'Nombre',
        subject_text: 'Asunto',
        message_text: 'Mensaje...',
        submit: 'Enviar',

        footer_text: 'Hecho por Angel David Vazquez Crawford @2022.'
    },

    eng: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        portfolio: 'Portfolio',
        contact: 'Contact',

        software_developer: 'Software Developer',

        about_text: 'I\'m a developer that is passionate about computer science and technology. I enjoy learning new skills and improving the ones I already have. Capable to adapt to the new technologies and tendencies. \n When I\'m not programming, I am playing videogames, watching movies or spending time with my friends and family.',
        download_cv: '<i class="fas fa-file-download"></i>Download CV',

        app_ideas_text: 'A web app used to take notes of application ideas. Save details like the project requirements, the technologies to use, and a difficulty indicator for anyone who wants to implement the project idea based on their skills.',

        used_text: 'Used:',

        view_demo: '<i class="fas fa-laptop"></i>View Demo',
        watch_video: '<i class="fas fa-film"></i>Watch Video',
        view_code: '<i class="fab fa-github"></i>View Code',

        xelsher_text: 'A small social network web application where anyone can make small pixelarts and share them with the world. You can make friends, comment, and like all the posts you see; as well as you can use the pixelart maker to quickly create some art.',

        mp3_player_text: 'Desktop MP3 Player where you can listen to your favorite songs and make a playlist. Use arrows to control volume and move the song forward or backward.',

        download_app: '<i class="fas fa-laptop"></i>Download App',

        pendroid_text: 'Android Application where you can make a drawing and save it as an image.',

        tic_tac_toe_text: 'Desktop Tic Tac Toe game. Have fun playing with the AI. Just for one player. You can play as the noughts (O) or as the crosses (X), use the Arrows and Enter on the keyboard to make your decision. Use the mouse to select the space corresponding to your turn.',

        name_text: 'Name',
        subject_text: 'Subject',
        message_text: 'Message...',
        submit: 'Send',

        footer_text: 'Made by Angel David Vazquez Crawford @2022.'
    }
};



const spanish = document.getElementById('spanish');
const english = document.getElementById('english');

//const home_a = document.getElementById('home_a');

spanish.addEventListener('click', () => {

    home_a.innerText = translations.esp.home;
    about_a.innerText = translations.esp.about;
    skills_a.innerText = translations.esp.skills;
    portfolio_a.innerText = translations.esp.portfolio;
    contact_a.innerText = translations.esp.contact;

    software_developer.innerText = translations.esp.software_developer;

    about_title.innerText = translations.esp.about;
    about_text.innerText = translations.esp.about_text;
    download_cv.innerHTML = translations.esp.download_cv;

    skills_title.innerText = translations.esp.skills;

    portfolio_title.innerText = translations.esp.portfolio;

    app_ideas_text.innerText = translations.esp.app_ideas_text;

    const usedText = document.querySelectorAll('.used');
    usedText.forEach( (element) => {
        element.innerText = translations.esp.used_text;
    });

    const buttonsDemo = document.querySelectorAll('.demo');
    buttonsDemo.forEach( (element) => {
        element.innerHTML = translations.esp.view_demo;
    });

    const buttonsVideo = document.querySelectorAll('.video');
    buttonsVideo.forEach( (element) => {
        element.innerHTML = translations.esp.watch_video;
    });

    const buttonsCode = document.querySelectorAll('.code');
    buttonsCode.forEach( (element) => {
        element.innerHTML = translations.esp.view_code;
    });

    xelsher_text.innerText = translations.esp.xelsher_text;

    mp3_player_text.innerText = translations.esp.mp3_player_text;

    const buttonsApp = document.querySelectorAll('.app');
    buttonsApp.forEach( (element) => {
        element.innerHTML = translations.esp.download_app;
    });

    pendroid_text.innerText = translations.esp.pendroid_text;

    tic_tac_toe_text.innerText = translations.esp.tic_tac_toe_text;

    contact_title.innerText = translations.esp.contact;

    const nameInput = document.getElementById('name');
    nameInput.placeholder = translations.esp.name_text;
    subject.placeholder = translations.esp.subject_text;
    message.placeholder = translations.esp.message_text;
    submit.innerText = translations.esp.submit;

    footer_text.innerText = translations.esp.footer_text;

});

english.addEventListener('click', () => {

    home_a.innerText = translations.eng.home;
    about_a.innerText = translations.eng.about;
    skills_a.innerText = translations.eng.skills;
    portfolio_a.innerText = translations.eng.portfolio;
    contact_a.innerText = translations.eng.contact;
    software_developer.innerText = translations.eng.software_developer;

    about_title.innerText = translations.eng.about;
    about_text.innerText = translations.eng.about_text;
    download_cv.innerHTML = translations.eng.download_cv;

    skills_title.innerText = translations.eng.skills;

    portfolio_title.innerText = translations.eng.portfolio;

    app_ideas_text.innerText = translations.eng.app_ideas_text;

    const usedText = document.querySelectorAll('.used');
    usedText.forEach( (element) => {
        element.innerText = translations.eng.used_text;
    });

    const buttonsDemo = document.querySelectorAll('.demo');
    buttonsDemo.forEach( (element) => {
        element.innerHTML = translations.eng.view_demo;
    });

    const buttonsVideo = document.querySelectorAll('.video');
    buttonsVideo.forEach( (element) => {
        element.innerHTML = translations.eng.watch_video;
    });

    const buttonsCode = document.querySelectorAll('.code');
    buttonsCode.forEach( (element) => {
        element.innerHTML = translations.eng.view_code;
    });

    xelsher_text.innerText = translations.eng.xelsher_text;

    mp3_player_text.innerText = translations.eng.mp3_player_text;

    const buttonsApp = document.querySelectorAll('.app');
    buttonsApp.forEach( (element) => {
        element.innerHTML = translations.eng.download_app;
    });

    pendroid_text.innerText = translations.eng.pendroid_text;

    tic_tac_toe_text.innerText = translations.eng.tic_tac_toe_text;

    contact_title.innerText = translations.eng.contact;

    const nameInput = document.getElementById('name');
    nameInput.placeholder = translations.eng.name_text;
    subject.placeholder = translations.eng.subject_text;
    message.placeholder = translations.eng.message_text;
    submit.innerText = translations.eng.submit;

    footer_text.innerText = translations.eng.footer_text;

});


