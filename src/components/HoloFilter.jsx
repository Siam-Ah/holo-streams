import Filter from "./Filter";

function HoloFilter() {
  return (
    <div>
      <Filter
        filterField="region"
        options={[
          { value: "all", label: "All" },
          { value: "JP", label: "Japan" },
          { value: "EN", label: "English" },
          { value: "ID", label: "Indonesia" },
          { value: "holostars", label: "Holostars" },
        ]}
      />
    </div>
  );
}

export default HoloFilter;
