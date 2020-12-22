let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Jeff';
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while(true) {}
}

generateError('Error occurred!', 500);
