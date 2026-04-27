import { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function ButtonFunctionality() {
  const [disabled, setDisabled] = useState(true);

  return (
    <div>
      <Button
        disabled={disabled}
        size="large"
        disableElevation
        disableRipple
        onClick={() => console.log('clicked me!!')}
        variant="contained"
        color="secondary"
        endIcon={<ArrowForwardIcon />}
      >
        Publish
      </Button>
      <IconButton
        color="secondary"
        disableRipple
        onClick={() => setDisabled(!disabled)}
      >
        <ArrowForwardIcon />
      </IconButton>
    </div>
  );
}
