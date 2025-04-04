export function isLeapYear(year: number): boolean {
  // FIXME: this implementation is wrong!
if (year %100 == 0 && year %400 !=0) {
  return false;
} 
else if ( year %4 == 0)
{
  return true;
}

else {return false;}

}
