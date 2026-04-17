#include <stdio.h>

//comando para compilar em wasm
//docker run --rm -v $(pwd):/src emscripten/emsdk emcc fibonacci.c -O3 -s WASM=1 -s EXPORTED_FUNCTIONS="['_fibonacci']" -o fibonacci.wasm --no-entry

// função recursiva de fibonacci
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}