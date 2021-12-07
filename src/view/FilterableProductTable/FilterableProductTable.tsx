import { useState } from "react"

function FilterableProductTable() {
  const [msg, setMsg] = useState("FilterableProductTable")

  function reverseMsg() {
    setMsg(() => msg.split("").reverse().join(""))
  }

  return (
    <div>
      <h1>{ msg }</h1>
      <button onClick={reverseMsg}>reverseMsg</button>
    </div>
  )
}

export default FilterableProductTable


