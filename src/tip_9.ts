//What happens when we try to compile just a file of types??

interface Foo {
  str: string;
  str1: string;
}

type TFoo = Readonly<Foo & { bar: number }>;
