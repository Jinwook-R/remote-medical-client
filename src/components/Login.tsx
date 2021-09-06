import React, {useState} from 'react';
import SnsIdLogin from "./SnsIdLogin";
import {Redirect} from "react-router-dom";

function Login() {

    const [idInput, setIdInput] = useState('');
    const [pwdInput, setPwdInput] = useState('');
    const bearerToken = window.localStorage.getItem('bearerToken');

    const handleLogin = () => {
        
    }

    const handleIdInput = (e: any) => {
        setIdInput(e.target.value);
    }

    const handlePwdInput = (e: any) => {
        setPwdInput(e.target.value);
    }

    return (
        <>
            {bearerToken && <Redirect to='/'/>}
            {!bearerToken &&
                <div className="authWrapper">
                    <input className="idInput" type="text" onChange={handleIdInput} value={idInput}/>
                    <input className="pwdInput" type="text" onChange={handlePwdInput} value={pwdInput}/>
                    <a className="loginBtn" onClick={handleLogin}>로그인</a>
                    <a className="signupBtn">회원가입</a>
                    <SnsIdLogin/>
                </div>
            }
        </>
    );
}

export default Login;