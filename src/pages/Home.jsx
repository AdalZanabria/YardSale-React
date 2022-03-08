import React from "react";
import Header from "../components/Header";
import Inicio from "../containers/Inicio";
import Layout from "../containers/Layout";

const Home = () => {
    return (
        <Layout>
            <Header />
            <Inicio />
        </Layout>
    );
};

export default Home;
