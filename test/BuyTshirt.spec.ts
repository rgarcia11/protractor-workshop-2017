import { browser } from 'protractor';
import { MenuContentPage } from '../src/page';
import { ProductDetailPage } from '../src/page/ProductDetail.page';
import { ProductAddedModalPage } from '../src/page/ProductAddedModal.page';
import { SummaryStepPage } from '../src/page/SummaryStep.page';
import { SignInStepPage } from '../src/page/SignInStep.page';
import { AddressStepPage } from '../src/page/AddressStep.page';
import { ShippingStepPage } from '../src/page/ShippingStep.page';
import { PaymentStepPage } from '../src/page/PaymentStep.page';
import { BankPaymentPage } from '../src/page/BankPayment.page';
import { OrderResumePage } from '../src/page/OrderResume.page';

describe('Open a browser page', () => {
  it('should open', async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('Buy a t-shirt', () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productDetailPage: ProductDetailPage = new ProductDetailPage();
    const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
    const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  
    it('should select a tshit to buy.', async () => {
      await menuContentPage.goToTShirtMenu();
      await(browser.sleep(3000));
      await productDetailPage.goToTShirtDetailMenu();
      await(browser.sleep(3000));
      await productAddedModalPage.goToAddedItemMenu();
      await(browser.sleep(3000));
      await summaryStepPage.goToSummaryMenu();
    });

    describe('Sign in', () => {
      const signInStepPage: SignInStepPage = new SignInStepPage();
    
      it('should go to menu, fill contents with test data.', async () => {
        await signInStepPage.goToSignInMenu();
        await signInStepPage.fillSignInMenu();
      });

      describe('Address menu', () => {
        const addressStepPage: AddressStepPage = new AddressStepPage();
        const shippingStepPage: ShippingStepPage = new ShippingStepPage();
      
        it('should fill address and shipping address with default values.', async () => {
          await addressStepPage.goToAddressMenu();
          await shippingStepPage.goToShippingMenu();
        });

        describe('Payment and summary', () => {
          const paymentStepPage: PaymentStepPage = new PaymentStepPage();
          const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
          const orderResume: OrderResumePage = new OrderResumePage();
        
          it('should buy the tshirt and receive successful summary.', async () => {
            await paymentStepPage.goToPaymentMenu();
            await bankPaymentPage.goToBankPaymentMenu();
            await orderResume.goToOrderResume();
            await expect(orderResume.getOrderResumeStatus())
                  .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});

