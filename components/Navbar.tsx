import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ExternalLink } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-mcgill text-white shadow-md">
      <div className="border-b border-mcgill-pastel/40 bg-mcgill-vibrant">
        <div className="container mx-auto flex flex-col gap-2 px-3 py-2 text-center text-sm font-medium leading-snug sm:flex-row sm:items-center sm:justify-center sm:text-left">
          <span className="inline-flex items-center justify-center gap-2">
            <AlertTriangle
              className="h-4 w-4 shrink-0 text-mcgill-pastel"
              aria-hidden="true"
            />
            <span>
              This is an archive of the 2024 McGill Esports Association website.
            </span>
          </span>
          <Link
            href="https://www.mcgillesports.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 font-semibold text-mcgill-pastel underline decoration-mcgill-pastel/70 underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mcgill-pastel focus-visible:ring-offset-2 focus-visible:ring-offset-mcgill-vibrant"
          >
            Visit the current site (as of June 2026)
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-3 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center bg-gray-100 rounded-xl">
          <Image
            src="/mesa_zoomed.png"
            alt="MESA Logo"
            width={60}
            height={60}
          />
        </Link>
        <Menubar className="bg-mcgill border-none">
          <MenubarMenu>
            <MenubarTrigger className="text-white hover:bg-mcgill-vibrant">
              Teams
            </MenubarTrigger>
            <MenubarContent className="bg-mcgill text-white">
              <MenubarItem>
                <Link href="/teams/rainbow-six-siege">Rainbow Six: Siege</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/teams/league-of-legends">League of Legends</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/teams/rocket-league">Rocket League</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/teams/valorant">Valorant</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/teams/overwatch-2">Overwatch 2</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/teams/apex">Apex Legends</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <Link
              href="https://linktr.ee/mcgillesports"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <MenubarTrigger className="text-white hover:bg-mcgill-vibrant">
                Linktree
              </MenubarTrigger>
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link
              href="https://discord.com/invite/mcgillesports"
              target="_blank"
              rel="noopener noreferrer"
              passHref
            >
              <MenubarTrigger className="text-white hover:bg-mcgill-vibrant">
                Discord
              </MenubarTrigger>
            </Link>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  );
};

export default Navbar;
