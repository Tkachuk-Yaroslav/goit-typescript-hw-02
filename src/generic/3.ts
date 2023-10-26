/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends Object, K extends Object>(objA: T, objB: K) {
    return Object.assign(objA, objB);
}

const topObj = {
    name: "Object A",
    position: 1,
    color: "red",
    weight: 10,
};

const bottomObj = {
    name: "Object B",
    position: 2,
    color: "blue",
    weight: 20,
    bgColor: 'blue'
};
const result = merge(topObj, bottomObj)

export { }