import React from 'react';
import './Payments.css';

const Payments = () => {
  const regularPayments = [
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
    }
  ];

  const cryptoPayments = [
    {
      name: 'Bitcoin Cash',
      logo: 'https://chicks-currencies.s3.amazonaws.com/1c08ddf1-b0d1-4476-930b-676f621b036c'
    },
    {
      name: 'Ethereum',
      logo: 'https://chicks-currencies.s3.amazonaws.com/eabeff84-a529-4c2e-ae18-9f2b983728e9'
    },
    {
      name: 'Bitcoin',
      logo: 'https://chicks-currencies.s3.amazonaws.com/17d927b5-c718-4e5d-8e3e-d7f943c3bfc3'
    },
    {
      name: 'Litecoin',
      logo: 'https://chicks-currencies.s3.amazonaws.com/9d56a727-bb32-436d-82aa-ec58b64342fe'
    }
  ];

  return (
    <div className="payments-container">
      <div className="payment-methods">
        <div className="regular-payments">
          {regularPayments.map((method, index) => (
            <img 
              key={index}
              src={method.logo}
              alt={`${method.name} payment method`}
              className="payment-logo"
            />
          ))}
        </div>
        <div className="crypto-payments">
          {cryptoPayments.map((method, index) => (
            <img 
              key={index}
              src={method.logo}
              alt={`${method.name} payment method`}
              className="crypto-logo"
            />
          ))}
        </div>
        <span className="additional-methods">and 50+ more</span>
      </div>
    </div>
  );
};

export default Payments; 