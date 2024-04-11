import {TOGGLE_THEME} from './ThemeAction';

const initialState ={

    theme:'black'
}

const ThemeReducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case TOGGLE_THEME:
            return{ theme: state.theme==='black'?'white':'black'}
        default:
            return state
        
    }
}

export default ThemeReducer;