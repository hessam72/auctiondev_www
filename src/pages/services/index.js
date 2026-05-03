import React from "react";
import Layout from "../../components/Layout/layout";
import Hero from "./hero";
import Statistics from "./statistics";
import ServicesContent from "./servicesContent";
import Testimonials from "./testimonials";
import Clients from "./clients";

function Services() {
  return (
    <Layout>
      {/* <!-- Hero--> */}
      <Hero />
      {/* <!-- Statistics--> */}
      <Statistics />
      {/* <!-- Services--> */}
      <ServicesContent />
      {/* <!-- Clients--> */}
      <Clients />

      <Testimonials />
    </Layout>
  );
}

export default Services;
