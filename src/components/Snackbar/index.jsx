// ANCHOR Imports
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

// ANCHOR Component
export default function SnackbarComponent(props) {
  const { openSnackbar } = props;
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    setOpen(openSnackbar);
  }, [openSnackbar]);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Modo explícito ativiado! Não será possível mudar o nome nas piadas"
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
}

SnackbarComponent.propTypes = {
  openSnackbar: PropTypes.bool,
};

SnackbarComponent.defaultProps = {
  openSnackbar: false,
};
