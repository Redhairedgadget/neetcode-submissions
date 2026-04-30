class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        adj = {i: set() for i in range(n)}

        for node1, node2 in edges:
            adj[node1].add(node2)
            adj[node2].add(node1)

        visited = set()
        cycle = set()

        def helper(i: int, par: int) -> bool:
            if i in visited:
                return False

            visited.add(i)

            for aj in adj[i]:
                if aj != par:
                    if helper(aj, i) == False:
                        return False
                        
            return True
            
        traversed = helper(0, -1)

        return True if traversed and len(visited) == n else False

        