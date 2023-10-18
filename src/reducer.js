const reducer = (state, action) => {
    switch (action.type) {
      case 'add-digit':
        return {
          ...state,
          currentOperand: handleAddDigit(state.currentOperand, action.payload.digit),
        };
  
      case 'add-operation':
        return {
          ...state,
          currentOperand: handleAddOperation(state.currentOperand, action.payload.operation),
        };
  
      case 'result':
        return {
          ...state,
          currentOperand: handleResult(state.currentOperand),
        };
  
      case 'remove':
        return {
          ...state,
          currentOperand: handleRemove(state.currentOperand),
        };
  
      case 'clear':
        return {
          currentOperand: 0, // Modification de '0' à 0
        };
  
      default:
        return state;
    }
  };
  
  // Fonction pour gérer l'ajout d'un chiffre
  const handleAddDigit = (currentOperand, digit) => {
    if (digit === '0' && currentOperand === 0) { // Modification de '0' à 0
      return currentOperand.toString(); // Conversion en chaîne de caractères
    }
    if (digit === '.' && currentOperand.includes('.')) {
      return currentOperand;
    }
    return `${currentOperand || ''}${digit}`;
  };
  
  // Fonction pour gérer l'ajout d'une opération
  const handleAddOperation = (currentOperand, operation) => {
    if (currentOperand === 0 || isNaN(currentOperand[currentOperand.length - 1])) { // Modification de null à 0
      return currentOperand.toString(); // Conversion en chaîne de caractères
    }
    // Remplace "x" par "*" et "÷" par "/"
    operation = operation.replace('x', '*').replace('÷', '/');
  
    return `${currentOperand || ''}${operation}`;
  };
  
  // Fonction pour gérer le calcul du résultat
  const handleResult = (currentOperand) => {
    try {
      const result = eval(currentOperand);
      return isNaN(result) ? 'Error' : result.toString();
    } catch (error) {
      console.error('Error in handleResult:', error);
      return currentOperand;
    }
  };
  
  // Fonction pour gérer la suppression d'un caractère
  const handleRemove = (currentOperand) => {
    if (currentOperand === 0) { // Modification de '0' à 0
      return currentOperand.toString(); // Conversion en chaîne de caractères
    }
    const trimmedOperand = currentOperand.trim(); // Supprimer les espaces en début et en fin d'opération
  
  if (trimmedOperand === '0') {
    return currentOperand; // Aucune modification si l'opération est simplement "0"
  }
  
  return trimmedOperand.slice(0, -1);
};
  
  export { reducer };
  