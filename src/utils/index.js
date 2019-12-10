export const toCamelCase = (str) => {
  return str.replace(/([-_][a-z])/gi, ($1) => {
    return $1
      .toUpperCase()
      .replace(`-`, ``)
      .replace(`_`, ``);
  });
};

export const isObject = (obj) => {
  return obj === Object(obj) && !Array.isArray(obj) && typeof obj !== `function`;
};

export const convertObjectKeys = (data) => {
  if (isObject(data)) {
    const newObj = {};

    Object.keys(data)
      .forEach((k) => {
        newObj[toCamelCase(k)] = convertObjectKeys(data[k]);
      });

    return newObj;
  } else if (Array.isArray(data)) {
    return data.map((i) => {
      return convertObjectKeys(i);
    });
  }

  return data;
};
