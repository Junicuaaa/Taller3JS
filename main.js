const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');
const imagen = document.querySelector('.imagen')
const sede = document.querySelector('#sede')
const sede2 = document.querySelector('#sede2')
const campus = {};
const firstButton = document.querySelector('#cambiar')
const secondButton = document.querySelector('#cambiar2')
// const thirdButton = document.querySelector('#imprimirInfo')
// const pantalla1 = document.querySelector('#informacionPantalla')
let sedeBorrar;
let sedeBorrar2;
const numero = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
sede.addEventListener("change", (e) => {
    sedeBorrar = e.target.value;
    console.log(sedeBorrar);
    sedeBorrar2 = sedeBorrar
})
sede2.addEventListener("change", (e) => {
    sedeBorrar = e.target.value;
    console.log(sedeBorrar);
    sedeBorrar2 = sedeBorrar
})
form1.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    campus[`${data.sede}`] = {camper: [], trainers: [], telefono: numero(1000000, 10000000)};
    console.log(campus);
    sedes();
    form1.reset();
})
const sedes = ()=>{
    let ciudad = document.querySelector("[name='sedecampus']")
    ciudad.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        ciudad.insertAdjacentHTML("beforeend", `<option value="${val}" class="${val}">${val}</option>`)
    }
    let ciudad2 = document.querySelector("[name='sedecampus2']")
    ciudad2.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        ciudad2.insertAdjacentHTML("beforeend", `<option value="${val}" class="${val}">${val}</option>`)
    }
}
const borrar = ()=>{
    let borrarSede = document.querySelectorAll(`.${sedeBorrar}`)
    borrarSede.forEach(element => {
        console.log(element)
        let padre = element.parentNode;
        padre.removeChild(element);
    }); 
    delete campus[`${sedeBorrar}`];
}

form2.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sedecampus;
    delete data.sedecampus;
    campus[`${sede}`].camper.unshift(data);
    console.log(campus);
    form2.reset();
    return
})
form3.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sedecampus2;
    delete data.sedecampus2;
    campus[`${sede}`].trainers.unshift(data);
    console.log(campus);
    form3.reset();
    return
})
// const imprimirData = () => {
//     pantalla1.innerHTML = null;
//     for (let [val, id] of Object.entries(campus)) {
//         console.log(val)
//         for (val of Object.entries(val)) {
//             console.log(val)
//         }
//     }
// }
const cambiarTrainer = () =>{
    form2.style.display = 'none';
    form3.style.display = 'block';
    firstButton.style.display = 'none';
    secondButton.style.display = 'block';
    // thirdButton.style.display = 'block';
}
const cambiarCamper = () => {
    imprimirInfo.style.display = 'none';
    form3.style.display = 'none';
    form2.style.display = 'block';
    firstButton.style.display = 'block';
    secondButton.style.display = 'none';
    // thirdButton.style.display = 'none';
    // imagen.style.display = 'flex';
    // pantalla1.style.display = 'none'

}
// const mostrarInfo = () => {
//     imagen.style.display = 'none';
//     pantalla1.style.display = 'block';
//     imprimirData();
// }