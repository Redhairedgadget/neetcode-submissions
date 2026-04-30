class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const score = []

        for (let op of operations) {
            if (!isNaN(op)) {
                score.push(+op)
            } else {
                if (op === "+") {
                    let sum = score[score.length-1] + score[score.length-2];
                    score.push(sum);
                }

                if (op === "D") {
                    let double = score[score.length-1] * 2;
                    score.push(double)
                }

                if (op === "C") {
                    score.pop();
                }
            }
        }

        console.log(score)

        return score.reduce((acc, cur) => acc + cur, 0);
    }
}
