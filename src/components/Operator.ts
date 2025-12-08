
class Operator{

    static add(...nums: number[]): number {
        return Math.min(1, nums.reduce((a, b) => a + b, 0));
    }

    static average(...nums: number[]): number {
        if(nums.length === 0) return 0;
        return nums.reduce((a, b) => a + b, 0) / nums.length;
    }

}

export { Operator };

