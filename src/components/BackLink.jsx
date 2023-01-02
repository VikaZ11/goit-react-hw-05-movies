import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: black;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: green;
  font-weight: 500;
  border: 1px solid green;

  :hover {
    color: black;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="16" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
   to: PropTypes.object.isRequired, 
}
