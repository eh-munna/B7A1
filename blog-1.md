# Why is `any` labeled a "type safety hole," and why is `unknown` the safer choice for handling unpredictable data? Explain the concept of type narrowing.

## Introduction

A type safety hole is a situation where TypeScript stops protecting you, but still lets the code compile. The `any`type is a perfect example of this safety hole.

## `any` and Type Safety Hole

`any` bypasses all the type checking that TypeScript provides. When we declare a variable as `any` it cannot prevent invalid operations. For example, if we have a variable of type `any`, we can call any method on it, assign it to any type, or even access properties that don't exist without any compile-time errors. This can lead to runtime errors and bugs that are hard to track down.

Here's an example of how `any` can lead to a type safety hole:

Here the variable `data` is declared as `any`, which holds a string value:

```ts
let data: any = 'TypeScript';
```

later in the code, we can assign a number to `data`, it won't trigger a compile-time error, nor will it prevent us from calling string methods on it:

```ts
data = 42;
data.toUpperCase();
```

Also, we can try to access a method that also not exists on this variable without any compile-time error:

```ts
data.foo.bar.baz();
```

## `unknown` and Type Safety

On the other hand, `unknown` is a safer option here because it forces us to check the type of the variable, and perform type narrowing before we can use it. It is the opposite of `any`.

For example, we have a data coming from an API, and we want to handle it safely, if we declare it as `any`, it will produce a type safety hole, but if we declare it as `unknown`, we can use type narrowing to ensure that we are handling the data correctly.

```ts
let apiData: unknown = fetchDataFromAPI();
```

If we try to apply any method without checking the type, TypeScript will give us an error:

```ts
apiData.toUpperCase();
```

## Type narrowing

Type narrowing is a process of refining a variable from a broader type (like `unknown`) to a more specific type (such as `string`) so that typescript allows safe operations on it.

To handle unknown safely, we must narrow the type first:

```ts
if (typeof apiData === 'string') {
  console.log(apiData.toUpperCase());
}
```

Here, TypeScript understands that inside the if block, apiData is a string, so string methods are allowed.

## Conclusion

`any` creates a type safety hole because it allows us to bypass the type system, which can lead to runtime errors and bugs. In contrast, `unknown`prevents that hole by forcing validation before use.
For better safety, we should use `unknown` for external/untrusted data instead of `any`.
