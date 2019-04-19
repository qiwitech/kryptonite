import { Tab as ReactTab } from 'react-tabs';
import styled from 'styled-components';

const primary = '#3CAEA3';
const secondary = '#FFF';

export const Tab = styled(ReactTab)`
  flex: 1;
  text-align: center;
  padding: 20px;
  cursor: pointer;
  background-color: ${primary};
  color: ${secondary};
  user-select: none;
  outline: none;

  &.is-selected {
    background-color: ${secondary};
    color: ${primary};
  }
`;
