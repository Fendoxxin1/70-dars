function LogMethod(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log(`Method nomi ${methodName}`);
  console.log("Target", target);
  console.log("Descriptor", descriptor);
}

class Car {
  @LogMethod
  drive() {
    console.log("Driving...");
  }
}
