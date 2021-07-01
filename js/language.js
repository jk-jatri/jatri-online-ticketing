const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');

const vehicleName = document.querySelector('.vehicleName');
const login_btn = document.querySelector('.login_btn');
const selectPlc = document.querySelector('.selectPlc');
const selectDest = document.querySelector('.selectDest');
const selectDate = document.querySelector('.selectDate');
const srcBtn = document.querySelector('.srcBtn');
const fltr = document.querySelector('.fltr');
const ac = document.querySelector('.ac');
const nac = document.querySelector('.nac');
const bothac = document.querySelector('.bothac');
const bdt = document.querySelector('.bdt');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        vehicleName.textContent = data[attr].vehicleName;
        login_btn.textContent = data[attr].login_btn;
        selectPlc.textContent = data[attr].selectPlc;
        selectDest.textContent = data[attr].selectDest;
        selectDate.textContent = data[attr].selectDate;
        srcBtn.textContent = data[attr].srcBtn;
        fltr.textContent = data[attr].fltr;
        ac.textContent = data[attr].ac;
        nac.textContent = data[attr].nac; 
        bothac.textContent = data[attr].bothac;
        bdt.textContent = data[attr].bdt;
    });
});

var data = {
    "english": 
    {
        "vehicleName": "Bus",
        "login_btn": "Login",
        "selectPlc": "Select Your place",
        "selectDest": "Select Your Destination",
        "selectDate": "Select Date",
        "srcBtn": "Search",
        "fltr": "Filter",
        "ac": "Ac",
        "nac": "Non-Ac",
        "bothac": "Both",
        "bdt": "BDT",
    },

    "bengali": 
    {
        "vehicleName": "বাস",
        "login_btn": "লগিন",
        "selectPlc": "স্থান নির্বাচন করুন",
        "selectDest": "গন্তব্য নির্বাচন করুন",
        "selectDate": "তারিখ নির্বাচন করুন",
        "srcBtn": "খুঁজুন",
        "fltr": "ফিল্টার",
        "ac": "এসি",
        "nac": "নন-এসি",
        "bothac": "দুটোই",
        "bdt": "টাকা",
    }
}