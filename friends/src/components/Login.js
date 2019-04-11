import React from 'react';
import { connect } from 'react-redux';
import { login, loadFriends } from '../actions';


class Login extends React.Component{
    state = {
        credentials: {
        username: '',
        password: ''
        }
    }


    handleChange = e => {
        this.setState({
            credentials:{...this.state.credentials,
            [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
            .then(() => {
                this.props.history.push('/friends');
            })
            .then(() => {
                this.props.loadFriends();
            })
    }

    render(){
        return (
        <div className='login-wrapper'>
        <h2>Log In</h2>
        <form >
        <input name="username" value={this.state.credentials.username} onChange={this.handleChange} placeholder="username"></input>
        <input name="password" value={this.state.credentials.password} onChange={this.handleChange} placeholder="password"/>
        <button onClick={this.login}>Log In</button>
        {this.props.loggingIn ? (
        <h3>Loading Data</h3>
        ) : ( null)
         }
         </form>
        </div>
        )}
    }

const mapStateToProps = state => ({
    loggingIn: state.loggingIn,
    error: state.error,
    friends: state.friends
})

export default connect(mapStateToProps, { login, loadFriends }) (Login);