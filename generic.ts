{
  // generic
  function add<T extends number, K extends string>(x: T, y: K) {
    return x + y;
  }
  // add<number>(1, 2);

  // <T extends {...}>
  // <T extends any[]>
}
