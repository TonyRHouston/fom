'use client';
var _icon: any;
import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import IconButton from "@mui/material/IconButton";
import { useColorScheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ModeSwitch(show: boolean) {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (

  /*#__PURE__*/ _jsx(IconButton, {
      onClick: () => { setMode(mode === 'dark' ? 'light' : 'dark') },
      style:{opacity:show===true ? 1 : 0},
      children:   /*#__PURE__*/ _jsx(mode == 'light' ? DarkModeIcon : LightModeIcon, {}),
    })
 
  );
}
