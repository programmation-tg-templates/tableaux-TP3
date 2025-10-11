# Tableaux - TP3 - Compter les occurrences

## Consignes

Écrire une fonction `compterOccurrences` qui prend en paramètre un tableau de nombres et une valeur, et retourne le nombre de fois que cette valeur apparaît dans le tableau.

**Signature de la fonction :**

```ts
function compterOccurrences(tableau: number[], valeur: number): number
```

## Exemples

- `compterOccurrences([1, 2, 3, 2, 4, 2], 2)` doit retourner `3`
- `compterOccurrences([5, 5, 5, 5], 5)` doit retourner `4`
- `compterOccurrences([1, 2, 3], 4)` doit retourner `0`
- `compterOccurrences([], 1)` doit retourner `0`
