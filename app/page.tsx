import AboutUs from "./AboutUs";
import Contact from "./Contact";
import TheTeam from "./TheTeam";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pl-5 pr-5">
      <AboutUs/>
      <div id="Timeline"></div>
      <TheTeam/>
      <Contact/>
    </main>
  )
}
