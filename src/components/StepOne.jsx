// import React from "react";
// import SelectPlan from "./SelectPlan";
// import PersonalInfo from "./PersonalInfo";

// export default function FormBody(props) {
//   const componentsArray = [
//     <PersonalInfo
//       key={0}
//       id={0}
//       value={props.value}
//       onChange={props.onChange}
//       handleClick={props.handleClick}
//     />,
//     <SelectPlan
//       key={1}
//       id={1}
//       updateValue={props.onChange}
//       handleClick={props.handleClick}
//     />,
//   ];

//   const activeComponent = props.activeState
//     .filter((activeObj) => activeObj.isActive)
//     .map((activeObj) => {
//       const componentId = activeObj.id;
//       return componentsArray[componentId];
//     });
//   return (
//     // <div className="form-action">
//     //   <form className="flex flex-col">
//     //     <div className="form-desc">
//     //       <h1>Personal info</h1>
//     //       <p>Please provide your name, email address, and phone number.</p>
//     //     </div>
//     //     <InputGroup
//     //       label="name"
//     //       labelTitle="Name"
//     //       type="text"
//     //       id="name"
//     //       placeholder="e.g. Jitendra Choudhary"
//     //       value={props.value.name}
//     //       onChange={props.onChange}
//     //     />
//     //     <InputGroup
//     //       label="email"
//     //       labelTitle="Email Address"
//     //       type="email"
//     //       id="email"
//     //       placeholder="e.g. jitendra@gmail.com"
//     //       value={props.value.email}
//     //       onChange={props.onChange}
//     //     />
//     //     <InputGroup
//     //       label="phone"
//     //       labelTitle="Phone Number"
//     //       type="phone"
//     //       id="phone"
//     //       placeholder="e.g. +12 927 233 23 23"
//     //       value={props.value.phone}
//     //       onChange={props.onChange}
//     //     />
//     //     <div className="btn-display flex">
//     //       <BtnNext />
//     //     </div>
//     //   </form>
//     // </div>
//     <>
//       {activeComponent}
//       {/* <PersonalInfo id={1} value={props.value} onChange={props.onChange} />
//       <SelectPlan id={2} updateValue={props.onChange} /> */}
//     </>
//   );
// }

export default function StepOne() {
  return <h1>StepOne</h1>;
}
