class Solution:
    def islandsAndTreasure(self, grid: List[List[int]]) -> None:
        ROWS, COLS = len(grid), len(grid[0])

        # traverse to find where treasure is
        queue = collections.deque([])

        visited = {}

        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 0:
                    visited[(r, c)] = True
                    queue.append((r, c))

        # bfs paths from treasures
        path = 0
        dirs = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        while queue:

            for _ in range(len(queue)):
                t_row, t_col = queue.popleft()
                visited[(t_row, t_col)] = True

                if grid[t_row][t_col] != 0:
                    grid[t_row][t_col] = min(grid[t_row][t_col], path)

                for d in dirs:
                    new_row, new_col = t_row + d[0], t_col + d[1]
                    inbounds = ROWS > new_row >= 0 and COLS > new_col >= 0

                    if inbounds and grid[new_row][new_col] != -1 and (new_row, new_col) not in visited:
                        queue.append((new_row, new_col))

            path += 1



