
class Operator{

    static add(...nums: number[]): number {
        return Math.min(1, nums.reduce((a, b) => a + b, 0));
    }

}

export { Operator };

