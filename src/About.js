import React from 'react'
class About extends React.Component{
    constructor(){
        super();
    }  
    componentDidMount(){
        //console.warn("props",this.props.name);
    }
    componentDidUpdate(){
        //console.warn("props in update",this.props.name);
    }
    render(){
        //console.warn('render');
        return(
            <div>
                <h1>About Us Components</h1>
                <h2>{this.props.name}</h2>
            </div>
           
        )
    }
}

export default About;

// constructor(){

// }

// componentDidMount(){

// }
// componentDidUpdate(){

// }
// componentWillUnmount(){

// }