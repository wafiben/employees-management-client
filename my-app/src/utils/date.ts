import moment from "moment";

export const formatDate = (date: string, format: string): string => {
  const inputDate = moment(date, "YYYY-MM-DD");
  const formattedDate = inputDate.format("MMMM DD, YYYY");
  return formattedDate;
};

export const getYears = (date: string): number => {
  const year = new Date(date).getFullYear();
  const currentData = new Date();
  const currentYear = currentData.getFullYear();
  return currentYear - year;
};

export const getMaxYear = (date: string) => {
  return new Date(date).getFullYear();
};
