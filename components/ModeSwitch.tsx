'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useColorScheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
export default function ModeSwitch() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Box
      sx={{
        p: 1,
      }}>
      <DarkModeIcon onClick={() => { setMode(mode === 'dark' ? 'light' : 'dark') }}>

      </DarkModeIcon>
    </Box>
  );
}
