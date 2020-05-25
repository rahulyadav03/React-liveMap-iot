import React from "react";
import { NavLink } from "react-router-dom";
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

import { Link } from "react-router-dom";

import mapImg from "../../assets/img/map.png";

import CircularProgress from "@material-ui/core/CircularProgress";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  root: {
    minWidth: 650
  }
});

const StyledTableCell = withStyles(theme =>
  createStyles({
    head: {
      //   backgroundColor: "#9c27b0",
      color: theme.palette.common.black
    },
    body: {
      fontSize: 14
    }
  })
)(TableCell);

function AllocationTable(props) {
  // const [open, setOpen] = React.useState(false);
  // const [deleteModal, setDeleteModal] = React.useState(false);
  // const [deleteAllocationId, setDeleteAllocationId] = React.useState(null);
  // const [editAllocationId, setEditAllocationId] = React.useState(null);

  let rows = props.allocationData;

  const classes = useStyles();
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>S.No</StyledTableCell>
              <StyledTableCell>Bike Model</StyledTableCell>
              <StyledTableCell>IMIE No.</StyledTableCell>
              <StyledTableCell>City</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">MAP</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.vehicle.vehicleModel}</TableCell>
                <TableCell>{row.device.imeiNumber}</TableCell>
                <TableCell>{row.city.name}</TableCell>
                <TableCell>{row.status ? "Active" : "Not Active"}</TableCell>
                <TableCell align="center">{row.createStingDate}</TableCell>
                <TableCell align="center">
                  {/* ${row.id} */}
                  <NavLink to={`/admin/maps/${row.id}`}>
                    <img src={mapImg} height="25px" width="25px" />
                  </NavLink>
                </TableCell>

                <TableCell align="center">
                  <EditIcon onClick={() => props.editAllocationId(row)} />{" "}
                  <DeleteIcon onClick={() => props.handleDeleteOpen(row.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {rows.length === 0 && (
        <Card className="blankDataClass">
          <h2 style={{ color: "#9c27b0", textAlign: "center" }}>
            No Data Available{" "}
            {props.apiCallStatus && <CircularProgress size={24} />}
          </h2>
        </Card>
      )}

      <Dialog
        open={props.deleteModal}
        onClose={props.handleDeleteClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Delete Allocation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this allocation?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className={props.classes.wrapper}>
            <Button
              style={{ marginRight: "10px" }}
              variant="outlined"
              color="primary"
              onClick={() => props.deleteAllocation(props.deleteAllocationId)}
            >
              Yes
            </Button>
            {props.apiCallStatus && (
              <CircularProgress
                size={24}
                className={props.classes.buttonProgress}
              />
            )}
            <Button
              variant="outlined"
              color="secondary"
              onClick={props.handleDeleteClose}
            >
              No
            </Button>
            {props.apiCallStatus && (
              <CircularProgress
                size={24}
                className={props.classes.cancelButtonProgress}
              />
            )}
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default React.memo(AllocationTable);
