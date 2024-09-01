// Array de objetos Brawler
const brawlers = [
    { nombre: 'Shelly', rareza: 'Especial', titulo: '¡No hay tiempo para explicarlo!', fechaAdicion: '2017-06-15', icono: 'images/shelly.png' },
    { nombre: 'Nita', rareza: 'Especial', titulo: 'Indomable', fechaAdicion: '2017-06-15', icono: 'images/nita.png' },
    { nombre: 'Colt', rareza: 'Especial', titulo: 'Cañón', fechaAdicion: '2017-06-15', icono: 'images/colt.png' },
    { nombre: 'Bull', rareza: 'Especial', titulo: 'Toro bravo', fechaAdicion: '2017-06-15', icono: 'images/bull.png' },,
    { nombre: 'Brock', rareza: 'Especial', titulo: '¡Boom!', fechaAdicion: '2017-06-15', icono: 'images/brock.png' },
    { nombre: 'Rosa', rareza: 'Especial', titulo: 'Que te dé el aire', fechaAdicion: '2019-04-26', icono: 'images/rosa.png' },
    { nombre: 'Poco', rareza: 'Especial', titulo: 'Mariachi', fechaAdicion: '2017-06-15', icono: 'images/poco.png' },
    { nombre: 'Barley', rareza: 'Especial', titulo: 'Toma tu merecido', fechaAdicion: '2017-06-15', icono: 'images/barley.png' },
    { nombre: 'El Primo', rareza: 'Especial', titulo: 'Luchador', fechaAdicion: '2017-06-15', icono: 'images/primo.png' },

    //SUPERESPCIALES

    { nombre: 'Jessie', rareza: 'Superespecial', titulo: 'Pasión por la construcción', fechaAdicion: '2017-06-15', icono: 'images/jessie.png' },
    { nombre: 'Dynamike', rareza: 'Superespecial', titulo: 'Pío, pío, yo no he sido', fechaAdicion: '2017-06-15', icono: 'images/dynamike.png' },
    { nombre: 'Tick', rareza: 'Superespecial', titulo: 'He perdido la cabeza', fechaAdicion: '2019-06-26', icono: 'images/tick.png' },
    { nombre: '8-Bit', rareza: 'Superespecial', titulo: 'SYS 64738', fechaAdicion: '2019-08-29', icono: 'images/8bit.png' },
    { nombre: 'Rico', rareza: 'Superespecial', titulo: 'Amante', fechaAdicion: '2017-06-15', icono: 'images/rico.png' },
    { nombre: 'Darryl', rareza: 'Superespecial', titulo: '¡Arrr!', fechaAdicion: '2017-12-17', icono: 'images/darryl.png' },
    { nombre: 'Penny', rareza: 'Superespecial', titulo: 'Corazón salado', fechaAdicion: '2018-05-21', icono: 'images/penny.png' },
    { nombre: 'Carl', rareza: 'Superespecial', titulo: 'Friki de la geología', fechaAdicion: '2019-03-22', icono: 'images/carl.png' },
    { nombre: 'Jacky', rareza: 'Superespecial', titulo: '#@%**', fechaAdicion: '2020-03-17', icono: 'images/jacky.png' },
    { nombre: 'Gus', rareza: 'Superespecial', titulo: 'Fantasmal', fechaAdicion: '2022-09-23', icono: 'images/gus.png' },


    //EPICOS

    { nombre: 'Bo', rareza: 'Épico', titulo: 'Unión con la naturaleza', fechaAdicion: '2017-06-15', icono: 'images/bo.png' },
    { nombre: 'Emz', rareza: 'Épico', titulo: '#haters', fechaAdicion: '2019-10-23', icono: 'images/emz.png' },
    { nombre: 'Stu', rareza: 'Épico', titulo: 'Especialista de acción', fechaAdicion: '2021-03-15', icono: 'images/stu.png' },
    { nombre: 'Piper', rareza: 'Épico', titulo: 'Dulce Francotiradora', fechaAdicion: '2017-07-03', icono: 'images/piper.png' },
    { nombre: 'Pam', rareza: 'Épico', titulo: 'Tu madre', fechaAdicion: '2017-09-04', icono: 'images/pam.png' },
    { nombre: 'Frank', rareza: 'Épico', titulo: 'Tanque', fechaAdicion: '2018-05-21', icono: 'images/frank.png' },
    { nombre: 'Bibi', rareza: 'Épico', titulo: 'Chica mala', fechaAdicion: '2019-05-22', icono: 'images/bibi.png' },
    { nombre: 'Bea', rareza: 'Épico', titulo: 'Abeja reina', fechaAdicion: '2019-12-18', icono: 'images/bea.png' },
    { nombre: 'Nani', rareza: 'Épico', titulo: 'La nana', fechaAdicion: '2020-06-05', icono: 'images/nani.png' },
    { nombre: 'Edgar', rareza: 'Épico', titulo: 'Presidente de Brawl Stars', fechaAdicion: '2020-12-19', icono: 'images/edgar.png' },
    { nombre: 'Griff', rareza: 'Épico', titulo: 'Tío Avaro', fechaAdicion: '2021-07-23', icono: 'images/griff.png' },
    { nombre: 'Grom', rareza: 'Épico', titulo: 'Con una sola mano', fechaAdicion: '2021-12-22', icono: 'images/grom.png' },
    { nombre: 'Bonnie', rareza: 'Épico', titulo: 'Sin miedo', fechaAdicion: '2022-06-06', icono: 'images/bonnie.png' },
    { nombre: 'Gale', rareza: 'Épico', titulo: 'Don Limpio', fechaAdicion: '2020-05-13', icono: 'images/gale.png' },
    { nombre: 'Colette', rareza: 'Épico', titulo: 'Coleccionista', fechaAdicion: '2020-09-14', icono: 'images/colette.png' },
    { nombre: 'Belle', rareza: 'Épico', titulo: 'Starr', fechaAdicion: '2021-04-21', icono: 'images/belle.png' },
    { nombre: 'Ash', rareza: 'Épico', titulo: 'Basura con patas', fechaAdicion: '2021-08-30', icono: 'images/ash.png' },
    { nombre: 'Lola', rareza: 'Épico', titulo: 'Reina del drama', fechaAdicion: '2021-11-08', icono: 'images/lola.png' },
    { nombre: 'Sam', rareza: 'Épico', titulo: 'A puñetazo limpio', fechaAdicion: '2022-09-05', icono: 'images/sam.png' },
    { nombre: 'Mandy', rareza: 'Épico', titulo: 'Subidón de azúcar', fechaAdicion: '2023-01-02', icono: 'images/mandy.png' },
    { nombre: 'Maisie', rareza: 'Épico', titulo: 'Maestra del desastre', fechaAdicion: '2023-05-01', icono: 'images/maisie.png' },
    { nombre: 'Hank', rareza: 'Épico', titulo: 'Gamba táctica', fechaAdicion: '2023-06-07', icono: 'images/hank.png' },
    { nombre: 'Pearl', rareza: 'Épico', titulo: 'Con las manos en la masa', fechaAdicion: '2023-09-11', icono: 'images/pearl.png' },
    { nombre: 'Larry y Lawrie', rareza: 'Épico', titulo: '¡Yo soy la ley!', fechaAdicion: '2024-02-01', icono: 'images/law.png' },
    { nombre: 'Angelo', rareza: 'Épico', titulo: 'Sed de sangre', fechaAdicion: '2024-02-29', icono: 'images/angelo.png' },
    { nombre: 'Berry', rareza: 'Épico', titulo: 'Unicornio', fechaAdicion: '2024-06-27', icono: 'images/berry.png' },




    //MITICOS


    { nombre: 'Mortis', rareza: 'Mítico', titulo: 'Criatura de la noche', fechaAdicion: '2017-06-15', icono: 'images/mortis.png' },
    { nombre: 'Tara', rareza: 'Mítico', titulo: '¿Qué predicen las cartas?', fechaAdicion: '2017-09-04', icono: 'images/tara.png' },
    { nombre: 'Gene', rareza: 'Mítico', titulo: '¡Háblale a la mano!', fechaAdicion: '2019-02-15', icono: 'images/gene.png' },
    { nombre: 'Max', rareza: 'Mítico', titulo: '¡Como un rayo!', fechaAdicion: '2019-12-21', icono: 'images/max.png' },
    { nombre: 'Señor P', rareza: 'Mítico', titulo: 'Mandamás', fechaAdicion: '2020-01-20', icono: 'images/mrp.png' },
    { nombre: 'Sprout', rareza: 'Mítico', titulo: 'Abraza arbustos', fechaAdicion: '2020-04-10', icono: 'images/sprout.png' },
    { nombre: 'Byron', rareza: 'Mítico', titulo: 'Matasanos', fechaAdicion: '2020-12-16', icono: 'images/byron.png' },
    { nombre: 'Squeak', rareza: 'Mítico', titulo: 'Accidente de laboratorio', fechaAdicion: '2021-05-20', icono: 'images/squeak.png' },
    { nombre: 'Lou', rareza: 'Mítico', titulo: 'Cerebro congelado', fechaAdicion: '2020-11-23', icono: 'images/lou.png' },
    { nombre: 'Ruffs', rareza: 'Mítico', titulo: 'Coronel', fechaAdicion: '2021-02-01', icono: 'images/ruffs.png' },
    { nombre: 'Buzz', rareza: 'Mítico', titulo: 'Cuidadito conmigo', fechaAdicion: '2021-06-21', icono: 'images/buzz.png' },
    { nombre: 'Fang', rareza: 'Mítico', titulo: 'Senséi del zapatillatsu', fechaAdicion: '2022-01-17', icono: 'images/fang.png' },
    { nombre: 'Eve', rareza: 'Mítico', titulo: 'Madre', fechaAdicion: '2022-03-07', icono: 'images/eve.png' },
    { nombre: 'Janet', rareza: 'Mítico', titulo: 'Como un cohete', fechaAdicion: '2022-05-02', icono: 'images/janet.png' },
    { nombre: 'Otis', rareza: 'Mítico', titulo: 'Artista', fechaAdicion: '2022-07-04', icono: 'images/otis.png' },
    { nombre: 'Buster', rareza: 'Mítico', titulo: 'Éxito en taquilla', fechaAdicion: '2022-11-07', icono: 'images/buster.png' },
    { nombre: 'Gray', rareza: 'Mítico', titulo: 'Gris turbio', fechaAdicion: '2022-12-12', icono: 'images/gray.png' },
    { nombre: 'R-T', rareza: 'Mítico', titulo: 'Vigilante', fechaAdicion: '2023-03-06', icono: 'images/rt.png' },
    { nombre: 'Willow', rareza: 'Mítico', titulo: 'Control mental', fechaAdicion: '2023-04-03', icono: 'images/willow.png' },
    { nombre: 'Doug', rareza: 'Mítico', titulo: 'Salchicha', fechaAdicion: '2023-08-01', icono: 'images/doug.png' },
    { nombre: 'Chuck', rareza: 'Mítico', titulo: 'El maestro', fechaAdicion: '2023-10-18', icono: 'images/chuck.png' },
    { nombre: 'Charlie', rareza: 'Mítico', titulo: 'Sentido arácnido', fechaAdicion: '2023-11-06', icono: 'images/charlie.png' },
    { nombre: 'Mico', rareza: 'Mítico', titulo: '¿Te ríes de mí?', fechaAdicion: '2023-12-14', icono: 'images/mico.png' },
    { nombre: 'Melodie', rareza: 'Mítico', titulo: 'Temeraria', fechaAdicion: '2024-03-27', icono: 'images/melodie.png' },
    { nombre: 'Lily', rareza: 'Mítico', titulo: 'Sombra del bosque', fechaAdicion: '2024-04-25', icono: 'images/lily.png' },
    { nombre: 'Clancy', rareza: 'Mítico', titulo: 'Caparazón a prueba de balas', fechaAdicion: '2024-07-25', icono: 'images/clancy.png' },
    { nombre: 'Moe', rareza: 'Mítico', titulo: 'Amante del queso', fechaAdicion: '2024-08-29', icono: 'images/moe.png' },



    //LEGENDARIOS


    { nombre: 'Leon', rareza: 'Legendario', titulo: 'Máximo sigilo', fechaAdicion: '2017-06-15', icono: 'images/leon.png' },
    { nombre: 'Sandy', rareza: 'Legendario', titulo: 'Marmotilla', fechaAdicion: '2019-09-18', icono: 'images/sandy.png' },
    { nombre: 'Crow', rareza: 'Legendario', titulo: '¡Croc, croc!', fechaAdicion: '2017-06-15', icono: 'images/crow.png' },
    { nombre: 'Amber', rareza: 'Legendario', titulo: 'Está que arde', fechaAdicion: '2020-10-23', icono: 'images/amber.png' },
    { nombre: 'Spike', rareza: 'Épico', titulo: 'No hay nadie igual', fechaAdicion: '2017-06-15', icono: 'images/spike.png' },
    { nombre: 'Surge', rareza: 'Legendario', titulo: 'Bro', fechaAdicion: '2020-07-06', icono: 'images/surge.png' },
    { nombre: 'Cordelius', rareza: 'Legendario', titulo: 'Toxicidad', fechaAdicion: '2023-07-03', icono: 'images/cordelius.png' },
    { nombre: 'Meg', rareza: 'Legendario', titulo: 'Asitencia técnica 2.0', fechaAdicion: '2021-09-28', icono: 'images/meg.png' },
    { nombre: 'Chester', rareza: 'Legendario', titulo: 'El rey de los trucos', fechaAdicion: '2022-12-12', icono: 'images/chester.png' },
    { nombre: 'Kit', rareza: 'Legendario', titulo: 'Miau', fechaAdicion: '2024-01-04', icono: 'images/kit.png' },
    { nombre: 'Draco', rareza: 'Legendario', titulo: 'Maestro de mazmorra', fechaAdicion: '2024-05-30', icono: 'images/draco.png' },
    
];



