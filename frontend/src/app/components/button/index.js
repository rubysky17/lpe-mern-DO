import { Button } from "@mui/material";
import PropTypes from "prop-types";

function LPEButton({ handleOnClick, loading, name, classStyled, fullWidth }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        onClick={handleOnClick}
        fullWidth={fullWidth}
        variant="contained"
        className={classStyled}
        disabled={loading}
      >
        {loading && <div className="loader"></div>}

        {name}
      </Button>
    </div>
  );
}

LPEButton.propTypes = {
  name: PropTypes.string,
  action: PropTypes.func,
  type: PropTypes.string,
  loading: PropTypes.bool,
  classStyled: PropTypes.string,
};

export default LPEButton;
