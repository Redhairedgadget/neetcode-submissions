class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const left = [];
        const right = [];

        for (let i = 0; i < asteroids.length; i++) {
            const curAstr = asteroids[i];
            if (curAstr > 0) {
                right.push(curAstr)
            } else {
                const curAstrAbs = Math.abs(curAstr)
                if (right.length) {
                    while (right.length && curAstrAbs > right[right.length-1]) {
                        right.pop();
                    }

                    if (right.length) {
                        if (curAstrAbs === right[right.length-1]) {
                            right.pop()
                        }
                    } else {
                        left.push(curAstr)
                    }

                } else {
                    left.push(curAstr)
                }
            }
        }

        return [...left, ...right];
    }
}
