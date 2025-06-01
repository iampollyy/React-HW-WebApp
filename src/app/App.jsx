import React from 'react';
import { Layout } from "@ui/layout/Layout.jsx";
import {AppRoutes} from "@routes/appRoutes";

const App = () => {
    return (
                <Layout>
                    <AppRoutes />
                </Layout>
    );
  }


export default App;