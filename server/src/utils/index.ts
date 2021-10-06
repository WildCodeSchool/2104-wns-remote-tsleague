/* eslint-disable import/prefer-default-export */
import type { Generator, GeneratedFromCasual } from './index.types';

// TODO UNIT TEST
/**
 * Generate an array of casual generator
 *
 * @param times - number time to repeat element on array
 * @param generators - the casual generator and id to repeat
 * @returns - array of generated casual
 */
export const arrayOfCasual = (times: number, generators: Generator[]) => {
  const result: GeneratedFromCasual[] = [];

  for (let i = 0; i < times; i += 1) {
    const casualElement: GeneratedFromCasual = {};
    generators.forEach((generator) => {
      casualElement[generator.id] = generator.name();
    });
    result.push(casualElement);
  }

  return result;
};
