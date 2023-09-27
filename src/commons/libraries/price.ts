export const getPrice = (price: number | undefined | null): string => {
  if (!price) return '';
  return new Intl.NumberFormat('ko-KR').format(price) + '원';
}