// Función para mostrar los Brawlers en el HTML
function mostrarBrawlers(lista) {
    const container = document.getElementById('brawlerContainer');
    container.innerHTML = ''; // Limpiar el contenedor

    lista.forEach(brawler => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-body">
                <div class="d-flex align-items-center">
                    <img src="${brawler.icono}" alt="${brawler.nombre}" class="icono-brawler">
                    <h5 class="card-title">${brawler.nombre}</h5>
                </div>
                <br>
                <p class="card-text">Calidad: ${brawler.rareza}</p>
                 <p class="card-text">Añadido el: ${brawler.fechaAdicion}</p>
                <p class="card-text titulo-dorado">${brawler.titulo}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Función de búsqueda por nombre
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredBrawlers = brawlers.filter(brawler => 
        brawler.nombre.toLowerCase().includes(searchTerm)
    );
    mostrarBrawlers(filteredBrawlers);
});

// Objeto para ordenar por rareza
const rarezaRanking = {
    'Especial': 1,
    'Superespecial': 2,
    'Épico': 3,
    'Mítico': 4,
    'Legendario': 5
};

// Función para ordenar los Brawlers
function sortBrawlers(criterio) {
    let sortedBrawlers;
    switch (criterio) {
        case 'categoria':
            sortedBrawlers = [...brawlers].sort((a, b) => {
                return rarezaRanking[a.rareza] - rarezaRanking[b.rareza];
            });
            break;
        case 'letra':
            sortedBrawlers = [...brawlers].sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
        case 'reciente':
            sortedBrawlers = [...brawlers].sort((a, b) => new Date(b.fechaAdicion) - new Date(a.fechaAdicion));
            break;
    }
    mostrarBrawlers(sortedBrawlers);
}

function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    document.getElementById(sectionId).style.display = 'block';
}


// Llama a la función cuando el contenido del DOM se haya cargado
document.addEventListener('DOMContentLoaded', function() {
    mostrarBrawlers(brawlers);
});


