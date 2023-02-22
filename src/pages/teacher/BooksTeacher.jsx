import React, { useState } from "react";
import MenuBar from "components/MenuBar";
import BooksCards from "components/BooksCards";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Modal from "pages/teacher/BooksTeacherAdd";

function BooksTeacher() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <MenuBar />
      <div className="card-container">
        <BooksCards />
        <BooksCards />
        <BooksCards />
        <BooksCards />
        <BooksCards />
        <BooksCards />
        <BooksCards />
        <BooksCards />
        <BooksCards />
        <BooksCards />
        <BooksCards />
        <BooksCards />
        <BooksCards />
        <BooksCards />
        <BooksCards />
        <BooksCards />
        <BooksCards />
        <BooksCards />
        <BooksCards />
        <BooksCards />
        <BooksCards />

      </div>
      <Fab
        color="primary"
        aria-label="add"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "green",
          color: "white",
        }}
        onClick={openModal}
      >
        <AddIcon />
      </Fab>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default BooksTeacher;
