import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useSession } from 'next-auth/react';
export default function HomePage() {
  const { data: session } = useSession();

  return (    
    <Typography variant="h1">
      Hello, {session?.user?.name ?? 'visitor'}!
    </Typography>
 
  )
}

HomePage.requireAuth = true;
