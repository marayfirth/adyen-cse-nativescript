import { Common } from './adyen-cse-nativescript.common';

declare var adyen: any;
declare let com: any;
//const ClientSideEncrypter: any = adyen.com.adyencse.encrypter.ClientSideEncrypter;
//let AHNotification = com.aurelhubert.ahbottomnavigation.notification.AHNotification;

//let Card = adyen.com.adyencse.pojo.Card;

export class AdyenCseNativescript extends Common {
    createCard(): void {
        console.log('TEST INSIDE');
        //let card = adyen.com.adyencse.pojo.Card.Builder();
        let publicKey  = '10001|A7D3B7ED2A8A4B7E74ADEC9040B9A3959E890AFEABC1721939DBA0CE968765A6A21101CC8A2B59A85C696B6903DA13A58AE34947AF19668A671052D54DAF023BFF6E81958F5088814726EED58D371E0500395E15F00147CE8A553CB7AB21066D33056178EFA2FDC39BC331FF7078119BEDF010F341233AE61CB9CA33A3EE206400EEB1AFC1441E9AB87FC764CF1AECA9EBB26647C0FADF468030D0F025E0D89EA13E2DD24E175E0974F8EB195E860D35B8EF5876E2479D36A7931D8D927A92A2213EA530D022E6101393E3770121E86E108E19542ABC5E13E866C16802A27BB955B0BFCF0D8414966CAA2B9C96F8712864D4FEA7BCEECE544A6BE619D63E3913';
        try {
            //console.log(new Date());

            //let ah = new AHNotification();
            let card = new adyen.com.adyencse.pojo.Card.Builder()
                .setHolderName('John Doe')
                .setCvc('737')
                .setExpiryMonth('10')
                .setExpiryYear('2020')
                .setGenerationTime(new java.util.Date())
                .setNumber('4111111111111111')
                .build();

            let encryptedCard = card.serialize(publicKey);
            //let encrypter = new adyen.com.adyencse.encrypter.ClientSideEncrypter('test');
            //console.log(JSON.stringify(encrypter));
            // let builder = new adyen.com.adyencse.Card.Builder();
            console.log('SUCCESS ' + JSON.stringify(encryptedCard));
        } catch (e) {
            console.log('ERROR INSIDE ' + e);
        }
    }
}
