import { useState } from "react"
import { ProductTable, SearchBar } from "./components"
import "./FilterableProductTable.css"

function FilterableProductTable(props: any) {
  const [filterText, setFilterText] = useState<string>("")
  const [inStockOnly, setInStockOnly] = useState<boolean>(false)

  return (
    <div className={"products"}>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterText={setFilterText}
        onInStockOnly={setInStockOnly}
      />
      <ProductTable
        products={props.products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  )
}

export default FilterableProductTable
