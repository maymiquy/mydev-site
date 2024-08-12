import { Navigation } from "../../components/ui/nav";
import { Footer } from "../../components/ui/footer";

export default function ProfileLayout({ children }) {
 return (
  <main className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
   <Navigation />
   <div className="w-full md:pt-4">
    <div className="h-fit w-full flex justify-center items-center mx-auto md:px-8 max-w-7xl py-16 px-6">
     {children}
    </div>
   </div>
   <Footer />
  </main>
 );
}
