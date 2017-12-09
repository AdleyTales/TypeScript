class Person {
  public name:string;
  private age:number;

  constructor(name:string, age:number){
    this.name = name;
    this.age = age;
  }

  showMe(){
    console.log('我的名字叫：'+this.name+',我的年龄是：'+'this.age')
  }

}

var p = new Person('adley',12);
p.showMe();
