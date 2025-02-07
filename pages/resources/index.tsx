import * as React from 'react';
import Typography from '@mui/material/Typography';
import { App } from "@/components/MetaTest"
import * as meta from "@/components/MetaTest"
import { useSDK } from '@metamask/sdk-react';
export default function Public() {
  
  const web3 = useSDK();
  return (
    <div>
    <>
 {web3.account}

    </>
  </div>

  );
}

Public.requireAuth = true;
