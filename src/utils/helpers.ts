export const isKeyboardCodeAllowed = (code: string) => {
  return (
    code.startsWith("Key") ||
    code.startsWith("Digit") ||
    code === "Backspace" ||
    code === "Space" ||
    ["Minus", "Equal", "BracketLeft", "BracketRight", "Backslash", "Semicolon", "Quote", "Comma", "Period", "Slash", "Backquote"].includes(code)
  );
};

export const countErrors = (actual: string, expected: string) => {
    const expectedCharacters = expected.split("");
  
    return expectedCharacters.reduce((errors, expectedChar, i) => {
      const actualChar = actual[i];
      if (actualChar !== expectedChar) {
        errors++;
      }
      return errors;
    }, 0);
  };