import Crypto, { CipherHelper } from 'crypto-js';
import { useState } from 'react';
import { SubType } from './../../types';

export function useSymmetricEncrypt(
  method: keyof SubType<Crypto.Hashes, CipherHelper> = 'AES',
  initPassphrase: string = '',
): {
  setPassphrase: React.Dispatch<React.SetStateAction<string>>,
  decrypt: (encText: string) => string,
  encrypt: (text: string) => string,
} {
  const [passphrase, setPassphrase] = useState(initPassphrase);

  function encrypt(text: string) {
    return text ? (Crypto[method].encrypt(text, passphrase)).toString() : '';
  }

  function decrypt(encText: string) {
    try {
      if (!encText) { return ''; }

      const decText = Crypto[method].decrypt(encText, passphrase).toString(Crypto.enc.Utf8);

      if (!decText) { throw new Error('Passphrase is not valid'); }

      return decText;
    } catch (err) {
      return 'Error: Passphrase is not valid';
    }
  }

  return {
    decrypt,
    encrypt,
    setPassphrase,
  };
}
