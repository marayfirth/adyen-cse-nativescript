import { CardData } from './card-data';
import { CardEncryptionCommon } from './card-encryption.common';

declare var adyen: any;

export class CardEncryption extends CardEncryptionCommon {
    public encrypt(card: CardData): string {
        let nativeCard = new adyen.com.adyencse.pojo.Card.Builder()
            .setHolderName(card.holderName)
            .setCvc(card.cvc)
            .setExpiryMonth(card.expiryMonth)
            .setExpiryYear(card.expiryYear)
            .setGenerationTime(new java.util.Date())
            .setNumber(card.number)
            .build();

        return nativeCard.serialize(this.key);
    }
}