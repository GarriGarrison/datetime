/**
 * @returns 'DD.MM.YYYY'
 */
export const toDateString = (value: number): string | undefined => {
  const date = new Date(value);

  if (!(date instanceof Date && !isNaN(date.getTime()))) {
    return undefined;
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  return Intl.DateTimeFormat('ru', options).format(date);
};

/**
 * @returns 'YYYY-MM-DD'
 */
// export const toISODateString = (value: number): string => {
//   const date = new Date(value);

//   const options: Intl.DateTimeFormatOptions = {
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit',
//   };

//   return Intl.DateTimeFormat('en-ca', options).format(date);
// };

// /**
//  * @returns 'DD mouth YYYY'
//  */
// export const toDateLongString = (value: number): string => {
//   const date = new Date(value);

//   const options: Intl.DateTimeFormatOptions = {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   };

//   return Intl.DateTimeFormat('ru', options).format(date);
// };

// /**
//  * @returns 'YYYY-MM-DDThh:mm:ss' or 'YYYY-MM-DDThh:mm'
//  */
// export const toISOString = (value: number, withSeconds: boolean = true): string => {
//   const date = new Date(value);

//   const dateOptions: Intl.DateTimeFormatOptions = {
//     year: 'numeric',
//     month: 'numeric',
//     day: 'numeric',
//   };

//   const formattedDate = new Intl.DateTimeFormat('en-ca', dateOptions).format(date);

//   const timeOptions: Intl.DateTimeFormatOptions = {
//     hour: 'numeric',
//     minute: 'numeric',
//     second: withSeconds ? 'numeric' : undefined,
//     hourCycle: 'h24',
//   };

//   const formattedTime = new Intl.DateTimeFormat('en-ca', timeOptions).format(date);

//   return `${formattedDate}T${formattedTime}`;
// };

// /**
//  * @returns 'DD.MM.YYYY hh:mm:ss' or 'DD.MM.YYYY hh:mm'
//  */
// export const toDateTimeString = (value: number, withSeconds: boolean = true): string => {
//   const date = new Date(value);

//   const dateOptions: Intl.DateTimeFormatOptions = {
//     year: 'numeric',
//     month: 'numeric',
//     day: 'numeric',
//   };

//   const formattedDate = new Intl.DateTimeFormat('ru', dateOptions).format(date);

//   const timeOptions: Intl.DateTimeFormatOptions = {
//     hour: 'numeric',
//     minute: 'numeric',
//     second: withSeconds ? 'numeric' : undefined,
//     hourCycle: 'h24',
//   };

//   const formattedTime = new Intl.DateTimeFormat('ru', timeOptions).format(date);

//   return `${formattedDate} ${formattedTime}`;
// };

// /**
//  * @returns 'hh:mm:ss' or 'hh:mm'
//  */
// export const toTimeString = (value: number, withSeconds: boolean = true): string => {
//   const date = new Date(value);

//   const options: Intl.DateTimeFormatOptions = {
//     hour: 'numeric',
//     minute: 'numeric',
//     second: withSeconds ? 'numeric' : undefined,
//     hourCycle: 'h24',
//   };

//   return new Intl.DateTimeFormat('ru', options).format(date);
// };
