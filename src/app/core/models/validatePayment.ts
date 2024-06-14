import { ReasonRejection } from "./reasonRejection";

export class ValidatePayment{
    idSuscription:number = 0;
    listIdPaymentsValidate:number[] = [];
    isAcceptedPayment:number = 0;
    reasonRejection:ReasonRejection = new ReasonRejection();
}