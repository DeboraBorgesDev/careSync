import { FilterType, SelectableRows } from "mui-datatables";

interface OptionsDefault {
    filterType: FilterType;
    selectableRows: SelectableRows;
    sort: boolean;
    search: boolean;
    download: boolean;
    filter: boolean;
    jumpToPage: boolean;
    rowsPerPage: number;
    rowsPerPageOptions: number[];
    onDownload: (buildHead: (columns: any[]) => string, buildBody: (data: any[]) => string, columns: any[], data: any[]) => string;
  }
  
  export const optionsDefault = (): OptionsDefault => ({
    filterType: 'textField',
    selectableRows: 'none',
    sort: true,
    search: true,
    download: true,
    filter: true,
    jumpToPage: true,
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 20, 50, 100],
    onDownload: (buildHead, buildBody, columns, data) => `\uFEFF${buildHead(columns)}${buildBody(data)}`,
  });
  
  interface Column {
    name: string;
  }
  
  interface ColumnOptionsDefault {
    filter: boolean;
    filterType: FilterType;
    filterOptions: object;
    customFilterListOptions: { render: (v: any) => string };
  }
  
  export const columnOptionsDefault = (column: Column): ColumnOptionsDefault => ({
    filter: true,
    filterType: 'textField',
    filterOptions: {},
    customFilterListOptions: { render: (v) => `${column.name}: ${v}` },
  });
  