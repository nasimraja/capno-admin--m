import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, ) {
  id += 1;
  return { id, name, calories,  };
}

const rows = [
  createData('P6.0-6006', 'April 15,2021',),
  createData('P6.0-6007', 'April 15,2021',),
  createData('SN 567687878', 'April 15,2021',),
  createData('P6.0-6005', 'April 15,2021',),
  createData('P6.0-6003', 'April 15,2021',),
  createData('P6.0-6002', 'April 15,2021',),
  createData('P6.0-6011', 'April 15,2021',),
  createData('P6.0-1234', 'April 15,2021',),
  createData('P6.0-5678', 'April 15,2021',),
  createData('Test-Peter', 'April 15,2021',),
   
];

function Listtable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Serial Number</TableCell>
            <TableCell align="right">Date Activated</TableCell>
             
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
               
               
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

Listtable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Listtable);