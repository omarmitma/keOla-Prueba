import { Package } from "./package";
import { PackageDeta } from "./packageDeta";

export class SuscriptionDeta{
    id:number = 0;
    idUser:number = 0;
    package:Package = new Package();
    packageDetailResponse:PackageDeta = new PackageDeta();
    creationDate:string = "";
    observation:string = "";
    status:number = 0;
    discountPriceUpgrade:number = 0;
    payment:number = 0;
    statusName:string = "";
    schedule:number = 0;
    datePendingFee:number = 0;
    pendingFee:number = 0;
    descriptionPendingFee:string = "";
    lastDatePaidFee:string = "";
    quotaDescription:string = "";
    scoreActiveCompuesto:number = 0;
    scoreActiveResidual:number = 0;
    nextExpiration:number = 0;
    allowGracePeriod:boolean = false;
    countSuscriptionByFamily:number = 0;
    typeShares:string = "";
    codeComany:string = "";
    beneficiaries:string = "";
    numberGuests:number = 0;
}