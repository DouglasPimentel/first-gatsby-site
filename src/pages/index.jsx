import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage
        src="../images/phil-botha-a0TJ3hy-UD8-unsplash.jpg"
        alt="fiordland national park"
      />
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
}
