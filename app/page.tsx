import About from "./About";
import TheTeam from "./TheTeam";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <About/>
      <TheTeam/>
    </main>
  )
}
