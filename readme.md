Esse sistema ainda está em fase de desenvolvimento e estudos de novas implementações, tecnologias e estudos.

As tecnologias utilizadas são:

- [Vite](https://vitejs.dev/)
- Typescript
- [Tailwind CSS](https://tailwindcss.com/)

### Exemplo de pastas a seguir

```lua
src/
├── api/
│   ├── apiConfig.js
│   ├── endpoints.js
│   └── index.js
├── components/
│   ├── common/
│   │   ├── Button/
│   │   │   ├── Button.js
│   │   │   └── index.js
│   │   ├── Input/
│   │   │   ├── Input.js
│   │   │   └── index.js
│   │   └── index.js
│   ├── features/
│   │   ├── Auth/
│   │   │   ├── Auth.js
│   │   │   ├── components/
│   │   │   │   ├── LoginForm/
│   │   │   │   │   ├── LoginForm.js
│   │   │   │   │   └── index.js
│   │   │   │   └── index.js
│   │   │   ├── index.js
│   │   │   ├── services/
│   │   │   │   ├── authService.js
│   │   │   │   └── index.js
│   │   │   └── types.js
│   │   └── index.js
│   └── index.js
├── hooks/
│   ├── useAuth.js
│   ├── useDebounce.js
│   └── index.js
├── index.js
├── pages/
│   ├── Dashboard/
│   │   ├── Dashboard.js
│   │   └── index.js
│   ├── Home/
│   │   ├── Home.js
│   │   └── index.js
│   └── index.js
├── routes/
│   ├── PrivateRoute/
│   │   ├── PrivateRoute.js
│   │   └── index.js
│   └── index.js
├── services/
│   ├── apiService.js
│   ├── authService.js
│   └── index.js
├── store/
│   ├── actions/
│   │   ├── authActions.js
│   │   └── index.js
│   ├── reducers/
│   │   ├── authReducer.js
│   │   └── index.js
│   ├── selectors/
│   │   ├── authSelectors.js
│   │   └── index.js
│   ├── store.js
│   └── types.js
└── utils/
    ├── constants.js
    └── index.js
```
