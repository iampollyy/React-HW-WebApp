import React from 'react';
import  Layout from "@ui/layout/Layout";
import  AppRoutes  from "@router/AppRoutes";

import useAuthListener  from '@features/auth/authListener';

const App: React.FC = () => {
  useAuthListener();

    return (
                <Layout>
                    <AppRoutes />
                </Layout>
    );
  }


export default App;
