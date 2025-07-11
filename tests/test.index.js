import { orderByProps } from '../src/index.js'; 

describe('Функция orderByProps', () => {
  test('Сортировка свойств объекта согласно заданному порядку и затем по алфавиту', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const sortOrder = ['name', 'level'];
    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 }
    ];
    expect(orderByProps(obj, sortOrder)).toEqual(expected);
  });

  test('Обработка пустого массива порядка сортировки', () => {
    const obj = { name: 'мечник', health: 10 };
    const sortOrder = [];
    const expected = [
      { key: 'health', value: 10 },
      { key: 'name', value: 'мечник' }
    ];
    expect(orderByProps(obj, sortOrder)).toEqual(expect.arrayContaining(expected));
  });

  test('Обработка объекта без свойств', () => {
    const obj = {};
    const sortOrder = ['name', 'level'];
    expect(orderByProps(obj, sortOrder)).toEqual([]);
  });

  test('Обработка порядка сортировки со свойствами, отсутствующими в объекте', () => {
    const obj = {name: 'мечник', health: 10};
    const sortOrder = ['name', 'level', 'attack'];
    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'health', value: 10 },
    ];
    expect(orderByProps(obj, sortOrder)).toEqual(expect.arrayContaining([expect.objectContaining(expected[0]), expect.objectContaining(expected[1])]));
  });

  test('Обработка случая, когда все свойства указаны в массиве порядка сортировки', () => {
    const obj = {name: 'мечник', health: 10};
    const sortOrder = ['name', 'health'];
    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'health', value: 10 },
    ];
    expect(orderByProps(obj, sortOrder)).toEqual(expected);
  });

  test('Обработка случая, когда массив порядка сортировки содержит дубликаты', () => {
    const obj = { name: 'мечник', health: 10, level: 2 };
    const sortOrder = ['name', 'level', 'name'];
    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'health', value: 10 }
    ];
    expect(orderByProps(obj, sortOrder)).toEqual(expect.arrayContaining(expected));
  });
});