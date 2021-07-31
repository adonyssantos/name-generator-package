const names = [
  'Adonys',
  'Samuel',
  'Matías',
  'Evelyn',
  'José',
  'Manuel',
  'Sila',
];

const randomName = () => {
  const index = Math.floor(Math.random() * names.length);
  const name = names[index];
  console.log(name);
  return name;
};

module.exports = { randomName };
