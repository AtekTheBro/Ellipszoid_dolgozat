
// File: index.html
// Author: Kriston Attila
// Copyright: 2024, Kriston Attila
// Group: Szoft I/1/N
// Date: 2024-05-30
// Github: https://github.com/atekthebro/
// Licenc: GNU GPL

class Ellipsiod {
    a_tengelyInput?: HTMLInputElement | null;
    b_tengelyInput?: HTMLInputElement | null;
    c_tengelyInput?: HTMLInputElement | null;
    terfogatInput?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;

    constructor() {
        this.bindHtml();
        this.handleEvent();
    }

    bindHtml() {
        this.a_tengelyInput = document.querySelector("#a_tengely");
        this.b_tengelyInput = document.querySelector("#b_tengely");
        this.c_tengelyInput = document.querySelector("#c_tengely");
        this.terfogatInput = document.querySelector("#terfogat");
        this.calcButton = document.querySelector("#calcButton");
    }

    handleEvent() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalc();
        });
    }

    startCalc() {
        const a_tengely = Number(this.a_tengelyInput?.value);
        const b_tengely = Number(this.b_tengelyInput?.value);
        const c_tengely = Number(this.c_tengelyInput?.value);
        const terfogat = this.calcterfogat(a_tengely,b_tengely,c_tengely);
        this.rederResult(terfogat);
    }
    calcterfogat(a_tengely: number,b_tengely: number,c_tengely: number): number {
        return 4/3 * Math.PI * a_tengely * b_tengely *c_tengely;
    }
    rederResult(terfogat: number) {
        if(this.terfogatInput) {
            this.terfogatInput.value = String(terfogat);
        }
               
    }
}

new Ellipsiod();