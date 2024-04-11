import { increment,decrement } from "../Redux/CounterAction";
import { useDispatch,useSelector } from "react-redux";

const Counter=()=>{

    const dispatch=useDispatch();
    const count=useSelector((state)=>state.count);

    return(
        <>
        <h1>Count: {count}</h1>
        <button onClick={()=>dispatch(increment())}>incre</button>
        <button onClick={()=>dispatch(decrement())}>decre</button>
        </>
    )
}

export default Counter;