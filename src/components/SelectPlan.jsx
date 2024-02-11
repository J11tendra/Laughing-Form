import React from "react";
import InputGroup from "./InputGroup";
import BtnNext from "./BtnNext";

export default function SelectPlan(props) {
  return (
    <div className="form-action">
      <form className="flex flex-col">
        <div className="form-desc">
          <h1>Select Plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </div>
        <InputGroup
          label="arcade"
          labelTitle="Arcade"
          type="radio"
          name="selectPlan"
          id="selectPlan"
          value="arcade"
          onChange={props.updateValue}
          placeholder="name"
        />
        <InputGroup
          label="advanced"
          labelTitle="Advanced"
          type="radio"
          name="selectPlan"
          id="selectPlan"
          value="advanced"
          onChange={props.updateValue}
          placeholder="name"
        />
        <InputGroup
          label="pro"
          labelTitle="Pro"
          type="radio"
          name="selectPlan"
          id="selectPlan"
          value="pro"
          onChange={props.updateValue}
          placeholder="name"
        />
        <div className="btn-display flex">
          <BtnNext id={props.id} handleClick={props.handleClick} />
        </div>
      </form>
    </div>
  );
}
