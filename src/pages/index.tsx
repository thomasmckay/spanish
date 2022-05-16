import React from "react";

import { Layout } from '../components/Layout';
import { HomeContent } from "../components/homepage/HomePage";
import { Nav } from "../components/homepage/Navbar";

export default function IndexPage() {
  return (
    <Layout>
      <Nav />
      <HomeContent />
    </Layout>
  )
}
