
        // Arrays con frases románticas
        const planetHoverPhrases = [
            "Eres mi todo",
            "Mi corazón late por ti",
            "Juntos por siempre",
            "Eres mi sueño hecho realidad",
            "Amor infinito",
            "Eres mi sol",
            "Mi alma te pertenece",
            "Contigo la vida es bella"
        ];

        const floatingPhrases = [
            "Eres mi tesoro",
            "Eres mi universo",
            "Eres mi sodapop",
            "Nuestro amor es infinito",
            "Eres mi estrella favorita",
            "Mi corazón es tuyo",
            "Juntos somos más",
            "Eres mi sodapop",
            "Amor unico",
            "Eres mi razón de ser",
            "Mi amor por ti crece cada día",
            "Eres mi paraíso",
            "Cada momento contigo es especial",
            "Eres la mejor parte de mi vida",
            "Tu amor ilumina mi existencia",
            "Eres mi pensamiento favorito",
            "Amo tu sonrisa",
            "Eres mi persona favorita",
            "Contigo quiero envejecer",
            "Eres mi felicidad",
            "Tu amor es mi fuerza",
            "Eres mi refugio",
            "Amo cada parte de ti",
            "Eres mi complemento perfecto",
            "Mi amor por ti es eterno"
        ];

        const planetClickPhrases = [
            "Desde que llegaste a mi vida, todo tiene sentido. Eres la razón por la que mi corazón late con fuerza cada mañana y por la que mis sueños están llenos de felicidad.",
            "A tu lado descubrí que el amor verdadero existe. Eres mi complemento perfecto, la personificación de todo lo bueno que podía imaginar.",
            "Si tuviera que elegir entre respirar y amarte, usaría mi último aliento para decirte que te amo. Eres lo más importante en mi vida.",
            "Nuestro amor es como el universo: infinito, misterioso y lleno de maravillas por descubrir. Cada día a tu lado es una nueva aventura.",
            "Eres la melodía que alegra mi corazón, la poesía que da sentido a mis días, la pintura que colorea mi mundo. Sin ti, todo sería gris.",
            "Amo cada parte de ti: tu sonrisa que ilumina mi día, tu voz que calma mi alma, tu mirada que me hace sentir el ser más afortunado del mundo.",
            "En la inmensidad del cosmos, entre miles de millones de personas, encontré a mi alma gemela. El destino nos unió y el amor nos mantendrá juntos por siempre.",
            "Prometo amarte para siempre, solo existe una vida y una oportunidad, no te defraudare."
        ];

        // Frases especiales para estrellas fugaces
        const shootingStarPhrases = [
            "¡Eres increíble!",
            "Mi amor por ti brilla",
            "Eres mi deseo cumplido",
            "Eres mi constelación favorita",
            "Eres mi sodapop",
            "Eres mi sueño hecho realidad",
            "Eres mi sodapop",
            "Eres la galaxia a la que quiero pertenecer",
            "Mi corazón orbita alrededor de ti",
            "Eres mi sodapop"
        ];

        // Colores para estrellas fugaces
        const starColors = [
            "#ff5e7d", "#ff9077", "#ffcc66", "#5ebdff", "#9d7cff", 
            "#ff6b6b", "#ff8e8e", "#6bff8e", "#8e6bff", "#ff6bff"
        ];

        // Configuración de planetas
        const planets = [
            { name: "Amor", size: 16, color: "#ff4d88", orbitRadius: 150, speed: 40, phrase: planetHoverPhrases[0] },
            { name: "Pasión", size: 18, color: "#ff3366", orbitRadius: 220, speed: 35, phrase: planetHoverPhrases[1] },
            { name: "Ternura", size: 14, color: "#ff99cc", orbitRadius: 290, speed: 30, phrase: planetHoverPhrases[2] },
            { name: "Compromiso", size: 20, color: "#cc66ff", orbitRadius: 360, speed: 25, phrase: planetHoverPhrases[3] },
            { name: "Complicidad", size: 15, color: "#9966ff", orbitRadius: 430, speed: 20, phrase: planetHoverPhrases[4] },
            { name: "Respeto", size: 17, color: "#6699ff", orbitRadius: 500, speed: 15, phrase: planetHoverPhrases[5] },
            { name: "Confianza", size: 19, color: "#66ccff", orbitRadius: 570, speed: 10, phrase: planetHoverPhrases[6] },
            { name: "Eternidad", size: 22, color: "#ffcc66", orbitRadius: 640, speed: 5, phrase: planetHoverPhrases[7] }
        ];

        // Variables de estado
        let currentZoom = 1;
        let floatingPhrasesElements = [];
        let visiblePhrases = 15;

        // Crear estrellas de fondo
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const starCount = 200;
            
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                const size = Math.random() * 3;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                
                star.style.animationDuration = `${Math.random() * 5 + 3}s`;
                star.style.animationDelay = `${Math.random() * 5}s`;
                
                starsContainer.appendChild(star);
            }
        }

        // Crear estrellas fugaces con frases
        function createShootingStars() {
            // Spawn shooting stars less frequently but with varied timings
            setInterval(() => {
                // Crear una nueva estrella fugaz cada 4-10 segundos (aleatorio)
                const delay = Math.random() * 6000 + 4000;
                setTimeout(createShootingStar, delay);
            }, 2000);
        }

        function createShootingStar() {
            const star = document.createElement('div');
            star.classList.add('shooting-star');
            
            // Seleccionar frase y color aleatorio
            const randomPhrase = shootingStarPhrases[Math.floor(Math.random() * shootingStarPhrases.length)];
            const randomColor = starColors[Math.floor(Math.random() * starColors.length)];
            
            star.textContent = randomPhrase;
            star.style.color = randomColor;

            // Give each star a randomized, generally longer duration so it moves slower
            // Duration between 6s and 14s
            const duration = (Math.random() * 8 + 6).toFixed(2) + 's';
            star.style.animationDuration = duration;
            
            // Posición inicial aleatoria
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            
            // Dirección y distancia aleatoria
            const angle = Math.random() * Math.PI * 2;
            const distance = 100 + Math.random() * 100;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            const rotation = Math.random() * 360;
            
            star.style.left = `${startX}%`;
            star.style.top = `${startY}%`;
            star.style.setProperty('--star-tx', `${tx}vw`);
            star.style.setProperty('--star-ty', `${ty}vh`);
            star.style.setProperty('--star-r', `${rotation}deg`);
            
            document.body.appendChild(star);
            
            // Eliminar la estrella después de la animación duration
            const durationMs = parseFloat(duration) * 1000;
            setTimeout(() => {
                if (star.parentNode) {
                    star.parentNode.removeChild(star);
                }
            }, durationMs + 200); // small buffer
        }

        // Crear órbitas y planetas
        function createSolarSystem() {
            const orbitsContainer = document.getElementById('orbits-container');
            planets.forEach((planet, index) => {
                // Crear órbita
                const orbit = document.createElement('div');
                orbit.classList.add('orbit');
                // store base orbit radius so we can recalculate on resize
                orbit.dataset.baseOrbit = planet.orbitRadius;
                orbitsContainer.appendChild(orbit);

                // Crear planeta
                const planetEl = document.createElement('div');
                planetEl.classList.add('planet');
                planetEl.style.width = `${planet.size}px`;
                planetEl.style.height = `${planet.size}px`;
                planetEl.style.backgroundColor = planet.color;
                planetEl.style.animation = `orbit ${planet.speed}s linear infinite`;

                // Texto al hacer hover
                const hoverText = document.createElement('div');
                hoverText.classList.add('planet-hover-text');
                hoverText.textContent = planet.phrase;
                planetEl.appendChild(hoverText);

                // Evento click para mostrar modal
                planetEl.addEventListener('click', () => {
                    showModal(planetClickPhrases[index]);
                });

                // store base orbit value for responsive recalculation
                planetEl.dataset.baseOrbit = planet.orbitRadius;

                orbitsContainer.appendChild(planetEl);

                // Ajustar la posición inicial del planeta (guardar ángulo)
                const angle = (Math.random() * 360);
                planetEl.dataset.angle = angle;
                // initial transform will be set by adjustOrbits
            });
            
            // Añadir animación de órbita
            const style = document.createElement('style');
            style.textContent = `
                @keyframes orbit {
                    0% { transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg); }
                }
            `;
            document.head.appendChild(style);
            
            // Aplicar radio de órbita a cada planeta
            // set initial sizes using the same logic as resize handler
            adjustOrbits();
        }

        // Crear frases flotantes
        function createFloatingPhrases() {
            const container = document.getElementById('floating-phrases');
            
            floatingPhrases.forEach((phraseText, index) => {
                const phrase = document.createElement('div');
                phrase.classList.add('floating-phrase');
                phrase.textContent = phraseText;
                
                // Posición y animación aleatorias
                const startX = Math.random() * 100;
                const startY = Math.random() * 100;
                const tx = (Math.random() - 0.5) * 200;
                const ty = (Math.random() - 0.5) * 200;
                
                phrase.style.left = `${startX}%`;
                phrase.style.top = `${startY}%`;
                phrase.style.setProperty('--tx', `${tx}vw`);
                phrase.style.setProperty('--ty', `${ty}vh`);
                
                phrase.style.animationDuration = `${Math.random() * 10 + 15}s`;
                phrase.style.animationDelay = `${Math.random() * 5}s`;
                
                // Solo hacer visibles algunas frases inicialmente
                if (index < visiblePhrases) {
                    phrase.classList.add('visible');
                }
                
                container.appendChild(phrase);
                floatingPhrasesElements.push(phrase);
            });
        }

        // Actualizar frases visibles según el nivel de zoom
        function updateVisiblePhrases() {
            // Calcular cuántas frases deben ser visibles según el zoom
            const newVisibleCount = Math.min(
                floatingPhrases.length,
                Math.floor(15 + (currentZoom - 1) * 20)
            );
            
            // Si el número ha cambiado, actualizar
            if (newVisibleCount !== visiblePhrases) {
                visiblePhrases = newVisibleCount;
                
                floatingPhrasesElements.forEach((phrase, index) => {
                    if (index < visiblePhrases) {
                        phrase.classList.add('visible');
                    } else {
                        phrase.classList.remove('visible');
                    }
                });
                
                // Actualizar el indicador de zoom
                document.getElementById('zoom-level').textContent = `Zoom: ${Math.round(currentZoom * 100)}%`;
            }
        }

        // Aplicar zoom al sistema solar
        function applyZoom() {
            const solarSystem = document.getElementById('solar-system');
            solarSystem.style.transform = `translate(-50%, -50%) scale(${currentZoom})`;
            updateVisiblePhrases();
        }

        // Mostrar modal con frase
        function showModal(phrase) {
            const modal = document.getElementById('modal');
            const modalText = document.getElementById('modal-text');
            
            modalText.textContent = phrase;
            modal.classList.add('active');
        }

        // Cerrar modal
        function setupModalClose() {
            const modal = document.getElementById('modal');
            const closeBtn = document.getElementById('modal-close');
            
            closeBtn.addEventListener('click', () => {
                modal.classList.remove('active');
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        }

        // Configurar controles de zoom
        function setupZoomControls() {
            const zoomInBtn = document.getElementById('zoom-in');
            const zoomOutBtn = document.getElementById('zoom-out');
            
            zoomInBtn.addEventListener('click', () => {
                currentZoom = Math.min(3, currentZoom + 0.2);
                applyZoom();
            });
            
            zoomOutBtn.addEventListener('click', () => {
                currentZoom = Math.max(0.5, currentZoom - 0.2);
                applyZoom();
            });
            
            // También permitir zoom con la rueda del ratón
            document.addEventListener('wheel', (e) => {
                e.preventDefault();
                if (e.deltaY < 0) {
                    currentZoom = Math.min(3, currentZoom + 0.1);
                } else {
                    currentZoom = Math.max(0.5, currentZoom - 0.1);
                }
                applyZoom();
            });
        }

        // Inicializar
        document.addEventListener('DOMContentLoaded', () => {
            createStars();
            createSolarSystem();
            createFloatingPhrases();
            createShootingStars();
            setupModalClose();
            setupZoomControls();
            updateVisiblePhrases();
        });

        // Ajustar responsividad
        window.addEventListener('resize', adjustOrbits);

        function adjustOrbits() {
            const vmin = Math.min(window.innerWidth, window.innerHeight);
            const scale = vmin / 1000; // same reference used elsewhere

            // Update orbits sizes and planet orbit variables
            document.querySelectorAll('.orbit').forEach((orbit) => {
                const base = parseFloat(orbit.dataset.baseOrbit) || 200;
                const radius = base * scale; // scaled radius in px
                const diameter = radius * 2;
                orbit.style.width = `${diameter}px`;
                orbit.style.height = `${diameter}px`;
            });

            document.querySelectorAll('.planet').forEach((planet, idx) => {
                const base = parseFloat(planet.dataset.baseOrbit) || 200;
                const radius = base * scale;
                // update CSS variable used by the orbit keyframes
                planet.style.setProperty('--orbit-radius', `${radius}px`);

                // update initial transform using stored angle
                const angle = parseFloat(planet.dataset.angle || 0);
                planet.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
            });
        }
