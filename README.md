
#  Atividade Conext-test

Desenvolvimento Baseado em Frameworks 2

Professor: Jemison


![Logo](https://lh3.googleusercontent.com/pw/AP1GczMaO6SjOZNnDlOhN272QG6U4wDb4QtAgnYF645_fwhSJ8GxjGuHvp2eU2NquC3UoNigGRrTMdGphvgHY43BA6MAxxCrdWg7WFkdiJr4vQxy-9lzNNnLGhV4HElkv9W-t0hQAdKNjQe1BkT3aDiU5drZ=w909-h906-s-no-gm?authuser=0)


## Autore

- [@GustavoMarquess](https://github.com/GustavoMarquess)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
