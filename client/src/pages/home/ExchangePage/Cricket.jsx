import ExchangeBanner from "@/components/exchange-page/ExchangeBanner";
import ExchangeFooter from "@/components/exchange-page/ExchangeFooter";
import kv01 from "../../../assets/exchange/KV01.jpg";
import ExchangeHomeTabContent from "@/components/exchange-page/ExchangeHomeTabContent";

const Cricket = () => {
  const sportsData = {
    cricket: [
      {
        onlineStatus: "online",
        teams: "Multan Sultan SRL T20 v Islamabad United SRL T20",
        link: "/multan-v-islamabad",
        status: "in-play",
        action: "live",
        category: "e-cricket",
        tag: "P",
        amount: "BDT0",
        values: ["--", "--", "--", "--", "--", "--"],
      },
      {
        onlineStatus: "offline",
        teams: "South Africa v Pakistan",
        link: "/sa-v-pak",
        status: "Starting in 1 min",
        action: "",
        category: "E Cricket",
        tag: "P",
        amount: "BDT120",
        values: ["1.30", "--", "1.50", "--", "2.00", "--"],
      },
      {
        onlineStatus: "offline",
        teams: "Zimbabwe v Afghanistan",
        link: "/zim-v-afg",
        status: "Tomorrow 00:00",
        action: "",
        category: "E Cricket",
        tag: ["F", "B"],
        amount: "BDT120",
        values: ["1.30", "--", "1.50", "--", "2.00", "--"],
      },
    ],
    soccer: [
      {
        onlineStatus: "online",
        teams: "Manchester United v Chelsea",
        link: "/manu-v-che",
        status: "in-play",
        action: "live",
        category: "Soccer",
        tag: "P",
        amount: "BDT200",
        values: ["1.75", "--", "3.20", "--", "4.50", "--"],
      },
      {
        onlineStatus: "offline",
        teams: "Real Madrid v Barcelona",
        link: "/rm-v-barca",
        status: "Starting in 5 mins",
        action: "",
        category: "Soccer",
        tag: "P",
        amount: "BDT150",
        values: ["1.90", "--", "3.10", "--", "3.80", "--"],
      },
    ],
    tennis: [
      {
        onlineStatus: "online",
        teams: "Novak Djokovic v Rafael Nadal",
        link: "/djokovic-v-nadal",
        status: "in-play",
        action: "live",
        category: "Tennis",
        tag: "P",
        amount: "BDT300",
        values: ["1.60", "--", "2.40", "--", "--", "--"],
      },
      {
        onlineStatus: "offline",
        teams: "Roger Federer v Andy Murray",
        link: "/federer-v-murray",
        status: "Tomorrow 10:00 AM",
        action: "",
        category: "Tennis",
        tag: "F",
        amount: "BDT120",
        values: ["1.80", "--", "2.10", "--", "--", "--"],
      },
    ],
    eSoccer: [
      {
        onlineStatus: "online",
        teams: "Team A v Team B",
        link: "/teamA-v-teamB",
        status: "in-play",
        action: "live",
        category: "E-Soccer",
        tag: "P",
        amount: "BDT100",
        values: ["2.10", "--", "3.00", "--", "4.20", "--"],
      },
      {
        onlineStatus: "offline",
        teams: "Team X v Team Y",
        link: "/teamX-v-teamY",
        status: "Starting in 10 mins",
        action: "",
        category: "E-Soccer",
        tag: "P",
        amount: "BDT50",
        values: ["1.90", "--", "3.50", "--", "4.00", "--"],
      },
    ],
    kabaddi: [
      {
        onlineStatus: "online",
        teams: "Bengal Warriors v Patna Pirates",
        link: "/bengal-v-patna",
        status: "in-play",
        action: "live",
        category: "Kabaddi",
        tag: "P",
        amount: "BDT50",
        values: ["1.70", "--", "2.50", "--", "--", "--"],
      },
      {
        onlineStatus: "offline",
        teams: "U Mumba v Jaipur Pink Panthers",
        link: "/umumba-v-jaipur",
        status: "Tomorrow 06:00 PM",
        action: "",
        category: "Kabaddi",
        tag: "B",
        amount: "BDT75",
        values: ["2.00", "--", "3.00", "--", "4.00", "--"],
      },
    ],
    election: [
      // {
      //   onlineStatus: "online",
      //   teams: "Candidate A v Candidate B",
      //   link: "/candidateA-v-candidateB",
      //   status: "in-play",
      //   action: "live",
      //   category: "Election",
      //   tag: "P",
      //   amount: "BDT500",
      //   values: ["1.20", "--", "4.50", "--", "--", "--"],
      // },
      // {
      //   onlineStatus: "offline",
      //   teams: "Candidate X v Candidate Y",
      //   link: "/candidateX-v-candidateY",
      //   status: "Starting in 1 hour",
      //   action: "",
      //   category: "Election",
      //   tag: "F",
      //   amount: "BDT300",
      //   values: ["1.50", "--", "3.50", "--", "--", "--"],
      // },
    ],
  };
  return (
    <div>
      <ExchangeBanner img={kv01} />
      <ExchangeHomeTabContent tableData={sportsData?.cricket} />
      <ExchangeFooter />
    </div>
  );
};

export default Cricket;
