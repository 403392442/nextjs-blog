import Layout from "@/src/layout/Layout";
import About from "components/About";
import Home from "components/Home";
import Skill from "components/Skill";
import Experience from "components/Experience";

const Index = () => {
    return (
        <Layout>
            <Home/>
            <About/>
            <Skill/>
            <Experience />
        </Layout>
    );
};
export default Index;
