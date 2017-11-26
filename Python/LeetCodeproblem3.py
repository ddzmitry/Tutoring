'''
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
'''


class Solution:
    def lengthOfLongestSubstring(self, s):
        
        """
        :type s: str
        :rtype: int
        """
        listOfStrings = {}
        temp = ''
        if len(s) == 0:
            return 0
        for i in range(len(s)):
                if s[i] not in temp:
                    temp += s[i]
                    listOfStrings[len(temp)] = temp
                
                else:
                    temp = temp[temp.index(s[i])+1:len(temp)]
                    temp += s[i]
                    listOfStrings[len(temp)] = temp

        return int(max(listOfStrings.keys()))

print(Solution.lengthOfLongestSubstring(Solution,'abcabcbb'))
Solution.lengthOfLongestSubstring(Solution,'bbbbb')
print(Solution.lengthOfLongestSubstring(Solution,'pwwkew'))
print(Solution.lengthOfLongestSubstring(Solution,'c'))
print(Solution.lengthOfLongestSubstring(Solution,'au'))
print(Solution.lengthOfLongestSubstring(Solution,'dvdf'))
