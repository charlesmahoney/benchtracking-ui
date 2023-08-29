import { Grid, InputAdornment, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Controls from "../controls/Controls";
import AddIcon from "@material-ui/icons/Add";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    width: "75%",
  },
  newButton: {
    right: "0px",
    justifyContent: "flex-end",
  },
}));

function SearchInput() {
  const classes = useStyles();

  const [openPopup, setOpenPopup] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const handleSearch = (props) => {
    console.log("handlesearch");
  };

  return (
    <Grid container>
      <Grid item xs={10}>
        <Controls.Input
          label="Search Consultants"
          className={classes.searchInput}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          onChange={handleSearch}
        />
      </Grid>
      <Grid item xs={2}>
        <Controls.Button
          text="Add New"
          variant="outlined"
          startIcon={<AddIcon />}
          className={classes.newButton}
          onClick={() => {
            setOpenPopup(true);
            setRecordForEdit(null);
          }}
        />
      </Grid>
    </Grid>
  );
}

export default SearchInput;
