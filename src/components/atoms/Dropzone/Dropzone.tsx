import React from 'react';
import { DropzoneState } from 'react-dropzone';
import styled from 'styled-components';

const Dropwrap = styled.div`
  border: 10px dashed #ccc;
  overflow: hidden;
  border-radius: 10px;
  user-select: none;
  outline: none;
`;

const Placeholder = styled.p`
  text-align: center;
  font-size: 2rem;
  margin: 20px;
`;

export const Dropzone = (props: DropzoneState) => {
  const { getRootProps, getInputProps } = props;

  return (
    <Dropwrap {...getRootProps()}>
      <input {...getInputProps()} />
      <Placeholder>
        Drag'n'drop some files here, or click to select files
      </Placeholder>
    </Dropwrap>
  );
};
