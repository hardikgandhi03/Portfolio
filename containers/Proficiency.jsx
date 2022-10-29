import React from "react";
// import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";

import { Fade } from "react-reveal";

import GreetingLottie from "../components/DisplayLottie";

const Proficiency = ({ proficiencyInfo }) => {
  return (
    <Container className="section section-lg">
      <Fade bottom duration={2000}>
        <Row>
          <Col lg="6">
            <h1 className="h1">Proficiency</h1>
            {proficiencyInfo.map((skill) => {
              return (
                <div className="progress-info" key={skill.name}>
                  <div className="progress-label">
                    <span>{skill.name}</span>
                  </div>
                  <div className="progress-percentage">
                    <span>{skill.percentage}%</span>
                  </div>
                  <Progress
                    max="100"
                    value={skill.percentage}
                    color="info"
                    role="progressbar"
                    aria-label={skill.name}
                  />
                </div>
              );
            })}
          </Col>
          <Col lg="6">
            <GreetingLottie animationPath="/lottie/build.json" />
          </Col>
        </Row>
      </Fade>
    </Container>
  );
};

export default Proficiency;
