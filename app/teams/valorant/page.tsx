import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultCard from "@/components/Cards/ResultCard";
import TeamMemberCard from "@/components/Cards/TeamMemberCard";
import CurrentRosterCard from "@/components/Cards/CurrentRosterCard";

export default function ValorantPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Valorant Team</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">About Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Our Collegiate VALORANT teams represent McGill in the NACE (National
            Association for Collegiate Esports) Starleague and CVal collegiate
            tournaments over the course of the year for prizes up to $5,000.
            VALORANT will be holding tryouts Sep 19-22 and Sep 26-29.
          </p>
          <h3 className="font-semibold mb-2">Competitive Schedule</h3>
          <ul className="list-disc pl-5">
            <li>
              <strong>NACE Starleague:</strong> Fall and Winter semester
              tournaments hosted by CSL.
            </li>
            <li>
              <strong>CVal:</strong>
              Fall and Winter semester tournaments hosted by Riot Games with 1
              match each weekend day.
            </li>
            <li>
              Teams are free to join additional tournaments at their discretion.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Recruitment</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold mb-2">Who are we looking for?</h3>
          <ul className="list-disc pl-5 mb-4">
            <li>Anybody interested in competitive VALORANT!</li>
            <li>
              Weekly commitment is 2-3 nights of practice/tournaments with ~3
              hours of practice on those nights.
            </li>
          </ul>
          <Link href="https://forms.gle/2WmcpHag9gK6Y4ub8" target="_blank">
            <Button className="bg-mcgill hover:bg-mcgill-vibrant">
              Join Our Team
            </Button>
          </Link>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mb-4">
        Winter 2026 Roster - Red
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-8">
        <CurrentRosterCard
          name="Alexander Lesiuk"
          ign="B0sBaby#BOSS"
          role="Duelist"
        />
        <CurrentRosterCard
          name="Alex Zhang"
          ign="path#803"
          role="Initiator/Flex"
        />
        <CurrentRosterCard
          name="Benjamin Bonaccorsi"
          ign="Benobi1Kenobi1#7291"
          role="Flex"
        />
        <CurrentRosterCard
          name="Alexandre Milland"
          ign="argon#1901"
          role="Controller"
        />
        <CurrentRosterCard
          name="Mark Yang"
          ign="Mkkkkkkk#KKKKK"
          role="Sentinel"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4">
        Winter 2026 Roster - White
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-8">
        <CurrentRosterCard
          name="Sammi Lai"
          ign="Slaykout"
          role="Controller/Duelist"
        />
        <CurrentRosterCard
          name="Rafiq Medjiba"
          ign="rafisick"
          role="Initiator/IGL"
        />
        <CurrentRosterCard name="Chris Chen" ign="Dogoflty" role="Duelist" />
        <CurrentRosterCard
          name="Michael Ha"
          ign="Tsunami"
          role="Duelist/Controller"
        />
        <CurrentRosterCard
          name="erika ryan"
          ign="akirer"
          role="Sentinel/Smokes"
        />
        <CurrentRosterCard
          name="Ian Ma"
          ign="Dynamo"
          role="Analyst/Sub (Flex)"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Fall 2024 Roster</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        <TeamMemberCard name="Jay" role="" icon="/valorant/Jay.jpg" />
        <TeamMemberCard name="lilho" role="" icon="/valorant/lilho.jpg" />
        <TeamMemberCard name="arColm" role="" icon="/valorant/arColm.jpg" />
        <TeamMemberCard name="smash" role="" icon="/valorant/smash.jpg" />
        <TeamMemberCard name="Singe" role="" icon="/valorant/Singe.jpg" />
        {/* Add more TeamMemberCards as needed */}
      </div>
    </div>
  );
}
