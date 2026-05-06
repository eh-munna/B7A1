# TypeScript Practice & Blogs

This repository contains a collection of beginner-to-intermediate TypeScript problem solutions, along with a couple of TypeScript-related blog posts.

## 📁 File Structure

- **`solutions.ts`**: Contains the solutions to 7 distinct TypeScript exercises. Topics covered include:
  - Basic types and array methods (`filter`, `includes`)
  - Union types and Type Guards (`typeof`)
  - Generics and Key Constraints (`<T, K extends keyof T>`)
  - Interfaces and Intersection Types
  - Object-Oriented Programming (Classes, Inheritance, and `super`)
- **`blog-1.md`**: A blog post discussing TypeScript concepts.
- **`blog-2.md`**: Another blog post diving into TypeScript topics.

## 🚀 How to Run the Solutions

If you want to execute the code inside `solutions.ts`, you will need Node.js and TypeScript installed.

The easiest way to run it without compiling manually is by using `ts-node`:

```bash
# Execute the file directly
npx ts-node solutions.ts
```

Alternatively, if you are using a modern version of Node.js (v22.6.0 or newer), you can run it directly with node:

```bash

node solutions.ts

```

You can also compile the TypeScript file into plain JavaScript and then run it:

```bash
# 1. Compile the TypeScript file
tsc solutions.ts

# 2. Run the generated JavaScript file
node solutions.js
```

## 📝 Reading the Blogs

Check out my short articles on core TypeScript concepts:

- [Blog 1: Why `any` is a "type safety hole" and understanding `unknown`](./blog-1.md)
- [Blog 2: (Add your title for blog 2 here)](./blog-2.md)

You can view [Blog 1](./blog-1.md) and [Blog 2](./blog-2.md) directly in your code editor (like VS Code) or on GitHub as well.
