import { User, UserDevice, Results } from './../Types';

export const user: User = {
  FirstName: 'Sophie',
  LastName: 'West',
  Gender: 'Female',
};

export const userDeviceDetails: UserDevice = {
  FirstName: 'Sophie',
  LastName: 'West',
  Gender: 'Female',
  CapsuleNumber: 'COA0121251AC322B',
  ModelNumber: 'POD01',
  SerialNumber: 'POD01212320192AB',
  DeviceType: 'HealthPod',
};

export const userResults: Results = {
  FirstName: 'Sophie',
  DeviceType: 'HealthPod',
  LastName: 'West',
  Gender: 'Female',
  CapsuleNumber: 'COA0121251AC322B',
  ModelNumber: 'POD01',
  SerialNumber: 'POD01212320192AB',
  NegativeResultMessage:
    'A negative result means that the Circle HealthPod test did not detect the presence of SARS-CoV-2 in this sample. This means you are not likely to currently have Covid-19.',

  PositiveResultMessage:
    'Please contact us at pos@circlepod.co or WhatsApp +852 9748 2596. You should also contact your local healthcare provider for next steps to take.',
  DateOfResultReported: 'Jul 15, 2021, 18:18',
  TestResult: 'Positive',
};
