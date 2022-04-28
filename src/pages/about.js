import * as React from "react";
// Component imports
import { Nav } from "../components/homepage/Navbar";
import { Footer } from "../components/homepage/Footer";
import { AboutContent } from "../components/nav-tabs/AboutPage";

const AboutPage = () => {
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
      <AboutContent />
      <Footer links={footerItems} />
    </main>
  )
}

export default AboutPage;
