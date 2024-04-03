import { Footer } from "../../components/partials/footer";
import { Navigation } from "../../components/partials/nav";

export default function ContactLayout({ children }) {
 return (
  <main className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
   <Navigation />
   {children}
   <Footer />
  </main>
 );
}
