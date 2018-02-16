import { CardData } from './card-data';
import { CardEncryptionCommon } from './card-encryption.common';

export class CardEncryption extends CardEncryptionCommon {
    public encrypt(card: CardData): string {
        throw {
            message: 'NotImplemented'
        };
    }
}
