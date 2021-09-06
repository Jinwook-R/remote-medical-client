function LoginByNaver(setIsSuccess:any) {

    const naverScript = document.createElement("script");
    naverScript.src = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
    naverScript.type = "text/javascript";
    document.head.appendChild(naverScript);

    naverScript.onload = () => {
        const naverLogin = new window.naver.LoginWithNaverId({
            clientId: "jJsSyp7pTl71k3KgRaCL",
            callbackUrl: "http://localhost:9000",
            callbackHandle: true,
            isPopup: false,
            loginButton: {
                color: "green",
                type: 3,
                height: 40,
            },
        });

        naverLogin.init();
        naverLogin.logout(); // 네이버 로그인이 계속 유지되는 경우가 있다. 초기화시 로그아웃
        naverLogin.getLoginStatus((status:any) => {

            if (status) {
                console.log("Naver 로그인 상태", naverLogin.user);
                const query = window.location.href.split('#')[1].split('&');
                let body: any = {};
                for(let i = 0 ; i < query.length ; i++){
                    const val: string[] = query[i].split('=');
                    body[val[0]] = val[1];
                }

                // 서버에 유저데이터 전송
                fetch('http://localhost:3000/login',{
                    method : 'POST',
                    headers : {'content-Type' : 'application/json'},
                    body : JSON.stringify(body)
                }).then((res)=>{
                    if(res.status < 400){
                        localStorage.setItem('bearerToken', body.access_token);
                        // 메인화면 페이지로 이동하기!
                        setIsSuccess(true);
                    }
                });

            } else {
                console.log("Naver 비 로그인 상태");
            }
        });
    };
}

export default LoginByNaver;