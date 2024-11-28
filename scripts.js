const gifs = {
    sun: {
        src: 'img/sun.mp4',
        info: "O Sol é a estrela no centro do Sistema Solar e é a principal fonte de energia para a vida na Terra."
    },
    mercury: {
        src: 'img/mercury.mp4',
        info: "Mercúrio é o menor planeta do Sistema Solar e o mais próximo do Sol."
    },
    venus: {
        src: 'img/venus.mp4',
        info: "Vênus é o segundo planeta do Sistema Solar e é conhecido por sua atmosfera espessa e quente."
    },
    earth: {
        src: 'img/earth.mp4',
        info: "A Terra é o terceiro planeta do Sistema Solar e o único conhecido por abrigar vida."
    },
    mars: {
        src: 'img/mars.mp4',
        info: "Marte é o quarto planeta do Sistema Solar e é conhecido como o planeta vermelho devido ao seu solo rico em óxido de ferro."
    },
    jupiter: {
        src: 'img/jupiter.mp4',
        info: "Júpiter é o maior planeta do Sistema Solar e é conhecido por sua Grande Mancha Vermelha, uma gigantesca tempestade."
    },
    saturn: {
        src: 'img/saturn.mp4',
        info: "Saturno é o segundo maior planeta do Sistema Solar e é famoso por seus impressionantes anéis."
    },
    uranus: {
        src: 'img/uranus.mp4',
        info: "Urano é o sétimo planeta do Sistema Solar e é conhecido por seu eixo de rotação inclinado."
    },
    neptune: {
        src: 'img/neptune.mp4',
        info: "Netuno é o oitavo planeta do Sistema Solar e é conhecido por seu intenso azul profundo e ventos fortes."
    },
    pluto: {
        src: 'img/pluto.mp4',
        info: "Plutão é um planeta anão localizado no Cinturão de Kuiper, além da órbita de Netuno."
    }
};

function showPlanet(planetName) {
    const gifElement = document.getElementById('planet-gif');
    const infoElement = document.getElementById('info');

    const gif = gifs[planetName];
    if (gif) {
        gifElement.src = gif.src;
        gifElement.style.display = 'block'; // Exibir GIF
        infoElement.textContent = gif.info;
        infoElement.style.display = 'block'; // Exibir informações
    } else {
        gifElement.style.display = 'none'; // Ocultar GIF se não houver planeta
        infoElement.style.display = 'none'; // Ocultar informações
    }
}

// Exibir Terra por padrão
showPlanet('earth');

// Alternar modo noturno
const toggleButton = document.getElementById("toggleNightMode");

toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("night-mode");
    const icon = document.querySelector("#toggleNightMode i");
    if (document.body.classList.contains("night-mode")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
});
