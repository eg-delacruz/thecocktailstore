import { ProductDetailUI } from "./ui/productDetailUI.js";
import { cartUI } from "./ui/cartUI.js";

document.addEventListener("DOMContentLoaded", () => {
  const productDetailUI = new ProductDetailUI();

  window.cartUIInstance = cartUI;

  // Google Analytics
  if (productDetailUI.product) {
    const product = productDetailUI.product;
    const items = [{
      'item_id': product.id,
      'item_name': product.name,
      'item_category': product.category,
      'price': product.price,
      quantity: 1
    }];

    dataLayer.push({
      'event': 'view_item',
      'ecommerce': {
        'items': items
      }
    });
  }
});
