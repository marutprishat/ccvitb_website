import TheTeam from "./TheTeam";
import Footer from "../components/footer/Footer.js";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <TheTeam/>
      <Footer/>
    </main>
  )
}
