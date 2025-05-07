const HomeGames = () => {
  const games = [
    {
      id: 1,
      image:
        "https://img.b112j.com/upload/game/EVO/crazytime@CrazyTime0000001.png?v=1717402263065",
      title: "Evolution Crazy Time",
      subtitle: "Crazy",
    },
    {
      id: 2,
      image:
        "https://img.b112j.com/upload/game/EVO/sicbo@SuperSicBo000001.png?v=1717463157508",
      title: "Evolution Super Sic Bo",
      subtitle: "Crazy",
    },
    {
      id: 3,
      image:
        "https://img.b112j.com/upload/game/AWCMSEXY/MX-LIVE-001_SEXY_1.png?v=1725529632354",
      title: "Sexy Baccarat Classic-SEXY hall-Table1",
      subtitle: "Crazy",
    },
    {
      id: 4,
      image:
        "https://img.b112j.com/upload/game/EVO/monopoly@Monopoly00000001.png?v=1717404282418",
      title: "Evolution Monopoly Live",
      subtitle: "Crazy",
    },
    {
      id: 5,
      image:
        "https://img.b112j.com/upload/game/EVO/roulette@48z5pjps3ntvqc1b.png?v=1717401497320",
      title: "Evolution Auto-Roulette",
      subtitle: "Crazy",
    },
    {
      id: 6,
      image:
        "https://img.b112j.com/upload/game/EVO/crazytime@CrazyTime0000001.png?v=1717402263065",
      title: "Evolution Crazy Time",
      subtitle: "Crazy",
    },
    {
      id: 7,
      image:
        "https://img.b112j.com/upload/game/EVO/funkytime@FunkyTime0000001.png?v=1717403238250",
      title: "Evolution Funky Time",
      subtitle: "Crazy",
    },
    {
      id: 8,
      image:
        "https://img.b112j.com/upload/game/EVO/monopoly@Monopoly00000001.png?v=1717404282418",
      title: "Evolution Monopoly Live",
      subtitle: "Crazy",
    },
    {
      id: 9,
      image:
        "https://img.b112j.com/upload/game/EVO/sicbo@SuperSicBo000001.png?v=1717463157508",
      title: "Evolution Super Sic Bo",
      subtitle: "Crazy",
    },
    {
      id: 10,
      image:
        "https://img.b112j.com/upload/game/EVO/roulette@48z5pjps3ntvqc1b.png?v=1717401497320",
      title: "Evolution Auto-Roulette",
      subtitle: "Crazy",
    },
    {
      id: 11,
      image:
        "https://img.b112j.com/upload/game/EVO/monopoly@Monopoly00000001.png?v=1717404282418",
      title: "Evolution Monopoly Live",
      subtitle: "Crazy",
    },
    {
      id: 12,
      image:
        "https://img.b112j.com/upload/game/EVO/sicbo@SuperSicBo000001.png?v=1717463157508",
      title: "Evolution Super Sic Bo",
      subtitle: "Crazy",
    },
    {
      id: 13,
      image:
        "https://img.b112j.com/upload/game/EVO/roulette@48z5pjps3ntvqc1b.png?v=1717401497320",
      title: "Evolution Auto-Roulette",
      subtitle: "Crazy",
    },
    {
      id: 14,
      image:
        "https://img.b112j.com/upload/game/EVO/sicbo@SuperSicBo000001.png?v=1717463157508",
      title: "Evolution Super Sic Bo",
      subtitle: "Crazy",
    },
    {
      id: 15,
      image:
        "https://img.b112j.com/upload/game/EVO/roulette@48z5pjps3ntvqc1b.png?v=1717401497320",
      title: "Evolution Auto-Roulette",
      subtitle: "Crazy",
    },
    {
      id: 16,
      image:
        "https://img.b112j.com/upload/game/AWCMSEXY/MX-LIVE-001_SEXY_1.png?v=1725529632354",
      title: "Sexy Baccarat Classic-SEXY hall-Table1",
      subtitle: "Crazy",
    },
    {
      id: 17,
      image:
        "https://img.b112j.com/upload/game/EVO/funkytime@FunkyTime0000001.png?v=1717403238250",
      title: "Evolution Funky Time",
      subtitle: "Crazy",
    },
    {
      id: 18,
      image:
        "https://img.b112j.com/upload/game/AWCMSEXY/MX-LIVE-001_SEXY_1.png?v=1725529632354",
      title: "Sexy Baccarat Classic-SEXY hall-Table1",
      subtitle: "Crazy",
    },
    {
      id: 19,
      image:
        "https://img.b112j.com/upload/game/EVO/funkytime@FunkyTime0000001.png?v=1717403238250",
      title: "Evolution Funky Time",
      subtitle: "Crazy",
    },
  ];
  return (
    <div className="text-white md:hidden">
      <h2 className="border-s-[7px] ps-3 my-3 border-green-600 rounded ">
        বৈশিষ্ট্যযুক্ত গেম
      </h2>
      <div className="flex overflow-x-auto gap-4">
        {games.map((game) => (
          <div
            className="flex flex-col items-center gap-2 min-w-44"
            key={game.id}
          >
            <img className="w-full rounded-lg" src={game.image} alt="" />
            <p className="text-base">{game.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeGames;
