{
  interface Arr<T> {
    forEach(callback: (item: T) => void): void;
    map<S>(callback: (v: T) => S): S[];
    filter<S extends T>(callback: (v: T) => v is S): S[];
  }

  const a: Arr<number> = [1, 2, 3];
  a.forEach((item) => {
    console.log(item);
  });

  a.forEach((item) => {
    console.log(item);
    return '3';
  });

  const b: Arr<string> = ['1', '2', '3'];
  b.forEach((item) => {
    console.log(item);
  });
  b.forEach((item) => {
    console.log(item);
    return '3';
  });

  const c = a.map((v) => v + 1);
  const d = a.map((v) => v.toString());
  const e = a.filter((v): v is number => v % 2 === 0);
  const f: Arr<number | string> = [1, '2', 3, '4', 5];
  const g = f.filter((v): v is string => typeof v === 'string');
}
