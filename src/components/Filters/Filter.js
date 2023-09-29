import React from "react";
import { Col, Accordion } from "react-bootstrap";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filter = ({
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  let clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  };

  return (
    <Col className="mb-5 col-12 col-lg-3 text-center ">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <a
        style={{ cursor: "pointer" }}
        className=" text-decoration-underline text-primary  "
        onClick={clear}
      >
        Clear Filters
      </a>
      <Accordion className="mt-3 ">
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
        />
      </Accordion>
    </Col>
  );
};

export default Filter;
