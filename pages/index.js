import PropTypes from "prop-types";
import Navigation from "../components/Navigation";
import Greetings from "../containers/Greetings";
import Skills from "../containers/Skills";
import Proficiency from "../containers/Proficiency";
import Education from "../containers/Education";
import Projects from "../containers/Projects";
import Experience from "../containers/Experience";
import { openSource } from "../portfolio";
import SEO from "../components/SEO";
import Copy from "../components/Copy";

export default function Home({ githubProfileData, data }) {
  console.log(data);
  return (
    <div>
      <SEO
        data={{
          title: "Hardik Gandhi",
          description: "A passionate Cloud & Security Enthusiast.",
          image: "",
          url: "",
          keywords: [
            "Hardik",
            "Hardik Gandhi",
            "@hardikgandhiii",
            "hardikgandhi",
            "Portfolio",
            "Hardik Portfolio ",
            "Hardik Gandhi Portfolio",
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency proficiencyInfo={data?.proficiency || []} />
      <Education educationInfo={data?.education || []} />
      <Projects projectsInfo={data?.projects || []} />
      <Experience experienceInfo={data?.experience || []} />
      <Copy />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getServerSideProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  const data = await fetch(
    "https://script.google.com/macros/s/AKfycbzmHz-BVIkLBHV4ObPrDLmXfqDOn92xEzbmyMIbx_jONf6WiH0wIUICyOdDX4fJB9EwHg/exec"
  ).then((res) => res.json());

  return {
    props: { githubProfileData, data },
  };
}
