import React, { useReducer } from 'react';
import './App.scss';
import { reducer } from './reducer';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';

function App() {
  // Utilisation de la déconstruction pour extraire currentOperand et dispatch
  const [{ currentOperand }, dispatch] = useReducer(reducer, { currentOperand: 0 });

  return (
    <div className="iphone-x">
      <div className="calculator-app">
        <div className="output">{currentOperand.toString()}</div> {/* Affichage de l'opérande courante */}
        <button style={{ opacity: 0 }}></button>
        <button className='top' onClick={() => dispatch({ type: 'clear' })}>C</button>
        <OperationButton operation="%" dispatch={dispatch} />
        <button className='top' onClick={() => dispatch({ type: 'remove' })}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-backspace" width="48" height="48" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5z"></path>
            <path d="M12 10l4 4m0 -4l-4 4"></path>
          </svg>
        </button>

        {/* Utilisation de composants pour les boutons de chiffres et d'opérations */}
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton operation="x" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <OperationButton operation="÷" dispatch={dispatch} />
        <button className="digit" onClick={() => dispatch({ type: 'result' })}>=</button>
      </div>
    </div>
  );
}

export default App;
