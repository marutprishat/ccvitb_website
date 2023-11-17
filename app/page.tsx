import About from "./About";
import Contact from "./Contact";
import TheTeam from "./TheTeam";
import Hero from "./Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero/>
      <About/>
      <TheTeam/>
      <Contact/>
    </main>
  )
}
