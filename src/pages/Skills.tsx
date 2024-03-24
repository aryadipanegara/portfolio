import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { skillsData } from "../data/Skills";
import { IconType } from "react-icons";

type TabType = "languages" | "frameworks" | "UI" | "DBMS" | "tools";

interface Skill {
  id: number;
  icon: IconType;
  color: string;
  title: string;
}

const Skills = () => {
  document.title = "Skills | Arya Gunawan";
  const [activeTab, setActiveTab] = useState<TabType>("languages");

  const changeTab = (tab: TabType) => {
    setActiveTab(tab);
  };

  return (
    <section className="min-h-screen mx-auto px-5">
      <div className="py-7 px-5 sm:px-0">
        <div className="relative top-16">
          <h1 className="text-4xl font-bold mb-6 text-black dark:text-white">
            Skills
          </h1>
          <Tabs value={activeTab} onChange={changeTab}>
            <TabsHeader
              placeholder
              className="bg-gray-100 sm:rounded-t-md relative dark:bg-black dark:text-white"
            >
              {Object.keys(skillsData).map((tab) => (
                <Tab
                  placeholder
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-white"
                  key={tab}
                  value={tab as TabType}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody placeholder>
              {Object.keys(skillsData).map((tab) => (
                <TabPanel key={tab} value={tab as TabType}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 relative z-10">
                    {skillsData[tab as TabType].map((skill: Skill) => (
                      <SkillItem key={skill.id} skill={skill} />
                    ))}
                  </div>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

interface SkillItemProps {
  skill: Skill;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => (
  <div
    className={`flex items-center justify-center p-4 rounded-md shadow-md border ${skill.color}`}
  >
    <div className="text-4xl" title={skill.title}>
      {React.createElement(skill.icon)}
    </div>
  </div>
);

export default Skills;
