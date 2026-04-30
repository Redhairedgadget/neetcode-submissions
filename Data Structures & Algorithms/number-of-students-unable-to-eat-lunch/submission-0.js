class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let count = students.length;

        for (let i = 0; i < sandwiches.length; i++) {
            let eaten = false;
            for (let j = 0; j < students.length; j++) {
                if (sandwiches[i] === students[j]) {
                    sandwiches[i] = -1;
                    students[j] = -1;
                    count--;
                    eaten = true;
                    break;
                }
            }

            if (!eaten) {
                break;
            }
        }

        return count;
    }
}
