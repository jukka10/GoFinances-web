const formatValue = (value: number): string => {
  const formatedValue = Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return formatedValue;
};
export default formatValue;
