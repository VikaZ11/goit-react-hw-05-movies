import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Wrapper = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  right: 6px;
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
  padding: 6px 8px 6px 8px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
