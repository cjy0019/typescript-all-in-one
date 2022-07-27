{
  interface A {
    readonly a: string;
    b: string;
  }

  const aaaa: A = { a: 'hello', b: 'world' };
  // aaaa.a = '123';

  type B = 'Human' | 'Mammal' | 'Animal';
  type AA = { [key in B]: B };
  const aaa: AA = {
    Human: 'Human',
    Mammal: 'Mammal',
    Animal: 'Animal',
  };
  console.log(aaa.Animal);
}
