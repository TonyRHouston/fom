import * as React from 'react';
import Typography from '@mui/material/Typography';
import { App } from "@/components/MetaTest"
import { Box, Button } from '@mui/material';

export default function Public() {
  

  return (
    <Box>

{App()}
    </Box>
   

  );
}

Public.requireAuth = true;
