{
    type NetworkErrorState = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout';
    };
    type SuccessState = {
        result: 'success';
    };
    type ResultState = SuccessState | NetworkErrorState;

    class NetworkClient {
        tryConnet(): ResultState {
            return {
                result: 'fail',
                reason: 'offline',
            };
        }
    }

    class UserService {
        constructor(private client: NetworkClient) {}

        login() {
            console.log(this.client.tryConnet());
        }
    }

    class App {
        constructor(private userService: UserService) {}

        run() {
            try {
                this.userService.login();
            } catch (e) {}
        }
    }

    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run();
}
