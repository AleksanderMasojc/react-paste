import { useState, useEffect } from "react";
import axios from "../axios";

import React from 'react'

function Register() {

    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);
    const [pass, setPass] = useState('');
    const [validPass, setValidPass] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        //console.log(user);
        if (user !== " " & user !== "") {
            setValidUser(true);
        }
        else{
            setValidUser(false);
        }
        //console.log(validUser);
    }, [user])


    useEffect(() => {
        //console.log(pass);
        if (pass !== " " & pass !== "") {
            setValidPass(true);
        }
        else{
            setValidPass(false);
        }
        //console.log(validPass);
        
    }, [pass])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pass);

        try{
            const response = await axios.post('/register',
                JSON.stringify({user, pass}),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response));
            setSuccess(true);//nie wiem co tu redirect jakis? do login?
        } catch(err){
            console.log(err);
        }
    }

    return (
        <section>
            <h1>
                Register
            </h1>
            <form onSubmit={handleSubmit}>
                <label className="username">Username:</label>
                <input type="text" id="name"
                onChange={(e) => setUser(e.target.value)}
                required></input>
                <label className="pass">Password:</label>
                <input type="password" id="password" 
                onChange={(e) => setPass(e.target.value)}
                required></input>
                <button disabled={!validPass || !validUser ? true : false}>Sign up</button>
                <p>Dodaj Sign in link</p>
            </form>
        </section>
    )
}

export default Register