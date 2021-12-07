
interface IProduct {
  category?: string
  price: string
  stocked: boolean
  name: string
}

type IProducts = IProduct[]

interface IProductTableProps {
  products: IProducts
  filterText: string
  inStockOnly: boolean
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
  const name = props.stocked
    ? props.name
    : <span style={{color: "red"}}>{props.name}</span>

  return (
    <tr>
      <td>{ name }</td>
      <td>{ props.price }</td>
    </tr>
  )
}

export function ProductTable(props: IProductTableProps) {
  const products = props.products.filter(item => {
    return item.name.toLowerCase().includes(props.filterText.toLowerCase()) && !(props.inStockOnly && !item.stocked)
  })

  const SportingGoods = products.filter(item => item.category === "Sporting Goods")
  const Electronics = products.filter(item => item.category === "Electronics")

  const sportingGoods = SportingGoods.map(item => {
    return <ProductRow key={item.name} stocked={item.stocked} price={item.price} name={item.name}/>
  })
  const electronics = Electronics.map(item => <ProductRow key={item.name} stocked={item.stocked} price={item.price} name={item.name}/>)

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
  onFilterText: Function
  onInStockOnly: Function
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
          onChange={(e) => props.onFilterText(e.target.value)}
        />
      </div>
      <label>
        <input
          type="checkbox"
          checked={props.inStockOnly}
          onChange={(e) => props.onInStockOnly(e.target.checked)}
        />
        <span>Only show products in stock.</span>
      </label>
    </div>
  )
}

