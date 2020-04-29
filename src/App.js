import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.container';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
				<Switch>
					<Route path={'/'} component={ Home } />
				</Switch>
			</React.Fragment>
    </BrowserRouter>
  );
}

export default App;
