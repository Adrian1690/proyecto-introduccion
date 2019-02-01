import React from 'react';
import './App.css';
import { Collapsible, CollapsibleItem } from 'react-materialize';

const App = () => {
	return (
		<Collapsible popout defaultActiveKey={0}>
			<CollapsibleItem header='First' icon='filter_drama'>
				Lorem ipsum dolor sit amet.
			</CollapsibleItem>
			<CollapsibleItem header='Second' icon='place'>
				Lorem ipsum dolor sit amet.
			</CollapsibleItem>
			<CollapsibleItem header='Third' icon='whatshot'>
				Lorem ipsum dolor sit amet.
			</CollapsibleItem>
		</Collapsible>
	);
};

export default App;
