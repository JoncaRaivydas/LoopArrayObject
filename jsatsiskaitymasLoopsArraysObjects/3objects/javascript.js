const filmas ={
    "pavadinimas": "Black Adam",
    "rezisierius": "Jaume Collet-Serra",
    "zanras":[
        "Veiksmo",
        "Superheroju filmas",
        "Moksline fantastika",
        "Itempto siuzeto filmas",
        "Nuotykiu",
        "Drama"
    ],
    "metai":2022
}
let sieMetai=new Date().getFullYear();
let filmoMetai=filmas.metai;
console.log(`Filmas '${filmas.pavadinimas}' yra ${sieMetai-filmoMetai}-u metu senumo`);