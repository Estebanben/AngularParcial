export class Paciente {
  nombre: string;
  edad: number;
  diagnostico:string;
  historial:Array<Map<string,string>>;
  
  public constructor(nombre:string,edad:number,diagnostico:string,historial:Array<Map<string,string>>) {
    this.nombre = nombre;
    this.edad = edad;
    this.diagnostico = diagnostico;
    this.historial = historial;
  }
}