import { useState, useEffect } from "react"
import { ProductTable, SearchBar } from "./components"
import "./FilterableProductTable.css"

const productsData = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

function FilterableProductTable() {
  const [filterText, setFilterText] = useState<string>("")
  const [inStockOnly, setInStockOnly] = useState<boolean>(true)
  const [products, setProducts] = useState(productsData)

  const handleSearch = (e: any): void => setFilterText(() => e.target.value)
  const handleFilterInStock = (e: any): void => setInStockOnly(() => e.target.checked)

  useEffect(() => {
    setProducts(() => productsData.slice().filter(item => item.name.includes(filterText)))
  }, [filterText])

  useEffect(() => {
    setProducts(() => productsData.slice().filter(item => item.stocked === inStockOnly))
  }, [inStockOnly])

  return (
    <div className={"products"}>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onSearch={handleSearch}
        onFilterInStock={handleFilterInStock}
      />
      <ProductTable products={products} />
    </div>
  )
}

export default FilterableProductTable
