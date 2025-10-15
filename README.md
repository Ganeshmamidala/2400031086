## KL University Store – Product Detail Pop-up (React)

This is a small React (Vite + SWC) app that displays a list of products and shows a pop-up (modal) with full details when a product is clicked. It uses `useState` to manage the modal visibility.

### Requirements satisfied
- Display a list of products (name, price, short description)
- On click, open a pop-up with image and extended description
- Include a close button and allow closing by clicking outside
- Styled overlay to clearly cover page content

### Run locally (PowerShell)
```powershell
cd "C:\Users\Ganesh\OneDrive\ドキュメント\KLU\2 year 1 sem\fed lab\sem in 1\klu-react-popup"
npm install
npm run dev -- --host
# open the printed URL, e.g., http://localhost:5173/
```

### Build for production
```powershell
npm run build
npm run preview
```

### Where the logic lives
- `src/App.jsx` – Product list and `Modal` component (uses `useState` for open/close)
- `src/index.css` – Modal overlay and card styling

### Optional enhancements
- Trap focus inside modal and move focus to the first interactive element when opened
- Add tests with Vitest + React Testing Library
- Replace placeholder images with real assets or use an API

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
