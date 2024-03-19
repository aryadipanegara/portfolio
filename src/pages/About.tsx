import { FaGraduationCap, FaBriefcase, FaFilePdf } from "react-icons/fa";
import useTheme from "../Theme/useTheme";
import MotionPage from "../components/MontionPage";

export default function About() {
  document.title = "About | Arya Gunawan";
  const { theme } = useTheme();

  return (
    <MotionPage type="left">
      <section
        className={`max-w-4xl mx-auto px-5 py-8 ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className=" rounded-lg p-8">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <h2 className="text-2xl font-semibold mb-8 ">
            Muhammad Arya Dipanegara Gunawan
          </h2>
          <div className="mb-8">
            <div className=" p-6 rounded-lg shadow-md border border-gray-300">
              <p
                className={`text-lg ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                I am a passionate programmer who enjoys building applications
                from scratch and solving complex challenges. With a strong
                foundation in web development, I specialize in technologies such
                as React JS, JavaScript, MySQL, NodeJS, and HTML/CSS.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 ">Education</h2>
            <div className=" p-6 rounded-lg shadow-md border border-gray-300 mb-4">
              <div className="flex items-center">
                <FaGraduationCap className="text-2xl text-blue-500 mr-3" />
                <p
                  className={`font-semibold text-lg ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Pelita Bangsa University
                </p>
              </div>
              <p
                className={`text-lg ${
                  theme === "dark" ? "text-gray-400" : "text-gray-700"
                }`}
              >
                Computer Science{" "}
                <span className="font-semibold">(Current GPA: 3.68)</span>
              </p>
            </div>
            <div className=" p-6 rounded-lg shadow-md border border-gray-300">
              <div className="flex items-center">
                <FaGraduationCap className="text-2xl text-blue-500 mr-3" />
                <p
                  className={`font-semibold text-lg ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  Senior High School
                </p>
              </div>
              <p
                className={`text-lg ${
                  theme === "dark" ? "text-gray-400" : "text-gray-700"
                }`}
              >
                SMAN 2 Cikarang Utara
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 ">Work Experience</h2>
            <div className=" p-6 rounded-lg shadow-md border border-gray-300">
              <div className="flex items-center">
                <FaBriefcase className="text-2xl text-blue-500 mr-3" />
                <p
                  className={`text-lg ${
                    theme === "dark" ? "text-white" : "text-gray-700"
                  }`}
                >
                  No work experience yet
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 ">Resume</h2>
            <div className=" p-6 rounded-lg shadow-md border border-gray-300">
              <div className="flex items-center">
                <FaFilePdf className="text-2xl text-blue-500 mr-3" />
                <p
                  className={`text-lg ${
                    theme === "dark" ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  You can read my resume{" "}
                  <a
                    href="https://drive.google.com/file/d/19vZqh7AEED9hSroGSgBa3j_8ahtbugiB/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline cursor-pointer text-blue-500"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionPage>
  );
}
