import { Flex } from '@rebass/grid';
import React from 'react';
import { HashMethod, useTextToHash } from './../../../hooks';
import { extractValueFor } from './../../../utils';
import { Block, Select, Textarea } from './../../atoms';

export function TextHash() {
  const { method, text, hash, hashes, setText, setMethod } = useTextToHash();

  const onChangeText = extractValueFor(setText);

  function onChangeHashMethod(e: React.FormEvent<HTMLSelectElement>) {
    const hashMethod: HashMethod = e.currentTarget.value as HashMethod;
    if (!hashes.includes(hashMethod)) { return; }
    setMethod(hashMethod);
  }

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" p={20}>
        <Block>
          <Flex flexDirection="column" p={20}>
            <Select onChange={onChangeHashMethod}>
              {hashes.map((hashMethod) => <option key={hashMethod}>{hashMethod}</option>)}
            </Select>
          </Flex>
          <Flex flexDirection="column" px={20} pb={20}>
            <Textarea placeholder="Enter your text here" onChange={onChangeText} value={text} />
          </Flex>
          <Flex flexDirection="column" px={20} pb={20}>
            <Textarea placeholder={`${method} hash of your text`}  value={hash} readOnly={true} />
          </Flex>
        </Block>
      </Flex>
    </Flex>
  );
}
