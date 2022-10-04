# Setup project

## Prerequisites

- Install node
  <https://nodejs.org/en/download/>

- Install pnpm

  ```sh
  npm install --global pnpm
  ```

## Installation

1. Clone the repo

   ```sh
   git clone git@gitlab.enouvo.com:enouvo/anubis/telobseques-admin-web.git
   ```

2. Install NPM packages

   ```sh
   yarn install
   ```

3. Copy `.env.example` to `.env` and update the variables.

4. Run the development server:

   ```bash
   #npm run dev
   nvm use 17.0.1
   export NODE_OPTIONS=--openssl-legacy-provider; npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

### Unit test

```javascript
yarn test
```

### Integration test

```javascript
yarn run test-integration
```

### e2e test

```javsacript
yarn run test-e2e
```
