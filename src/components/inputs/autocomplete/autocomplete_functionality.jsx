import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

export const AutocompleteFunctionality = () => {
  const [value, setValue] = React.useState(null);
  const options = [
    { name: 'Apple', year: 2022 },
    { name: 'Banana', year: 2020 },
    { name: 'Pear', year: 2020 },
    { name: 'Orange', year: 2022 },
  ];

  return (
    <div>
      <Autocomplete
        freeSolo
        value={value}
        onBlur={(event) =>
          event.target.value !== value ? setValue(event.target.value) : null
        }
        isOptionEqualToValue={(option, value) => option.name === value.name}
        onChange={(event, newValue) => setValue(newValue)}
        options={options.sort((a, b) => a.year - b.year)}
        getOptionLabel={(option) =>
          typeof option === 'string'
            ? option
            : `${option.name} - (${option.year})`
        }
        renderInput={(params) => <TextField {...params} label="Fruit" />}
      ></Autocomplete>
    </div>
  );
};
