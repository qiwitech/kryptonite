import Crypto, { WordArray } from 'crypto-js';
import { useState } from 'react';
import { SubType } from './../../types';

export function useTextToHash(
  method: keyof SubType<CryptoJS.Hashes, HashFunction> = 'SHA256',
  initText: string = '',
): [string, (text: string) => void] {
  const [hash, setHash] = useState(initText);

  function textToHash(text: string) {
    setHash(text ? Crypto[method](text).toString() : '');
  }

  return [hash, textToHash];
}

type HashFunction = ((msg: string) => WordArray);
