import React from "react";
import Header from "../components/Header";
import MisOrdenes from "../containers/MisOrdenes";
import Layout from "../containers/Layout";

const MisOrdenesPage = () => {
    return (
        <Layout>
            <Header />
            <MisOrdenes />
        </Layout>
    );
};

export default MisOrdenesPage;
