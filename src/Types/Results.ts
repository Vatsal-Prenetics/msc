import { UserDevice } from './User';

export enum PassportResult {
  Postive = 'Positive',
  Negative = 'Negative',
  Cancelled = 'Cancelled',
  Invalid = 'Invalid',
  Noresult = 'Noresult',
  Expired = 'Expired',
}

export interface Results extends UserDevice {
  NegativeResultMessage: string;
  PositiveMessage: string;
  PositiveResultMessage: string;
  DateOfResultReported: string;
  TestResult: string;
}
