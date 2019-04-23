import { Flex } from '@rebass/grid';
import React from 'react';
import { CipherAlgorithm, useEncryptText, useSymmetricEncrypt } from './../../../hooks';
import { extractValueFor } from './../../../utils';
import { Input, Select } from './../../atoms';
import { EncryptText } from './../EncryptText';

export function SymmetryEncryptText() {
  const { setPassphrase, setCrypherAlgorithm, encrypt, decrypt, cryphers } = useSymmetricEncrypt();
  const { setEncryptedText, setText, encryptedText, text, toggle } = useEncryptText(encrypt, decrypt);

  const onChangePass = extractValueFor(setPassphrase);
  const onChangeText = extractValueFor(setText);
  const onChangeEncryptedText = extractValueFor(setEncryptedText);

  function onChangeCrypherAlgorithm(e: React.FormEvent<HTMLSelectElement>) {
    const crypherAlgorithm: CipherAlgorithm = e.currentTarget.value as CipherAlgorithm;
    if (!cryphers.includes(crypherAlgorithm)) { return; }
    setCrypherAlgorithm(crypherAlgorithm);
  }

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" p={20}>
        <Select onChange={onChangeCrypherAlgorithm}>
          {cryphers.map((crypherAlgorithm) => <option key={crypherAlgorithm}>{crypherAlgorithm}</option>)}
        </Select>
      </Flex>
      <Flex flexDirection="column" px={20} pb={20}>
        <Input placeholder="Passphrase" onChange={onChangePass} />
      </Flex>
      <EncryptText
        {...{
          encryptedText,
          onChangeEncryptedText,
          onChangeText,
          text,
          toggle,
        }}
      />
    </Flex>
  );
}
