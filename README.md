# TypeScript

 1. 编译
 2. 强类型
 3. 真面向对象：有接口 有范性 有枚举 有访问修饰符

 AMD
 比JavaScript 还java的script

 ## 下载：

    cnpm i typescript -g

    atom-typescript 插件 智能提示 语法高亮

## 编译

```
    tsc *.ts *.tsx *.d.tss
```

## 有类型的script

好处：帮助做检查

```
 var a:number;
 a = 12;

```

## TypeScript类型

number string boolean symbol void null undefined Enum any

1. 好理解：

  number string boolean null undefined

2. 新的类型:

  symbol void Enum any

  void: 空 一般用于返回值

  null undefined 直有一种值 他本身 既是类型又是值

  enum(枚举)

      有限的可能值
      性别
      星期

  any 变体变量

      js里面原本的变量

      var a;
      a = 12;
      a = 'ads';

## 类型推测(隐式类型声明) -- 根据初始化的值推测类型

    var a = 12;

    等价于： var a:number = 12;

    var a;

    等价于： var a:any;

## 冲突检测

  编译器会自动排除掉无用的选项

## 联合类型

  var a:number | boolean;

## 数组

## 函数类型：

  1. 参数

      有类型
      签名检查 -- 数量必须得一致

  2. 返回值

## 外部变量声明 declare

  declare var $;

  window document 内置都声明过了

## 类型

1. 基本类型
2. 联合类型 -- 选择
3. 函数签名
4. 对象 z?:number 可选类型

---

## 接口 - interface

接口跟Java不同

接口： 约定、限制

汽车(接口): 开、加油、停、锁

## class写法 extend 多继承

## 访问修饰符  大型项目必备

1. public 共有 都可以访问
2. private 私有 只有类内部可以访问
3. protected 受保护--友元 只有子类可以访问

## 范型 在大型项目中能显示优势

别跟 ‘any’ 搞混了

范 - 宽泛

还是有限制的

数组是典型的范型
