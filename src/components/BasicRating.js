import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating() {
  return (
    <Box>
      <Rating name="read-only" value={3} readOnly />
    </Box>
  );
}