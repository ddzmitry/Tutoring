'''
LeetCode Challange 

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
'''


class Solution(object):
    

    def twoSum(self, nums, target):
        if len(nums) <= 1:
            return False
        temp = {}        
        for (k,v) in enumerate(nums):
            if v in temp and v + v == target:
                return[temp[v],k]
            else:
                temp[v] = k
        for key in temp.keys():
            
            for key2 in temp.keys():
                if key + key2 == target and temp[key] != temp[key2] :
                    return [temp[key],temp[key2]]


        
            

        
            
        
        

print(Solution.twoSum(Solution,[3,2,3],6))
print(Solution.twoSum(Solution,[3,3],6))
print(Solution.twoSum(Solution,[3,2,4],6))