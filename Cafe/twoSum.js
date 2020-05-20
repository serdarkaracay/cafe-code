 const nums = [2, 7, 3, 11, 12,15], target = 26
//const nums = [3,3], target = 6
//const nums = [3, 2, 4],target = 6;

// var twoSum = function (nums, target) {
//   result = [];

//   for (let index = 0; index < nums.length; index++) {
//     const firstValue = nums[index];
//     searchOtherValue = target - firstValue;
  
//     for (let y = index + 1; y < nums.length; y++) {
//       if (firstValue + nums[y] == target) {
//           debugger;
//         result.push(index);
//         result.push(y);
//       }
//     }
//   }
//   return result;
// };


var twoSum = function(nums, target) {
    let map = new Map;
    for (var i = 0; i < nums.length; i++) {
      
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
}

console.log(twoSum(nums, target));


var secondIndex = function (value, index) {};



function twoSumxx(nums, target) {
  // nums.map(m=>console.log(m.match(m<target)));

  result = [];
  var cc = nums.map((m) => {
    if (m + nums[nums.indexOf(m) + 1] === target) {
      result.push(nums.indexOf(m));
      result.push(nums.indexOf(m) + 1);
      return result;
    }
  });

  //    newMap.map(m=>console.log(m+m));
  //    console.log(newMap);

  //map
  //match
  //indexof
  //every
}
