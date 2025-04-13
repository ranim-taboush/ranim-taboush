import Head from 'next/head';
import BackgroundBoxes from '@/components/BackgroundBoxes';
import Introduction from '@/components/Introduction';
import Summary from '@/components/Summary';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <BackgroundBoxes />
        <main className="relative z-10">
          <Introduction />
          <Summary />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}
