import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Capabilities from '@/components/capabilities';
import Showroom from '@/components/showroom';
import ContactForm from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Capabilities />
      <Showroom />
      <ContactForm />
      <Footer />
    </main>
  );
}
