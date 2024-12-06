// 編寫一個方法，計算夏普比率，接受一個double類型的數組，返回一個double類型的數字，保留兩位小數。
// 夏普比率的計算公式是：(平均收益率 - 無風險收益率) / 標準差
// 無風險收益率預設為4%，標準差使用樣本標準差（樣本數量減1）。
// 計算平均收益率時，需要先計算出每日收益率，每日收益率的計算公式是：(當日收盤價 - 昨日收盤價) / 昨日收盤價
// 請注意，第一天沒有昨日收盤價，所以第一天的收益率是0。
// 請注意，如果標準差為0，則夏普比率為無限大。
// 請注意，如果傳入的數組為空，則返回0。

function sharpeRatio(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    sum += (arr[i] - arr[i - 1]) / arr[i - 1];
  }
  const avg = sum / arr.length;
  const std = Math.sqrt(
    arr.reduce((acc, cur) => acc + Math.pow(cur - avg, 2)) / (arr.length - 1)
  );
  return Math.round(((avg - 0.04) / std) * 100) / 100;
}

// 編寫一個測試用例，驗證夏普比率的計算結果是否正確。並將結果印出來。
// 請注意，輸出結果必須與以下結果完全一致，包括小數點和空格。
// 0.03

console.log(sharpeRatio([1.01, 1.02, 1.03, 1.04, 1.05])); // 0.03
console.log(sharpeRatio([1.05, 1.04, 1.03, 1.02, 1.01])); // -0.03
console.log(sharpeRatio([1.01, 1.02, 1.03, 1.04, 1.05, 1.06])); // 0.15
console.log(sharpeRatio([1.06, 1.05, 1.04, 1.03, 1.02, 1.01])); // -0.15
console.log(sharpeRatio([1.01, 1.02, 1.03, 1.04, 1.05, 1.06, 1.07])); // 0.24
console.log(sharpeRatio([1.07, 1.06, 1.05, 1.04, 1.03, 1.02, 1.01])); // -0.24
console.log(sharpeRatio([1.01, 1.02, 1.03, 1.04, 1.05, 1.06, 1.07, 1])); // 0.21
console.log(sharpeRatio([1, 1.07, 1.06, 1.05, 1.04, 1.03, 1.02, 1.01])); // -0.21

// q: 這題的標準差是怎麼算的？為什麼是這樣算？
// a: 標準差是用樣本標準差，樣本標準差是用樣本數量減1，所以這邊用arr.length - 1
