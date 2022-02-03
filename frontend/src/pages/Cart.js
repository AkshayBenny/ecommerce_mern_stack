import React from 'react';

function Cart() {
  return (
    <div>
      <h1>Your bag</h1>
      <button>Continue shopping</button>
      <button>Checkout now</button>
      <div>
        <img src='' alt='' />
        <div>
          <h1>Product:</h1>
          <p>ID:</p>
          <p>Color</p>
          <p>Size</p>
        </div>
        <div>
          <div>
            <input type='text' value='2' />
          </div>
          <div>
            <p>Price</p>
          </div>
        </div>
      </div>
      <div>
        <h1>Order summary</h1>
        <p>Subtotal</p>
        <p>Estimated shipping cost</p>
        <p>Shipping Discount</p>
        <p>total</p>
        <button>Checkout now</button>
      </div>
    </div>
  );
}

export default Cart;
