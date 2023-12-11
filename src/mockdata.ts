// mockData.ts
import { GroupBy, EstimationResult } from '@cloud-carbon-footprint/common';

const testAccountA = 'test-a';
const testAccountB = 'test-b';
const testAccountC = 'test-c';

const dateOne = new Date('2022-01-01T00:00:00.000Z');
const dateOnePeriodEnd = new Date('2022-01-02T00:00:00.000Z');
const dateTwo = new Date('2022-02-01T00:00:00.000Z');
const dateTwoPeriodEnd = new Date('2022-02-02T00:00:00.000Z');

const mockData: EstimationResult[] = [
  {
    timestamp: dateOne,
    periodStartDate: dateOne,
    periodEndDate: dateOnePeriodEnd,
    groupBy: GroupBy.day,
    serviceEstimates: [
      {
        serviceName: 'ebs',
        kilowattHours: 12,
        co2e: 15,
        cost: 5,
        region: 'us-east-1',
        usesAverageCPUConstant: false,
        cloudProvider: 'AWS',
        accountId: testAccountA,
        accountName: testAccountA,
      },
      // Add more service estimates as needed
    ],
  },
  {
    timestamp: dateTwo,
    periodStartDate: dateTwo,
    periodEndDate: dateTwoPeriodEnd,
    groupBy: GroupBy.day,
    serviceEstimates: [
      {
        serviceName: 'ebs',
        kilowattHours: 25,
        co2e: 3,
        cost: 6,
        region: 'us-east-1',
        usesAverageCPUConstant: false,
        cloudProvider: 'AWS',
        accountId: testAccountA,
        accountName: testAccountA,
      },
      // Add more service estimates as needed
    ],
  },
];

export default mockData;
