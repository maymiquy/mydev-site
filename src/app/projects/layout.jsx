import Footer from "../../components/ui/footer";
import { Navigation } from "../../components/ui/nav";

export default function ProjectsLayout({ children }) {
 return (
  <main className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
   <Navigation />
   {children}
   <Footer />
  </main>
 );
}
