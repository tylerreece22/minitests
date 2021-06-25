// https://github.com/microsoft/TypeScript/issues/28046

function stringLiterals<T extends string>(...args: T[]): T[] {
    return args;
}

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType> ? ElementType : never;

const values = stringLiterals('A', 'B');
type Foo = ElementType<typeof values>;

const v1: Foo = 'A' // This should work
const v2: Foo = 'D'