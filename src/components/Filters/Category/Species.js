import React from "react";
import FilterBtn from "../FilterBtn";
import { Accordion } from "react-bootstrap";

const Species = ({ updateSpecies, updatePageNumber }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <Accordion.Item eventKey="1">
      <Accordion.Header>Species</Accordion.Header>
      <Accordion.Body className="accordion-body d-flex flex-wrap gap-3">
        {species.map((item, index) => (
          <FilterBtn
            name="species"
            index={index}
            key={index}
            updatePageNumber={updatePageNumber}
            task={updateSpecies}
            input={item}
          />
        ))}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Species;
