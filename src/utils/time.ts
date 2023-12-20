// https://www.tutorialsteacher.com/online-test/typescript-test

export function dateFormater(
  locales: string | string[] | undefined,
  date: Date,
) {
  return new Intl.DateTimeFormat(locales, {
    dateStyle: 'long',
    // timeStyle: 'long',
  }).format(date);
}