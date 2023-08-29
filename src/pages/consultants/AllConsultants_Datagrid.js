import React, { useState, useEffect } from "react";
import { Box, makeStyles, Grid } from "@material-ui/core";
import Controls from "../../components/controls/Controls";
import AddIcon from "@material-ui/icons/Add";
import Popup from "../../components/ui/Popup";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/CloseOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import Notification from "../../components/ui/Notification";
import ConfirmDialog from "../../components/ui/ConfirmDialog";
import NewConsultantForm from "./NewConsultantForm";
import {
  findAll,
  createConsultant,
  updateConsultant,
  deleteConsultant,
} from "./addConsultant.action";
import moment from "moment";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDataGrid-renderingZone": {
      "& .MuiDataGrid-row": {
        "&:nth-child(2n)": { backgroundColor: "#D6EEEE" },
      },
    },
  },
  searchInput: {
    width: "75%",
  },
  newButton: {
    right: "5px",
  },
}));

function AllConsultantsPage() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [gridData, setGridData] = useState();
  const [openPopup, setOpenPopup] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [pageSize, setPageSize] = useState(5);
  const [page, setPage] = useState(0);
  const [sortModel, setSortModel] = useState([
    {
      field: "employeeNumber",
      sort: "asc",
    },
  ]);

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const columns = [
    {
      field: "employeeNumber",
      headerName: "Emp No.",
      width: 200,
      editable: true,
      sort: "desc",
    },
    {
      field: "skillSet",
      headerName: "Skill Set",
      width: 200,
      editable: true,
    },
    {
      field: "firstName",
      headerName: "First Name",
      width: 200,
      editable: true,
    },
    { field: "lastName", headerName: "Last Name", width: 175, editable: true },
    // {
    //   field: "displayName",
    //   headerName: "Display Name",
    //   width: 100,
    //   editable: true,
    // },
    { field: "jobTitle", headerName: "Job Title", width: 175 },
    {
      field: "lastUtilDate",
      headerName: "Last Util Date",
      width: 150,
      type: Date,
      editable: true,
      renderCell: (params) => {
        return moment.utc(params.value).format("MM-DD-yyyy");
      },
    },
    {
      field: "isPermanent",
      headerName: "isPermanent",
      width: 160,
      renderCell: (params) => {
        if (params.value === true) {
          return (
            <Controls.ActionButton variant="contained">
              <CheckIcon fontSize="small" />
            </Controls.ActionButton>
          );
        } else {
          return (
            <Controls.ActionButton variant="contained">
              <CloseIcon fontSize="small" />
            </Controls.ActionButton>
          );
        }
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        if (params.value === true) {
          return "Active";
        } else {
          return "Inactive";
        }
      },
    },
    {
      field: "Edit",
      sortable: false,
      width: 80,
      disableClickEventBubbling: true,
      filterable: false,
      renderCell: () => {
        return (
          <Controls.ActionButton variant="contained">
            <EditIcon fontSize="small" />
          </Controls.ActionButton>
        );
      },
    },
    {
      field: "Del",
      sortable: false,
      width: 80,
      disableClickEventBubbling: true,
      filterable: false,
      renderCell: () => {
        return (
          <Controls.ActionButton variant="contained">
            <DeleteIcon fontSize="small" />
          </Controls.ActionButton>
        );
      },
    },
  ];

  const fetchData = async () => {
    return await findAll().then((res) => {
      setGridData(res.data.data);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  const handleCellClick = (param) => {
    if (param.field === "Edit") {
      openInPopup(param.row);
    } else if (param.field === "Del") {
      onDelete(param.row);
    }
  };

  const addOrEdit = (consultant, resetForm) => {
    if (consultant._id === "") createConsultant(consultant);
    else updateConsultant(consultant._id, consultant);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    fetchData();
    setNotify({
      isOpen: true,
      message: "Submitted Successfully",
      type: "success",
    });
  };

  const onDelete = (item) => {
    setConfirmDialog({
      isOpen: true,
      title: "Are you sure to delete this record?",
      subTitle: "You can't undo this operation",
      onConfirm: async () => {
        await deleteConsultant(item._id);
        await fetchData();
        setNotify({
          isOpen: true,
          message: "Deleted Successfully",
          type: "error",
        });
        setConfirmDialog({ isOpen: false });
      },
    });
  };

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.lastName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  return (
    <section>
      <h1>Consultants List</h1>
      <Grid container>
        <Grid item xs={10}>
          {/* <Controls.Input
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
          /> */}
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
      <div>
        <Box style={{ height: 500, width: "100%" }}>
          {gridData && (
            <DataGrid
              className={classes.root}
              rows={gridData}
              getRowId={(row) => row._id}
              columns={columns}
              disableColumnSelector
              disableDensitySelector
              pagination={true}
              page={page}
              pageSize={pageSize}
              rowsPerPageOptions={[5, 10, 50, 100]}
              onPageChange={(newPage) => setPage(newPage)}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              components={{ Toolbar: GridToolbar }}
              onCellClick={handleCellClick}
              sortModel={sortModel}
            />
          )}
        </Box>
      </div>
      <Popup
        title="New Consultant Add Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <NewConsultantForm
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit}
        />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </section>
  );
}

export default AllConsultantsPage;
