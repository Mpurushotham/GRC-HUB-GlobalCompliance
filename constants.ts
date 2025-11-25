
import { Framework } from './types';
import { globalFrameworks } from './data/global';
import { usGovFrameworks } from './data/us_gov';
import { privacyFrameworks } from './data/privacy';
import { regionalFrameworks } from './data/regional';
import { financeFrameworks } from './data/finance';
import { healthcareFrameworks } from './data/healthcare';
import { industrySpecificFrameworks } from './data/industry';
import { emergingFrameworks } from './data/emerging';

export const FRAMEWORKS: Framework[] = [
  ...globalFrameworks,
  ...usGovFrameworks,
  ...privacyFrameworks,
  ...regionalFrameworks,
  ...financeFrameworks,
  ...healthcareFrameworks,
  ...industrySpecificFrameworks,
  ...emergingFrameworks
];
