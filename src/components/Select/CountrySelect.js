import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CountrySelect() {
  const [Country, setCountry] = React.useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Country}
          label="Country"
          onChange={handleChange}
        >
          <MenuItem value={1}>United States</MenuItem>
          <MenuItem value={2}>Mexico</MenuItem>
          <MenuItem value={3}>Germany</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}