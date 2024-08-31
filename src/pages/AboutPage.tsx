import ContactInformation from "@/components/web/ContactInformation";
import HistoryAndMilestone from "@/components/web/HistoryAndMilestone";
import OurMission from "@/components/web/OurMission";
import TeamMember from "@/components/web/TeamMember";

const AboutPage = () => {
  return (
    <div>
      <OurMission />
      <TeamMember />
      <HistoryAndMilestone />
      <ContactInformation />
    </div>
  );
};

export default AboutPage;
