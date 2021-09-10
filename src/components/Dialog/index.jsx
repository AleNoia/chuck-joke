// ANCHOR Imports
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// import {} from "./styled";

// ANCHOR Component
export default function DialogComponent(props) {
  const { joke, openDialog } = props;

  const [open, setOpen] = useState(false);
  // const [jokeData, setJokeData] = useState({});

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(openDialog);
  }, [openDialog, joke]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {/* Joke #{!jokeData.loading ? jokeData.data.id : "Carregando"} */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* {!jokeData.loading ? jokeData.data.joke : "Carregando"} */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DialogComponent.propTypes = {
  joke: PropTypes.shape({
    data: PropTypes.shape({
      id: PropTypes.number,
      joke: PropTypes.string,
      categories: PropTypes.instanceOf(Array),
    }),
    loading: PropTypes.bool,
  }),
  openDialog: PropTypes.bool,
};

DialogComponent.defaultProps = {
  joke: {},
  openDialog: false,
};
