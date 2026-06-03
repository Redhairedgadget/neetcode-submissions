class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        let prereqMap = {};

        for (let i = 0; i < numCourses; i++) {
            prereqMap[i] = []
        }

        for (let [cr, pr] of prerequisites) {
            prereqMap[cr].push(pr);
        }

        // check all keys
        const visited = new Set<number>();
        function dfs(key: number): boolean {
            if (visited.has(key)) return false;
            if (prereqMap[key].length === 0) return true;

            visited.add(key);
            for (let pr of prereqMap[key]) 
                if (!dfs(pr)) return false;
            
            visited.delete(key)
            prereqMap[key] = [];

            return true;
        }

        let i = 0;

        while (i < numCourses) {
            if(!dfs(i)) return false;
            i++;
        }

        return true;
    }
}
