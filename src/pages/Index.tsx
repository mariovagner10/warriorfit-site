import WarriorHero from "@/components/WarriorHero";
import ImportanceSection from "@/components/ImportanceSection";
import ProcessFlowChart from "@/components/ProcessFlowChart";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WarriorHero />
      <ImportanceSection />
      <ProcessFlowChart />
      <CallToAction />
    </div>
  );
};

export default Index;
