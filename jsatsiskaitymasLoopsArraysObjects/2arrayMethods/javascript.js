const skaiciai=[5, 4, 2, 8, 3, 4, 5];
function suma(array){
    console.log((array.reduce((el, val)=>el+val,0)));
}
suma(skaiciai);