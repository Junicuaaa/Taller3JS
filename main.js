const form1 = document.querySelector('#form1');
const form2 = document.querySelector('#form2');
const campus = {};
const teamCamper = document.querySelector('#teamcamper');
const horarioCamper = document.querySelector('#horariocamper');
const salonCamper = document.querySelector('#saloncamper');

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
teamCamper.addEventListener('change', (e) =>{
    const team = e.target.value;
    console.log(team)  
});
horarioCamper.addEventListener('change', (e) =>{
    const horario = e.target.value;
    console.log(horario)  
});
salonCamper.addEventListener('change', (e) =>{
    const salon = e.target.value;
    console.log(salon)  
});