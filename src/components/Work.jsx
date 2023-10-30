import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 1980,
    title: "eCash",
    duration: "",
    details:
      "The concept of digital currencies can be traced back to the work of David Chaum, who developed the idea of cryptographic electronic money. In the 1980s, he created a digital currency called eCash",
  },
  {
    year: 1990,
    title: "Digicash, CyberCash, First Virtual",
    duration: "",
    details:
      "In the early 1990s, several attempts were made to create digital currencies, including DigiCash, CyberCash, and First Virtual. These early digital currencies were not widely adopted.",
  },
  {
    year: 1998,
    title: "PayPal",
    duration: "",
    details:
      "PayPal was founded as Confinity by Max Levchin, Peter Thiel, and Luke Nosek. It started as a digital wallet service and later evolved into a widely used online payment system.",
  },
  {
    year: 2000,
    title: "Bitcoin",
    duration: "",
    details:
      "The concept of Bitcoin, the first decentralized cryptocurrency, was introduced in a whitepaper titled: Bitcoin: A Peer-to-Peer Electronic Cash System by an anonymous person or group using the pseudonym Satoshi Nakamoto.",
  },
  {
    year: 2009,
    title: "Bitcoin Released",
    duration: "",
    details:
      "Bitcoin's software was released, and the Bitcoin network officially came into existence with the mining of the genesis block (the first block on the Bitcoin blockchain) on January 3, 2009.",
  },
  {
    year: 2011,
    title: "Litecoin",
    duration: "",
    details:
      "Other cryptocurrencies, often referred to as altcoins, began to emerge. Litecoin, created by Charlie Lee, was one of the early altcoins introduced in October 2011.",
  },
  {
    year: 2015,
    title: "Ethereum",
    duration: "",
    details:
      "Ethereum, a blockchain platform that enabled the creation of smart contracts and decentralized applications, was launched by Vitalik Buterin and others.",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        History of Digital Currency
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
