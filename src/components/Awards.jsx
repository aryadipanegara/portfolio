import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Card, CardBody } from "@material-tailwind/react";

const awardsData = [
  {
    id: 1,
    title: "React And React Native For Front End Developer ",
    organization: "Kampus Merdeka Batch 5",
    date: "2023",
    link: "https://drive.google.com/file/d/1f-jkU6SzFGnTgIBZOovB-XK7gTOztW_e/view?usp=drive_link",
  },
  {
    id: 2,
    title: "The Complete Web Developer in 2023 : Zero to Mastery",
    organization: "Udemy",
    date: "May 2023",
    link: "https://drive.google.com/file/d/1fGrvNIH8dg79Fly3Cg5eoD0gie24jvbE/view?usp=drive_link",
  },
  // Add more awards/certifications here
];

const Awards = () => (
  <section className="max-w-4xl mx-auto px-5 mt-16">
    <div className="py-7 px-5 sm:px-0">
      <div className="relative">
        <h2 className="text-4xl font-bold mb-8 text-black">
          Awards & Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {awardsData.map((award) => (
            <Card
              key={award.id}
              className="mb-8 p-6 rounded-md shadow-md bg-white relative"
            >
              <Link to={award.link} target="_blank">
                <FaExternalLinkAlt className="text-blue-500 absolute top-2 right-2" />
              </Link>
              <CardBody>
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {award.title}
                </h3>
                <p className="text-black mb-2">
                  {award.organization} - {award.date}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Awards;
