import React from "react";
import Header from "../components/Header";
import MiOrden from "../containers/MiOrden";
import Layout from "../containers/Layout";

const MiOrdenPage = () => {
    return (
        <Layout>
            <Header />
            <MiOrden />
        </Layout>
    );
};

export default MiOrdenPage;
