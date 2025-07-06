import React from 'react';
import { Layout } from "@ui";
import { AppRoutes } from "@router";

import { useAuthListener } from '@features';

const App: React.FC = () => {
  useAuthListener();

    return (
                <Layout>
                    <AppRoutes />
                </Layout>
    );
  }


export default App;
