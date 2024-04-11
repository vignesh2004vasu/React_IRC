import { toggle_theme } from "../Redux/ThemeAction";
import { useDispatch,useSelector } from "react-redux";

const Theme =()=>{

    const dispatch = useDispatch();
    const theme = useSelector((state)=>state.theme);

    const style={

        backgroundColor:theme,
        height:'30vh',
        width:'30vw'
    }

    return(
        <div style={style}>

            <button onClick={()=>dispatch(toggle_theme())}>theme</button>
        </div>
    )
}

export default Theme