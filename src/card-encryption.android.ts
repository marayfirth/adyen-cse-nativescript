import { CardData } from './card-data';

declare var adyen: any;

export class CardEncryption {
    constructor(private key: string) {}

    public encrypt(card: CardData): string {
        try {
            //console.log(new Date());

            //let ah = new AHNotification();
            let nativeCard = new adyen.com.adyencse.pojo.Card.Builder()
                .setHolderName(card.holderName)
                .setCvc(card.cvc)
                .setExpiryMonth(card.expiryMonth)
                .setExpiryYear(card.expiryYear)
                .setGenerationTime(new java.util.Date())
                .setNumber(card.number)
                .build();

            return nativeCard.serialize(this.key);
            //let encrypter = new adyen.com.adyencse.encrypter.ClientSideEncrypter('test');
            //console.log(JSON.stringify(encrypter));
            // let builder = new adyen.com.adyencse.Card.Builder();
            //console.log('SUCCESS ' + JSON.stringify(encryptedCard));
        } catch (e) {
            console.log('ERROR INSIDE ' + e);
            throw e;
        }
    }
}