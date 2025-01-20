// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "./counter/counterSlice";
// import { RootState } from "../src/app/store";

import "./App.css";
import Form from "./form/form";

// export function Counter() {
//   const count = useSelector((state: RootState) => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   );
// }

function App() {
  return <Form />;
}

export default App;
