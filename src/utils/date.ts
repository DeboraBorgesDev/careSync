import {
    format,
    parseISO,
  } from 'date-fns';

export const toDate = (dateString: string) => new Date(parseISO(dateString));

export const formatDate = (dateString: string, formatString: string) => format(toDate(dateString), formatString);
