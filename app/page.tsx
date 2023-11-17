import AboutUs from "./AboutUs";
import Contact from "./Contact";
import TheTeam from "./TheTeam";
import Timeline from "./timeline";
import Hero from "./Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-4">
      <Hero/>
      <AboutUs/>
      <Timeline/>
      <TheTeam/>
      <Contact/>
    </main>
  )
}
