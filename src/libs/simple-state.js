const data = {};

export const intercept = () => {
  data.intercept = true;
  return data;
};

export const release = () => {
  data.intercept = false;
  return data;
};

export const getData = () => {
  return data;
};
