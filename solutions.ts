const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};

const reverseString = (str: string): string => {
  let newStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): string => {
  if (typeof value === 'string') {
    return 'String';
  } else {
    return 'Number';
  }
};

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  return {
    ...book,
    isRead: true,
  };
};

const myBook = {
  title: 'TypeScript Guide',
  author: 'Jane Doe',
  publishedYear: 2024,
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((num) => arr2.includes(num));
};
