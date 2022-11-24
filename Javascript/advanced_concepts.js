// CLOSURES - A function ran and executed. It's never going to run again.
// BUT its going to remember that there are references to those variables.
// So the child scope always has access to the parent scope.

const first = () => {
    let greet = 'Hi';
    const second = () => alert(greet);
    return second;
}

const newFunc = first();
newFunc();

// CURRYING
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
// We can now use something like:
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(b);

// COMPOSE
const compose = (f, g) => (a) => f(g(a));

const add1 = (num) => num + 1;

compose(add1, add1)(5);