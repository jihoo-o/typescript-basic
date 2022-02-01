{
    /**
     * Print Loading State
     */
    type LoadingState = {
        state: 'loading';
    };

    type SuccessState = {
        state: 'success';
        response: {
            body: string;
        };
    };

    type FailState = {
        state: 'fail';
        reason: string;
    };

    type ResourceLoadState = LoadingState | SuccessState | FailState;

    // state에 맞게 메시지 표시하기
    function printLoginState(state: ResourceLoadState) {
        switch (state.state) {
            case 'success':
                console.log(`😃 ${state.response.body}`);
                return;
            case 'fail':
                console.log(`😱 ${state.reason}`);
                return;
            case 'loading':
                console.log('👀 loading...');
                return;
            default:
                throw new Error(`unknown state: ${state}`);
        }
    }

    printLoginState({ state: 'loading' }); // 👀 loading...
    printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
    printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
