import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllConsultants from "./pages/consultants/AllConsultants_Datagrid";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/consultants" exact element={<AllConsultants />} />
      </Routes>
    </Layout>
  );
}

export default App;
