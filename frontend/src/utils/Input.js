import React from "react";
import styled from "styled-components";

export default function Input({
  value,
  defaultValue = "",
  label,
  id,
  name,
  type,
  placeholder,
  onChange,
  onBlur,
}) {

  return (
    <FieldRow>
      <Label htmlFor={id}>
        {label}
      </Label>
      <InputForm
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={e => {
          onChange(e.target.value);
        }}
        value={value}
        defaultValue={defaultValue}
        onBlur={onBlur}
      />
    </FieldRow>
  );
}

const Label = styled.label`
  display: block;
  max-width: 100%;
  font-size: 0.875rem;
  color: #999999;
  padding-left: 16px;
  padding-bottom: 8px;
  text-align: left;
`;

const InputForm = styled.input`
  width: 100%;
  max-width: 100%;
  align-items: center;
  border-radius: 16px;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-left: 16px;
  position: relative;
  vertical-align: top;
  background-color: #ffffff;
  border: 1px solid #e3e3e3;
  color: #555555;
`;

const FieldRow = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 16px;
`;
