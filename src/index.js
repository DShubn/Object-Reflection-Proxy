export function orderByProps(obj, sortOrder) {
  const orderedProps = [];
  const alphaProps = [];

  for (const key in obj) {
    if (sortOrder.includes(key)) {
      orderedProps.push({ key: key, value: obj[key] });
    } else {
      alphaProps.push({ key: key, value: obj[key] });
    }
  }

  orderedProps.sort((a, b) => sortOrder.indexOf(a.key) - sortOrder.indexOf(b.key));
  alphaProps.sort((a, b) => a.key.localeCompare(b.key));

  return orderedProps.concat(alphaProps);
}