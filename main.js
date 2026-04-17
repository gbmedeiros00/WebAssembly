// main.js

// carrega o arquivo .wasm compilado
const response = await fetch('fibonacci.wasm');
const buffer = await response.arrayBuffer();

// instancia o módulo WebAssembly
const { instance } = await WebAssembly.instantiate(buffer);

// acessa a função exportada do C
const wasmFib = instance.exports.fibonacci;

// chama como se fosse JS normal
console.log(wasmFib(10)); // -> 55
console.log(wasmFib(30)); // -> 832040

function fibJS(n) {
    if (n <= 1) return n;
    return fibJS(n - 1) + fibJS(n - 2);
}

// O wasmFib você já definiu antes
console.log("Iniciando benchmark para Fibonacci(42)...");

console.time('Tempo JavaScript');
const resJS = fibJS(40);
console.timeEnd('Tempo JavaScript');

console.time('Tempo WebAssembly');
const resWasm = wasmFib(40);
console.timeEnd('Tempo WebAssembly');

console.log("Resultado final:", resWasm);