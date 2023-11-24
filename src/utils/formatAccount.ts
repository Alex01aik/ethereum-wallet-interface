export const formatAccount = (account: string): string => {
  const firstPart = account.slice(0, 6);
  const lastPart = account.slice(-4);
  return firstPart + "...." + lastPart;
};
