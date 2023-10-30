import React from "react";
import ProjectItem from "./ProjectItem";
import thinkDifferentlyImg from "../assets/thinkDifferently.jpeg";
import cpuImg from "../assets/cpu.jpeg";
import miningImg from "../assets/mining.jpeg";
import webDevImg from "../assets/webDev.jpeg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Impetus and Motivation for Creation of Digital Currencies
      </h1>
      <p className="text-center py-8 ">
        The creation of digital currencies, particularly cryptocurrencies like
        Bitcoin, was driven by several key motivations and impetuses:
      </p>

      <ul>
        <li>
          <strong>Decentralization:</strong> A primary motivation for the
          creation of digital currencies was to establish a financial system
          that operates without the need for intermediaries such as banks and
          central authorities. Cryptocurrencies enable peer-to-peer
          transactions, reducing reliance on traditional financial institutions.{" "}
        </li>

        <li>
          <strong>Trust and Transparency:</strong>
          The desire for a trustless system where transactions and the supply of
          money could be verified by anyone was a significant factor. Blockchain
          technology, which underlies most cryptocurrencies, offers transparency
          and immutability of transaction records.
        </li>
        <li>
          <strong>Security:</strong> The cryptographic techniques used in
          digital currencies enhance security. Transactions are highly secure
          and pseudonymous, reducing the risk of fraud and identity theft.
        </li>
        <li>
          <strong>Global Accessibility: </strong>
          Digital currencies aim to be accessible to anyone with an internet
          connection, regardless of their location. This can empower people in
          underbanked or unbanked regions who may not have access to traditional
          financial services.
        </li>
        <li>
          <strong>Reducing Transaction Costs:</strong>
          Traditional financial systems can involve high fees, especially for
          international transactions. Digital currencies can potentially reduce
          these costs, making cross-border payments more affordable.
        </li>
        <li>
          <strong>Financial Inclusion:</strong>
          Many people around the world lack access to traditional banking
          services. Digital currencies can help include these individuals in the
          global economy by providing them with a means of transacting and
          storing value.
        </li>
        <li>
          <strong>Hedging Against Inflation:</strong> Some individuals and
          investors turn to digital currencies as a hedge against inflation,
          economic instability, or currency devaluation. Cryptocurrencies like
          Bitcoin have a limited and predictable supply, which contrasts with
          traditional fiat currencies that can be subject to inflation.{" "}
        </li>
        <li>
          <strong>Financial Innovation: </strong>The development of digital
          currencies has spurred financial innovation, including smart
          contracts, decentralized finance (DeFi), and non-fungible tokens
          (NFTs). These innovations have the potential to transform various
          aspects of finance and beyond.
        </li>
        <li>
          <strong>Philosophical and Political Ideals: </strong>Some early
          proponents of cryptocurrencies held libertarian and anti-establishment
          beliefs. They saw digital currencies as a way to challenge the control
          of central banks and governments over money and to promote individual
          financial sovereignty.
        </li>
        <li>
          <strong>Speculation and Investment:</strong> For many individuals, the
          potential for profit and investment opportunities in the
          cryptocurrency market has been a driving force behind their interest
          in digital currencies.
        </li>
      </ul>
      <br></br>
      <p>
        It is essential to recognize that these motivations can vary among
        different cryptocurrencies and blockchain projects. While Bitcoin, for
        example, was primarily created as a digital currency and store of value,
        other blockchain projects, like Ethereum, were developed with a focus on
        enabling smart contracts and decentralized applications, broadening the
        range of use cases for digital currencies and blockchain technology.
      </p>
      <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">
          Factors/Technologies needed for Creating Digital Currencies
        </h1>
      </div>

      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={thinkDifferentlyImg} title="Think Differently" />
        <ProjectItem img={cpuImg} title="The CPU" />
        <ProjectItem img={miningImg} title="mining" />
        <ProjectItem img={webDevImg} title="Web Development" />
      </div>
    </div>
  );
};

export default Projects;
