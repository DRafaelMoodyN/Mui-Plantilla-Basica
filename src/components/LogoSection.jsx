import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ButtonBase, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import config from "../config";
import { activeItem } from "../store/menu/menuSlice";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }) => {
  const { defaultId } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  return (
    <ButtonBase
      disableRipple
      component={Link}
      onClick={() => dispatch(activeItem({ openItem: [defaultId] }))}
      to={!to ? config.defaultPath : to}
      sx={sx}
    >
      {/* <Logo /> */}
      <img
        src="https://pms.logisticexpertsgroup.com/f021b782b6d83831c77ae1c396b7c6f8.png"
        style={{ height: 25 }}
      />
      <Typography color={"#005a3a"} marginLeft={1} variant="h5">
        LAFISE REPUESTO
      </Typography>
    </ButtonBase>
  );
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string,
};

export default LogoSection;
