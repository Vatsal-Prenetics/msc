import {User} from './../Types/User';
import {capitalizeTxt} from './../Helpers/capitalize';

const queryUrl = new URL(
  'https://testing-web.circlepod.co?name=Peter&fullName=Peter Wong&result=negative&resultDate=Dec 14, 2021, 18:46&barcode=COA01213482877A5&gender=female'
);

export const userResults: User = {
  // tslint:disable-next-line:no-non-null-assertion
  FirstName: capitalizeTxt(queryUrl.searchParams.get('name')!),
  // tslint:disable-next-line:no-non-null-assertion
  FullName: capitalizeTxt(queryUrl.searchParams.get('fullName')!),
  // tslint:disable-next-line:no-non-null-assertion
  Gender: capitalizeTxt(queryUrl.searchParams.get('gender')!),
  // tslint:disable-next-line:no-non-null-assertion
  TestResult: capitalizeTxt(queryUrl.searchParams.get('result')!),
  // tslint:disable-next-line:no-non-null-assertion
  DateOfResultReported: queryUrl.searchParams.get('resultDate')!,
  // tslint:disable-next-line:no-non-null-assertion
  ModelNumber: queryUrl.searchParams.get('modelNumber')!,
  // tslint:disable-next-line:no-non-null-assertion
  DeviceType: queryUrl.searchParams.get('modelName')!,
  // tslint:disable-next-line:no-non-null-assertion
  CapsuleNumber: queryUrl.searchParams.get('barcode')!,
};
