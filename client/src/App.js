import React from 'react';
import Recipes from './Components/Recipes/Recipes';
import { Provider } from 'react-redux';
import store from './Reducers/store';

const App = () => {
	return (
		// surely here will be router 
		<Provider store={store}>
			<Recipes />
		</Provider>
	);
};

export default App;
