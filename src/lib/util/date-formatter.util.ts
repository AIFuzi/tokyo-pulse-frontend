export function dateFormatter(date: string): string {
  const formDate = new Date(date)

  return formDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
