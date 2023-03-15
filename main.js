const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');
const campus = {};

form1.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    campus[data.sede] = {camper: [], trainers: []};
    console.log(campus);
    sedes();
    form1.reset();
})
const sedes = ()=>{
    let ciudad = document.querySelector("[name='sedecampus']")
    ciudad.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        ciudad.insertAdjacentHTML("beforeend", `<option value="${val}">${val}</option>`)
    }
}
