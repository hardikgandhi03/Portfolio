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

export const getServerSideProps = async (_) => {
  console.log("Hello");
  try {
    let githubProfileData = await fetch(
      `https://api.github.com/users/${openSource.githubUserName}`
    )
    let githubProfileDataJSON = await githubProfileData.json()
    
    let data = await fetch(
      "https://script.google.com/macros/s/AKfycbyi7oyqDPZslg9TofXcevxlPMoED0gPTBKoxm9ukNfCMhI3TfOAtD6vH9EPu6EUSJUIeg/exec"
    )
    let dataJSON = await data.json()
    return {
      props: { githubProfileData: githubProfileDataJSON, data: dataJSON },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { githubProfileData: {}, data: {} },
    };
  }


}
