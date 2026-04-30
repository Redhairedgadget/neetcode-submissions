class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        # make adj map
        adj = {i: [] for i in range(n)}

        for n1, n2 in edges:
            adj[n1].append(n2)
            adj[n2].append(n1)

        # dfs which marks visited
        visited = set()

        # work around erroring direct link by checking previous
        def dfs(i: int, prev: int) -> None:
            if i in visited:
                return

            visited.add(i)
            for aj in adj[i]:
                if aj != prev:
                    dfs(aj, i)

        # loop from 0 to n with dfs. When i not in visited res +=1
        res = 0
        for j in range(n):
            if j not in visited:
                res += 1
                dfs(j, -1)

        return res