let ogrenciler = ["Ben", "Jenny", "Michael", "Chloe", "Timmy"];
let komsular = ["Patrick", "AnnMarie", "Alisol", "Walten"]
let sayi=[1,2,3]
let sayi1= true

ogrenciler.push("Max");
function whoIsWashing(param) {
    let arrLenght=param.length;
    const random = param[Math.floor(Math.random()*arrLenght)];
    console.log(`${random} is going to wash dishes today`);
}
whoIsWashing(ogrenciler);
whoIsWashing(komsular);
whoIsWashing(sayi)
whoIsWashing(sayi1)



Hocam 21:30 a kadar mola verdik
