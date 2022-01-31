{
    // function: login -> success, fail
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        };
    };
    type FailState = {
        result: 'fail';
        reason: string;
    };
    type LoginState = SuccessState | FailState;
    function login(): LoginState {
        return {
            result: 'success',
            response: {
                body: 'logged in!',
            },
        };
    }

    // printLoginState(LoginState)
    // success -> 🎉 body
    // fail -> 😭 reason
    function printLoginState(loginState: LoginState) {
        if (loginState.result === 'success') {
            console.log(`🎉 ${loginState.response.body}`);
        } else {
            console.log(`😭 ${loginState.reason}`);
        }
    }
    printLoginState(login());
}
