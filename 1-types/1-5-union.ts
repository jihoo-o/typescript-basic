{
    /**
     * Union Types: OR
     */
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }
    move('down');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    // Example
    // function: login -> success, fail
    type SuccessState = {
        response: {
            body: string;
        };
    };
    type FailState = {
        reason: string;
    };
    type LoginState = SuccessState | FailState;
    function login(): LoginState {
        return {
            response: {
                body: 'logged in!',
            },
        };
    }

    // printLoginState(LoginState)
    // success -> 🎉 body
    // fail -> 😭 reason
    // => discriminated union is better
    function printLoginState(loginState: LoginState) {
        if ('response' in loginState) {
            console.log(`🎉 ${loginState.response.body}`);
        } else {
            console.log(`😭 ${loginState.reason}`);
        }
    }
    printLoginState(login());
}
