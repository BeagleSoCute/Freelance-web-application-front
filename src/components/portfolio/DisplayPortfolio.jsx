import React from "react";
import styled from "styled-components";
import CardComponent from "components/common/CardComponent";
import { Row, Col, Flex, Button } from "antd";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { truncateString } from "helpers/common.helper";
const propTypes = {
  portfolios: PropTypes.arrayOf(Object),
};
const defaultProps = {
  portfolios: [],
};

const DisplayPortfolio = ({ portfolios }) => {
  const navigate = useNavigate();
  return (
    <StyledDiv className="display-portfolio">
      <h2>Portfolios</h2>
      <Flex className="btn-section" align="end" vertical>
        <Button
          className="add-btn"
          onClick={() => navigate("/update-portfolio")}
        >
          Add{" "}
        </Button>
      </Flex>
      <Flex
        justify="center"
        className="content-section"
        wrap="wrap"
        gap="large"
      >
          {portfolios.map((item) => (
            <CardComponent
              portfolioImageURL={item.portfolio_picture}
              title={item.title}
              description={truncateString(item.description, 15)}
            />
          ))}
      </Flex>
    </StyledDiv>
  );
};
const StyledDiv = styled.div`
  &.display-portfolio {
    button.add-btn {
      width: 150px;
    }
    .content-section {
      margin: 50px auto;
    }
    .card-wrapper{
      /* margin:0px auto; */
    }
  }
`;

DisplayPortfolio.propTypes = propTypes;
DisplayPortfolio.defaultProps = defaultProps;

export default DisplayPortfolio;
