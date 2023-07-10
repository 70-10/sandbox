export function add(...nums: number[]) {
    return nums.reduce((a, b) => a + b, 0)
}