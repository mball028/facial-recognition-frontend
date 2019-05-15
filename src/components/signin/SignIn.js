import React from 'react';

class Signin extends React.Component {


    // initial state of signInEmail & signInPassword
    constructor() {
        super();
        this.state = {
            signInEmail: '',
            signInPassword: '',
        }
    }

    // functions that set the state of email and password to what the user has typed respectively
    onEmailChange = (e) => {
        this.setState({signInEmail: e.target.value})
    }
    onPasswordChange = (e) => {
        this.setState({signInPassword: e.target.value})
    }

    onSubmitSignIn = () => {
        // fetching the endpoint for sign in
        fetch('https://evening-reaches-71208.herokuapp.com/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            // we are sending the email and password state to the api
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })  // then take the res & translate, which from our api will be a user object
            .then(response => response.json())
            .then((user) => {
                // if there is a user.id do the following
                if (user.id) {
                    // our loadUser function (assigned in App.js) & imported with props, will take in the user obj as data and assign the state
                    this.props.loadUser(user);
                    // route will change to home with proper user data loaded
                    this.props.onRouteChange('home');
                }
            })
    }

   render() {
       const { onRouteChange } = this.props
       return(
           <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80" >
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" onChange={this.onEmailChange} />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" onChange={this.onPasswordChange} />
                            </div>
                        </fieldset>
                        <div className="">
                            <input onClick={this.onSubmitSignIn}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                            <p style={{cursor: 'pointer'}}
                            onClick={() => onRouteChange('registration')} className="f6 link dim black db" >Register</p>
                        </div>
                    </div>
                </main>
            </article>

       )
   }
}


export default Signin;