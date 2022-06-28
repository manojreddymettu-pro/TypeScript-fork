//// [accessorField7.ts]
abstract class C1 {
    abstract accessor a: any;
}

class C2 extends C1 {
    accessor a = 1;
}

class C3 extends C1 {
    get a() { return 1; }
}


//// [accessorField7.js]
class C1 {
}
class C2 extends C1 {
    constructor() {
        super(...arguments);
        this.#a_1 = 1;
    }
}
class C3 extends C1 {
    get a() { return 1; }
}
