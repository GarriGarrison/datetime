const convertDateTime = (datetime: string, separator: string): number | undefined => {
  if (datetime.includes(separator)) {
    const [date, time] = datetime.split(separator);

    const dateParts = date.includes('-') ? date?.split('-') : date?.split('.');
    const timeParts = time.split(':');

    if (dateParts && timeParts) {
      return new Date(
        Number(dateParts[0]),
        Number(dateParts[1]) - 1,
        Number(dateParts[2]),
        Number(timeParts[0]),
        Number(timeParts[1]),
        Number(timeParts[2]) || 0,
      ).getTime();
    }
  }

  return undefined;
};

export const toTimestamp = (value: string | number, deleteMS = false): number | null => {
  if ((typeof value === 'string' && value === '') || (typeof value === 'number' && value < 0)) {
    return null;
  }

  let result: number | undefined;

  if (typeof value === 'string') {
    if (value.includes(' ')) {
      result = convertDateTime(value, ' ');
    } else if (value.includes('T')) {
      result = convertDateTime(value, 'T');
    } else if (value.includes('.')) {
      const dateParts = value.split('.');
      result = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0])).getTime();
    } else if (value.includes('-')) {
      const dateParts = value.split('-');
      result = new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[1])).getTime();
    } else if (value.includes(':')) {
      const timeParts = value.split(':');
      const date = new Date();

      result = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        Number(timeParts[0]),
        Number(timeParts[1]),
        Number(timeParts[2]) || 0,
      ).getTime();
    }
  }

  if (!result || Number.isNaN(result)) {
    return null;
  }

  return deleteMS ? Math.floor(result / 1000) : result;
};
