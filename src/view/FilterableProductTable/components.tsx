
interface IProduct {
  category?: string
  price: string
  stocked?: boolean
  name: string
}

type IProducts = IProduct[]

interface IProductTableProps {
  products: IProducts,
}

interface IProductCategoryRowProps {
  category: string
}
function ProductCategoryRow(props: IProductCategoryRowProps) {
  return (
    <thead>
    <tr>
      <th colSpan={2}>{props.category}</th>
    </tr>
    </thead>
  )
}

function ProductRow(props: IProduct) {
  return (
    <tr>
      <td>{ props.name }</td>
      <td>{ props.price }</td>
    </tr>
  )
}

export function ProductTable(props: IProductTableProps) {
  const SportingGoods = props.products.filter(item => item.category === "Sporting Goods")
  const Electronics = props.products.filter(item => item.category === "Electronics")

  const sportingGoods = SportingGoods.map(item => <ProductRow key={item.name} price={item.price} name={item.name}/>)
  const electronics = Electronics.map(item => <ProductRow key={item.name} price={item.price} name={item.name}/>)

  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      </thead>
      <ProductCategoryRow category={"Sporting Goods"}/>
      <tbody>{sportingGoods}</tbody>
      <ProductCategoryRow category={"Electronics"}/>
      <tbody>{electronics}</tbody>
    </table>
  )
}

interface ISearchBarProps {
  onSearch: Function
  onFilterInStock: Function
  inStockOnly: boolean
  filterText: string
}

export function SearchBar(props: ISearchBarProps) {
  return (
    <div className={"search"}>
      <div>
        <input
          placeholder="Search..."
          type="text"
          value={props.filterText}
          onChange={(e) => props.onSearch(e)}
        />
      </div>
      <label>
        <input
          type="checkbox"
          checked={props.inStockOnly}
          onChange={(e) => props.onFilterInStock(e)}
        />
        <span>Only show products in stock.</span>
      </label>
    </div>
  )
}

