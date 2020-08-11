'use strict';
// function fib(n) {
//     if (n === 0) {
//       return 0;
//     }else if (n === 1) {
//         return 1;
//     }
//     return fib(n-1) + fib(n-2);
//   }

//   const length = 40 ;
//   for (let i = 0; i <= length; i++) {
//       console.log(fib(i));
//   }

// 連想配列Mapを使用
const memo = new Map(); //memoという名のMapを生成

memo.set(0, 0);
memo.set(1, 1);

//メモ化で一度計算した結果を保存

function fib(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}

// 上記のコメントアウトしたコードより約２０倍の速さで実行できる