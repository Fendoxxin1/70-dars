function Component(constructor: Function) {
  console.log("Class nomi:", constructor.name);
}

@Component
class MyClass1 {}
