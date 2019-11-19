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

export const convertObjectKeys = (obj) => {
  if (isObject(obj)) {
    const newObj = {};

    Object.keys(obj)
      .forEach((k) => {
        newObj[toCamelCase(k)] = convertObjectKeys(obj[k]);
      });

    return newObj;
  } else if (Array.isArray(obj)) {
    return obj.map((i) => {
      return convertObjectKeys(i);
    });
  }

  return obj;
};
