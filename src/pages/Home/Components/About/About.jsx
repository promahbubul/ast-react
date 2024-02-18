import React from "react";
import Card from "./Card";

const About = () => {
  return (
    <div className="font-kadwa bg-silver-100 py-10">
      <div className="text-center py-10 bg-[url('/images/aboutbg.png')]">
        <p className="text-5xl drop-shadow-md  font-extrabold text-white">
          About A.S.T Distribution
        </p>
      </div>
      <div className="flex flex-row gap-10 max-w-5xl mx-auto py-5">
        <Card
          title={" INCEPTION"}
          img={"/images/icons/Leaf.png"}
          description={
            "The journey of A.S.T started from 2015 and its evolution to one of the        top food manufacturing companies that have set the grounds for        development for any potentialities."
          }
        />
        <Card
          title={"Mission & Vision"}
          img={"/images/icons/Info.png"}
          description={
            "At A.S.T we aspire to generate employment and earn dignity and self-respect for our compatriots through profitable enterprises."
          }
        />
        <Card
          title={"News & Info"}
          img={"/images/icons/Goal.png"}
          description={
            "The Newsroom is the source of news and information related to A.S.T Foods. From company announcements to latest brands, all updated information can be found here."
          }
        />
      </div>
    </div>
  );
};

export default About;
