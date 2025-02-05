
import * as jwt from 'jsonwebtoken';
import { AuthenticationType, EmbededNearpay, Environments, Locale } from '@nearpaydev/react-native-nearpay-sdk';



export function nearpay(_type: AuthenticationType, _val: any) {
   return new EmbededNearpay({
        authtype: AuthenticationType.login, //[Required] the user auth type
        authvalue: _val, //[Required] the auth value
        environment: Environments.sandbox, // [Required] the payment environment
        locale: Locale.default, // [Optional]
    })
};
async function purchase(_in: EmbededNearpay ) {
    await _in.purchase({
        amount: 100, // [Required] ammount you want to set "Represents 1.00 SAR".
        transactionId: '', //[Optional] speacify the transaction uuid for later retreval
        customerReferenceNumber: '', // [Optional] referance nuber for customer use only
        enableReceiptUi: true, // [Optional] show the reciept in ui
        enableReversalUi: false, //[Optional] enable reversal of transaction from ui
        finishTimeout: 30, //[Optional] finish timeout in seconds
        enableUiDismiss: true, //[Optional] the ui is dimissible
    }).then((response) => {
        console.log(response.receipts)
    });
}