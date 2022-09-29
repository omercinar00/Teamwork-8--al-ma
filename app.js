function google(arr,k) {
  for (let i = 0; i <= arr.length - k; i++) {
    let max = arr[i];

    for (let j = 1; j < k; j++) {
      if (arr[i + j] > max){
        max = arr[i + j]};
    }
    console.log(max + " ");
  }
};
let arr =[1, 3, -1, -3, 5, 3, 6, 7]
let k = 3
google(arr,k);

const maxİnput = (q, k) => {
  const length = q.length;
  const arr2 = [];
  if (k === 0) {
    return arr2;
  }
  for (let i = 0; i < length - k + 1; i += 1) {
    arr2.push(Math.max(...q.slice(i, i + k)));
  }
  return arr2;
};

console.log(maxİnput(arr,k))