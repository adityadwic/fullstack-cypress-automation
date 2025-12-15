export const generateRandomEmail = () => {
  return `testuser_${Math.floor(Math.random() * 100000)}@example.com`;
};
