import { useState } from 'react';

export function useEncryptText(
  encrypt: (text: string) => string,
  decrypt: (text: string) => string,
  initText: string = '',
  initEncryptedText: string = '',
): {
  setEncryptedText: React.Dispatch<React.SetStateAction<string>>,
  setText: React.Dispatch<React.SetStateAction<string>>,
  encryptedText: string,
  text: string,
  toggle: () => void,
} {
  const [encryptedText, setEncryptedText] = useState(initEncryptedText);
  const [text, setText] = useState(initText);

  function toggle() {
    if (text) {
      setEncryptedText(encrypt(text));
      setText('');
    } else {
      setText(decrypt(encryptedText));
      setEncryptedText('');
    }
  }

  return {
    encryptedText,
    setEncryptedText,
    setText,
    text,
    toggle,
  };
}
