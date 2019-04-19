import { Flex } from '@rebass/grid';
import React from 'react';
import { Button, Textarea } from './../../atoms';

interface IEncryptTextProps {
  onChangeText: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeEncryptedText: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  text: string;
  encryptedText: string;
  toggle: () => void;
}

export function EncryptText({
  onChangeText,
  onChangeEncryptedText,
  text, encryptedText,
  toggle,
}: IEncryptTextProps) {
  return (
    <>
      <Flex flexDirection="column" p={20} pt={0}>
        <Textarea
          placeholder="Enter your text here"
          onChange={onChangeText}
          value={text}
        />
      </Flex>
      <Flex flexDirection="column" p={20} pt={0}>
        <Button onClick={toggle}>Encrypt/Decrypt</Button>
      </Flex>
      <Flex flexDirection="column" p={20} pt={0}>
        <Textarea
          placeholder="Encrypted text"
          onChange={onChangeEncryptedText}
          value={encryptedText}
        />
      </Flex>
    </>
  );
}
