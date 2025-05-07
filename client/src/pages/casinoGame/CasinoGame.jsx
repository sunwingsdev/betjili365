import GamePages from "@/components/GamePages";
import { useOutletContext } from "react-router-dom";

const CasinoGame = () => {
  const { menuItems } = useOutletContext();
  const casinoData = menuItems.find((item) => item.name === "ক্যাসিনো");

  // 🎮 Game Providers List
  const gameProviders = [
    "Evolution",
    "Sexy",
    "Pragmatic Play",
    "Playtech",
    "Microgaming",
    "HotRoad",
    "Dream Gaming",
    "BG",
    "Viacasino",
  ];
  // 🎲 Game Types List
  const gameTypes = [
    "সিক বো",
    " টপ গেমস",
    "ব্যাকারাত",
    "গেম শো",
    "রুলেট",
    "পোকার",
    "ব্ল্যাকজ্যাক",
    "ফার্স্ট পারসন ",
  ];

  return (
    <GamePages
      gameData={casinoData}
      gameTypes={gameTypes}
      gameProviders={gameProviders}
    />
  );
};

export default CasinoGame;
