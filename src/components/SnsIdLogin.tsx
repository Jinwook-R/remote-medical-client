import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import LoginByNaver from "../api/request/LoginByNaver";

declare global {
    interface Window {
        naver: any;
    }
}

function SnsIdLogin() {

    const [isSuccess, setIsSuccess] = useState(false);
    LoginByNaver(setIsSuccess);

    return (
        <div className='naverIdLogin' id="naverIdLogin">
            {isSuccess && <Redirect to="/main"/>}
        </div>

    );
}

export default SnsIdLogin;