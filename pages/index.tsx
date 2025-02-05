import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useSession } from 'next-auth/react';

export default function HomePage() {
  const { data: session } = useSession();

  return (    
      <Typography color="#000000" variant='h1'>
        Welcome to ToolpadkzfbzljhxcvLJHSDLHDSg;zsdhshdiuglczzl;UZHzuyxcgzlxgdLSDGSLDjhVlcGdslhSDLZGXLJHDVLUSDYFLDGLZDUYGLZUYCGLZDUYK, {session?.user?.name || 'User'}!
      </Typography>
  );
}

HomePage.requireAuth = true;
