import { add as addDateFns } from 'date-fns';

type Duration = {
  years?: number;
  months?: number;
  weeks?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
};

export function add(date: Date, duration: Duration): Date {
  return addDateFns(date, duration);
}
