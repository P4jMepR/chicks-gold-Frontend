import React from 'react';
import './Payments.css';

const Payments = () => {
  const paymentMethods = [
    {
      name: 'Visa',
      logo: 'https://chicksgold.com/payment-methods/visa.svg'
    },
    {
      name: 'Mastercard',
      logo: 'https://chicksgold.com/payment-methods/mastercard.svg'
    },
    {
      name: 'American Express',
      logo: 'https://chicksgold.com/payment-methods/amex.svg'
    },
    {
      name: 'Skrill',
      logo: 'https://chicksgold.com/payment-methods/skrill.svg'
    },
    {
      name: 'Bitcoin Cash',
      logo: 'https://chicksgold.com/payment-methods/bitcoin-cash.svg'
    },
    {
      name: 'Ethereum',
      logo: 'https://chicksgold.com/payment-methods/ethereum.svg'
    },
    {
      name: 'Bitcoin',
      logo: 'https://chicksgold.com/payment-methods/bitcoin.svg'
    },
    {
      name: 'Litecoin',
      logo: 'https://chicksgold.com/payment-methods/litecoin.svg'
    }
  ];

  return (
    <div className="payments-container">
      <div className="payment-methods">
        {paymentMethods.map((method, index) => (
          <img 
            key={index}
            src={method.logo}
            alt={`${method.name} payment method`}
            className={index > 3 ? 'crypto-logo' : 'payment-logo'}
          />
        ))}
        <span className="additional-methods">and 50+ more</span>
      </div>
    </div>
  );
};

export default Payments; 