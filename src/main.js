function getCheapestHotel(input) {
  //DO NOT change the function's name.

  // return "Cheapest hotel name"


  var cliente = input.substring(0, 7);
  var semana1 = input.substring(19, 22);
  var semana2 = input.substring(35, 39);
  var semana3 = input.substring(52, 55);
  var semana = {
    diasemana: ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun',]
  };
  
  //variavel da media dos valores do hotel
  var diainicio = 0;

    //Cliente Regular
  if (cliente.toLowerCase() == "regular") {
    var lakewood = {
      class: 3,
      precosemana: 110,
      precofinalsemana: 90,
    };
    var bridgewood = {
      class: 4,
      precosemana: 160,
      precofinalsemana: 60,
    };
    var ridgewood = {
      class: 5,
      precosemana: 220,
      precofinalsemana: 150,
    };

    // Primeira semana
    if (semana1 == semana.diasemana[0],[1],[2],[3],[4]) {
      diainicio++;
    };
    // Segunda semana
    if (semana2 == semana.diasemana[0],[1],[2],[3],[4]) {
      diainicio++;
    };
    //Terceira semana
    if (semana3 == semana.diasemana[0],[1],[2],[3],[4]) {
      diainicio++;
    };
        if(diainicio == 1){
          console.log('Bridgewood')
        }else if(diainicio == 2){
          console.log('Lakewood')
        }else if(diainicio == 3){
          console.log('Lakewood')
        }else{
          console.log('Bridgewood')
        };

        //Cliente Reward
  } else if (cliente.toLowerCase() == "reward"){
    var lakewood = {
      class: 3,
      precosemana: 80,
      precofinalsemana: 80,
    };
    var bridgewood = {
      class: 4,
      precosemana: 110,
      precofinalsemana: 50,
    };
    var ridgewood = {
      class: 5,
      precosemana: 100,
      precofinalsemana: 40,
    };

     // Primeira semana
     if (semana1 == semana.diasemana[0],[1],[2],[3],[4]) {
      diainicio++;
    };
    // Segunda semana
    if (semana2 == semana.diasemana[0],[1],[2],[3],[4]) {
      diainicio++;
    };
    //Terceira semana
    if (semana3 == semana.diasemana[0],[1],[2],[3],[4]) {
      diainicio++;
    };
        if(diainicio == 1){
          console.log('Ridgewood')
        }else if(diainicio == 2){
          console.log('Ridgewood')
        }else if(diainicio == 3){
          console.log('Lakewood')
        }else{
          console.log('Ridgewood')
        };
  };  

}
exports.getCheapestHotel = getCheapestHotel;
