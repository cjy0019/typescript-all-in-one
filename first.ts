{
  // TypeScript의 추론을 최대한 잘 활용하자
  const a: number = 5;
  const b: number = 5;
  const c: boolean = true;
  const d: undefined = undefined;
  const e: null = null;
  const f: any = false;
  const g: 10 = 10;

  function add(x: number, y: number): number {
    return x + y;
  }
  const arrowAdd: Add = (x, y) => x + y;

  // 함수 정의 방법
  type Add = (x: number, y: number) => number;
  interface IAdd {
    (x: number, y: number): number;
  }

  function minus(x: number, y: number): number;
  function minus(x: number, y: number) {
    return x - y;
  }

  let aa = 123;
  aa = 'hello' as unknown as number;

  const arr: string[] = ['123', '456'];
  const arr2: Array<number> = [123, 456];
  // 튜플은 길이가 정해진 배열
  const arr3: [number, number, string] = [123, 45, 'hello'];
  const obj: { lat: number; lon: number } = { lat: 366.5, lon: 234.5 };

  const head = document.querySelector('#head')!;

  type World = 'World' | 'Hell';
  type Greeting = `hello ${World}`;

  const h: World = 'World';
  const i = `hello ${h}`;
  const j: Greeting = 'hello Hell';

  const enum EDirection {
    Up,
    Down,
    Left,
    Right,
  }

  const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
  } as const;

  const k = EDirection.Up;
  const l = EDirection.Left;
  console.log(k);

  const object = { a: '123', b: 'hello', c: 'world' } as const;
  type Key = typeof object[keyof typeof object];

  type A = { a: string };
  const m: A = { a: 'hello' };

  interface B {
    a: string;
  }
  const o: B = { a: 'hello' };

  type C = { hello: 'world' } & { zero: 'cho' };
  const p: C = { hello: 'world', zero: 'cho' };

  // 타입 상속
  type Animal = { breath: true };
  type Poyuryu = Animal & { breed: true };
  type Human = Poyuryu & { think: true };

  const zerocho: Human = { breath: true, think: true, breed: true };

  interface G {
    breath: true;
  }
  interface H extends G {
    breed: true;
  }

  interface I {
    talk: () => void;
  }
}
