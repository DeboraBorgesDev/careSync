/* eslint-disable react/destructuring-assignment */
import { MuiThemeProvider, createTheme } from '@material-ui/core';
import React from 'react';
import LinearLoader from '../LinearLoader';
import MUIDataTable, { MUIDataTableColumn, MUIDataTableColumnOptions, MUIDataTableOptions } from 'mui-datatables';
import muiTheme from './styles';
import { columnOptionsDefault, optionsDefault } from './options';

interface Column {
  name: string;
  label: string;
  options?: MUIDataTableColumnOptions;
}

interface DatatableProps {
  title: string;
  data: any[];
  columns: Column[];
  options?: MUIDataTableOptions;
  loading?: boolean;
  color?: 'primary' | 'secondary';
}

const Datatable: React.FC<DatatableProps> = (props) => {
  const {
    title,
    data,
    columns,
    loading = false,
    color = 'primary',
    options,
  } = props;

  const theme = createTheme(muiTheme(createTheme(), color));

  const datatableColumns: MUIDataTableColumn[] = columns.map((column) => ({
    name: column.name,
    label: column.label,
    options: {
      ...columnOptionsDefault(column),
      ...column.options,
    },
  }));

  const datatableOptions: MUIDataTableOptions = {
    ...optionsDefault(),
    ...options,
    rowsPerPageOptions: [5, 10, 20, 50, 100, 200],
  };

  return (
    <MuiThemeProvider theme={theme}>
      <MUIDataTable
        title={title}
        data={data}
        columns={datatableColumns}
        options={datatableOptions}
      />
      <LinearLoader visible={loading} loading={loading} color={color || 'primary'} />
    </MuiThemeProvider>
  );
};

export default Datatable;
