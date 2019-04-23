import Crypto, { WordArray } from 'crypto-js';
import { useState } from 'react';
import { SubType } from './../../types';

export type HashMethod = keyof SubType<CryptoJS.Hashes, HashFunction>;
export type HashFunction = ((msg: string) => WordArray);

const hashes: HashMethod[] = ['MD5', 'SHA1', 'SHA256', 'SHA224', 'SHA512', 'SHA384', 'SHA3', 'RIPEMD160'];

export function useTextToHash(
  initMethod: HashMethod = hashes[0],
  initText: string = '',
): {
  text: string,
  hash: string,
  method: string,
  hashes: HashMethod[];
  setText: React.Dispatch<React.SetStateAction<string>>;
  setMethod: React.Dispatch<React.SetStateAction<HashMethod>>;
} {
  const [ text, setText ] = useState(initText);
  const [ method, setMethod ] = useState<HashMethod>(initMethod);
  const hash = text ? (Crypto[method](text).toString()) : '';
  return { text, method, hashes, setText, setMethod, hash };
}
