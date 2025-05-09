export type Salary = {
  born: Date;
  payday: Date;
  gross: number;
};

export type Deductions = Map<string, number>;

export const DEDUCTION_RATES: Deductions = new Map([
  ["AHV", 8.7],
  ["IV", 1.4],
  ["EO", 0.5],
  ["ALV", 1.1],
  ["NBU", 0.73],
  ["PK", 8.9],
]);

export type Payslip = {
  salary: Salary;
  deductions: Deductions;
  totalDeductions: number;
  net: number;
};

export function calculatePayslip(salary: Salary): Payslip {
  // TODO: implement
 const {born, payday, gross } = salary;

 const deductions: Deductions = new Map();

 let age = payday.getFullYear() - born.getFullYear();
 const birthDayThisYear = new Date(payday.getFullYear())
if (payday < birthDayThisYear)
{
  age--;
}

  const annualGross = gross * 12;

  for (const [name, rate] of DEDUCTION_RATES.entries()) {
    if (["AHV", "IV", "EO"].includes(name)) {
      if (age >= 17) {
        deductions.set(name, +(gross * (rate / 100)).toFixed(2));
      } else if (["ALV", "NBU"].includes(name)) {
        if (annualGross >= 2500) {
          deductions.set(name, +(gross * (rate / 100)).toFixed(2));
        } else if (["PK"].includes(name)) {
          if (annualGross >= 22680) {
            deductions.set(name, +(gross * (rate / 100)).toFixed(2));
          }
        }
      }
    }
  }

  const result: Payslip = {
    salary: salary,
    deductions: new Map(),
    totalDeductions: 0.0,
    net: salary.gross,
  };
  return result;
}
