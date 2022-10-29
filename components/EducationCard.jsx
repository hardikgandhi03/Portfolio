import React from "react";
import moment from "moment";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const EducationCard = ({ education }) => {
  return (
    <Fade left duration={2000}>
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h5 className="text-info">{education.nameOfSchoolCollege}</h5>
              <h6>{education.study}</h6>
              <Badge color="info" className="mr-1">
                {moment(education.startYear).format("MMMM YYYY")} -{" "}
                {moment(education.endYear).format("MMMM YYYY")}
              </Badge>
              <p className="description mt-3">{education.score<10?'CGPA':'Percentage'}: {education.score} {education.score<10?' ':'%'}</p>
              {/* <ul>
                {education.descBullets
                  ? education.descBullets.map((desc) => {
                      return <li key={desc}>{desc}</li>;
                    })
                  : null}
              </ul> */}
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default EducationCard;
