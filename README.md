# About

IDEM (IDEM, from now on) is an open-source cross-platform mobile application based on the Decentralised Identity Foundation's DID protocol. The application gives individuals control of their digital identities by establishing trust in an interaction between two individuals or entities that do not know each other. For trust to happen, the offering party will present credentials to the receiving parties, which can verify that the credentials are from an issuer that they trust. IDEM is designed to be used by third parties who require their customers to be KYC'd, such as cryptocurrency exchanges (e.g. Get Paid In Bitcoin).

Each time an exchange requests an ID from a new user, the KYC provider charges the exchange a fee. Users are required to provide KYC information and have it verified for each and every exchange onboarding instead of being able to reuse verification from a trusted provider. By locally storing users' verified information with a cryptographic signature, we can enhance the onboarding experience and reduce costs incurred by vendors.
### Libraries

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [React](https://reactjs.org/)
- [tailwindcss](https://tailwindcss.com/)
  - [daisyUI](https://daisyui.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [vite](https://vitejs.dev/)

### Tools

- [commitlint](https://commitlint.js.org)
- [Conventional Commits](https://www.conventionalcommits.org)
- [editorconfig](https://editorconfig.org/)
- [eslint](https://eslint.org/)
- [husky](https://typicode.github.io/husky/#/)
- [Prettier](https://prettier.io/)
- [VS Code settings](https://code.visualstudio.com/)

## Running locally

```bash
yarn
yarn dev
yarn test
```
