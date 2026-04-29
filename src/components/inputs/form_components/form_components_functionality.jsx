import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@mui/material';

export function FormComponentsFunctionality() {
  return (
    <FormControl>
      <FormLabel>My form</FormLabel>
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="My value 1" />
        <FormControlLabel control={<Checkbox />} label="My value 2" />
        <FormControlLabel control={<Checkbox />} label="My value 3" />
      </FormGroup>
      <FormHelperText>Please select a value</FormHelperText>
    </FormControl>
  );
}
