import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import { Consumer } from "./context/context";
import ModalLogin from "./ModalLogin";

const ModalBox = () => {
  const renderContent = (modal, setState) => {
    switch (modal) {
      case "login":
        return <ModalLogin setState={setState} />;
      default:
        return null;
    }
  };
  const [lgShow, setLgShow] = useState(true);
  const handleShow = () => setLgShow(true);
  return (
    <Consumer>
      {({ state, setState }) => {
        const { modal } = state;
        if (!modal) return null;
        return (
          <Modal size="lg" show={lgShow} onHide={handleShow}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>{renderContent(modal, setState)}</Modal.Body>
          </Modal>
        );
      }}
    </Consumer>
  );
};

export default ModalBox;
