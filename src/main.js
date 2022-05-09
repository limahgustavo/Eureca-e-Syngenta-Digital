var contador = 0;
var valortotallekewood;
var valortotalbridgewood;
var valortotalridgewood;
function getCheapestHotel(input) {
  //DO NOT change the function's name.
  var cliente = input.substring(0, 7);
  var semana1 = input.substring(19, 22);
  var semana2 = input.substring(35, 39);
  var semana3 = input.substring(52, 55);
  var diasemana = ['mon', 'tues', 'wed', 'thur', 'fri'];
  //variavel da media dos valores do hotel
  if(diasemana.includes(semana1)){
    contador++;
  }
  if(diasemana.includes(semana2)){
    contador++;
  }
  if(diasemana.includes(semana3)){
    contador++;
  }
  //Cliente Regular
  if (cliente.toLowerCase() == "regular") {
    var lekewood = {
      nome: 'Lekewood',
      class: 3,
      precosemana: 110,
      precofinalsemana: 90,
    };
    var bridgewood = {
      nome: 'Bridgewood',
      class: 4,
      precosemana: 160,
      precofinalsemana: 60,
    };
    var ridgewood = {
      nome: 'Ridgewood',
      class: 5,
      precosemana: 220,
      precofinalsemana: 150,
    };
    compararhotelmaisbarato(lekewood,bridgewood,ridgewood);
  } else if (cliente.toLowerCase() == "reward"){
    var lekewood = {
      nome: 'Lekewood',
      class: 3,
      precosemana: 80,
      precofinalsemana: 80,
    };
    var bridgewood = {
      nome: 'Bridgewood',
      class: 4,
      precosemana: 110,
      precofinalsemana: 50,
    };
    var ridgewood = {
      nome: 'Ridgewood',
      class: 5,
      precosemana: 100,
      precofinalsemana: 40,
    };
    compararhotelmaisbarato(lekewood,bridgewood,ridgewood);
  }
}
function compararhotelmaisbarato(lekewood,bridgewood,ridgewood){
  if(contador == 1){
  valortotallekewood = lekewood.precosemana+lekewood.precofinalsemana+lekewood.precofinalsemana;
  valortotalbridgewood = bridgewood.precosemana+bridgewood.precofinalsemana+bridgewood.precofinalsemana;
  valortotalridgewood = ridgewood.precosemana+ridgewood.precofinalsemana+ridgewood.precofinalsemana;
  }
  if(contador == 2){
    valortotallekewood = lekewood.precosemana+lekewood.precosemana+lekewood.precofinalsemana;
    valortotalbridgewood = bridgewood.precosemana+bridgewood.precosemana+bridgewood.precofinalsemana;
    valortotalridgewood = ridgewood.precosemana+ridgewood.precosemana+ridgewood.precofinalsemana;
    }
    if(contador == 3){
      valortotallekewood = lekewood.precosemana+lekewood.precosemana+lekewood.precosemana;
      valortotalbridgewood = bridgewood.precosemana+bridgewood.precosemana+bridgewood.precosemana;
      valortotalridgewood = ridgewood.precosemana+ridgewood.precosemana+ridgewood.precosemana;
      }
      else{
        valortotallekewood = lekewood.precofinalsemana+lekewood.precofinalsemana+lekewood.precofinalsemana;
        valortotalbridgewood = bridgewood.precofinalsemana+bridgewood.precofinalsemana+bridgewood.precofinalsemana;
        valortotalridgewood = ridgewood.precofinalsemana+ridgewood.precofinalsemana+ridgewood.precofinalsemana;
        }
    
        // Valor Total
      lekewood.valortotal = valortotallekewood;
      bridgewood.valortotal = valortotalbridgewood;
      ridgewood.valortotal = valortotalridgewood;

      const hoteis = [lekewood, bridgewood, ridgewood];
      var hoteisescolhidos = [];
      var menorvalor = 0;
      hoteis.forEach((hotel,i)=>
      {
        if (i==0){
          menorvalor = hotel.valortotal
          hoteisescolhidos.push(hotel)
          
        }else{

          if(hotel.valortotal<=menorvalor){
            hoteisescolhidos.push(hotel)
            menorvalor = hotel.valortotal; 
            
           }
        
        }
        
      })
        if(hoteisescolhidos.length>1){

          classmenor = 3;
          var nomeclass;
          hoteisescolhidos.forEach((hotel)=>{
          if(hotel.class>classmenor){
            nomeclass = hotel.nome
            
          }
          })
          
          return nomeclass;
          
          
        }else{
      
            console.log(hoteisescolhidos[0].nome);
            return hoteisescolhidos[0].nome;
         }

    }
   getCheapestHotel = 'Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)'
exports.getCheapestHotel = getCheapestHotel;
 