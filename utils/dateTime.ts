export const formateDate = (date: string | number | Date) => {
    const tempDate = new Date(date).toDateString();
    return tempDate;
}