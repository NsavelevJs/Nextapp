import React from "react";



export default class SafeComponent extends React.Component {
constructor(props){
    super(props)
    this.state = {hasError:false}
}
static getDerivedStateFromError(err){
    return {hasError:true}
}
componentDidCatch(){}
    render() {
        if(this.state.hasError){
            return <h3>There's a disturbance in the force</h3>
        }
        return this.props.children
    }
}

