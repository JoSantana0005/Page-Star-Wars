//Evento para mover los personajes
let right = document.getElementById('Right');
let left = document.getElementById('Left');
let Personajes = document.getElementsByClassName('Personajes')[0];

right.addEventListener('click',()=>{
    Personajes.scrollLeft += 320;
})
left.addEventListener('click',()=>{
    Personajes.scrollLeft -= 320;
})
//Json para los personajes de star Wars episodio III
const Personajes_video = [
    {
        "Nombre": "Anakin Skywalker",
        "Imagen":"../Imagen/episodio III/13.jpg",
        "Descripcion": "Anakin Skywalker, más tarde conocido como Darth Vader, es un personaje ficticio y el protagonista de la trilogía de precuelas de la serie de películas de Star Wars creada por George Lucas. Es interpretado por el actor Hayden Christensen en los episodios II y III de la saga."
    },
    {
        "Nombre": "Obi-Wan Kenobi",
        "Imagen":"../Imagen/episodio III/14.jpg",
        "Descripcion": "Obi-Wan Kenobi es un personaje ficticio de la saga Star Wars. Es un maestro jedi que aparece en los episodios I, II y III de la serie de películas de Star Wars, interpretado por el actor Ewan McGregor."
    },
    {
        "Nombre": "Padmé Amidala",
        "Imagen":"../Imagen/episodio III/15.jpg",
        "Descripcion": "Padmé Amidala es un personaje ficticio de la saga Star Wars. Es la Reina y luego Senadora de Naboo, y madre de Luke Skywalker y Leia Organa. Es interpretada por la actriz Natalie Portman en los episodios I, II y III de la serie de películas de Star Wars."
    },
    {
        "Nombre": "Canciller Palpatine",
        "Imagen":"../Imagen/episodio III/16.jpg",
        "Descripcion": "Palpatine es un personaje ficticio de la saga Star Wars. Es un senador de Naboo que se convierte en Emperador de la galaxia y líder del Imperio Galáctico. Es interpretado por el actor Ian McDiarmid en los episodios I, II y III de la serie de películas de Star Wars."
    },
    {
        "Nombre": "General Grievous",
        "Imagen":"../Imagen/episodio III/17.jpg",
        "Descripcion": "General Grievous es un personaje ficticio de la saga Star Wars. Es un general cyborg que aparece en los episodios II y III de la serie de películas de Star Wars."
    },
    {
        "Nombre": "R2-D2",
        "Imagen":"../Imagen/episodio III/18.jpg",
        "Descripcion": "R2-D2 es un personaje ficticio de la saga Star Wars. Es un droide astromecánico que aparece en los episodios I, II y III de la serie de películas de Star Wars."
    },
    {
        "Nombre": "Mace Windu",
        "Imagen":"../Imagen/episodio II/10.jpg",
        "Descripcion": "Mace Windu es un personaje ficticio de la saga Star Wars. Es un maestro jedi que aparece en los episodios I, II y III de la serie de películas de Star Wars."
    },
    {
        "Nombre": "Maestro Yoda",
        "Imagen":"../Imagen/episodio II/12.jpg",
        "Descripcion": "Yoda es un personaje ficticio de la saga Star Wars. Es un maestro jedi que aparece en los episodios I, II y III de la serie de películas de Star Wars."
    },
    {
        "Nombre": "Comandante Cody",
        "Imagen":"../Imagen/episodio III/19.jpg",
        "Descripcion": "Comandante Cody es un personaje ficticio de la saga Star Wars. Es un soldado clon que aparece en los episodios II y III de la serie de películas de Star Wars."
    },
    {
        "Nombre": "Chewbacca",
        "Imagen":"../Imagen/episodio IV/24.jpg",
        "Descripcion": "Chewbacca es un personaje ficticio de la saga Star Wars. Es un wookiee que aparece en los episodios II y III de la serie de películas de Star Wars."
    },
    {
        "Nombre": "Cp-390",
        "Imagen": "../Imagen/episodio V/25.jpg",
        "Descripcion": "CP-390 es un personaje ficticio de la saga Star Wars. Es un droide de combate que aparece en los episodios II y III de la serie de películas de Star Wars."
    },
    {
        "Nombre": "Star Clone Trooper",
        "Imagen":"../Imagen/episodio III/22.jpeg",
        "Descripcion": "Star Clone Trooper es un personaje ficticio de la saga Star Wars. Es un soldado clon que aparece en los episodios II y III de la serie de películas de Star Wars."
    },
    {
        "Nombre": "Super Battle Droid",
        "Imagen":"../Imagen/episodio III/23.jpeg",
        "Descripcion": "Super Battle Droid es un personaje ficticio de la saga Star Wars. Es un droide de combate que aparece en los episodios II y III de la serie de películas de Star Wars."
    }

]
let Ventana = document.getElementById('Ventana--Personajes');
let Personajes__Imagen = document.getElementsByClassName('Personajes--Imagen');
let Imagen = document.getElementById('Imagen');
let Nombre = document.getElementById('Nombre--Personaje');
let Descripcion = document.getElementById('Parrafo');
let contador = 0;
Array.from(Personajes__Imagen).forEach((element,index)=>{
    element.addEventListener('click',()=>{
        Ventana.showModal();
        if(Ventana){
            contador = index;
            console.log(contador);
            if(Imagen && Nombre && Descripcion){
                Imagen.src = Personajes_video[index].Imagen;
                Nombre.textContent = Personajes_video[index].Nombre;
                Descripcion.textContent = Personajes_video[index].Descripcion;
            }
        }
    })
})
//Evento para cambiar de personaje
const anterior = document.getElementById('Anterior');
anterior.addEventListener('click',()=>{
    if(contador != 0){
        contador = contador - 1;
        console.log(contador);
        Imagen.src = Personajes_video[contador].Imagen;
        Nombre.textContent = Personajes_video[contador].Nombre;
        Descripcion.textContent = Personajes_video[contador].Descripcion;
}})
const siguiente = document.getElementById('Siguiente');
siguiente.addEventListener('click',()=>{
    if(contador != Personajes_video.length - 1){
        contador = contador + 1;
        console.log(contador);
        Imagen.src = Personajes_video[contador].Imagen;
        Nombre.textContent = Personajes_video[contador].Nombre;
        Descripcion.textContent = Personajes_video[contador].Descripcion;
    }
})
//Cerrar ventana modal
let cerrar = document.getElementById('Cerrar--Ventana')
cerrar.addEventListener('click',()=>{
    Ventana.close();
})