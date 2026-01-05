import Navbar from "components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "constants/index";
import ResumeCard from "components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Resume feedback from AI" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen">
      <Navbar />
      <section className="main-section ">
        <div className="page-heading py-20">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review your submissions and check AI-Powered feedback.</h2>
        </div>
        {resumes.length > 0 && (
          <div className="resume-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
        )
      </section>
    </main>
  );
}
