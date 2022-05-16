import React, { Fragment } from 'react';
import{Inputcss,Labelcss} from './btncss.js';
const btnicon = () => {
	return (
		<Fragment>
			<Inputcss type="checkbox"  id="nav" />
			<Labelcss htmlFor="nav" />
		</Fragment>
	);
};
export default btnicon;
