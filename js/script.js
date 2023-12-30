var languageState = false;
function language() {
    var languageButton = document.getElementById("language");
    var presentation = document.getElementById("presentation");
    var aboutMe = document.getElementById("info");
    var proyectosTitle = document.getElementById("proyectos-title");
    var lenguajesTitle = document.getElementById("lenguajes-title");
    if (languageState) {
        languageButton.value = "Change to English";
        presentation.innerHTML = "Hola, soy Alther";
        aboutMe.innerHTML = "¡Hola! Me llamo Alther y soy un Desarrollador Frontend Junior apasionado por crear experiencias web atractivas y fáciles de usar. Tengo experiencia práctica en HTML, CSS y JavaScript, y he completado con éxito varios <a href='#proyectos' class='proyectos-link' onclick='openProyectos()'>proyectos</a> que demuestran mis habilidades. Además, cuento con conocimientos en otros <a href='#lenguajes' class='lenguajes-link' onclick='openLenguajes()'>lenguajes de programación</a>, lo que me permite diseñar sitios web dinámicos y receptivos. Estoy entusiasmado por colaborar, aportar mis habilidades y entusiasmo en proyectos colaborativos, y seguir progresando en el dinámico ámbito del desarrollo web.";
        proyectosTitle.innerHTML = "proyectos";
        lenguajesTitle.innerHTML = "lenguajes";
    } else {
        languageButton.value = "Cambiar a Español";
        presentation.innerHTML = "Hello, I'm Alther";
        aboutMe.innerHTML = "Hello! My name is Alther, and I am a passionate Junior Frontend Developer dedicated to creating engaging and user-friendly web experiences. I have hands-on experience with HTML, CSS, and JavaScript, and I have successfully completed several <a href='#proyectos' class='proyectos-link' onclick='openProyectos()'>projects</a> that showcase my skills. Additionally, I have knowledge in other <a href='#lenguajes' class='lenguajes-link' onclick='openLenguajes()'>programming languages</a>, enabling me to design dynamic and responsive websites. I am excited to collaborate, contribute my skills and enthusiasm to collaborative projects, and continue progressing in the dynamic field of web development.";
        proyectosTitle.innerHTML = "projects";
        lenguajesTitle.innerHTML = "programming languages";
    }
    languageState = !languageState;
}

var openP = false;
function openProyectos() {
    var openbtt = document.getElementById("open-proyectos");
    var proyectosSection = document.getElementById("proyectos-info");
    if (openP) {
        openbtt.value = "+";
        proyectosSection.style.display = "none";
    } else {
        openbtt.value = "-";
        proyectosSection.style.display = "flex";
    }
    openP = !openP;
}
var openL = false;
function openLenguajes() {
    var openbtt = document.getElementById("open-lenguajes");
    var lenguajesSection = document.getElementById("lenguajes-info");
    if (openL) {
        openbtt.value = "+";
        lenguajesSection.style.display = "none";
    } else {
        openbtt.value = "-";
        lenguajesSection.style.display = "flex";
    }
    openL = !openL;
}