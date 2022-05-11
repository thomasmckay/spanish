import * as React from "react";
// Component imports
import { HomeContent } from "../components/homepage/HomePage";
import { AboutFeatures } from "../components/homepage/About";
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";

const IndexPage = () => {
  const navItems = [
    {
      "link": "/about",
      "label": "About"
    },
  ]

  const footerItems = [
    {
      "link": "https://openinfra.dev/legal/code-of-conduct",
      "label": "Code of Conduct"
    },
  ]

  return (
    <main>
      <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
      <Nav links={navItems} />
      <HomeContent />
      <AboutFeatures />
      <Footer links={footerItems}/>
    </main>
  )
}

export default IndexPage;
