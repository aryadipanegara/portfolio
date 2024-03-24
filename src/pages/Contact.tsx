import { Card, CardBody } from "@material-tailwind/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  document.title = "Contact | Arya Gunawan";
  return (
    <section className="min-h-screen mx-auto px-5 mt-16 dark:bg-black">
      <div className="py-7 px-5 sm:px-0">
        <div className=" relative">
          <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
          <p className="mb-8">
            If you have any questions or if there's anything else I can help you
            with, feel free to contact me. You can reach out to me through the
            following channels:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              placeholder="card"
              className="dark:bg-black dark:text-white border"
            >
              <CardBody placeholder="cardbody">
                <FaLinkedin className="text-6xl mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-4">LinkedIn</h3>
                <p className="mb-4">
                  Connect with me on LinkedIn for Professional networking
                </p>
                <a
                  href="https://www.linkedin.com/in/aryagunawan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center p-2 bg-blue-500 text-white rounded-md cursor-pointer "
                >
                  Connect on LinkedIn
                </a>
              </CardBody>
            </Card>
            <Card
              placeholder="card"
              className="dark:bg-black dark:text-white border"
            >
              <CardBody placeholder="cardbody">
                <FaGithub className="text-6xl mb-4" />
                <h3 className="text-xl font-semibold mb-4">GitHub</h3>
                <p className="mb-4">
                  Check out my repositories and projects on GitHub.
                </p>
                <a
                  href="https://github.com/AryaGunawann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center p-2 bg-gray-500 text-white rounded-md cursor-pointer "
                >
                  Visit GitHub
                </a>
              </CardBody>
            </Card>
            <Card
              placeholder="card"
              className="dark:bg-black dark:text-white border"
            >
              <CardBody placeholder="cardbody">
                <FaEnvelope className="text-6xl mb-4 text-red-500" />
                <h3 className="text-xl font-semibold mb-4">Email</h3>
                <p className="mb-4">
                  Send me an email if you prefer direct communication
                </p>
                <a
                  href="mailto:aryadipanegarag@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center p-2 bg-red-500 text-white rounded-md cursor-pointer "
                >
                  Connect on LinkedIn
                </a>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
