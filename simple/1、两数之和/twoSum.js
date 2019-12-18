/*暴力法
使用两层循环，外层循环计算当前元素与 targettarget 之间的差值，内层循环寻找该差值，若找到该差值，则返回两个元素的下标。
时间复杂度：O(n^2)*/
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === diff) {
                return [i, j];
            }
        }
    }
};

/*
方法2 比较巧妙的一种方法，创建一个map,依次将nums数组以[值，值的下标]的方式存储进map中
      每次都用map.get()方法去map中寻找target减去nums[i]中的值得到的另一个数是否在nums中，
      判断不为undefined就可以返回下标。
*/
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const j = map.get(target - nums[i]);
        if (j !== undefined) {
            return [j, i];
        }
        map.set(nums[i], i)
    }
}
