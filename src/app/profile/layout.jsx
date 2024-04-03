import { Navigation } from "../../components/partials/nav";
import { Footer } from "../../components/partials/footer";

export default function ProfileLayout({ children }) {
 return (
  <main className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
   <Navigation />
   {children}
   <Footer />
  </main>
 );
}
