import React from "react";
import styled from "styled-components";
import { Flex } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const propTypes = {
  title: PropTypes.arrayOf(String),
  isEdit: PropTypes.bool,
  onRemoveSkill: PropTypes.func,
};
const defaultProps = {
  items: [],
  isEdit: false,
  onRemoveSkill: () => {},
};

const SkillTags = ({ items, isEdit, onRemoveSkill }) => {
  return (
    <StyledDiv className="skill-tags">
      <Flex wrap="wrap" gap="large">
        {items.map((item, index) => (
          <div key={index} className="item" span={4}>
            <p>{item}</p>
            {isEdit && (
              <CloseOutlined
                onClick={() => onRemoveSkill(item)}
                className="close-icon"
              />
            )}
          </div>
        ))}
      </Flex>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.skill-tags {
    margin: 25px 0px;
    .item {
      position: relative;
      padding: 0px 45px;
      border: 1px solid black;
    }
    .close-icon {
      position: absolute;
      top: 5px;
      right: 5px;
      color: red;
      cursor: pointer;
    }
  }
`;

SkillTags.propTypes = propTypes;
SkillTags.defaultProps = defaultProps;
export default SkillTags;
