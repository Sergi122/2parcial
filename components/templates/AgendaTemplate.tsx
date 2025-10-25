import React from "react";
import AgendaCard from "../organisms/AgendaCard";

const AgendaTemplate: React.FC = () => {
  return (
    <section style={{ padding: "24px" }}>
      <AgendaCard
        number={1}
        title="Agenda/Topic"
        code="SAAS-0000"
        description="Description of what is done here"
        lastUpdated="3/8/2020"
      />
    </section>
  );
};

export default AgendaTemplate;
