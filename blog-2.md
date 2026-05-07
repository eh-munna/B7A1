# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

## Introduction

Generics in TypeScript are a powerful feature that allows us to create reusable components and functions that can work with a variety of data types while still maintaining strict type safety. In simple words, generics are just variables for types.

## Generics as Reusable and Strictly Typed

Generics help us to create reusable components and functions by keeping the type information intact. When we define a generic function or component, we can specify a placeholder for the type that will be used when the function or component is called. This allows us to write code that can work with any data type while still ensuring that the types are correct.

For example, Imagine we want to write a simple function that takes an array and returns the first item.

If you hardcode the type, it's strictly typed, but not reusable:

```ts
function getFirstNumber(arr: number[]): number {
  return arr[0];
}
```

Great for numbers, but now we have to write a new function for strings!
If we use `any` to make it reusable, then we will introduce the type safety hole. Here comes generics to the rescue:

```ts
function getFirstItem<T>(arr: T[]): T {
  return arr[0];
}
```

By convention we usually use `<T>` (short for Type), but you can name it anything.

Here is what happens when we use it:

- We call `getFirstItem([1, 2, 3])` - TypeScript sees an array of numbers.

- It "locks in" the type: TypeScript silently replaces `T` with `number`.

- Strict Typing is preserved: The function signature effectively becomes `(arr: number[]): number`. It knows the return value is guaranteed to be a `number`.

- Later if we pass `getFirstItem(["apple", "banana"])`, `T` becomes `string`. The function is completely reusable, but you never lose your type safety or autocomplete.

## Generics with Real-World Reusability: Data Structures

Generics are specially useful when building reusable data structures, like an API response wrapper. Most of the cases API responses look the same (they have a status code, a message, and some data), but the shape of the data changes depending on the endpoint.

Instead of writing a specific interface for every API call, we can write one Generic interface:

```ts
interface ApiResponse<T> {
  status: number;
  message: string;
  data: T; // The data can be anything, defined later!
}

interface User {
  name: string;
  age: number;
}

interface Product {
  id: number;
  price: number;
}
```

Now we can use `ApiResponse` for any type of data:

```ts
// Reusing the same structure, but strictly typed for a User
const userResponse: ApiResponse<User> = {
  status: 200,
  message: 'User fetched successfully',
  data: { name: 'Alice', age: 30 },
};

// Reusing it again, but for a Product
const productResponse: ApiResponse<Product> = {
  status: 200,
  message: 'Product fetched successfully',
  data: { id: 1, price: 9.99 },
};
```

## Conclusion

Generics gives us the power to write reusable code by keeping the type safety while allowing us to work with different data types. Whether it's a simple function or a complex data structure, generics help us maintain strict typing without sacrificing flexibility. This makes our code more robust, easier to maintain, and less prone to errors.
