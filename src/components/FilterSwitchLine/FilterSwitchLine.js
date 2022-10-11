import React, {useState} from 'react';
import './FilterSwitchLine.scss';
import {FILTERS} from "../../configurations/filters";

const filterStyle = "filter-switch-line__filter";
const activeFilterStyle = "filter-switch-line__filter filter_active";

function FilterSwitchLine(props) {
  const [filters, setFilters] = useState(
    new Array(FILTERS.appPage.length)
      .fill(true, 0, 1)
      .fill(false, 1)
  );

  const setActive = (index) => {
    console.log('active');
    setFilters(
      filters
        .slice()
        .fill(false)
        .fill(true, index, index + 1));
  }

  return (
    <div className="filter-switch-line">
      {FILTERS.appPage.map((filter, index) =>
        <span key={filter}
              className={filters[index] ? activeFilterStyle : filterStyle}
              onClick={() => setActive(index)}
        >
          {filter}
        </span>
      )}
    </div>
  );
}

export default FilterSwitchLine;
