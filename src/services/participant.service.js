export const isValidParticipant = participant => {
  const { name, email, phoneNumber } = participant;

  return isValidName(name) && isValidEmail(email) && isValidPhone(phoneNumber);
};

export const isValidName = name => {
  return name.length > 0;
};

export const isValidEmail = email => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

export const isValidPhone = phone => {
  return phone.length > 5;
};
