

import React, { Component } from 'react';

import './App.css';

class PasswordGenerator extends Component {
    constructor() {
        super();
        this.state = {
            password: '',
            length: 12,
            uppercase: true,
            lowercase: true,
            number: true,
            symbol: false,
        };
    }

    generatePassword = (l, initialPassword) => {
        let pass = "";
        for (let i = 0; i < l; i++) {
            pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
        }
        return pass;
    }

    handleGeneratePassword = () => {
        let initialPassword = "";
        if (this.state.uppercase) initialPassword += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (this.state.lowercase) initialPassword += "abcdefghijklmnopqrstuvwxyz";
        if (this.state.number) initialPassword += "0123456789";
        if (this.state.symbol) initialPassword += "!@#$%^&*=-_";

        const password = this.generatePassword(this.state.length, initialPassword);
        this.setState({ password });
    }

    handleCopyToClipboard = () => {
        if (this.state.password === "") {
            alert("Please generate a password");
        } else {
            const passwordInput = document.getElementById("password");
            passwordInput.select();
            document.execCommand("copy");
            alert("Password has been copied to the clipboard");
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Password Generator</h1>
                <div className="p-header">
                    <input type="text" id="password" value={this.state.password} readOnly />
                    <button className="copy" id="copy" onClick={this.handleCopyToClipboard}>Copy</button>
                </div>
                <div className="p-body">
                    <div className="form-control">
                        <label htmlFor="p-length">Password Length</label>
                        <input
                            type="number"
                            id="p-length"
                            value={this.state.length}
                            min="8"
                            max="30"
                            onChange={(e) => this.setState({ length: e.target.value })}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="p-uppercase">Include Uppercase</label>
                        <input
                            type="checkbox"
                            id="p-uppercase"
                            checked={this.state.uppercase}
                            onChange={() => this.setState({ uppercase: !this.state.uppercase })}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="p-lowercase">Include Lowercase</label>
                        <input
                            type="checkbox"
                            id="p-lowercase"
                            checked={this.state.lowercase}
                            onChange={() => this.setState({ lowercase: !this.state.lowercase })}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="p-number">Include number</label>
                        <input
                            type="checkbox"
                            id="p-number"
                            checked={this.state.number}
                            onChange={() => this.setState({ number: !this.state.number })}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="p-symbol">Include Symbols</label>
                        <input
                            type="checkbox"
                            id="p-symbol"
                            checked={this.state.symbol}
                            onChange={() => this.setState({ symbol: !this.state.symbol })}
                        />
                    </div>
                    <button id="submit" onClick={this.handleGeneratePassword}>Generate Password</button>
                </div>
            </div>
        );
    }
}

export default PasswordGenerator;



