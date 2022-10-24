import { useReducer, useState } from "react";
// import Count from "./Count";
// import Avatar from "./Avatar";
// import Lession from "./Lession";
// import Content1 from "./Content1";

const initState = 0;

const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

const reducer = (state, action) => {
  switch(action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
      default:
        throw new Error("invalid number")
  }
    
}

function App() {
  const [count, dispatch] = useReducer(reducer, initState)
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [products, setProducts] = useState([]);
  // const [count, setCount] = useState(0)

  // const handleIncrease = useCallback(() => {
  //     setCount(prev => prev + 1)
  // }, [])
  // const total = useMemo(() => {
  //   const result = products.reduce((result, prod) => {
  //     return result + prod.price;
  //   }, 0);

  //   return result
  // }, [products]);

  // const nameRef = useRef()

  // const handleSubmit = () => {
  //   setProducts([
  //     ...products,
  //     {
  //       name,
  //       price: +price,
  //     },
  //   ]);
  //   setName('')
  //   setPrice('')

  //   nameRef.current.focus()
  // };

  return (
    <div
      style={{
        padding: 20,
      }}
    >
      {/* <input
        ref={nameRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <br />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter Price"
      />
      <br />
      <button onClick={handleSubmit}>Add</button> */}
      {/* <Content1 onIncrease={handleIncrease}/>
      <h1>{count}</h1> */}
      {/* <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul> */}

      <h1>{count}</h1>
      <button onClick={() => {dispatch(UP_ACTION)}}>Up</button>
      <button onClick={() => {dispatch(DOWN_ACTION)}}>Down</button>
    </div>
  );
}

export default App;
