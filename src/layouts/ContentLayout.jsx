import React from "react";
import { Row, Col, Button } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
  isSubmit: PropTypes.bool,
  isDisable: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
};
const defaultProps = {
  isSubmit: false,
  isDisable: false,
  onCancel: () => {},
  onSubmit: () => {},
};
const ContentLayout = ({
  children,
  isSubmit,
  onSubmit,
  onCancel,
  isDisable,
}) => {
  return (
    <Row className="content-layout">
      <Col span={1}></Col>
      <Col className="child-content" span={22}>
        {children}
        {isSubmit && (
          <Col justify="center" className="submit-button-section" span={24}>
            <Button onClick={() => onCancel()} className="cancel-button">
              {isDisable ? "Back" : "Cancel"}
            </Button>
            <Button
              disabled={isDisable}
              className="submit-button"
              type="primary"
              onClick={() => onSubmit()}
            >
              Submit
            </Button>
          </Col>
        )}
      </Col>

      <Col span={1}></Col>
    </Row>
  );
};

const StyledDiv = styled.div`
  &content-layout {
    .child-content {
    }
  }
`;

ContentLayout.propTypes = propTypes;
ContentLayout.defaultProps = defaultProps;

export default ContentLayout;
