import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Card, CardBody } from "@material-tailwind/react";
import { awardsData } from "../data/Certification.data";

export default function Certification() {
  document.title = "Certification | Arya Gunawan";
  return (
    <section className="min-h-screen mx-auto px-5 mt-16">
      <div className="py-7 px-5 sm:px-0">
        <div className="relative">
          <h2 className="text-4xl font-bold mb-8 ">Awards & Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 dark:bg-black dark:text-white">
            {awardsData.map((award) => (
              <Card
                placeholder="card"
                key={award.id}
                className="mb-8 p-6 rounded-md shadow-md relative text-black dark:bg-black dark:text-white border"
              >
                <Link to={award.link} target="_blank">
                  <FaExternalLinkAlt className="text-blue-500 absolute top-2 right-2" />
                </Link>
                <CardBody placeholder="cardbody">
                  <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                  <p className=" mb-2">
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
}
