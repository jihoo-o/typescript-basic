{
    class NetworkClient {
        tryConnet(): void {
            throw new Error('no network');
        }
    }

    class UserService {
        constructor(private client: NetworkClient) {}

        login() {
            // Bad exception handling point 💩
            this.client.tryConnet();
        }
    }

    class App {
        constructor(private userService: UserService) {}

        run() {
            // Awesome exception handling point ✨
            try {
                this.userService.login();
            } catch (e) {
                // show dialog to user
            }
        }
    }

    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run();
}
