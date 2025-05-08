export type Employment = {
  startDate: Date;
  untilDate: Date;
  percentage: number;
  vacationDays: number;
};

export function calculateProRataVacationDays(employment: Employment): number {
  // TODO: calculate pro rata (consider workload and days worked)
  function isLeapYear(year: number): boolean {
    // FIXME: this implementation is wrong!
  if (year %100 == 0 && year %400 !=0) {
    return false;
  } 
  else if ( year %4 == 0)
  {
    return true;
  }
}
function getDaysInMonth(year: number, month: number): number {
    // Handle month index (0-11) and year
    const date = new Date(year, month + 1, 0); // Get the last day of the month
    return date.getDate();
  }
  
  return employment.vacationDays;
}

