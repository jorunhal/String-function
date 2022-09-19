const e = Math.E;
const pi = Math.PI;
const ln10 = Math.LN10;
const ln2 = Math.LN2;
const ln16 = 4*ln2;

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a*b;
const div = (a, b) => b === 0.0 ? 0.0 : a/b;
const mod = (a, b) => b === 0.0 ? a : a % b;

const abs = (a) => Math.abs(a);
const sgn = (a) => Math.sign(a);

const pow = (a, b) => a === 0.0 ? (b === 0.0 ? 1.0 : 0.0) : Math.pow(a, b);
const exp = (a) => Math.exp(a);
const sq = (a) => a*a;
const cb = (a) => a*a*a;
const sqrt = (a) => Math.sqrt(a);
const cbrt = (a) => pow(a, 1/3);

const ln = (a) => a === 0.0 ? 0.0 : Math.log(abs(a));
const log = (a) => ln(a)/ln10;
const lg2 = (a) => ln(a)/ln2;
const lg16 = (a) => ln(a)/ln16;

const sin = (a) => Math.sin(a);
const cos = (a) => Math.cos(a);
const tan = (a) => Math.tan(a);
const cot = (a) => 1.0/Math.tan(a);
const csc = (a) => 1.0/cos(a);
const sec = (a) => 1.0/sin(a);

const sinh = (a) => Math.sinh(a);
const cosh = (a) => Math.cosh(a);
const tanh = (a) => Math.tanh(a);
const coth = (a) => 1.0/Math.tanh(a);
const csch = (a) => 1.0/Math.cosh(a);
const sech = (a) => 1.0/Math.sinh(a);

class Numerical {
	// Represents a general numerical value, holds a value which may be called.
	// For null values, the returned value is zero.
	constructor(value) {
		this.value = value;
	}
	evaluate() { return this.value === null ? 0.0 : this.value; }
	compareTo(num) { return this.value === num.value; }
}

class Variable extends Numerical {
	// Subclass of Numerical. Represents a variable, holds a label and may have
	// its value changed as well as called.
	constructor(label) {
		super(null);
		this.label = label;
	}
	setValue(value) { this.value = value; }
}

class UnaryOperation {
	// Represents a unary operation, holds an operation object, as well as an argument, 
	// either an operation object or a Numerical object.
	constructor(op, arg) {
		this.op = op;
		this.arg = arg;
	}
	evaluate() { return this.op(this.arg.evaluate()); }
}

class BinaryOperation {
	// Represents a unary operation, holds an operation object, as well as two arguments, 
	//either operation objects or Numerical objects.
	constructor(op, arg1, arg2) {
		this.op = op;
		this.arg1 = arg1;
		this.arg2 = arg2;
	}
	evaluate() { return this.op(this.arg1.evaluate(), this.arg2.evaluate()); }
}
