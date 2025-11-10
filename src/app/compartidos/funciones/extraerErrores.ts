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

export function extraerErroresIdentity(obj: any): string[] {
  const mensajesDeError: string[] = [];

  if (obj.error?.errores) {
    return obj.error.errores;
  }

  if (Array.isArray(obj.error)) {
    for (let i = 0; i < obj.error.length; i++) {
      const elemento = obj.error[i];
      if (elemento.description) {
        mensajesDeError.push(elemento.description);
      }
    }
  }

  return mensajesDeError;
}
