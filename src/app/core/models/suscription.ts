import { SuscriptionDeta } from "./suscriptionDeta";

export class Suscription{
    suscriptions:SuscriptionDeta[] = [];
    totalScoreActivoCompuesto:number = 0;
    totalScoreActivoResidual:number = 0;
    stateUsuario:number = 0;
    stateNameUsuario:string = "";
}