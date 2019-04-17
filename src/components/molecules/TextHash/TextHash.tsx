import { Box, Flex } from '@rebass/grid';
import React from 'react';
import { useEventToHash } from './../../../hooks';
import { Input, Textarea } from './../../atoms';

export function TextHash() {
  const [hash, onChange] = useEventToHash('SHA256');

  return (
    <Flex flexDirection="column">
      <Box>
        <Textarea onChange={onChange} />
      </Box>
      <Box>
        <Input disabled={true} value={hash} />
      </Box>
    </Flex>
  );
}
