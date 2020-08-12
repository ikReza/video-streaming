import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  mainHeader: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    margin: "2vh 0",
    fontSize: "40px",
  },
  stream: {
    padding: "1% 3%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1vh",
    border: "1px solid grey",
    borderRadius: "10px",
  },
  videoIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "2vw",
  },
  icon: {
    fontSize: "40px",
  },
  streamTitle: {
    textDecoration: "none",
    textTransform: "capitalize",
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
  loading: {
    width: "100vw",
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
