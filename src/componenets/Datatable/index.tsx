/* eslint-disable react/destructuring-assignment */
import { MuiThemeProvider, createTheme } from '@material-ui/core';
import React from 'react';
import LinearLoader from '../LinearLoader';
import MUIDataTable, { MUIDataTableColumnDef, MUIDataTableOptions } from 'mui-datatables';
import muiTheme from './styles';



interface Column {
  name: string;
  label: string;
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
  } = props;

  const theme = createTheme(muiTheme(createTheme(), color));

  const datatableColumns: MUIDataTableColumnDef[] = columns.map((column) => ({
    name: column.name,
    label: column.label,
  }));



  return (
    <MuiThemeProvider theme={theme}>
      <MUIDataTable
        title={title}
        data={data}
        columns={datatableColumns}
      />
      <LinearLoader visible={loading} loading={loading} color={color || 'primary'} />
    </MuiThemeProvider>
  );
};

export default Datatable;
