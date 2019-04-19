import React from 'react';
import styled from 'styled-components';
import { Tab } from './../../atoms';
import { AsymmetryEncryptText, FileChecksum, SymmetryEncryptText, TextHash } from './../../molecules';
import { Tabs } from './../../organisms';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 1300px;
  margin: 20px auto;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export function Main() {
  const tabs = [
    <Tab key="textHash">Text hash</Tab>,
    <Tab key="fileChecksum">File checksum</Tab>,
    <Tab key="symetryEncryptText">Symmetric encryption</Tab>,
    <Tab key="asymmetryEncryptText">Asymmetric encryption</Tab>,
  ];

  const panels = [
    <TextHash key="textHash"/>,
    <FileChecksum key="fileChecksum"/>,
    <SymmetryEncryptText key="symetryEncryptText"/>,
    <AsymmetryEncryptText key="asymmetryEncryptText"/>,
  ];

  return (
    <Container>
      <Tabs
        tabs={tabs}
        panels={panels}
      />
    </Container>
  );
}
