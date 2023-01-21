import { createRoot } from 'react-dom/client';
import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";

import "./index.scss";

const container = document.getElementById('root');
const root = createRoot(container!); /* eslint-disable-line @typescript-eslint/no-non-null-assertion */
root.render(<App />);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
