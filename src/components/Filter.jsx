import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleChange(event) {
    const value = event.target.value;
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="styled-filter">
      <select
        value={currentFilter}
        onChange={handleChange}
        className="filter-dropdown"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
