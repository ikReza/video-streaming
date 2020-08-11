import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  stream: {
    padding: "1% 3%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  videoIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "2vw",
  },
  editBtn: {
    backgroundColor: "#4287f5",
    color: "white",
    marginRight: "5px",
    "&:hover": {
      backgroundColor: "#2261c7",
    },
  },
  deleteBtn: {
    backgroundColor: "#fa3966",
    color: "white",
    "&:hover": {
      backgroundColor: "#b51b3f",
    },
  },
  createStream: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "2vh",
  },
  createBtn: {
    backgroundColor: "#04d462",
    color: "white",
    "&:hover": {
      backgroundColor: "#027a39",
    },
  },
});
