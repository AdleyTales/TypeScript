class Calc<T> {
  a:T;
  b:T;
}

var obj = new Calc<number>();

obj.a = 12;
obj.b = 'ad'; //还是有限制的
