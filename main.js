const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');
const sede = document.querySelector('#sede')
const campus = {};
let sedeBorrar;

sede.addEventListener("change", (e) => {
    sedeBorrar = e.target.value;
    console.log(sedeBorrar);
})
form1.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    campus[`${data.sede}`] = {camper: [], trainers: []};
    console.log(campus);
    sedes();
    form1.reset();
})
const sedes = ()=>{
    let ciudad = document.querySelector("[name='sedecampus']")
    ciudad.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        ciudad.insertAdjacentHTML("beforeend", `<option value="${val}" id="${val}">${val}</option>`)
    }
}
const borrar = ()=>{
    let borrarSede = document.querySelector(`#${sedeBorrar}`)
    console.log(borrarSede)
    let padre = borrarSede.parentNode;
    padre.removeChild(borrarSede);
    delete campus[`${sedeBorrar}`];
}

form2.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sedecampus;
    delete data.sedecampus;
    campus[`${sede}`]["camper"].unshift(data);
    console.log(campus);
    form2.reset();
    return
})
