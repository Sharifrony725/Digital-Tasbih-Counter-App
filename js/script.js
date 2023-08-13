const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn');

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn');

const allahAkberDisplay = document.getElementById('allahAkberDisplay');
const allahAkberIncrimentBtn = document.getElementById('allahAkberIncrimentBtn');
const allahAkberDecrimentBtn = document.getElementById('allahAkberDecrimentBtn');

const resetBtn = document.getElementById('resetBtn');

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahAkberInitialValue = 0;

//subhanAllah

subhanAllahIncrimentBtn.addEventListener('click', function() {
    if (subhanAllahInitialValue === 33){
       return alert('Subhanallah Complete, Please Read Another Tasbih');
    }
    subhanAllahInitialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})


subhanAllahDecrimentBtn.addEventListener('click', function () {
    if (subhanAllahInitialValue === 0){
       return alert('you can not added negative');
    }
     subhanAllahInitialValue -= 1;
     subhanAllahDisplay.innerText = subhanAllahInitialValue;
})

//alhamdulillah

alhamdulillahIncrimentBtn.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 33) {
       return alert('Alhamdulillah Complete, Please Read Another Tasbih');
    }
    alhamdulillahInitialValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})


alhamdulillahDecrimentBtn.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 0) {
       return alert('you can not added negative');
    }
     alhamdulillahInitialValue -= 1;
     alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
})

//Allah hu akber

allahAkberIncrimentBtn.addEventListener('click', function () {
    if (allahAkberInitialValue === 34) {
        return alert('Allahu Akbar Complete, Please Read Another Tasbih');
    }
    allahAkberInitialValue += 1;
    allahAkberDisplay.innerText = allahAkberInitialValue;
})


allahAkberDecrimentBtn.addEventListener('click', function () {
    if (allahAkberInitialValue === 0) {
        return alert('you can not added negative');
    }
    allahAkberInitialValue -= 1;
    allahAkberDisplay.innerText = allahAkberInitialValue;
})

//resetBtn
resetBtn.addEventListener('click', function () {
    if (subhanAllahInitialValue === 33 && alhamdulillahInitialValue === 33 && allahAkberInitialValue ===34){
        subhanAllahDisplay.innerText = 0;
        subhanAllahInitialValue = 0;

        alhamdulillahDisplay.innerText = 0;
        alhamdulillahInitialValue = 0;

        allahAkberDisplay.innerText = 0;
        allahAkberInitialValue = 0;
    }else{
        return alert('Must be read  full tasbiah for reset')
    }
    
})