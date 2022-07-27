declare function forEach(
  arr: number[],
  callback: (el: number) => undefined,
): void;

{
  function a(): void {
    return undefined;
  }

  interface Human {
    talk: () => void;
  }

  const person: Human = {
    talk() {
      return 'abc';
    },
  };

  const b: unknown = 1;

  // 이럴 때  언노운을 사용한다.
  try {
  } catch (error) {
    (error as Error).message;
  }

  //! 타입 가드
  function numOrStr(a: number | string) {
    if (typeof a === 'number') {
      a.toFixed(1);
    }
    if (typeof a === 'string') {
      a.charAt(3);
    }

    // if (typeof a === 'boolean') {
    //   a.toString();
    // }
  }

  numOrStr('123');
  numOrStr(1);

  function numOrNumArray(a: number | number[]) {
    if (Array.isArray(a)) {
      a.concat(4);
    } else {
      a.toFixed(3);
    }
  }

  class A {
    aaa() {}
  }
  class B {
    bbb() {}
  }
  function aOrB(param: A | B) {
    if (param instanceof A) {
      param.aaa();
    }
  }
  aOrB(new A());

  const human = { type: 'human' };
  const dog = { type: 'dog' };
  const cat = { type: 'cat' };

  if (human.type === 'human') {
  }

  interface Cat {
    meow: number;
  }
  interface Dog {
    bow: number;
  }
  function catOrDog(a: Cat | Dog): a is Dog {
    if ((a as Cat).meow) {
      return false;
    }
    return true;
  }

  //? 타입을 구분해주는 커스텀 함수를 직접 만들 수 있어요.
  function pet(a: Cat | Dog) {
    if (catOrDog(a)) {
      console.log(a.bow);
    }
    if ('meow' in a) {
      console.log(a.meow);
    }
  }
}
