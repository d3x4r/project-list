import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Filters.css';

// title is used to display filter value on screen
const filtersCount = [
  {
    value: '',
    title: 'All',
  },
  {
    value: '2018',
    title: '2018',
  },
  {
    value: '2019',
    title: '2019',
  },
  {
    value: '2020',
    title: '2020',
  },
];

const FilterButton = ({ filterData, filterHandler, currentFilter }) => {
  const { title, value } = filterData;

  const classes = classNames({
    btn: true,
    'btn-secondary': true,
    active: value === currentFilter,
  });

  const onFilterSelect = (filterValue) => () => {
    filterHandler(filterValue);
  };

  return (
    <button className={classes} type="button" onClick={onFilterSelect(value)}>
      {title}
    </button>
  );
};

const Filters = (props) => {
  const { filterHandler, currentFilter } = props;
  return (
    <div className="btn-group" role="group">
      {filtersCount.map((filter) => (
        <FilterButton
          filterData={filter}
          key={filter.value}
          filterHandler={filterHandler}
          currentFilter={currentFilter}
        />
      ))}
    </div>
  );
};

Filters.propTypes = {
  filterHandler: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
};

FilterButton.propTypes = {
  filterData: PropTypes.instanceOf(Object).isRequired,
  filterHandler: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
};

export default Filters;
