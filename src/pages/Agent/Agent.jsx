import { useEffect, useState } from "react";
import AgentCard from "../../components/AgentCard/AgentCard";

const Agent = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch("/agentData.json")
      .then((res) => res.json())
      .then((data) => setAgents(data));
  }, []);

  return (
    <div className="container mt-40">
      <h1 className="text-4xl font-bold text-center text-black/80">
        Our Agents
      </h1>
      <p className="max-w-xl mx-auto text-center mt-3 text-black/70">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        magni explicabo optio deserunt libero. Incidunt?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
};

export default Agent;
