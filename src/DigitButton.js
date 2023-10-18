import React from 'react';

function DigitButton({ dispatch, digit }) {
  // Fonction appelée lorsqu'on clique sur le bouton
  const handleButtonClick = () => {
    dispatch({ type: 'add-digit', payload: { digit } });
  };

  return (
    <button onClick={handleButtonClick}>
      {digit}
    </button>
  );
}

export default DigitButton;
