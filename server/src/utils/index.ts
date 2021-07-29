// [{id: _last_name, name: casual.time}]
export const arrayOfCasual = (times, generators) => {
  const result: any = [];

  for (let i = 0; i < times; i += 1) {
    const casualElement: any = {};
    generators.forEach((generator) => {
      casualElement[generator.id] = generator.name();
    });
    result.push(casualElement);
  }

  return result;
};

export const name = () => {};
