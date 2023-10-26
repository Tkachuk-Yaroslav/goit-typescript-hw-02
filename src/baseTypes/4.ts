/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/

type User = [string, number]

let person: User = ['Max', 21];

// let person: [string, number] = ['Max', 21];

export {};