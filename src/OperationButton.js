import React from 'react';

function OperationButton({ dispatch, operation }) {
  // Fonction appelée lorsqu'on clique sur le bouton
  const handleButtonClick = () => {
    dispatch({ type: 'add-operation', payload: { operation } });
  };

  return (
    <button className='operation' onClick={handleButtonClick}>
      {operation}
    </button>
  );
}

export default OperationButton;
