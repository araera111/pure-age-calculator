import dayjs, { UnitType } from 'dayjs';
import { isNil } from 'ramda';
const calcDiff = (from: Date, to: Date, format?: UnitType) => {
	const dayjsFrom = dayjs(from);
	const dayjsTo = dayjs(to);

	if (!isNil(format)) return dayjsTo.diff(dayjsFrom, format);

	const years = dayjsTo.diff(dayjsFrom, 'year');
	const months = dayjsTo.diff(dayjsFrom, 'months');
	const days = dayjsTo.diff(dayjsFrom, 'days');
	return { years, months, days };
};

export const getAgePure = (fromDate: Date, toDate: Date, format?: UnitType) => {
	if (!(fromDate instanceof Date)) throw new Error('fromDate is Invalid date.');
	if (!(toDate instanceof Date)) throw new Error('toDate is Invalid date.');
	if (dayjs(fromDate).isAfter(toDate)) throw new Error('toDate is dated earlier than fromDate.');
	return calcDiff(fromDate, toDate, format);
};
