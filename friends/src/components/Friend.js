import React from 'react'


class Friend extends React.Component{
    state={
        friends:{
        id: 1,
        name: 'Joe',
        age: 24,
        email: 'joe@lambdaschool.com'
        }
        
    }
    render(){
        return(
            <div>
            <p>{this.state.friends.name}</p>
            <p>{this.state.friends.age}</p>
            <p>{this.state.friends.email}</p>
            </div>
        )
    }
}

export default Friend