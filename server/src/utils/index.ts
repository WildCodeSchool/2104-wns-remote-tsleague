/* eslint-disable import/prefer-default-export */
import type { Generator } from './index.types';

/**
 * Generate an array of casual generator
 *
 * @param times - number time to repeat element on array
 * @param generators - the casual generator and id to repeat
 * @returns
 */
export const arrayOfCasual = (times: number, generators: Generator[]) => {
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
