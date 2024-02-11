import React from "react";
import InputGroup from "./InputGroup";
import BtnNext from "./BtnNext";

export default function PersonalInfo(props) {
  return (
    <div className="form-action">
      <form className="flex flex-col">
        <div className="form-desc">
          <h1>Personal info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>
        <InputGroup
          label="name"
          labelTitle="Name"
          type="text"
          id="name"
          placeholder="e.g. Jitendra Choudhary"
          value={props.value.name}
          onChange={props.onChange}
        />
        <InputGroup
          label="email"
          labelTitle="Email Address"
          type="email"
          id="email"
          placeholder="e.g. jitendra@gmail.com"
          value={props.value.email}
          onChange={props.onChange}
        />
        <InputGroup
          label="phone"
          labelTitle="Phone Number"
          type="phone"
          id="phone"
          placeholder="e.g. +12 927 233 23 23"
          value={props.value.phone}
          onChange={props.onChange}
        />
        <div className="btn-display flex">
          <BtnNext id={props.id} handleClick={props.handleClick} />
        </div>
      </form>
    </div>
  );
}
