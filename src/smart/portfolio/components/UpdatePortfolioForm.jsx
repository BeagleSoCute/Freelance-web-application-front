import React from "react";
import styled from "styled-components";
import { Button, Form, Input, Select } from "antd";
import PropTypes from "prop-types";
import SkillTag from "components/skills/SkillTags";

const propTypes = {
  skills: PropTypes.array,
  skillOptions: PropTypes.array,
  onAddSkill: PropTypes.func,
  onRemoveSkill: PropTypes.func,
};
const defaultProps = {
  skills: [],
  skillOptions: [],
  onAddSkill: () => {},
  onRemoveSkill: () => {},
};

const UpdatePortfolioForm = ({
  form,
  skills,
  skillOptions,
  onAddSkill,
  onRemoveSkill,
}) => {
  const onFinish = () => {};
  const handleAddSkill = (value) => {
    onAddSkill(value);
    form.setFieldValue("skill", "");
  };
  const handleRemoveSkill = (value) => {
    onRemoveSkill(value);
  };
  const handleSelect = () => {};
  const options = skillOptions.map((skill) => {
    return {
      value: skill,
      label: skill,
    };
  });
  return (
    <StyledDiv>
      <Form
        form={form}
        name="edit-for"
        labelCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="lastName"
          rules={[{ required: true, message: "Please input the description!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Skills related to this work (The system shows your skills added on the profile management page) "
          name="skill"
        >
          <Select
            placeholder="Select a skill"
            optionFilterProp="children"
            options={options}
            onChange={handleSelect}
          />
        </Form.Item>

        <div className="add-skill-btn">
          <Button
            className="button"
            type="primary"
            onClick={() => handleAddSkill(form.getFieldValue("skill"))}
          >
            Add
          </Button>
        </div>
        <SkillTag items={skills} onRemoveSkill={handleRemoveSkill} />
      </Form>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  &.update-portfolio-form {
  }
`;

UpdatePortfolioForm.propTypes = propTypes;
UpdatePortfolioForm.defaultProps = defaultProps;

export default UpdatePortfolioForm;
