import styled from 'styled-components';

export const Textarea = styled.textarea`
  resize: none;
  min-height: 200px;
  font-size: 1.3rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px 20px;

  &:focus{
    outline: none;
  }
`;
