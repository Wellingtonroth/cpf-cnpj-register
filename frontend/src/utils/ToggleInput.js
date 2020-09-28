import React from "react";
import styled from "styled-components";

const ToggleInput = ({ field, value, activeLabel, inactiveLabel }) => {
  const id = `${field}-checkbox`;

  return (
    <>
      <Checkbox type="checkbox" id={id} checked={value} {...field} />
      <label className="estado" htmlFor="toggle" onClick={() => document.getElementById(id).click()}>
        <span className="active">{activeLabel}</span>
        <span className="inactive">{inactiveLabel}</span>
      </label>
    </>
  );
};

const Checkbox = styled.input`
  display: none;

  + label {
    display: block;
    margin-left: 16px;
    width: 105px;
    height: 24px;
    background-color: #db001b;
    border-radius: 16px;
    transition: all 300ms cubic-bezier(0.79, -0.01, 0.36, 1);
    cursor: pointer;
    position: relative;

    &:before {
      display: block;
      content: "";
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: white;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      left: 80px;
      transition: left 300ms cubic-bezier(0.79, -0.01, 0.36, 1);
    }

    span {
      position: absolute;
      color: white;
      font-size: 0.875rem;
    }

    span.inactive {
      top: 50%;
      transform: translateY(-50%);
      left: 16px;
      animation: left-check 300ms ease-in-out;

      @keyframes left-check {
        0% {
          opacity: 0;
          left: 5em;
        }
        100% {
          opacity: 1;
          left: 2.5em;
        }
      }
    }

    span.active {
      top: 50%;
      transform: translateY(-50%);
      right: 1.3em;
      display: none;
      animation: right-check 300ms ease-in-out;

      @keyframes left-check {
        0% {
          opacity: 0;
          right: 5em;
        }
        100% {
          opacity: 1;
          right: 1.3em;
        }
      }
    }
  }

  &:checked {
    + label {
      background-color: #44ba3a;

      span.inactive {
        display: none;
      }

      span.active {
        display: block;
      }

      &:before {
        left: 8px;
      }
    }
  }
`;

export default ToggleInput;