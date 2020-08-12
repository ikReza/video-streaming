import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "90vh",
    width: "100vw",
  },
  icon: {
    fontSize: "80vmin",
  },
  title: {
    fontWeight: "bolder",
  },
  dialog: {
    opacity: "0.97",
  },
  loading: {
    width: "100vw",
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
