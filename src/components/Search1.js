import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const Sear = () => {

const filterOptions = createFilterOptions({
	matchFrom: 'start',
	stringify: option => option,
});

// Sample options for search box
const myOptions = ['One Number', 'Two Number', 'Five Number',
	'This is a sample text', 'Dummy text', 'Dropdown option teet',
	'Hello text', 'Welcome to text field'];

return (
	<center><div style={{ marginLeft: '', marginTop: '60px' }}>
	<Autocomplete
		style={{ width: 500 }}
		freeSolo
		filterOptions={filterOptions}
		options={myOptions}
		renderInput={(params) => (
		<TextField {...params}
			variant="outlined"
			label="Search Box"
		/>
		)}
	/>
	</div></center>
);
}

export default Sear;
