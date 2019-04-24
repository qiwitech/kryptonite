import { Flex } from '@rebass/grid';
import React, { useState } from 'react';
import { useAsymmetricEncrypt, useEncryptText } from './../../../hooks';
import { extractValueFor } from './../../../utils';
import { Block, Button, Textarea } from './../../atoms';
import { EncryptText } from './../EncryptText';

export function AsymmetryEncryptText() {
  const keySize = 1024;

  const {
    setPublicKey, setPrivateKey,
    publicKey, privateKey,
    encrypt, decrypt,
    generateKeys,
  } = useAsymmetricEncrypt();

  const { setEncryptedText, setText, encryptedText, text, toggle } = useEncryptText(encrypt, decrypt);
  const [ isDisabled, setIsDisabled ] = useState(false);

  const onChangeEncryptedText = extractValueFor(setEncryptedText);
  const onChangePrivateKey = extractValueFor(setPrivateKey);
  const onChangePublicKey = extractValueFor(setPublicKey);
  const onChangeText = extractValueFor(setText);

  async function onClickGenerate() {
    setPublicKey('Generate public key...');
    setPrivateKey('Generate private key...');
    setIsDisabled(true);

    const [publicK, privateK] = await generateKeys(keySize);

    setPublicKey(publicK);
    setPrivateKey(privateK);
    setIsDisabled(false);
  }

  return (
    <Flex flexDirection="column" p={20}>
      <Block>
        <Flex p={20}>
          <Flex flexDirection="column" flex={1} mr={20}>
            <Textarea
              placeholder="Public key"
              onChange={onChangePublicKey}
              disabled={isDisabled}
              value={publicKey}
            />
          </Flex>
          <Flex flexDirection="column" flex={1}>
            <Textarea
              placeholder="Your private key"
              onChange={onChangePrivateKey}
              disabled={isDisabled}
              value={privateKey}
            />
          </Flex>
        </Flex>
        <Flex flexDirection="column" p={20} pt={0}>
          <Button onClick={onClickGenerate}>Generate key</Button>
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
      </Block>
    </Flex>
  );
}
