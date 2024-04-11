import React,{ Component} from 'react'
export default class Test extends Component{

    constructor(props){
        super(props);
    
        this.state = {
            name:"skct",
            age:18,
        };
    }
    render()
    {
        return(

         <>
            <h1>Class Component</h1>
            <h1>Name: {this.state.name}</h1>
            <h1>Age: {this.state.age}</h1>
         </>   
        )
    }
}
