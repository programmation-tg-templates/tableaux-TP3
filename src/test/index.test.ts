// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import { compterOccurrences } from "../index";

describe("compterOccurrences", () => {
  test("avec plusieurs occurrences", () => {
    expect(compterOccurrences([1, 2, 3, 2, 4, 2], 2)).toBe(3);
  });

  test("avec toutes les valeurs identiques", () => {
    expect(compterOccurrences([5, 5, 5, 5], 5)).toBe(4);
  });

  test("avec aucune occurrence", () => {
    expect(compterOccurrences([1, 2, 3], 4)).toBe(0);
  });

  test("avec tableau vide", () => {
    expect(compterOccurrences([], 1)).toBe(0);
  });

  test("avec une seule occurrence", () => {
    expect(compterOccurrences([7, 8, 9], 8)).toBe(1);
  });

  test("avec valeur négative", () => {
    expect(compterOccurrences([-1, -2, -1, 0], -1)).toBe(2);
  });

  test("avec zéro", () => {
    expect(compterOccurrences([0, 1, 0, 2, 0], 0)).toBe(3);
  });

  test("avec tableau contenant NaN", () => {
    expect(compterOccurrences([NaN, 1, NaN], NaN)).toBe(0);
  });

  test("avec tableau contenant Infinity", () => {
    expect(compterOccurrences([Infinity, 1, Infinity], Infinity)).toBe(2);
  });

  test("avec tableau contenant des doublons non consécutifs", () => {
    expect(compterOccurrences([3, 1, 3, 2, 3, 4], 3)).toBe(3);
  });
});
