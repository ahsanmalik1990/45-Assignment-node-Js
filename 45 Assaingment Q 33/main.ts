// Quistion 33
let Mynumber =[1,2,3,4,5,6,7,8,9];

//using for loop
for (let i = 0;i < Mynumber.length;i++){
    if(Mynumber[i] ==1){
        console.log(`$ {Mynumber[i]}1st`);
    }else  if(Mynumber[i] ==2){
        console.log(`$ {Mynumber[i]}2nd`);
    }else if(Mynumber[i] ==3){
        console.log(`$ {Mynumber[i]}3rd`);
    }else if(Mynumber[i] > 4 &&
        Mynumber[i] <=  9 ) {
        console.log(`$ {Mynumber[i]}4th`);
        }
}