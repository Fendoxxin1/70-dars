function LogAccessor(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log(`Accessor ${name}`);
}

class Bank {
  private money: number = 0;

  @LogAccessor
  get seeBank() {
    return this.money;
  }
  @LogAccessor
  set depositMoney(value: number) {
    this.money = value;
  }
}

const bank = new Bank();
bank.seeBank;
