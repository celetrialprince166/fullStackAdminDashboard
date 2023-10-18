import React from "react";
import {
  GridColumnMenuHideItem,
  GridColumnMenuFilterItem,
  GridColumnMenuContainer,
} from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
  const { hideMenu, colDef, open } = props;

  return (
    <GridColumnMenuContainer hideMenu={hideMenu} colDef={colDef} open={open}>
      <GridColumnMenuFilterItem onClick={hideMenu} colDef={colDef} />
      <GridColumnMenuHideItem onClick={hideMenu} colDef={colDef} />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
