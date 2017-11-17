import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function requireAll(r: any) {
  r.keys().forEach(r);
}

requireAll((require as any).context("./", true, /\.css$/))

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
