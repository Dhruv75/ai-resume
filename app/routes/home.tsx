
import Navbar from "components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "constants/index";



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

      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>Review your submissions and check AI-Powered feedback.</h2>
        </div>

        {/* The corrected map function */}
        <div className="resume-list grid gap-4">
          {resumes.map((resume) => (
            <div key={resume.id} className="resume-card p-4 border rounded-lg">
              <h1>{resume.jobTitle || "Untitled Position"}</h1>
              <p>Score: {resume.feedback.overallScore}/100</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
