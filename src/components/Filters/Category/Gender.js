import React from "react";
import FilterBtn from "../FilterBtn";
import { Accordion } from "react-bootstrap";
const Gender = ({ updateGender, updatePageNumber }) => {
  let genders = ["female", "male", "genderless", "unknown"];
  return (
    <Accordion.Item eventKey="2">
      <Accordion.Header>Gender</Accordion.Header>
      <Accordion.Body className="accordion-body d-flex flex-wrap gap-3">
        {genders.map((items, index) => {
          return (
            <FilterBtn
              name="gender"
              index={index}
              key={index}
              updatePageNumber={updatePageNumber}
              task={updateGender}
              input={items}
            />
          );
        })}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Gender;
