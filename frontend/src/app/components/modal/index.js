import React, { forwardRef, useImperativeHandle, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "900px",
  height: "80vh",
  background: "#fff",
  boxShadow: 24,
  overflowY: "auto",
  p: 4,
};

const LPEModal = forwardRef(({ children, title }, ref) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClose = () => {
    setIsOpenModal(false);
  };

  const handleOpen = () => {
    setIsOpenModal(true);
  };

  useImperativeHandle(ref, () => ({
    handleClose() {
      handleClose && handleClose();
    },
    handleOpen() {
      handleOpen && handleOpen();
    },
  }));

  return (
    <Modal open={isOpenModal} onClose={handleClose}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
});

export default LPEModal;
