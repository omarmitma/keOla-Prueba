import { CronogramaVoucher } from "./cronogramaVouchers";

export class Cronograma{
    idPayment:number = 0;
    quoteDescription:string = "";
    nextExpiration:string = "";
    dollarExchange:number = 0;
    quoteUsd:number = 0;
    quote:number = 0;
    amortization:number = 0;
    capitalBalance:number = 0;
    porcentaje:number = 0;
    interested:number = 0;
    verif:number = 0;
    obs:string = "";
    isQuoteInitial:number = 0;
    payDate:string = "";
    pts:number = 0;
    numberQuotePay:number = 0;
    idSuscription:number = 0;
    positionOnSchedule:number = 0;
    amortizationUsd:number = 0;
    capitalbalanceUsd:number = 0;
    percentOverdueDetailId:number = 0;
    verifText:string = "";
    totalPay:number = 0;
    totalOverdue:number = 0;
    daysOverdue:number = 0;
    paymentVouchers:CronogramaVoucher[] = [];
}