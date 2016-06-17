# Incorporating Redux into an existing React app

This is a small sample project that evolves an existing vanilla (no state management like Flux et al) to using Redux to manage user interactions and state management. I'll try to incorporate things progressively in each commit.

This project also includes a web API exposed through Express.js. The front end will consume this API to get data to the frontend. It also uses webpack to transpile and bundle ES6 React code. See the `package.json` file for scripts to `npm run` during development.


## FYI

* The server on port 3000 is configured with CORS to allow the client requests from port 8080. See `server/server.js` for details. This is only needed if you're using the webpack-dev-server (`npm start`).
