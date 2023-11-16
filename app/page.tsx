import About from "./About";
import Contact from "./Contact";
import TheTeam from "./TheTeam";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <About/>
      <TheTeam/>
      <Contact/>
    </main>
  )
}
