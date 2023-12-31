import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "contexts/app.context";
import { useNavigate, useParams } from "react-router-dom";
import { Flex, Button } from "antd";
import PropTypes from "prop-types";

const propTypes = {
  data: PropTypes.object,
  projectID: PropTypes.string
};

const defaultProps = {
  data: {},
};

const ProjectInfo = ({ data, projectID }) => {
  const navigate = useNavigate();
  return (
    <div className="project-section">
      <Flex className="title-section" justify="space-between">
        <h1 className="bold-text">{data?.title}</h1>
        <p>
          {data?.startDate} - {data?.endDate}
        </p>
      </Flex>
      <Button
        onClick={() => navigate(`/project-requirement/${projectID}`)}
      >See Project Requirement</Button>
      
      <div className="name-section">
        <p>
          <span className="bold-text">Client:</span> {data?.seeker?.first_name}{" "}
          {data?.seeker?.last_name}
        </p>
        <p>
          <span className="bold-text">Freelancer:</span>
          {data?.freelancer?.first_name} {data?.freelancer?.last_name}
        </p>
      </div>
      <div className="status-section">
        <p>
          <span className="bold-text">Status:</span>
          {data?.status}
        </p>
      </div>
    </div>
  );
};

ProjectInfo.propTypes = propTypes;
ProjectInfo.defaultProps = defaultProps;
export default ProjectInfo;
