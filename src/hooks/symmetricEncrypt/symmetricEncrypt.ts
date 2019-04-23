import Crypto, { CipherHelper } from 'crypto-js';
import { useState } from 'react';
import { SubType } from './../../types';

export type CipherAlgorithm = keyof SubType<Crypto.Hashes, CipherHelper>;

const cryphers: CipherAlgorithm[] = [ 'AES', 'DES', 'TripleDES', 'RC4', 'RC4Drop', 'Rabbit', 'RabbitLegacy' ];

export function useSymmetricEncrypt(
  initAlgorithmName: CipherAlgorithm = cryphers[0],
  initPassphrase: string = '',
): {
  cryphers: CipherAlgorithm[],
  decrypt: (encText: string) => string,
  encrypt: (text: string) => string,
  setCrypherAlgorithm: React.Dispatch<React.SetStateAction<CipherAlgorithm>>,
  setPassphrase: React.Dispatch<React.SetStateAction<string>>,
} {
  const [ algorithmName, setCrypherAlgorithm ] = useState(initAlgorithmName);
  const [ passphrase, setPassphrase ] = useState(initPassphrase);

  function encrypt(text: string) {
    return text ? (Crypto[algorithmName].encrypt(text, passphrase)).toString() : '';
  }

  function decrypt(encText: string) {
    try {
      if (!encText) { return ''; }

      const decText = Crypto[algorithmName]
        .decrypt(encText, passphrase)
        .toString(Crypto.enc.Utf8);

      if (!decText) { throw new Error('Passphrase is not valid'); }

      return decText;
    } catch (err) {
      return 'Error: Passphrase is not valid';
    }
  }

  return {
    cryphers,
    decrypt,
    encrypt,
    setCrypherAlgorithm,
    setPassphrase,
  };
}
