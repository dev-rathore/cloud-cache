import CTA from "./cta";
import Features from "./features";
import Footer from "./footer";
import Header from "./header";
import Hero from "./hero";
import Pricing from "./pricing";
import Projects from "./projects";
import Testimonials from "./testimonials";

const Landing = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Projects />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
