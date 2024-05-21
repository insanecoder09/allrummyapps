import React, { useEffect, useState } from "react";

function Home() {
  const bestForAllGames = [
    {
      name: "Rummy Moment",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: " Download",
    },
    {
      name: "Rummy Win APK",
      type: "Rummy",
      downloads: "241k+",
      bonus: "₹51",
      minWithdrawal: "₹100/-",
      downloadLink: " Download",
    },
    {
      name: "Rummy East APK",
      type: "Rummy",
      downloads: "300k+",
      bonus: "₹41",
      minWithdrawal: "₹100",
      downloadLink: " Download",
    },
    {
      name: "Rummy Perfect APK",
      type: "Rummy",
      downloads: "500k+",
      bonus: "₹62",
      minWithdrawal: "₹100",
      downloadLink: " Download",
    },
    {
      name: "Rummy Online",
      type: "Rummy",
      downloads: "500k+",
      bonus: "Upto ₹91",
      minWithdrawal: "₹100/-",
      downloadLink: " Download",
    },
    {
      name: "Rummy Wealth",
      type: "Rummy",
      downloads: "559k+",
      bonus: "₹51",
      minWithdrawal: "₹100/-",
      downloadLink: " Download",
    },
    {
      name: "Rummy Bash",
      type: "Rummy",
      downloads: "80k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      downloadLink: " Download",
    },
    {
      name: "Teen Patti Gold",
      type: "Teen Patti",
      downloads: "200k+",
      bonus: "₹30",
      minWithdrawal: "₹100/-",
      downloadLink: " Download",
    },
  ];

  const newApps = [
    {
      name: "New Rummy App",
      type: "Rummy",
      downloads: "00k+",
      bonus: "Rs.XX",
      minWithdrawal: "Rs.XX/-",
      status: "Coming Soon..",
    },
    {
      name: "Rummy Online APK",
      type: "Rummy",
      downloads: "500k+",
      bonus: "₹91",
      minWithdrawal: "₹100",
      downloadLink: " Download",
    },
    {
      name: "Rummy Leader APK",
      type: "Rummy",
      downloads: "90k+",
      bonus: "₹41",
      minWithdrawal: "₹100",
      downloadLink: " Download",
    },
    {
      name: "Rummy Mars APK",
      type: "Rummy",
      downloads: "105k+",
      bonus: "₹51",
      minWithdrawal: "₹100",
      downloadLink: " Download",
    },
    // Adding other games objects here...
  ];

  const froudApps = [
    {
      name: "Teen Patti Yes APK",
      type: "Teen Patti",
      downloads: "110k+",
      bonus: "Rs.--",
      minWithdrawal: "₹100",
      downloadLink: " Download",
    },
    {
      name: "Rummy Noble APK",
      type: "Rummy",
      downloads: "10k+",
      bonus: "Rs.41",
      minWithdrawal: "₹100/-",
      downloadLink: " Download",
    },
    {
      name: "Go Rummy",
      type: "Rummy",
      downloads: "167k+",
      bonus: "₹12",
      minWithdrawal: "₹100",
      downloadLink: " Download",
    },
    {
      name: "Rummy Yes APK",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹60",
      minWithdrawal: "₹100",
      downloadLink: " Download",
    },
    {
      name: "Teen Patti Sea",
      type: "Teen Patti",
      downloads: "410k+",
      bonus: "Rs.99",
      minWithdrawal: "₹100",
      downloadLink: " Download",
    },
    {
      name: "Rummy Most App",
      type: "Rummy",
      downloads: "15k+",
      bonus: "Rs.51",
      minWithdrawal: "₹100",
      downloadLink: " Download",
    },
    // Adding other games objects here...
  ];

  const games = [bestForAllGames, newApps, froudApps];

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
    <div>
      <div className="banner w-full h-36 bg-blue-300"></div>

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
                    <div className="h-4 w-[1px] bg-black"></div>
                    <h1>Bonus {app.bonus}</h1>
                  </div>
                  <h1 className=" text-green-700 text-[12px] font-bold">
                    Min Withrawal {app.minWithdrawal}
                  </h1>
                </div>
              </div>
              <button className="px-2 py-[2px] rounded download text-[13px]">
                Download
              </button>
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default Home;
