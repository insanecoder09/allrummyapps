import React from "react";
import { BsInstagram } from "react-icons/bs";
import {
  FaCheckCircle,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import { IoPerson, IoTrophySharp } from "react-icons/io5";
import { MdCall, MdDownloadForOffline, MdPrivacyTip } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Games() {
  const navigate = useNavigate();
  const games = [
    {
      name: "Rummy East",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776157/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.36_AM_lmvele.jpg",
      downloadLink:
        "https://rummy888999.com//?from_gameid=14144156&channelCode=2799582",
    },
    {
      name: "Rummy Perfect",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹44",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776157/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.36_AM_1_vpeqw4.jpg",
      downloadLink: "https://rummy58.com/?code=11773877",
    },
    {
      name: "MBM Bet",
      type: "Rummy",
      downloads: "200k+",
      bonus: "Upto ₹100",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776157/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.37_AM_f78xug.jpg",
      downloadLink: "https://www.mbmagent.com/?code=UPHRWC7UUX5&t=1716300919",
    },
    {
      name: "567 Slots",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹20-₹70",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776157/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.37_AM_1_tz4d3o.jpg",
      downloadLink:
        "https://www.567slotsagent.com/?code=9UXH9L91P9R&t=1716301037",
    },
    {
      name: "Yono 777",
      type: "Rummy",
      downloads: "200k+",
      bonus: "Upto ₹50",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776157/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.38_AM_q4ivz0.jpg",
      downloadLink: "https://yono777agent.com/?code=F9M6JKBYK2L&t=1716301113",
    },
    {
      name: "Yono Rummy",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹20-₹50",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776156/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.38_AM_1_kc45bm.jpg",
      downloadLink:
        "https://download.yonoapk.com/?code=VIPLW81T4US&t=1716301189",
    },
    {
      name: "Yono Game",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹30-₹100",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776156/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.38_AM_1_kc45bm.jpg",
      downloadLink: "https://yonogamesapp.com/?code=7NYS7DVE&t=1716301257",
    },
    {
      name: "Yono Arcade",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹30-₹80",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776156/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.38_AM_2_dt1uky.jpg",
      downloadLink:
        "https://www.yonoarcadeapp.com/?code=F553L692FWZ&t=1716301474",
    },
    {
      name: "789 Jackpots",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹20-₹80",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776156/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.39_AM_rmfcjz.jpg",
      downloadLink:
        "https://789jackpotsagent.com/?code=J7ZC4RMSKGN&t=1716301586",
    },
    {
      name: "Bingo 101",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹25-₹50",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776155/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.39_AM_1_dcr2tp.jpg",
      downloadLink:
        "https://www.bingo101official.com/?code=3WF2M8RR9VG&t=1716301652",
    },
    {
      name: "ICIC Games",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹20-₹100",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776155/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.39_AM_2_ibtbpl.jpg",
      downloadLink:
        "https://www.icicgamesagent.com/?code=8FW2DDQPH79&t=1716301712",
    },
    {
      name: "MDM Bet",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹20-₹80",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776157/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.40_AM_q68p82.jpg",
      downloadLink: "https://www.mdmbet.app/?code=0G7R21W8A2X&t=1716301774",
    },
    {
      name: "MKM Bet",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹30-₹100",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776156/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.40_AM_1_o7kies.jpg",
      downloadLink: "https://www.mkmbet.app/?code=MJ0334CN93F&t=1716301833",
    },
    {
      name: "Spin Crush",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹10-₹25",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776156/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.40_AM_1_o7kies.jpg",
      downloadLink:
        "https://www.spincrushagent.com/?code=ADE41ZABJNB&t=1716301935",
    },
    {
      name: "Spin Lucky",
      type: "Rummy",
      downloads: "200k+",
      bonus: " ₹8-₹25",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776156/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.41_AM_1_ywllsc.jpg",
      downloadLink: "https://www.spinluckys.com/?code=FQ0M4L81HQH&t=1716302001",
    },
    {
      name: "Spin 777",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹20-₹100",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776156/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.41_AM_2_glxyni.jpg",
      downloadLink: "https://www.spin777a.in/?code=7V9K5D7765G&t=1716302085",
    },
    {
      name: "Yes 3 Patti",
      type: "Rummy",
      downloads: "200k+",
      bonus: "Upto ₹500",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776155/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.42_AM_geqpgz.jpg",
      downloadLink:
        "http://yes3pattidl.com/?from_gameid=11209288&channelCode=200000",
    },
    {
      name: "Rio 3 Patti",
      type: "Rummy",
      downloads: "200k+",
      bonus: "Upto ₹500",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776155/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.42_AM_1_hxdq7q.jpg",
      downloadLink:
        "http://rio3pattidl.com/?from_gameid=7726381&channelCode=100000",
    },
    {
      name: "SVIP 3 Patti",
      type: "Rummy",
      downloads: "200k+",
      bonus: "Upto ₹500",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776155/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.43_AM_mcdd4f.jpg",
      downloadLink:
        "https://svip3pattiag.com/?from_gameid=4729992&channelCode=100000",
    },
    {
      name: "Rummy Golds",
      type: "Rummy",
      downloads: "200k+",
      bonus: "₹41",
      minWithdrawal: "₹100/-",
      appLogo:
        "https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716776155/Rummy-Logos/WhatsApp_Image_2024-05-26_at_5.54.43_AM_1_uy5dwp.jpg",
      downloadLink:
        "https://rummygolds.com/?from_gameid=1242136&channelCode=1241993",
    },
  ];

  return (
    <div className=" overflow-y-scroll h-[90%]">
      
      <div className="banner w-full h-fit bg-blue-300">
        <img
          src="https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716779232/Rummy-Logos/Screenshot_2024-05-27_083445_tvxujt.png"
          className="w-full"
          alt="banner"
        />
      </div>

      {/* top 3 */}
      <div className="w-full h-fit bg-white flex items-center justify-evenly">
        <div className="h-fit w-fit bg-zinc-200 flex flex-col items-center p-2 rounded-md relative">
          <h1 className=" h-[20px] w-[20px] text-white bg-black rounded-full flex items-center justify-center absolute top-[-10px]">
            2
          </h1>
          <div className="h-16 w-16 bg-red-400 rounded-md overflow-hidden">
            <img src={games[1].appLogo} alt="" />
          </div>
          <img className="w-[70px] my-1" src="https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716878038/Rummy-Logos/rummybonusapp_star_rating_sij4ii.gif" alt="" />
          <h1 className=" text-black text-[9px] flex items-center">
            <FaCheckCircle color="" />
            100% Safe & Secure
          </h1>
          <a
            target="_blank"
            href={games[1].downloadLink}
            className="px-2 py-[3px] rounded download text-[10px] cursor-pointer mt-2 flex items-center justify-center gap-1"
          >
            <MdDownloadForOffline />
            Download
          </a>
        </div>
        <div className="h-fit w-fit bg-zinc-200 flex flex-col items-center p-2 rounded-md relative mb-8">
          <h1 className=" h-[22px] w-[22px] text-white bg-black rounded-full flex items-center justify-center absolute top-[-11px]">
            1
          </h1>
          <div className="h-[70px] w-[70px] bg-red-400 rounded-md overflow-hidden">
            <img src={games[0].appLogo} alt="" />
          </div>
           <img className="w-[80px] my-1" src="https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716878038/Rummy-Logos/rummybonusapp_star_rating_sij4ii.gif" alt="" />
          <h1 className=" text-black text-[10px] flex items-center">
            <FaCheckCircle color="" />
            100% Safe & Secure
          </h1>
          <a
            target="_blank"
            href={games[0].downloadLink}
            className="px-2 py-[3px] rounded download text-[13px] cursor-pointer mt-2 flex items-center justify-center gap-1"
          >
            <MdDownloadForOffline />
            Download
          </a>
        </div>
        <div className="h-fit w-fit bg-zinc-200 flex flex-col items-center p-2 rounded-md relative">
          <h1 className=" h-[20px] w-[20px] text-white bg-black rounded-full flex items-center justify-center absolute top-[-10px]">
            3
          </h1>
          <div className="h-16 w-16 bg-red-400 rounded-md overflow-hidden">
            <img src={games[2].appLogo} alt="" />
          </div>
           <img className="w-[70px] my-1" src="https://res.cloudinary.com/dhj9wvmmo/image/upload/v1716878038/Rummy-Logos/rummybonusapp_star_rating_sij4ii.gif" alt="" />
          <h1 className=" text-black text-[9px] flex items-center">
            <FaCheckCircle color="" />
            100% Safe & Secure
          </h1>
          <a
            target="_blank"
            href={games[2].downloadLink}
            className="px-2 py-[3px] rounded download text-[10px] cursor-pointer mt-2  flex items-center justify-center gap-1"
          >
            <MdDownloadForOffline />
            Download
          </a>
        </div>
      </div>

      <div className="px-3 mt-3">
        <h1 className=" w-full border border-black py-1 px-2 rounded-md bg-red-600 font-bold text-white text-center flex items-center justify-center gap-2 ">
          <IoTrophySharp />
          All Rummy Games
          <IoTrophySharp />
        </h1>
      </div>

      {/* list */}
      <div>
        {games.map((app, index) => {
          return (
            <div
              className="w-full h-20 border-b border-black my-2 flex justify-between items-center px-4"
              key={index}
            >
              <div className="flex gap-3 items-center">
                <div className="h-12 w-12 bg-red-400 rounded-md overflow-hidden">
                  {app.appLogo ? (
                    <img src={app.appLogo} className="w-full" alt="app logo" />
                  ) : (
                    <h1>Hello</h1>
                  )}
                </div>
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
                className="px-2 py-[3px] rounded download text-[13px] cursor-pointer  flex items-center justify-center gap-1"
              >
                <MdDownloadForOffline />
                Download
              </a>
            </div>
          );
        })}
      </div>

      <div class="bg-yellow-400 border-y-2 my-3 border-dashed border-red-500 p-2 marquee">
        <div class="font-bold text-gray-800 marquee-text">
          ALL RUMMY APP 2024, ALL RUMMY GAME 2024,
        </div>
      </div>

      {/* footer */}
      <div className="bg-blue-600 w-full p-3 flex justify-center flex-col gap-3">
        <div className="flex flex-wrap justify-center gap-2">
          <a
            href="https://www.instagram.com/earningplatform01?igsh=b25hanl0NGVma3du"
            target="_blank"
            className="p-2  rounded text-[13px] cursor-pointer flex items-center justify-center gap-1 w-fit text-white bg-pink-600"
          >
            <BsInstagram />
          </a>
          <a
            href="https://t.me/AllTypeLoots"
            target="_blank"
            className="px-2 py-[3px] rounded text-[13px] cursor-pointer flex items-center justify-center gap-1 w-fit bg-[#319edd] text-white"
          >
            <FaTelegram /> Join
          </a>
          <a
            href="https://youtube.com/@alltypeloot?si=lOVPslnxQwjoasPN"
            target="_blank"
            className="px-2 py-[3px] rounded text-[13px] cursor-pointer flex items-center justify-center gap-1 w-fit bg-[#ec3636] text-white"
          >
            <FaYoutube />
          </a>
        </div>
        <hr />
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => navigate("/about")}
            className="px-2 py-[3px] rounded text-[13px] cursor-pointer flex items-center justify-center gap-1 w-fit border text-white border-white"
          >
            <IoPerson />
            About Us
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="px-2 py-[3px] rounded text-[13px] cursor-pointer flex items-center justify-center gap-1 w-fit border text-white border-white"
          >
            <MdCall />
            Contact Us
          </button>
          <button
            onClick={() => navigate("/privacy")}
            className="px-2 py-[3px] rounded text-[13px] cursor-pointer flex items-center justify-center gap-1 w-fit border text-white border-white"
          >
            <MdPrivacyTip />
            Privacy Policy
          </button>
          <button
            onClick={() => navigate("/tac")}
            className="px-2 py-[3px] rounded text-[13px] cursor-pointer flex items-center justify-center gap-1 w-fit border text-white border-white"
          >
            <MdPrivacyTip />
            Terms And Condition
          </button>
        </div>
        <hr />
        <h1 className="text-white text-xs text-center">
          Copyright ©️ Rummybestapps.com All Rights Reserved
        </h1>
        <hr />
        <h1 className="text-white text-xs text-center">
          Made with love by{" "}
          <a href="https://www.instagram.com/insane.coder/" target="_blank">
            @insane.coder
          </a>
        </h1>
      </div>
    </div>
  );
}

export default Games;
