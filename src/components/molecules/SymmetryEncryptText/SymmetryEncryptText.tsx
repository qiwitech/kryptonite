import { Flex } from '@rebass/grid';
import React from 'react';
import { useEncryptText, useSymmetricEncrypt } from './../../../hooks';
import { extractValueFor } from './../../../utils';
import { Input } from './../../atoms';
import { EncryptText } from './../EncryptText';

export function SymmetryEncryptText() {
  const { setPassphrase, encrypt, decrypt } = useSymmetricEncrypt('AES');

  const {
    setEncryptedText, setText,
    encryptedText, text, toggle,
  } = useEncryptText(encrypt, decrypt);

  const onChangePass = extractValueFor(setPassphrase);
  const onChangeText = extractValueFor(setText);
  const onChangeEncryptedText = extractValueFor(setEncryptedText);

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" p={20}>
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
