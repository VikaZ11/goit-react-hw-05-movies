import PropTypes from 'prop-types';
import { Wrapper, Input, Icon, Button } from './SearchBox.styled';

export const SearchBox = ({ value, onSearch, onChangeFilter }) => {
  return (
    <Wrapper onSubmit={onSearch}>
      <Input
        type="text"
        name="query"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
      />
      <Button type="submit">
        <Icon />
      </Button>
    </Wrapper>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string,
  onSearch: PropTypes.func,
  onChangeFilter: PropTypes.func,
};