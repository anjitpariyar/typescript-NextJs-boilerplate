import Layout from "components/layout/Layout";
import Greeting from "components/home/Greeting";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Greeting message={"Hello World with test"} />
  </Layout>
);

export default IndexPage;
