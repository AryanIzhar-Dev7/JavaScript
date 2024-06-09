



// Getting Elements 
const convertel= document.getElementById("convertbtn");
const lengthel= document.getElementById("lengthpara");
const volumeel= document.getElementById("volumepara");
const massel= document.getElementById("masspara")


convertel.addEventListener("click",()=>{
    //Getting Elements
    const inputfieldel= document.getElementById("inputfield")
    let inputval= inputfieldel.value;
    

    // Output
lengthel.textContent= `${inputval} meters = ${(inputval * 3.281).toFixed(2)} feet | ${inputval} feet = ${(inputval/3.281).toFixed(3)} meters `
volumeel.textContent=`${inputval} Liters = ${(inputval * 0.264).toFixed(2)} Gallons | ${inputval} Gallons = ${(inputval/0.264).toFixed(3)} Liters `
massel.textContent= `${inputval} Kilograms = ${(inputval * 2.204).toFixed(2)} pounds | ${inputval} Pounds = ${(inputval/2.204).toFixed(3)} Kilograms `

})

