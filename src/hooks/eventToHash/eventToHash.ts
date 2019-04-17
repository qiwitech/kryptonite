import Crypto, { WordArray } from 'crypto-js';
import React, { useState } from 'react';
import { SubType } from './../../types';

export function useEventToHash(
  method: keyof SubType<CryptoJS.Hashes, HashFunction> = 'SHA256',
  initMessage: string = '',
): [string, (e: React.FormEvent<any>) => void] {
  const [hash, setHash] = useState(initMessage);

  function onChange(e: React.FormEvent<HTMLTextAreaElement>) {
    const msg = e.currentTarget.value;
    setHash(msg ? Crypto[method](msg).toString() : '');
  }

  return [hash, onChange];
}

type HashFunction = ((msg: string) => WordArray);
