import { Observable } from 'tns-core-modules/data/observable';
import { CardData, CardEncryption } from 'nativescript-adyen-cse-nativescript';

export class HelloWorldModel extends Observable {
  public message: string;
  //private adyenCseNativescript: AdyenCseNativescript;

  constructor() {
    super();

    //this.adyenCseNativescript = new AdyenCseNativescript();
    //this.message = this.adyenCseNativescript.message;
    const data: CardData = {
      cvc: '737',
      expiryMonth: '10',
      expiryYear: '2020',
      generationTime: `${new Date()}`,
      holderName: 'John Doe',
      number: '4111111111111111'
    };

    let encryption = new CardEncryption('10001|A7D3B7ED2A8A4B7E74ADEC9040B9A3959E890AFEABC1721939DBA0CE968765A6A21101CC8A2B59A85C696B6903DA13A58AE34947AF19668A671052D54DAF023BFF6E81958F5088814726EED58D371E0500395E15F00147CE8A553CB7AB21066D33056178EFA2FDC39BC331FF7078119BEDF010F341233AE61CB9CA33A3EE206400EEB1AFC1441E9AB87FC764CF1AECA9EBB26647C0FADF468030D0F025E0D89EA13E2DD24E175E0974F8EB195E860D35B8EF5876E2479D36A7931D8D927A92A2213EA530D022E6101393E3770121E86E108E19542ABC5E13E866C16802A27BB955B0BFCF0D8414966CAA2B9C96F8712864D4FEA7BCEECE544A6BE619D63E3913');
    let encrypted = encryption.encrypt(data);

    console.log('SUCCESS ' + encrypted);
  }
}
