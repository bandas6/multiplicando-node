const fs = require ('fs');

const crearTabla = (base = 5 , listar , maximo) => {

  console.clear();
  
  let salida = "";
  for (let i = 1; i <= maximo; i++) {
    const multiplicacion = base * i;
    salida += `${base} x ${i} = ${multiplicacion}\n`;
  }
    console.log("===============");
    console.log(" Tabla del: " , base);
    console.log("===============");
    if(listar){
      console.log(salida)
    }
    
  fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
  

  return new Promise((resolve , reject)=>{
      (base > 0)
      ? resolve(`tabla-${base}.txt`)
      : reject(`el cararter ${base} no es valido`)
  })

};


module.exports = {
    crearTabla
}

