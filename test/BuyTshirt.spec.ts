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

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productDetailPage: ProductDetailPage = new ProductDetailPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderResume: OrderResumePage = new OrderResumePage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');

    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productDetailPage.goToTShirtDetailMenu();
    await(browser.sleep(3000));
    await productAddedModalPage.goToAddedItemMenu();
    await(browser.sleep(3000));
    await summaryStepPage.goToSummaryMenu();
    await(browser.sleep(3000));
    await signInStepPage.goToSignInMenu();
    await(browser.sleep(3000));
    await signInStepPage.fillSignInMenu();
    await(browser.sleep(3000));
    await addressStepPage.goToAddressMenu();
    await(browser.sleep(3000));
    await shippingStepPage.goToShippingMenu();
    await(browser.sleep(3000));
    await paymentStepPage.goToPaymentMenu();
    await(browser.sleep(3000));
    await bankPaymentPage.goToBankPaymentMenu();
    await(browser.sleep(3000));
    await orderResume.goToOrderResume();
    await(browser.sleep(3000));
    await expect(orderResume.getOrderResumeStatus())
          .toBe('Your order on My Store is complete.');
  });
});
