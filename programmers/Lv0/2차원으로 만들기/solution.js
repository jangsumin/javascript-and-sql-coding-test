function solution(num_list, n) {
  const result = [];
  for (let i = 0; i < num_list.length; i += n) {
      const temp = [];
      for (let j = 0; j < n; j++) {
          temp.push(num_list[i + j]);
      }
      result.push(temp);
  }
  return result;
}