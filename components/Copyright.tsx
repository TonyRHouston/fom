import * as React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography
      variant="body1"
      align="center"
      position="relative"
  
      sx={{
        fontSize:12,
        color: 'text.secondary',
        mb:1,
      }}
    >
      Copyright © Foundation of Manna {new Date().getFullYear()}.
    </Typography>
  );
}
