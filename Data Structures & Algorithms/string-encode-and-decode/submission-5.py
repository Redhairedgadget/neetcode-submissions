class Solution:
    

    def encode(self, strs: List[str]) -> str:
        res = ""

        for s in strs:
            res += str(len(s)) + "#" + s

        return res

    def decode(self, s: str) -> List[str]:
        res = []

        i = 0
        count = ''

        while i < len(s):
            if s[i].isdigit():
                count += s[i]
                i += 1

            else:
                count = int(count)

                # remove pound
                i = i + 1
                cur_s = ''

                while count:
                    cur_s += s[i]
                    count -= 1
                    i += 1

                res.append(cur_s)
                count = ''

        return res
