import React from 'react';
import {
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableBody
} from '@material-ui/core';
import _ from 'lodash';

import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setsorting } from '../../store/actions/participant.actions';
import ParticipantEdit from './ParticipantEdit';
import ParticipantView from './ParticipantView';

const useStyles = makeStyles({
  table: {
    width: 912
  },
  container: {
    borderRadius: 0,
    boxShadow: 'unset'
  },
  tablehead: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 0,
    paddingBottom: 0,
    height: 48,
    fontSize: 14,
    color: '#757575',
    fontWeight: 500
  }
});

const columns = [
  {
    field: 'name',
    label: 'Full Name'
  },
  {
    field: 'email',
    label: 'E-mail address'
  },
  {
    field: 'phoneNumber',
    label: 'Phone Number'
  }
];

const ParticipantList = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { participants, editId, sort } = useSelector(state => state.participants);
  const { sortBy, sortOrder } = sort;

  const updateSorting = field => {
    dispatch(
      setsorting({
        sortBy: field,
        sortOrder: sortOrder === 'asc' ? 'desc' : 'asc'
      })
    );
  };

  const sorted = sortOrder === 'asc' ? _.sortBy(participants, sortBy) : _.reverse(_.sortBy(participants, sortBy));

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell className={classes.tablehead} key={column.field}>
                <TableSortLabel
                  active={sortBy === column.field}
                  direction={sortBy === column.field ? sortOrder : 'asc'}
                  onClick={() => updateSorting(column.field)}
                >
                  {column.label}
                </TableSortLabel>
              </TableCell>
            ))}
            <TableCell className={classes.tablehead} align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sorted.map(p =>
            p.id === editId ? <ParticipantEdit selected={p} key={p.id} /> : <ParticipantView selected={p} key={p.id} />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ParticipantList;
