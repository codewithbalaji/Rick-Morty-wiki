import React from "react";
import { Accordion } from "react-bootstrap";
import FIlterBtn from "../FilterBtn";

const Status = ({ updateStatus, updatePageNumber }) => {
  let status = ["Alive", "Dead", "Unknown"];

  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>Status</Accordion.Header>
      <Accordion.Body className="accordion-body d-flex flex-wrap gap-3">
        {status.map((item, index) => (
          <FIlterBtn
            key={index}
            index={index}
            name="status"
            task={updateStatus}
            updatePageNumber={updatePageNumber}
            input={item}
          />
        ))}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Status;
