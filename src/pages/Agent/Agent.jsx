import { useEffect, useState } from "react";
import AgentCard from "../../components/AgentCard/AgentCard";
import PageTitle from "../../components/PageTitle/PageTitle";

const Agent = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch("/agentData.json")
      .then((res) => res.json())
      .then((data) => setAgents(data));
  }, []);

  return (
    <>
      <PageTitle title={'Agents | Nestwise'}/>
      <div className="container mt-32 md:mt-40 px-4 md:px-0">
        <h1 className="text-[clamp(28px,5vw,36px)] font-bold text-center text-black/80">
          Our Agents
        </h1>
        <p className="max-w-2xl mx-auto text-center mt-3 text-black/70 text-sm  md:text-base">
          Our agents are the cornerstone of our success. With their knowledge,
          experience, and personalized approach, they are ready to assist you in
          finding your dream home or making the most of your investment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Agent;
