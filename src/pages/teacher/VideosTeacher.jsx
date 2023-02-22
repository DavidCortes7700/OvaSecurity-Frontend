import React, { useState } from 'react';
import ReactPlayer from "react-player";
import MenuBar from "components/MenuBar";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Modal from "pages/teacher/VideosTeacherAdd";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";

function renderRow(props) {
  const { index, style, openModal } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

function VideosTeacher() {
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
      <div className="containerVideos">
        <div className="library">
          <h2>Biblioteca de videos</h2>
          <Box
            sx={{
              width: "100%",
              height: 400,
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <FixedSizeList
              height={400}
              width={360}
              itemSize={46}
              itemCount={200}
              overscanCount={5}
            >
              {(props) => renderRow({...props, openModal})}
            </FixedSizeList>
          </Box>
        </div>
        <div className="replayer">
          <ReactPlayer url="https://www.youtube.com/watch?v=YMuhhCH_Gv8&ab_channel=Platzi" />
        </div>
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

export default VideosTeacher;

