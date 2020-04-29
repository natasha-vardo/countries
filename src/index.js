import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
		<Provider store={store}>
			<Suspense fallback={(<div>Loading ...</div>)}>
				<App />
			</Suspense>
		</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
