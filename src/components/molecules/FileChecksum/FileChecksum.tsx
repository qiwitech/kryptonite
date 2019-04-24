import { Flex } from '@rebass/grid';
import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { useFilesToChecksums } from './../../../hooks';
import { Block, Dropzone, Input } from './../../atoms';

export function FileChecksum() {
  const [ checksums, onDrop ] = useFilesToChecksums();
  const dropzoneProps = useDropzone({ onDrop });
  const inputs = useMemo(() => checksums.map(mapChecksumInputs), [checksums]);

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" p={20}>
        <Block>
          <Flex flexDirection="column" p={20}>
            <Dropzone {...dropzoneProps} />
          </Flex>
          {inputs}
        </Block>
      </Flex>
    </Flex>
  );
}

function mapChecksumInputs(checksum: string, index: number) {
  return (
    <Flex flexDirection="column" px={20} pb={20} key={`${index}:${checksum}`}>
      <Input value={checksum} readOnly={true} />
    </Flex>
  );
}
