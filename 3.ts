function LogProperty(target: any, propertyKey: string) {
  console.log(`Bu property nomi: ${propertyKey}`);
}

class Book {
  @LogProperty
  name: string;

  @LogProperty
  sahifa: number = 360;

  constructor(t: string) {
    this.name = t;
  }
}
