import React from 'react';

class Registration extends React.Component {

    //set initial state of email, password, name
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            name: '',
        }
    }

    // change state of each field to what the user has input
    onNameChange = (e) => {
        this.setState({name: e.target.value})
    }
    onEmailChange = (e) => {
        this.setState({email: e.target.value})
    }
    onPasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    // this funciton is called when the user clicks the submit button
    onSubmitSignIn = () => {
        // when the function is called it will fetch the register endpoint on our api
        fetch('https://evening-reaches-71208.herokuapp.com/register', {
            // we are writing to our db with a POST method
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            // the req.body will contain the new state for our input fields that we have translated into JSON
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,

            })
        }) // we will recieve a response and translate from json into a user obj
            .then(response => response.json())
            .then(user => {
                if (user.id){
                    // load user was assigned and passed with props from App.js
                    this.props.loadUser(user);
                    // change the state to home and change route accordingly
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        // const { onRouteChange } = this.props;
        return (
            <div>

                <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 black-80" >
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0">Register</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" onChange={this.onEmailChange} />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" onChange={this.onNameChange} />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" onChange={this.onPasswordChange} />
                                </div>
                            </fieldset>
                            <div className="">
                                <input onClick={this.onSubmitSignIn}
                                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                            </div>
                        </div>
                    </main>
                </article>

            </div>
        )
    }
}


export default Registration;