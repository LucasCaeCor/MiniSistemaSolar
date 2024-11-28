    const solarSystem = document.getElementById('solarSystem', color="red");
document.addEventListener('DOMContentLoaded', () => {

    // Função para criar planetas
    function createPlanet(id, color, orbitRadius, orbitSpeed, size) {
        // Cria o elemento da órbita
        const orbit = document.createElement('div');
        orbit.className = 'orbit';
        orbit.style.width = `${orbitRadius * 2}px`;
        orbit.style.height = `${orbitRadius * 2}px`;
        orbit.style.border = '1px dashed #fff';
        orbit.style.borderRadius = '50%';
        orbit.style.position = 'absolute';
        orbit.style.top = '50%';
        orbit.style.left = '50%';
        orbit.style.transform = 'translate(-50%, -50%)'; // Centraliza a órbita
 
        // Cria o elemento do planeta
        const planet = document.createElement('div');
        planet.id = id;
        planet.className = `planet ${id}`;
        planet.style.backgroundColor = color;
        planet.style.width = `${size}px`;
        planet.style.height = `${size}px`;
        planet.style.position = 'absolute';
        planet.style.borderRadius = '50%';
        planet.style.top = `calc(50% - ${size / 2}px)`;
        planet.style.left = `calc(50% - ${size / 2}px)`;


        // Adiciona o planeta à órbita
        orbit.appendChild(planet);
        solarSystem.appendChild(orbit);

        // Animação da órbita
        let angle = 0;
        function animate() {
            angle += orbitSpeed;
            // Roda a órbita e move o planeta ao redor dela
            orbit.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
            planet.style.transform = `translateX(${orbitRadius}px)`;
            requestAnimationFrame(animate);
        }
        animate();
    }

    // Criar planetas com órbitas de diferentes raios
    createPlanet('sun', '#888888', 100, 0.1, 10, 'index.html#sun');
    createPlanet('mercury', '#888888', 100, 0.1, 10, 'index.html#mercury');
    createPlanet('venus', '#ffcc00', 150, 0.08, 15, 'planet-details.html#venus');
    createPlanet('earth', '#00f', 200, 0.06, 20, 'planet-details.html#earth');
    createPlanet('mars', '#f00', 250, 0.05, 15, 'index.html#mars');
    createPlanet('jupiter', '#ffa500', 300, 0.04, 30, 'planet-details.html#jupiter');
    createPlanet('saturn', '#f4a460', 350, 0.03, 25, 'planet-details.html#saturn');
    createPlanet('uranus', '#0ff', 400, 0.02, 20, 'planet-details.html#uranus');
    createPlanet('neptune', '#00008b', 450, 0.01, 20, 'planet-details.html#neptune');
    

    // Inicializar a visualização dos planetas
    showPlanet('all');
});

// Função para mostrar ou ocultar planetas
function showPlanet(name) {
    const planets = document.querySelectorAll('.planet');
    planets.forEach(planet => {
        if (name === 'all' || planet.id === name) {
            planet.style.display = 'block';
        } else {
            planet.style.display = 'none';
        }
    });
}





