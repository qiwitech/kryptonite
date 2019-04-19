// FIXME: add definitions
// @ts-ignore
import { JSEncrypt } from 'jsencrypt';
import { useState } from 'react';

const crypt = new JSEncrypt();

type KeySize = 512 | 1024 | 2048 | 4096;

export function useAsymmetricEncrypt(): {
  setPublicKey: React.Dispatch<React.SetStateAction<string>>,
  setPrivateKey: React.Dispatch<React.SetStateAction<string>>,
  decrypt: (encText: string) => string,
  encrypt: (text: string) => string,
  generateKeys: (keySize: KeySize) => Promise<[string, string]>,
  publicKey: string,
  privateKey: string,
} {
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  function encrypt(text: string) {
    crypt.setPublicKey(publicKey);
    return crypt.encrypt(text) || (text ? 'Error: Public key is not valid' : '');
  }

  function decrypt(encryptedText: string) {
    crypt.setPrivateKey(privateKey);
    return crypt.decrypt(encryptedText) || (encryptedText ? 'Error: Private key is not valid' : '');
  }

  function generateKeys(keySize: KeySize): Promise<[string, string]> {
    return new Promise((resolve) => {
      const cryptKey = new JSEncrypt({ default_key_size: keySize });

      cryptKey.getKey(() => {
        resolve([ cryptKey.getPublicKey(), cryptKey.getPrivateKey() ]);
      });
    });
  }

  return {
    decrypt,
    encrypt,
    generateKeys,
    privateKey,
    publicKey,
    setPrivateKey,
    setPublicKey,
  };
}
