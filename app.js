function google(arr,k) {
  for (let i = 0; i <= arr.length - k; i++) {
    let max = arr[i];

    for (j = 1; j < k; j++) {
      if (arr[i + j] > max){
        max = arr[i + j]};
    }
    console.log(max + " ");
  }
};
let arr =[1, 3, -1, -3, 5, 3, 6, 7]
let k = 3
google(arr,k);

