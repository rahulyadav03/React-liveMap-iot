import React from "react";
import { makeStyles, withStyles, createStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import CircularProgress from "@material-ui/core/CircularProgress";

import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const StyledTableCell = withStyles(theme =>
  createStyles({
    head: {
      // backgroundColor: "#0063cc",
      color: theme.palette.common.black
    },
    body: {
      fontSize: 14
    }
  })
)(TableCell);

let rows = [
  {
    id: 1,
    vehicalType: "Two wheeler",
    vehicalModel: "TVS Apache RTR 180",
    description: "Gurgaon dssfd djf sdf ds",
    createdDate: "03-06-1991"
  },
  {
    id: 2,
    vehicalType: "Two wheeler",
    vehicalModel: "TVS Apache RTR 180",
    description: "dsf sdf jjd jsdfj jhdsjfh jdshf",
    createdDate: "03-06-1991"
  },
  {
    id: 3,
    vehicalType: "Two wheeler",
    vehicalModel: "TVS NTORQ 125",
    description: "dsf sdf jjd jsdfj jhdsjfh jdshf",
    createdDate: "03-06-1991"
  },
  {
    id: 4,
    vehicalType: "Two wheeler",
    vehicalModel: "TVS Sport",
    description: "dsf sdf jjd jsdfj jhdsjfh jdshf",
    createdDate: "03-06-1991"
  },
  {
    id: 5,
    vehicalType: "Two wheeler",
    vehicalModel: "TVS Apache RR 310",
    description: "dsf sdf jjd jsdfj jhdsjfh jdshf",
    createdDate: "03-06-1991"
  }
];

function VehicleTable(props) {
  const [open, setOpen] = React.useState(false);
  const [deleteModal, setDeleteModal] = React.useState(false);

  rows = props.vehicalData;

  const editAllocation = () => {};

  const deleteAllocation = () => {};

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteOpen = () => {
    setDeleteModal(true);
  };

  const handleDeleteClose = () => {
    setDeleteModal(false);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>S.No</StyledTableCell>
              <StyledTableCell>Vehical Type</StyledTableCell>
              <StyledTableCell>Vehical Model</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.vehicleType}</TableCell>
                <TableCell>{row.vehicleModel}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.createStingDate}</TableCell>
                <TableCell align="center">
                  <EditIcon onClick={handleClickOpen} />{" "}
                  <DeleteIcon onClick={handleDeleteOpen} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {rows.length == 0 && (
        <Card className="blankDataClass">
          <h2 style={{ color: "#0063cc", textAlign: "center" }}>
            No Data Available{" "}
            {props.apiCallStatus && <CircularProgress size={24} />}
          </h2>
        </Card>
      )}

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Vehical</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="type"
              label="Vehical Type"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="model"
              label="Vehical Model"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" color="primary" onClick={handleClose}>
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <Dialog
        open={deleteModal}
        onClose={handleDeleteClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Delete Allocation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this allocation?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleDeleteClose}
          >
            Yes
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleDeleteClose}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default VehicleTable;
