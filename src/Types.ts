export interface User {
  FirstName: string;
  LastName: string;
  Gender: string;
}

export interface UserDevice extends User {
  DeviceType: string;
  CapsuleNumber: string;
  ModelNumber: string;
  SerialNumber: string;
}

export interface Results extends UserDevice {
  ResultMessage: string;
  DateOfResultReported: string;
  TestResult: string;
}
