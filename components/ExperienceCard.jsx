import React from "react";
import moment from "moment";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
} from "reactstrap";

import { Fade } from "react-reveal";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <Fade left duration={2000}>
        <Card
          style={{ flex: 1 }}
          className="shadow-lg--hover mb-3 shadow border-0 text-center rounded"
        >
          <CardBody className="">
            <img
              src={data.img}
              style={{
                objectFit: "cover",
                left: 0,
                right: 0,
                top: "7rem",
                marginLeft: "auto",
                marginRight: "auto",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
              }}
              className="shadow mb-3"
              alt={data.companylogo}
            />
            <CardTitle tag="h4" className="mb-2">
              {data.name}
            </CardTitle>
            <CardSubtitle tag="h5" className="mb-2">
              {data.position}
            </CardSubtitle>
            <CardSubtitle>
              {moment(data.startDate).format("MMMM YYYY")} -{" "}
              {moment(data.endDate).format("MMMM YYYY")}
            </CardSubtitle>
            <CardText tag="div" className="description my-3 text-left">
              {data.description}
              {/* <ul>
                {data.descBullets
                  ? data.descBullets.map((desc) => {
                      return <li key={desc}>{desc}</li>;
                    })
                  : null}
              </ul> */}
            </CardText>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ExperienceCard;
