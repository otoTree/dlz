import Header from '@/components/headerC';
import Hero from '@/components/heroC';
import About from '@/components/aboutC';
import Capabilities from '@/components/capabilitiesC';
import Showroom from '@/components/showroomC';
import ContactForm from '@/components/contactC';
import Footer from '@/components/footerC';

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
