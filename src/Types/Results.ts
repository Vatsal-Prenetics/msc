export enum PassportResult {
  Postive = 'Positive',
  Negative = 'Negative',
  Cancelled = 'Cancelled',
  Invalid = 'Invalid',
  Noresult = 'Noresult',
  Expired = 'Expired',
}

interface ResultMessage {
  NegativeResultMessage: string;
  PositiveMessage: string;
  PositiveResultMessage: string;
}

export const resultMessage: ResultMessage = {
  NegativeResultMessage:
    // tslint:disable-next-line:max-line-length
    'A negative result means that the Circle HealthPod test did not detect the presence of SARS-CoV-2 in this sample. This means you are not likely to currently have Covid-19.',
  PositiveResultMessage:
    'A positive result means that the Circle HealthPod test detected the presence of SARS-CoV-2 in this sample. This means you are likely to currently have Covid-19.',
  PositiveMessage:
    'Please contact us at pos@circlepod.co or WhatsApp +852 9748 2596. You should also contact your local healthcare provider for next steps to take.',
};
