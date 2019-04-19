import { Flex } from '@rebass/grid';
import React from 'react';
import { useTextToHash } from './../../../hooks';
import { Input, Textarea } from './../../atoms';

export function TextHash() {
  const method = 'SHA256';
  const [ hash, textToHash ] = useTextToHash(method);

  function onChange(e: React.FormEvent<HTMLTextAreaElement>) {
    textToHash(e.currentTarget.value);
  }

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" p={20}>
        <Textarea placeholder="Enter your text here"  onChange={onChange} />
      </Flex>
      <Flex flexDirection="column" px={20} pb={20}>
        <Input placeholder={`${method} hash of your text`} value={hash} readOnly={true} />
      </Flex>
    </Flex>
  );
}
