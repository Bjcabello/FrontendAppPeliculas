export function extraerErrores(obj: any): string[] {
  const err = obj.error.errors; 
  let mensajeError: string[] = [];

  for(let llave in err){
    let campo = llave;
    const mensajesConCampo = err[llave].map((mensaje: string) => `${campo}: ${mensaje}`);
    mensajeError = mensajeError.concat(mensajesConCampo);
  }


  return mensajeError;

}