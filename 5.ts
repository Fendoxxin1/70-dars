function LogParam(
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  console.log(`${String(propertyKey)} index: ${parameterIndex}`);
}

class MyService {
  doSomething(@LogParam name: string, age: number) {
    console.log(`Hello ${name}, age ${age}`);
  }
}

const s = new MyService();
s.doSomething("Ali", 21);
