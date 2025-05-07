import GamePages from "@/components/GamePages";
import { useOutletContext } from "react-router-dom";

const Slot = () => {
  const { menuItems } = useOutletContext();
  const slotData = menuItems.find((item) => item.name === "স্লট");

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
      gameData={slotData}
      gameTypes={gameTypes}
      gameProviders={gameProviders}
    />
  );
};

export default Slot;
