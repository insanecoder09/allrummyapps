import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";

function Home() {
  const bestForAllGames = [
    {
      name: "Rummy East",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://rummy888999.com//?from_gameid=14144156&channelCode=2799582",
    },
    {
      name: "Rummy Perfect",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://rummy58.com/?code=11773877",
    },
    {
      name: "MBM Bet",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://www.mbmagent.com/?code=UPHRWC7UUX5&t=1716300919",
    },
    {
      name: "567 Slots",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://www.567slotsagent.com/?code=9UXH9L91P9R&t=1716301037",
    },
    {
      name: "Yono 777",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://yono777agent.com/?code=F9M6JKBYK2L&t=1716301113",
    },
    {
      name: "Yono Rummy",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://download.yonoapk.com/?code=VIPLW81T4US&t=1716301189",
    },
    {
      name: "Yono Game",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://yonogamesapp.com/?code=7NYS7DVE&t=1716301257",
    },
    {
      name: "Yono Arcade",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://www.yonoarcadeapp.com/?code=F553L692FWZ&t=1716301474",
    },
    {
      name: "789 Jackpots",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://789jackpotsagent.com/?code=J7ZC4RMSKGN&t=1716301586",
    },
    {
      name: "Bingo 101",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://www.bingo101official.com/?code=3WF2M8RR9VG&t=1716301652",
    },
    {
      name: "ICIC Games",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://www.icicgamesagent.com/?code=8FW2DDQPH79&t=1716301712",
    },
    {
      name: "MDM Bet",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://www.mdmbet.app/?code=0G7R21W8A2X&t=1716301774",
    },
    {
      name: "MKM Bet",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://www.mkmbet.app/?code=MJ0334CN93F&t=1716301833",
    },
    {
      name: "Spin Crush",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://www.spincrushagent.com/?code=ADE41ZABJNB&t=1716301935",
    },
    {
      name: "Spin Lucky",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://www.spinluckys.com/?code=FQ0M4L81HQH&t=1716302001",
    },
    {
      name: "Spin 777",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://www.spin777a.in/?code=7V9K5D7765G&t=1716302085",
    },
    {
      name: "Yes 3 Patti",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "http://yes3pattidl.com/?from_gameid=11209288&channelCode=200000",
    },
    {
      name: "Rio 3 Patti",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "http://rio3pattidl.com/?from_gameid=7726381&channelCode=100000",
    },
    {
      name: "SVIP 3 Patti",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://svip3pattiag.com/?from_gameid=4729992&channelCode=100000",
    },
    {
      name: "Rummy Golds",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://rummygolds.com/?from_gameid=1242136&channelCode=1241993",
    },
  ];

  const newApps = [
    {
      name: "Rummy East",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://rummy888999.com//?from_gameid=14144156&channelCode=2799582",
    },
    {
      name: "Rummy Perfect",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://rummy58.com/?code=11773877",
    },
    {
      name: "MBM Bet",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://www.mbmagent.com/?code=UPHRWC7UUX5&t=1716300919",
    },
    {
      name: "567 Slots",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://www.567slotsagent.com/?code=9UXH9L91P9R&t=1716301037",
    },
    {
      name: "Yono 777",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://yono777agent.com/?code=F9M6JKBYK2L&t=1716301113",
    },
    {
      name: "Yono Rummy",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://download.yonoapk.com/?code=VIPLW81T4US&t=1716301189",
    },
    {
      name: "Yono Game",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://yonogamesapp.com/?code=7NYS7DVE&t=1716301257",
    },
    {
      name: "Yono Arcade",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://www.yonoarcadeapp.com/?code=F553L692FWZ&t=1716301474",
    },
    {
      name: "789 Jackpots",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://789jackpotsagent.com/?code=J7ZC4RMSKGN&t=1716301586",
    },
    {
      name: "Bingo 101",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://www.bingo101official.com/?code=3WF2M8RR9VG&t=1716301652",
    },
    {
      name: "ICIC Games",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://www.icicgamesagent.com/?code=8FW2DDQPH79&t=1716301712",
    },
    {
      name: "MDM Bet",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://www.mdmbet.app/?code=0G7R21W8A2X&t=1716301774",
    },
    {
      name: "MKM Bet",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://www.mkmbet.app/?code=MJ0334CN93F&t=1716301833",
    },
    {
      name: "Spin Crush",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://www.spincrushagent.com/?code=ADE41ZABJNB&t=1716301935",
    },
    {
      name: "Spin Lucky",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://www.spinluckys.com/?code=FQ0M4L81HQH&t=1716302001",
    },
    {
      name: "Spin 777",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://www.spin777a.in/?code=7V9K5D7765G&t=1716302085",
    },
    {
      name: "Yes 3 Patti",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "http://yes3pattidl.com/?from_gameid=11209288&channelCode=200000",
    },
    {
      name: "Rio 3 Patti",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "http://rio3pattidl.com/?from_gameid=7726381&channelCode=100000",
    },
    {
      name: "SVIP 3 Patti",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://svip3pattiag.com/?from_gameid=4729992&channelCode=100000",
    },
    {
      name: "Rummy Golds",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://rummygolds.com/?from_gameid=1242136&channelCode=1241993",
    },
  ];

  const teenPatti = [
    {
      name: "Rummy East",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://rummy888999.com//?from_gameid=14144156&channelCode=2799582",
    },
    {
      name: "Rummy Perfect",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://rummy58.com/?code=11773877",
    },
    {
      name: "MBM Bet",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://www.mbmagent.com/?code=UPHRWC7UUX5&t=1716300919",
    },
    {
      name: "567 Slots",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://www.567slotsagent.com/?code=9UXH9L91P9R&t=1716301037",
    },
    {
      name: "Yono 777",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://yono777agent.com/?code=F9M6JKBYK2L&t=1716301113",
    },
    {
      name: "Yono Rummy",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://download.yonoapk.com/?code=VIPLW81T4US&t=1716301189",
    },
    {
      name: "Yono Game",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://yonogamesapp.com/?code=7NYS7DVE&t=1716301257",
    },
    {
      name: "Yono Arcade",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://www.yonoarcadeapp.com/?code=F553L692FWZ&t=1716301474",
    },
    {
      name: "789 Jackpots",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://789jackpotsagent.com/?code=J7ZC4RMSKGN&t=1716301586",
    },
    {
      name: "Bingo 101",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://www.bingo101official.com/?code=3WF2M8RR9VG&t=1716301652",
    },
    {
      name: "ICIC Games",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://www.icicgamesagent.com/?code=8FW2DDQPH79&t=1716301712",
    },
    {
      name: "MDM Bet",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://www.mdmbet.app/?code=0G7R21W8A2X&t=1716301774",
    },
    {
      name: "MKM Bet",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://www.mkmbet.app/?code=MJ0334CN93F&t=1716301833",
    },
    {
      name: "Spin Crush",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://www.spincrushagent.com/?code=ADE41ZABJNB&t=1716301935",
    },
    {
      name: "Spin Lucky",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://www.spinluckys.com/?code=FQ0M4L81HQH&t=1716302001",
    },
    {
      name: "Spin 777",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: "https://www.spin777a.in/?code=7V9K5D7765G&t=1716302085",
    },
    {
      name: "Yes 3 Patti",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "http://yes3pattidl.com/?from_gameid=11209288&channelCode=200000",
    },
    {
      name: "Rio 3 Patti",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "http://rio3pattidl.com/?from_gameid=7726381&channelCode=100000",
    },
    {
      name: "SVIP 3 Patti",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://svip3pattiag.com/?from_gameid=4729992&channelCode=100000",
    },
    {
      name: "Rummy Golds",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink:
        "https://rummygolds.com/?from_gameid=1242136&channelCode=1241993",
    },
  ];

  const games = [bestForAllGames, newApps, teenPatti];

  const [selected, setSelected] = useState(0);
  const [searched, setSearched] = useState("");
  const [apps, setApps] = useState(games[selected]);

  useEffect(() => {
    setApps(() => {
      let filtered = games[selected].filter((app) => {
        if (app.name.toLowerCase().includes(searched.toLowerCase())) return app;
      });
      return filtered;
    });
  }, [selected, searched]);

  return (
    <div className=" overflow-y-scroll h-[90%]">
      <div className="banner w-full h-36 bg-blue-300"></div>

      <div className="w-full h-fit bg-white flex items-center justify-between px-5">
        <div className="h-fit w-fit bg-zinc-600 flex flex-col items-center p-2 rounded-md relative">
          <h1 className=" h-[20px] w-[20px] text-white bg-black rounded-full flex items-center justify-center absolute top-[-10px]">2</h1>
          <div className="h-14 w-14 bg-red-400 rounded-md"></div>
          <h1 className=" text-xs text-yellow-500 flex"><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></h1>
          <h1 className=" text-white text-[8px] flex items-center"><FaCheckCircle color="" />100% Safe & Secure</h1>
          <a
            target="_blank"
            href={bestForAllGames[1].downloadLink}
            className="px-2 py-[2px] rounded download text-[10px] cursor-pointer"
          >
            Download
          </a>
        </div>
        <div className="h-fit w-fit bg-zinc-600 flex flex-col items-center p-2 rounded-md relative">
          <h1 className=" h-[22px] w-[22px] text-white bg-black rounded-full flex items-center justify-center absolute top-[-11px]">1</h1>
          <div className="h-16 w-16 bg-red-400 rounded-md"></div>
          <h1 className=" text-xs text-yellow-500 flex"><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></h1>
          <h1 className=" text-white text-[8px] flex items-center"><FaCheckCircle color="" />100% Safe & Secure</h1>
          <a
            target="_blank"
            href={bestForAllGames[0].downloadLink}
            className="px-2 py-[2px] rounded download text-[13px] cursor-pointer"
          >
            Download
          </a>
        </div>
        <div className="h-fit w-fit bg-zinc-600 flex flex-col items-center p-2 rounded-md relative">
          <h1 className=" h-[20px] w-[20px] text-white bg-black rounded-full flex items-center justify-center absolute top-[-10px]">3</h1>
          <div className="h-14 w-14 bg-red-400 rounded-md"></div>
          <h1 className=" text-xs text-yellow-500 flex"><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></h1>
          <h1 className=" text-white text-[8px] flex items-center"><FaCheckCircle color="" />100% Safe & Secure</h1>
          <a
            target="_blank"
            href={bestForAllGames[2].downloadLink}
            className="px-2 py-[2px] rounded download text-[10px] cursor-pointer"
          >
            Download
          </a>
        </div>
      </div>

      {/* Searching */}
      <div className="px-3 mt-3">
        <input
          type="text"
          value={searched}
          onChange={(e) => {
            setSearched(e.target.value);
          }}
          placeholder="search apps"
          className=" w-full border border-black py-1 px-2 rounded-md bg-sky-300 bg-opacity-40"
        />
      </div>

      {/* Buttons */}
      <div className="h-8 flex mt-3 px-1 gap-1 text-sm ">
        <button
          onClick={() => {
            setSelected(0);
            setSearched("");
          }}
          className={`w-full h-full rounded-md ${
            selected == 0 ? "bg-blue-300" : "bg-red-400"
          }`}
        >
          Best For All
        </button>
        <button
          onClick={() => {
            setSelected(1);
            setSearched("");
          }}
          className={`w-full h-full rounded-md ${
            selected == 1 ? "bg-blue-300" : "bg-red-400"
          }`}
        >
          New App
        </button>
        <button
          onClick={() => {
            setSelected(2);
            setSearched("");
          }}
          className={`w-full h-full rounded-md ${
            selected == 2 ? "bg-blue-300" : "bg-red-400"
          }`}
        >
          Teenpatti Apps
        </button>
      </div>

      <div>
        {apps.map((app, index) => {
          return (
            <div
              className="w-full h-20 border-b border-black my-2 flex justify-between items-center px-4"
              key={index}
            >
              <div className="flex gap-3 items-center">
                <div className="h-12 w-12 bg-red-400 rounded-md"></div>
                <div className="">
                  <h1 className="text-[14px] ">{app.name}</h1>
                  <div className="flex items-center gap-1 text-[10px] ">
                    <h1 className="text-yellow-400">D: {app.downloads}</h1>
                    <div className="h-3 w-[1px] bg-zinc-500"></div>
                    <h1>Bonus {app.bonus}</h1>
                  </div>
                  <h1 className=" text-green-700 text-[12px] font-bold">
                    Min Withrawal {app.minWithdrawal}
                  </h1>
                </div>
              </div>
              <a
                target="_blank"
                href={app.downloadLink}
                className="px-2 py-[2px] rounded download text-[13px] cursor-pointer"
              >
                Download
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
