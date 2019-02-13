import React, { Component } from 'react'
import axios from 'axios'

import '../css/admin.css'

export default class Admin extends Component {
    constructor() {
        super()
        this.state = {

            email: '',
            password: ''
        }

    }


    onSubmit(e) {
        e.preventDefault()
        const user = {

            email: this.state.email,
            password: this.state.password
        }
        axios.post('/api/users/login', user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }




    render() {
        return (
            <div>
                <div className="login-form">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <h2 className="text-center">Admin</h2>

                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                <input type="text" className="form-control" name="email" placeholder="Email" required="required" value={this.state.email} onChange={this.onChange.bind(this)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                <input type="password" className="form-control" name="password" placeholder="Password" required="required" value={this.state.password} onChange={this.onChange.bind(this)} />
                            </div>
                        </div>


                        <div className="form-group">
                            <div className="input-group">

                                <button type="submit" className="btn btn-primary login-btn btn-block">Sign in</button>
                            </div>
                        </div>
                        <div className="clearfix">
                            <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>

                        </div>

                    </form>

                </div>
            </div>
        )
    }
}
