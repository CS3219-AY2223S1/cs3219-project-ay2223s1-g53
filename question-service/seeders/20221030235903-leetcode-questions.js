"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Questions", [
      {
        questionTitle: "1. Two Sum",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p><p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p><p>You can return the answer in any order.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> nums = [2,7,11,15], target = 9<strong>Output:</strong> [0,1]<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> nums = [3,2,4], target = 6<strong>Output:</strong> [1,2]</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> nums = [3,3], target = 6<strong>Output:</strong> [0,1]</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li><li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li><li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li><li><strong>Only one valid answer exists.</strong></li></ul><p> </p><strong>Follow-up: </strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>) </code>time complexity?</div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "9. Palindrome Number",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is palindrome integer.</p><p>An integer is a <strong>palindrome</strong> when it reads the same backward as forward.</p><ul><li>For example, <code>121</code> is a palindrome while <code>123</code> is not.</li></ul><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> x = 121<strong>Output:</strong> true<strong>Explanation:</strong> 121 reads as 121 from left to right and from right to left.</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> x = -121<strong>Output:</strong> false<strong>Explanation:</strong> From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> x = 10<strong>Output:</strong> false<strong>Explanation:</strong> Reads 01 from right to left. Therefore it is not a palindrome.</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>-2<sup>31</sup> &lt;= x &lt;= 2<sup>31</sup> - 1</code></li></ul><p> </p><strong>Follow up:</strong> Could you solve it without converting the integer to a string?</div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "13. Roman to Integer",
        questionBody:
          "<div class=\"content__u3I1 question-content__JfgR\"><div><p>Roman numerals are represented by seven different symbols: <code>I</code>, <code>V</code>, <code>X</code>, <code>L</code>, <code>C</code>, <code>D</code> and <code>M</code>.</p><pre><strong>Symbol</strong>       <strong>Value</strong>I             1V             5X             10L             50C             100D             500M             1000</pre><p>For example, <code>2</code> is written as <code>II</code> in Roman numeral, just two ones added together. <code>12</code> is written as <code>XII</code>, which is simply <code>X + II</code>. The number <code>27</code> is written as <code>XXVII</code>, which is <code>XX + V + II</code>.</p><p>Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not <code>IIII</code>. Instead, the number four is written as <code>IV</code>. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as <code>IX</code>. There are six instances where subtraction is used:</p><ul><li><code>I</code> can be placed before <code>V</code> (5) and <code>X</code> (10) to make 4 and 9. </li><li><code>X</code> can be placed before <code>L</code> (50) and <code>C</code> (100) to make 40 and 90. </li><li><code>C</code> can be placed before <code>D</code> (500) and <code>M</code> (1000) to make 400 and 900.</li></ul><p>Given a roman numeral, convert it to an integer.</p><p> </p><p><strong class=\"example\">Example 1:</strong></p><pre><strong>Input:</strong> s = \"III\"<strong>Output:</strong> 3<strong>Explanation:</strong> III = 3.</pre><p><strong class=\"example\">Example 2:</strong></p><pre><strong>Input:</strong> s = \"LVIII\"<strong>Output:</strong> 58<strong>Explanation:</strong> L = 50, V= 5, III = 3.</pre><p><strong class=\"example\">Example 3:</strong></p><pre><strong>Input:</strong> s = \"MCMXCIV\"<strong>Output:</strong> 1994<strong>Explanation:</strong> M = 1000, CM = 900, XC = 90 and IV = 4.</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 15</code></li><li><code>s</code> contains only the characters <code>('I', 'V', 'X', 'L', 'C', 'D', 'M')</code>.</li><li>It is <strong>guaranteed</strong> that <code>s</code> is a valid roman numeral in the range <code>[1, 3999]</code>.</li></ul></div></div><br><br><hr><br>",
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "14. Longest Common Prefix",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Write a function to find the longest common prefix string amongst an array of strings.</p><p>If there is no common prefix, return an empty string <code>""</code>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> strs = ["flower","flow","flight"]<strong>Output:</strong> "fl"</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> strs = ["dog","racecar","car"]<strong>Output:</strong> ""<strong>Explanation:</strong> There is no common prefix among the input strings.</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= strs.length &lt;= 200</code></li><li><code>0 &lt;= strs[i].length &lt;= 200</code></li><li><code>strs[i]</code> consists of only lowercase English letters.</li></ul></div></div><br><br><hr><br>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "20. Valid Parentheses",
        questionBody:
          "<div class=\"content__u3I1 question-content__JfgR\"><div><p>Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p><p>An input string is valid if:</p><ol><li>Open brackets must be closed by the same type of brackets.</li><li>Open brackets must be closed in the correct order.</li><li>Every close bracket has a corresponding open bracket of the same type.</li></ol><p> </p><p><strong class=\"example\">Example 1:</strong></p><pre><strong>Input:</strong> s = \"()\"<strong>Output:</strong> true</pre><p><strong class=\"example\">Example 2:</strong></p><pre><strong>Input:</strong> s = \"()[]{}\"<strong>Output:</strong> true</pre><p><strong class=\"example\">Example 3:</strong></p><pre><strong>Input:</strong> s = \"(]\"<strong>Output:</strong> false</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li><li><code>s</code> consists of parentheses only <code>'()[]{}'</code>.</li></ul></div></div><br><br><hr><br>",
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "21. Merge Two Sorted Lists",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.</p><p>Merge the two lists in a one <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.</p><p>Return <em>the head of the merged linked list</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" style="width: 662px; height: 302px;"/><pre><strong>Input:</strong> list1 = [1,2,4], list2 = [1,3,4]<strong>Output:</strong> [1,1,2,3,4,4]</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> list1 = [], list2 = []<strong>Output:</strong> []</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> list1 = [], list2 = [0]<strong>Output:</strong> [0]</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes in both lists is in the range <code>[0, 50]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li><li>Both <code>list1</code> and <code>list2</code> are sorted in <strong>non-decreasing</strong> order.</li></ul></div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "26. Remove Duplicates from Sorted Array",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer array <code>nums</code> sorted in <strong>non-decreasing order</strong>, remove the duplicates <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank"><strong>in-place</strong></a> such that each unique element appears only <strong>once</strong>. The <strong>relative order</strong> of the elements should be kept the <strong>same</strong>.</p><p>Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the <strong>first part</strong> of the array <code>nums</code>. More formally, if there are <code>k</code> elements after removing the duplicates, then the first <code>k</code> elements of <code>nums</code> should hold the final result. It does not matter what you leave beyond the first <code>k</code> elements.</p><p>Return <code>k</code><em> after placing the final result in the first </em><code>k</code><em> slots of </em><code>nums</code>.</p><p>Do <strong>not</strong> allocate extra space for another array. You must do this by <strong>modifying the input array <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a></strong> with O(1) extra memory.</p><p><strong>Custom Judge:</strong></p><p>The judge will test your solution with the following code:</p><pre>int[] nums = [...]; // Input arrayint[] expectedNums = [...]; // The expected answer with correct lengthint k = removeDuplicates(nums); // Calls your implementationassert k == expectedNums.length;for (int i = 0; i &lt; k; i++) {    assert nums[i] == expectedNums[i];}</pre><p>If all assertions pass, then your solution will be <strong>accepted</strong>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> nums = [1,1,2]<strong>Output:</strong> 2, nums = [1,2,_]<strong>Explanation:</strong> Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.It does not matter what you leave beyond the returned k (hence they are underscores).</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> nums = [0,0,1,1,1,2,2,3,3,4]<strong>Output:</strong> 5, nums = [0,1,2,3,4,_,_,_,_,_]<strong>Explanation:</strong> Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.It does not matter what you leave beyond the returned k (hence they are underscores).</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 3 ',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "27. Remove Element",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer array <code>nums</code> and an integer <code>val</code>, remove all occurrences of <code>val</code> in <code>nums</code> <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank"><strong>in-place</strong></a>. The relative order of the elements may be changed.</p><p>Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the <strong>first part</strong> of the array <code>nums</code>. More formally, if there are <code>k</code> elements after removing the duplicates, then the first <code>k</code> elements of <code>nums</code> should hold the final result. It does not matter what you leave beyond the first <code>k</code> elements.</p><p>Return <code>k</code><em> after placing the final result in the first </em><code>k</code><em> slots of </em><code>nums</code>.</p><p>Do <strong>not</strong> allocate extra space for another array. You must do this by <strong>modifying the input array <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a></strong> with O(1) extra memory.</p><p><strong>Custom Judge:</strong></p><p>The judge will test your solution with the following code:</p><pre>int[] nums = [...]; // Input arrayint val = ...; // Value to removeint[] expectedNums = [...]; // The expected answer with correct length.                            // It is sorted with no values equaling val.int k = removeElement(nums, val); // Calls your implementationassert k == expectedNums.length;sort(nums, 0, k); // Sort the first k elements of numsfor (int i = 0; i &lt; actualLength; i++) {    assert nums[i] == expectedNums[i];}</pre><p>If all assertions pass, then your solution will be <strong>accepted</strong>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> nums = [3,2,2,3], val = 3<strong>Output:</strong> 2, nums = [2,2,_,_]<strong>Explanation:</strong> Your function should return k = 2, with the first two elements of nums being 2.It does not matter what you leave beyond the returned k (hence they are underscores).</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> nums = [0,1,2,2,3,0,4,2], val = 2<strong>Output:</strong> 5, nums = [0,1,4,0,3,_,_,_]<strong>Explanation:</strong> Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.Note that the five elements can be returned in any order.It does not matter what you leave beyond the returned k (hence they are underscores).</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= nums.length &lt;= 100</code></li><li><code>0 &lt;= nums[i] &lt;= 50</code></li><li><code>0 &lt;= val &lt;= 100</code></li></ul></div></div><br><br><hr><br>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "35. Search Insert Position",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.</p><p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> nums = [1,3,5,6], target = 5<strong>Output:</strong> 2</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> nums = [1,3,5,6], target = 2<strong>Output:</strong> 1</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> nums = [1,3,5,6], target = 7<strong>Output:</strong> 4</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li><li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li><li><code>nums</code> contains <strong>distinct</strong> values sorted in <strong>ascending</strong> order.</li><li><code>-10<sup>4</sup> &lt;= target &lt;= 10<sup>4</sup></code></li></ul></div></div><br><br><hr><br>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "58. Length of Last Word",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <code>s</code> consisting of words and spaces, return <em>the length of the <strong>last</strong> word in the string.</em></p><p>A <strong>word</strong> is a maximal substring consisting of non-space characters only.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> s = "Hello World"<strong>Output:</strong> 5<strong>Explanation:</strong> The last word is "World" with length 5.</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> s = "   fly me   to   the moon  "<strong>Output:</strong> 4<strong>Explanation:</strong> The last word is "moon" with length 4.</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> s = "luffy is still joyboy"<strong>Output:</strong> 6<strong>Explanation:</strong> The last word is "joyboy" with length 6.</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li><li><code>s</code> consists of only English letters and spaces <code>\' \'</code>.</li><li>There will be at least one word in <code>s</code>.</li></ul></div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "66. Plus One",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>You are given a <strong>large integer</strong> represented as an integer array <code>digits</code>, where each <code>digits[i]</code> is the <code>i<sup>th</sup></code> digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading <code>0</code>\'s.</p><p>Increment the large integer by one and return <em>the resulting array of digits</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> digits = [1,2,3]<strong>Output:</strong> [1,2,4]<strong>Explanation:</strong> The array represents the integer 123.Incrementing by one gives 123 + 1 = 124.Thus, the result should be [1,2,4].</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> digits = [4,3,2,1]<strong>Output:</strong> [4,3,2,2]<strong>Explanation:</strong> The array represents the integer 4321.Incrementing by one gives 4321 + 1 = 4322.Thus, the result should be [4,3,2,2].</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> digits = [9]<strong>Output:</strong> [1,0]<strong>Explanation:</strong> The array represents the integer 9.Incrementing by one gives 9 + 1 = 10.Thus, the result should be [1,0].</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= digits.length &lt;= 100</code></li><li><code>0 &lt;= digits[i] &lt;= 9</code></li><li><code>digits</code> does not contain any leading <code>0</code>\'s.</li></ul></div></div><br><br><hr><br><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "67. Add Binary",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given two binary strings <code>a</code> and <code>b</code>, return <em>their sum as a binary string</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> a = "11", b = "1"<strong>Output:</strong> "100"</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> a = "1010", b = "1011"<strong>Output:</strong> "10101"</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= a.length, b.length &lt;= 10<sup>4</sup></code></li><li><code>a</code> and <code>b</code> consist only of <code>\'0\'</code> or <code>\'1\'</code> characters.</li><li>Each string does not contain leading zeros except for the zero itself.</li></ul></div></div><br><br><hr><br><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "69. Sqrt(x)",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given a non-negative integer <code>x</code>, return <em>the square root of </em><code>x</code><em> rounded down to the nearest integer</em>. The returned integer should be <strong>non-negative</strong> as well.</p><p>You <strong>must not use</strong> any built-in exponent function or operator.</p><ul><li>For example, do not use <code>pow(x, 0.5)</code> in c++ or <code>x ',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "70. Climbing Stairs",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>You are climbing a staircase. It takes <code>n</code> steps to reach the top.</p><p>Each time you can either climb <code>1</code> or <code>2</code> steps. In how many distinct ways can you climb to the top?</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> n = 2<strong>Output:</strong> 2<strong>Explanation:</strong> There are two ways to climb to the top.1. 1 step + 1 step2. 2 steps</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> n = 3<strong>Output:</strong> 3<strong>Explanation:</strong> There are three ways to climb to the top.1. 1 step + 1 step + 1 step2. 1 step + 2 steps3. 2 steps + 1 step</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 45</code></li></ul></div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "83. Remove Duplicates from Sorted List",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>head</code> of a sorted linked list, <em>delete all duplicates such that each element appears only once</em>. Return <em>the linked list <strong>sorted</strong> as well</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/01/04/list1.jpg" style="width: 302px; height: 242px;"/><pre><strong>Input:</strong> head = [1,1,2]<strong>Output:</strong> [1,2]</pre><p><strong class="example">Example 2:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/01/04/list2.jpg" style="width: 542px; height: 222px;"/><pre><strong>Input:</strong> head = [1,1,2,3,3]<strong>Output:</strong> [1,2,3]</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[0, 300]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li><li>The list is guaranteed to be <strong>sorted</strong> in ascending order.</li></ul></div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "88. Merge Sorted Array",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>You are given two integer arrays <code>nums1</code> and <code>nums2</code>, sorted in <strong>non-decreasing order</strong>, and two integers <code>m</code> and <code>n</code>, representing the number of elements in <code>nums1</code> and <code>nums2</code> respectively.</p><p><strong>Merge</strong> <code>nums1</code> and <code>nums2</code> into a single array sorted in <strong>non-decreasing order</strong>.</p><p>The final sorted array should not be returned by the function, but instead be <em>stored inside the array </em><code>nums1</code>. To accommodate this, <code>nums1</code> has a length of <code>m + n</code>, where the first <code>m</code> elements denote the elements that should be merged, and the last <code>n</code> elements are set to <code>0</code> and should be ignored. <code>nums2</code> has a length of <code>n</code>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3<strong>Output:</strong> [1,2,2,3,5,6]<strong>Explanation:</strong> The arrays we are merging are [1,2,3] and [2,5,6].The result of the merge is [<u>1</u>,<u>2</u>,2,<u>3</u>,5,6] with the underlined elements coming from nums1.</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> nums1 = [1], m = 1, nums2 = [], n = 0<strong>Output:</strong> [1]<strong>Explanation:</strong> The arrays we are merging are [1] and [].The result of the merge is [1].</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> nums1 = [0], m = 0, nums2 = [1], n = 1<strong>Output:</strong> [1]<strong>Explanation:</strong> The arrays we are merging are [] and [1].The result of the merge is [1].Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>nums1.length == m + n</code></li><li><code>nums2.length == n</code></li><li><code>0 &lt;= m, n &lt;= 200</code></li><li><code>1 &lt;= m + n &lt;= 200</code></li><li><code>-10<sup>9</sup> &lt;= nums1[i], nums2[j] &lt;= 10<sup>9</sup></code></li></ul><p> </p><p><strong>Follow up: </strong>Can you come up with an algorithm that runs in <code>O(m + n)</code> time?</p></div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "94. Binary Tree Inorder Traversal",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> of a binary tree, return <em>the inorder traversal of its nodes\' values</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg" style="width: 125px; height: 200px;"/><pre><strong>Input:</strong> root = [1,null,2,3]<strong>Output:</strong> [1,3,2]</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> root = []<strong>Output:</strong> []</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> root = [1]<strong>Output:</strong> [1]</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 100]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><p> </p><strong>Follow up:</strong> Recursive solution is trivial, could you do it iteratively?</div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "100. Same Tree",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given the roots of two binary trees <code>p</code> and <code>q</code>, write a function to check if they are the same or not.</p><p>Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg" style="width: 622px; height: 182px;"/><pre><strong>Input:</strong> p = [1,2,3], q = [1,2,3]<strong>Output:</strong> true</pre><p><strong class="example">Example 2:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg" style="width: 382px; height: 182px;"/><pre><strong>Input:</strong> p = [1,2], q = [1,null,2]<strong>Output:</strong> false</pre><p><strong class="example">Example 3:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg" style="width: 622px; height: 182px;"/><pre><strong>Input:</strong> p = [1,2,1], q = [1,1,2]<strong>Output:</strong> false</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes in both trees is in the range <code>[0, 100]</code>.</li><li><code>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></code></li></ul></div></div><br><br><hr><br><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "101. Symmetric Tree",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> of a binary tree, <em>check whether it is a mirror of itself</em> (i.e., symmetric around its center).</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg" style="width: 354px; height: 291px;"/><pre><strong>Input:</strong> root = [1,2,2,3,4,4,3]<strong>Output:</strong> true</pre><p><strong class="example">Example 2:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg" style="width: 308px; height: 258px;"/><pre><strong>Input:</strong> root = [1,2,2,null,3,null,3]<strong>Output:</strong> false</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 1000]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><p> </p><strong>Follow up:</strong> Could you solve it both recursively and iteratively?</div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "104. Maximum Depth of Binary Tree",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.</p><p>A binary tree\'s <strong>maximum depth</strong> is the number of nodes along the longest path from the root node down to the farthest leaf node.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg" style="width: 400px; height: 277px;"/><pre><strong>Input:</strong> root = [3,9,20,null,null,15,7]<strong>Output:</strong> 3</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> root = [1,null,2]<strong>Output:</strong> 2</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul></div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "108. Convert Sorted Array to Binary Search Tree",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer array <code>nums</code> where the elements are sorted in <strong>ascending order</strong>, convert <em>it to a <strong>height-balanced</strong> binary search tree</em>.</p><p>A <strong>height-balanced</strong> binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg" style="width: 302px; height: 222px;"/><pre><strong>Input:</strong> nums = [-10,-3,0,5,9]<strong>Output:</strong> [0,-3,9,-10,null,5]<strong>Explanation:</strong> [0,-10,5,null,-3,null,9] is also accepted:<img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/btree2.jpg" style="width: 302px; height: 222px;"/></pre><p><strong class="example">Example 2:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/02/18/btree.jpg" style="width: 342px; height: 142px;"/><pre><strong>Input:</strong> nums = [1,3]<strong>Output:</strong> [3,1]<strong>Explanation:</strong> [1,null,3] and [3,1] are both height-balanced BSTs.</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li><li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li><li><code>nums</code> is sorted in a <strong>strictly increasing</strong> order.</li></ul></div></div><br><br><hr><br>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "110. Balanced Binary Tree",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary tree, determine if it is height-balanced.</p><p>For this problem, a height-balanced binary tree is defined as:</p><blockquote><p>a binary tree in which the left and right subtrees of <em>every</em> node differ in height by no more than 1.</p></blockquote><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg" style="width: 342px; height: 221px;"/><pre><strong>Input:</strong> root = [3,9,20,null,null,15,7]<strong>Output:</strong> true</pre><p><strong class="example">Example 2:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg" style="width: 452px; height: 301px;"/><pre><strong>Input:</strong> root = [1,2,2,3,3,null,null,4,4]<strong>Output:</strong> false</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> root = []<strong>Output:</strong> true</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 5000]</code>.</li><li><code>-10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup></code></li></ul></div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "111. Minimum Depth of Binary Tree",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given a binary tree, find its minimum depth.</p><p>The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.</p><p><strong>Note:</strong> A leaf is a node with no children.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2020/10/12/ex_depth.jpg" style="width: 432px; height: 302px;"/><pre><strong>Input:</strong> root = [3,9,20,null,null,15,7]<strong>Output:</strong> 2</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> root = [2,null,3,null,4,null,5,null,6]<strong>Output:</strong> 5</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 10<sup>5</sup>]</code>.</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li></ul></div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "112. Path Sum",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> of a binary tree and an integer <code>targetSum</code>, return <code>true</code> if the tree has a <strong>root-to-leaf</strong> path such that adding up all the values along the path equals <code>targetSum</code>.</p><p>A <strong>leaf</strong> is a node with no children.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg" style="width: 500px; height: 356px;"/><pre><strong>Input:</strong> root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22<strong>Output:</strong> true<strong>Explanation:</strong> The root-to-leaf path with the target sum is shown.</pre><p><strong class="example">Example 2:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg"/><pre><strong>Input:</strong> root = [1,2,3], targetSum = 5<strong>Output:</strong> false<strong>Explanation:</strong> There two root-to-leaf paths in the tree:(1 --&gt; 2): The sum is 3.(1 --&gt; 3): The sum is 4.There is no root-to-leaf path with sum = 5.</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> root = [], targetSum = 0<strong>Output:</strong> false<strong>Explanation:</strong> Since the tree is empty, there are no root-to-leaf paths.</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 5000]</code>.</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li><li><code>-1000 &lt;= targetSum &lt;= 1000</code></li></ul></div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "118. Pascal's Triangle",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer <code>numRows</code>, return the first numRows of <strong>Pascal\'s triangle</strong>.</p><p>In <strong>Pascal\'s triangle</strong>, each number is the sum of the two numbers directly above it as shown:</p><img alt="" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif" style="height:240px; width:260px"/><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> numRows = 5<strong>Output:</strong> [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> numRows = 1<strong>Output:</strong> [[1]]</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= numRows &lt;= 30</code></li></ul></div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "119. Pascal's Triangle II",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer <code>rowIndex</code>, return the <code>rowIndex<sup>th</sup></code> (<strong>0-indexed</strong>) row of the <strong>Pascal\'s triangle</strong>.</p><p>In <strong>Pascal\'s triangle</strong>, each number is the sum of the two numbers directly above it as shown:</p><img alt="" src="https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif" style="height:240px; width:260px"/><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> rowIndex = 3<strong>Output:</strong> [1,3,3,1]</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> rowIndex = 0<strong>Output:</strong> [1]</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> rowIndex = 1<strong>Output:</strong> [1,1]</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= rowIndex &lt;= 33</code></li></ul><p> </p><p><strong>Follow up:</strong> Could you optimize your algorithm to use only <code>O(rowIndex)</code> extra space?</p></div></div><br><br><hr><br>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "121. Best Time to Buy and Sell Stock",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.</p><p>You want to maximize your profit by choosing a <strong>single day</strong> to buy one stock and choosing a <strong>different day in the future</strong> to sell that stock.</p><p>Return <em>the maximum profit you can achieve from this transaction</em>. If you cannot achieve any profit, return <code>0</code>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> prices = [7,1,5,3,6,4]<strong>Output:</strong> 5<strong>Explanation:</strong> Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> prices = [7,6,4,3,1]<strong>Output:</strong> 0<strong>Explanation:</strong> In this case, no transactions are done and the max profit = 0.</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= prices.length &lt;= 10<sup>5</sup></code></li><li><code>0 &lt;= prices[i] &lt;= 10<sup>4</sup></code></li></ul></div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "125. Valid Palindrome",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>A phrase is a <strong>palindrome</strong> if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.</p><p>Given a string <code>s</code>, return <code>true</code><em> if it is a <strong>palindrome</strong>, or </em><code>false</code><em> otherwise</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> s = "A man, a plan, a canal: Panama"<strong>Output:</strong> true<strong>Explanation:</strong> "amanaplanacanalpanama" is a palindrome.</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> s = "race a car"<strong>Output:</strong> false<strong>Explanation:</strong> "raceacar" is not a palindrome.</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> s = " "<strong>Output:</strong> true<strong>Explanation:</strong> s is an empty string "" after removing non-alphanumeric characters.Since an empty string reads the same forward and backward, it is a palindrome.</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 2 ',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "136. Single Number",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given a <strong>non-empty</strong> array of integers <code>nums</code>, every element appears <em>twice</em> except for one. Find that single one.</p><p>You must implement a solution with a linear runtime complexity and use only constant extra space.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> nums = [2,2,1]<strong>Output:</strong> 1</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> nums = [4,1,2,1,2]<strong>Output:</strong> 4</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> nums = [1]<strong>Output:</strong> 1</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 3 ',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "141. Linked List Cycle",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given <code>head</code>, the head of a linked list, determine if the linked list has a cycle in it.</p><p>There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the <code>next</code> pointer. Internally, <code>pos</code> is used to denote the index of the node that tail\'s <code>next</code> pointer is connected to. <strong>Note that <code>pos</code> is not passed as a parameter</strong>.</p><p>Return <code>true</code><em> if there is a cycle in the linked list</em>. Otherwise, return <code>false</code>.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png" style="width: 300px; height: 97px; margin-top: 8px; margin-bottom: 8px;"/><pre><strong>Input:</strong> head = [3,2,0,-4], pos = 1<strong>Output:</strong> true<strong>Explanation:</strong> There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).</pre><p><strong class="example">Example 2:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png" style="width: 141px; height: 74px;"/><pre><strong>Input:</strong> head = [1,2], pos = 0<strong>Output:</strong> true<strong>Explanation:</strong> There is a cycle in the linked list, where the tail connects to the 0th node.</pre><p><strong class="example">Example 3:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png" style="width: 45px; height: 45px;"/><pre><strong>Input:</strong> head = [1], pos = -1<strong>Output:</strong> false<strong>Explanation:</strong> There is no cycle in the linked list.</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of the nodes in the list is in the range <code>[0, 10<sup>4</sup>]</code>.</li><li><code>-10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup></code></li><li><code>pos</code> is <code>-1</code> or a <strong>valid index</strong> in the linked-list.</li></ul><p> </p><p><strong>Follow up:</strong> Can you solve it using <code>O(1)</code> (i.e. constant) memory?</p></div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "144. Binary Tree Preorder Traversal",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> of a binary tree, return <em>the preorder traversal of its nodes\' values</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2020/09/15/inorder_1.jpg" style="width: 125px; height: 200px;"/><pre><strong>Input:</strong> root = [1,null,2,3]<strong>Output:</strong> [1,2,3]</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> root = []<strong>Output:</strong> []</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> root = [1]<strong>Output:</strong> [1]</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 100]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><p> </p><p><strong>Follow up:</strong> Recursive solution is trivial, could you do it iteratively?</p></div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "145. Binary Tree Postorder Traversal",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> of a binary tree, return <em>the postorder traversal of its nodes\' values</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2020/08/28/pre1.jpg" style="width: 127px; height: 200px;"/><pre><strong>Input:</strong> root = [1,null,2,3]<strong>Output:</strong> [3,2,1]</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> root = []<strong>Output:</strong> []</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> root = [1]<strong>Output:</strong> [1]</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of the nodes in the tree is in the range <code>[0, 100]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><p> </p><strong>Follow up:</strong> Recursive solution is trivial, could you do it iteratively?</div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "160. Intersection of Two Linked Lists",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given the heads of two singly linked-lists <code>headA</code> and <code>headB</code>, return <em>the node at which the two lists intersect</em>. If the two linked lists have no intersection at all, return <code>null</code>.</p><p>For example, the following two linked lists begin to intersect at node <code>c1</code>:</p><img alt="" src="https://assets.leetcode.com/uploads/2021/03/05/160_statement.png" style="width: 500px; height: 162px;"/><p>The test cases are generated such that there are no cycles anywhere in the entire linked structure.</p><p><strong>Note</strong> that the linked lists must <strong>retain their original structure</strong> after the function returns.</p><p><strong>Custom Judge:</strong></p><p>The inputs to the <strong>judge</strong> are given as follows (your program is <strong>not</strong> given these inputs):</p><ul><li><code>intersectVal</code> - The value of the node where the intersection occurs. This is <code>0</code> if there is no intersected node.</li><li><code>listA</code> - The first linked list.</li><li><code>listB</code> - The second linked list.</li><li><code>skipA</code> - The number of nodes to skip ahead in <code>listA</code> (starting from the head) to get to the intersected node.</li><li><code>skipB</code> - The number of nodes to skip ahead in <code>listB</code> (starting from the head) to get to the intersected node.</li></ul><p>The judge will then create the linked structure based on these inputs and pass the two heads, <code>headA</code> and <code>headB</code> to your program. If you correctly return the intersected node, then your solution will be <strong>accepted</strong>.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/03/05/160_example_1_1.png" style="width: 500px; height: 162px;"/><pre><strong>Input:</strong> intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3<strong>Output:</strong> Intersected at \'8\'<strong>Explanation:</strong> The intersected node\'s value is 8 (note that this must not be 0 if the two lists intersect).From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.- Note that the intersected node\'s value is not 1 because the nodes with value 1 in A and B (2<sup>nd</sup> node in A and 3<sup>rd</sup> node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3<sup>rd</sup> node in A and 4<sup>th</sup> node in B) point to the same location in memory.</pre><p><strong class="example">Example 2:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/03/05/160_example_2.png" style="width: 500px; height: 194px;"/><pre><strong>Input:</strong> intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1<strong>Output:</strong> Intersected at \'2\'<strong>Explanation:</strong> The intersected node\'s value is 2 (note that this must not be 0 if the two lists intersect).From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.</pre><p><strong class="example">Example 3:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/03/05/160_example_3.png" style="width: 300px; height: 189px;"/><pre><strong>Input:</strong> intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2<strong>Output:</strong> No intersection<strong>Explanation:</strong> From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.Explanation: The two lists do not intersect, so return null.</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes of <code>listA</code> is in the <code>m</code>.</li><li>The number of nodes of <code>listB</code> is in the <code>n</code>.</li><li><code>1 &lt;= m, n &lt;= 3 ',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "168. Excel Sheet Column Title",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer <code>columnNumber</code>, return <em>its corresponding column title as it appears in an Excel sheet</em>.</p><p>For example:</p><pre>A -&gt; 1B -&gt; 2C -&gt; 3...Z -&gt; 26AA -&gt; 27AB -&gt; 28 ...</pre><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> columnNumber = 1<strong>Output:</strong> "A"</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> columnNumber = 28<strong>Output:</strong> "AB"</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> columnNumber = 701<strong>Output:</strong> "ZY"</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= columnNumber &lt;= 2<sup>31</sup> - 1</code></li></ul></div></div><br><br><hr><br>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "169. Majority Element",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an array <code>nums</code> of size <code>n</code>, return <em>the majority element</em>.</p><p>The majority element is the element that appears more than <code>⌊n / 2⌋</code> times. You may assume that the majority element always exists in the array.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> nums = [3,2,3]<strong>Output:</strong> 3</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> nums = [2,2,1,1,1,2,2]<strong>Output:</strong> 2</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= n &lt;= 5 ',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "171. Excel Sheet Column Number",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <code>columnTitle</code> that represents the column title as appears in an Excel sheet, return <em>its corresponding column number</em>.</p><p>For example:</p><pre>A -&gt; 1B -&gt; 2C -&gt; 3...Z -&gt; 26AA -&gt; 27AB -&gt; 28 ...</pre><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> columnTitle = "A"<strong>Output:</strong> 1</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> columnTitle = "AB"<strong>Output:</strong> 28</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> columnTitle = "ZY"<strong>Output:</strong> 701</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= columnTitle.length &lt;= 7</code></li><li><code>columnTitle</code> consists only of uppercase English letters.</li><li><code>columnTitle</code> is in the range <code>["A", "FXSHRXW"]</code>.</li></ul></div></div><br><br><hr><br>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "190. Reverse Bits",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Reverse bits of a given 32 bits unsigned integer.</p><p><strong>Note:</strong></p><ul><li>Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer\'s internal binary representation is the same, whether it is signed or unsigned.</li><li>In Java, the compiler represents the signed integers using <a href="https://en.wikipedia.org/wiki/Two%27s_complement" target="_blank">2\'s complement notation</a>. Therefore, in <strong class="example">Example 2</strong> above, the input represents the signed integer <code>-3</code> and the output represents the signed integer <code>-1073741825</code>.</li></ul><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> n = 00000010100101000001111010011100<strong>Output:</strong>    964176192 (00111001011110000010100101000000)<strong>Explanation: </strong>The input binary string <strong>00000010100101000001111010011100</strong> represents the unsigned integer 43261596, so return 964176192 which its binary representation is <strong>00111001011110000010100101000000</strong>.</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> n = 11111111111111111111111111111101<strong>Output:</strong>   3221225471 (10111111111111111111111111111111)<strong>Explanation: </strong>The input binary string <strong>11111111111111111111111111111101</strong> represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is <strong>10111111111111111111111111111111</strong>.</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The input must be a <strong>binary string</strong> of length <code>32</code></li></ul><p> </p><p><strong>Follow up:</strong> If this function is called many times, how would you optimize it?</p></div></div><br><br><hr><br>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "191. Number of 1 Bits",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Write a function that takes an unsigned integer and returns the number of \'1\' bits it has (also known as the <a href="http://en.wikipedia.org/wiki/Hamming_weight" target="_blank">Hamming weight</a>).</p><p><strong>Note:</strong></p><ul><li>Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer\'s internal binary representation is the same, whether it is signed or unsigned.</li><li>In Java, the compiler represents the signed integers using <a href="https://en.wikipedia.org/wiki/Two%27s_complement" target="_blank">2\'s complement notation</a>. Therefore, in <strong class="example">Example 3</strong>, the input represents the signed integer. <code>-3</code>.</li></ul><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> n = 00000000000000000000000000001011<strong>Output:</strong> 3<strong>Explanation:</strong> The input binary string <strong>00000000000000000000000000001011</strong> has a total of three \'1\' bits.</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> n = 00000000000000000000000010000000<strong>Output:</strong> 1<strong>Explanation:</strong> The input binary string <strong>00000000000000000000000010000000</strong> has a total of one \'1\' bit.</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> n = 11111111111111111111111111111101<strong>Output:</strong> 31<strong>Explanation:</strong> The input binary string <strong>11111111111111111111111111111101</strong> has a total of thirty one \'1\' bits.</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The input must be a <strong>binary string</strong> of length <code>32</code>.</li></ul><p> </p><strong>Follow up:</strong> If this function is called many times, how would you optimize it?</div></div><br><br><hr><br><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "202. Happy Number",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Write an algorithm to determine if a number <code>n</code> is happy.</p><p>A <strong>happy number</strong> is a number defined by the following process:</p><ul><li>Starting with any positive integer, replace the number by the sum of the squares of its digits.</li><li>Repeat the process until the number equals 1 (where it will stay), or it <strong>loops endlessly in a cycle</strong> which does not include 1.</li><li>Those numbers for which this process <strong>ends in 1</strong> are happy.</li></ul><p>Return <code>true</code> <em>if</em> <code>n</code> <em>is a happy number, and</em> <code>false</code> <em>if not</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> n = 19<strong>Output:</strong> true<strong>Explanation:</strong>1<sup>2</sup> + 9<sup>2</sup> = 828<sup>2</sup> + 2<sup>2</sup> = 686<sup>2</sup> + 8<sup>2</sup> = 1001<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> = 1</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> n = 2<strong>Output:</strong> false</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li></ul></div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "203. Remove Linked List Elements",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>head</code> of a linked list and an integer <code>val</code>, remove all the nodes of the linked list that has <code>Node.val == val</code>, and return <em>the new head</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg" style="width: 500px; height: 142px;"/><pre><strong>Input:</strong> head = [1,2,6,3,4,5,6], val = 6<strong>Output:</strong> [1,2,3,4,5]</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> head = [], val = 1<strong>Output:</strong> []</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> head = [7,7,7,7], val = 7<strong>Output:</strong> []</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[0, 10<sup>4</sup>]</code>.</li><li><code>1 &lt;= Node.val &lt;= 50</code></li><li><code>0 &lt;= val &lt;= 50</code></li></ul></div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "205. Isomorphic Strings",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given two strings <code>s</code> and <code>t</code>, <em>determine if they are isomorphic</em>.</p><p>Two strings <code>s</code> and <code>t</code> are isomorphic if the characters in <code>s</code> can be replaced to get <code>t</code>.</p><p>All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> s = "egg", t = "add"<strong>Output:</strong> true</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> s = "foo", t = "bar"<strong>Output:</strong> false</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> s = "paper", t = "title"<strong>Output:</strong> true</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 5 ',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "206. Reverse Linked List",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>head</code> of a singly linked list, reverse the list, and return <em>the reversed list</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg" style="width: 542px; height: 222px;"/><pre><strong>Input:</strong> head = [1,2,3,4,5]<strong>Output:</strong> [5,4,3,2,1]</pre><p><strong class="example">Example 2:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg" style="width: 182px; height: 222px;"/><pre><strong>Input:</strong> head = [1,2]<strong>Output:</strong> [2,1]</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> head = []<strong>Output:</strong> []</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is the range <code>[0, 5000]</code>.</li><li><code>-5000 &lt;= Node.val &lt;= 5000</code></li></ul><p> </p><p><strong>Follow up:</strong> A linked list can be reversed either iteratively or recursively. Could you implement both?</p></div></div><br><br><hr><br>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "217. Contains Duplicate",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer array <code>nums</code>, return <code>true</code> if any value appears <strong>at least twice</strong> in the array, and return <code>false</code> if every element is distinct.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> nums = [1,2,3,1]<strong>Output:</strong> true</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> nums = [1,2,3,4]<strong>Output:</strong> false</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> nums = [1,1,1,3,3,4,3,2,4,2]<strong>Output:</strong> true</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li><li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li></ul></div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "219. Contains Duplicate II",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <code>true</code> <em>if there are two <strong>distinct indices</strong> </em><code>i</code><em> and </em><code>j</code><em> in the array such that </em><code>nums[i] == nums[j]</code><em> and </em><code>abs(i - j) &lt;= k</code>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> nums = [1,2,3,1], k = 3<strong>Output:</strong> true</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> nums = [1,0,1,1], k = 1<strong>Output:</strong> true</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> nums = [1,2,3,1,2,3], k = 2<strong>Output:</strong> false</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li><li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li><li><code>0 &lt;= k &lt;= 10<sup>5</sup></code></li></ul></div></div><br><br><hr><br>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "225. Implement Stack using Queues",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (<code>push</code>, <code>top</code>, <code>pop</code>, and <code>empty</code>).</p><p>Implement the <code>MyStack</code> class:</p><ul><li><code>void push(int x)</code> Pushes element x to the top of the stack.</li><li><code>int pop()</code> Removes the element on the top of the stack and returns it.</li><li><code>int top()</code> Returns the element on the top of the stack.</li><li><code>boolean empty()</code> Returns <code>true</code> if the stack is empty, <code>false</code> otherwise.</li></ul><p><b>Notes:</b></p><ul><li>You must use <strong>only</strong> standard operations of a queue, which means that only <code>push to back</code>, <code>peek/pop from front</code>, <code>size</code> and <code>is empty</code> operations are valid.</li><li>Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue\'s standard operations.</li></ul><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input</strong>["MyStack", "push", "push", "top", "pop", "empty"][[], [1], [2], [], [], []]<strong>Output</strong>[null, null, null, 2, 2, false]<strong>Explanation</strong>MyStack myStack = new MyStack();myStack.push(1);myStack.push(2);myStack.top(); // return 2myStack.pop(); // return 2myStack.empty(); // return False</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= x &lt;= 9</code></li><li>At most <code>100</code> calls will be made to <code>push</code>, <code>pop</code>, <code>top</code>, and <code>empty</code>.</li><li>All the calls to <code>pop</code> and <code>top</code> are valid.</li></ul><p> </p><p><strong>Follow-up:</strong> Can you implement the stack using only one queue?</p></div></div><br><br><hr><br>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "226. Invert Binary Tree",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> of a binary tree, invert the tree, and return <em>its root</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg" style="width: 500px; height: 165px;"/><pre><strong>Input:</strong> root = [4,2,7,1,3,6,9]<strong>Output:</strong> [4,7,2,9,6,3,1]</pre><p><strong class="example">Example 2:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg" style="width: 500px; height: 120px;"/><pre><strong>Input:</strong> root = [2,1,3]<strong>Output:</strong> [2,3,1]</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> root = []<strong>Output:</strong> []</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 100]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul></div></div><br><br><hr><br>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "228. Summary Ranges",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>You are given a <strong>sorted unique</strong> integer array <code>nums</code>.</p><p>A <strong>range</strong> <code>[a,b]</code> is the set of all integers from <code>a</code> to <code>b</code> (inclusive).</p><p>Return <em>the <strong>smallest sorted</strong> list of ranges that <strong>cover all the numbers in the array exactly</strong></em>. That is, each element of <code>nums</code> is covered by exactly one of the ranges, and there is no integer <code>x</code> such that <code>x</code> is in one of the ranges but not in <code>nums</code>.</p><p>Each range <code>[a,b]</code> in the list should be output as:</p><ul><li><code>"a-&gt;b"</code> if <code>a != b</code></li><li><code>"a"</code> if <code>a == b</code></li></ul><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> nums = [0,1,2,4,5,7]<strong>Output:</strong> ["0-&gt;2","4-&gt;5","7"]<strong>Explanation:</strong> The ranges are:[0,2] --&gt; "0-&gt;2"[4,5] --&gt; "4-&gt;5"[7,7] --&gt; "7"</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> nums = [0,2,3,4,6,8,9]<strong>Output:</strong> ["0","2-&gt;4","6","8-&gt;9"]<strong>Explanation:</strong> The ranges are:[0,0] --&gt; "0"[2,4] --&gt; "2-&gt;4"[6,6] --&gt; "6"[8,9] --&gt; "8-&gt;9"</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= nums.length &lt;= 20</code></li><li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li><li>All the values of <code>nums</code> are <strong>unique</strong>.</li><li><code>nums</code> is sorted in ascending order.</li></ul></div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "231. Power of Two",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer <code>n</code>, return <em><code>true</code> if it is a power of two. Otherwise, return <code>false</code></em>.</p><p>An integer <code>n</code> is a power of two, if there exists an integer <code>x</code> such that <code>n == 2<sup>x</sup></code>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> n = 1<strong>Output:</strong> true<strong>Explanation: </strong>2<sup>0</sup> = 1</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> n = 16<strong>Output:</strong> true<strong>Explanation: </strong>2<sup>4</sup> = 16</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> n = 3<strong>Output:</strong> false</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>-2<sup>31</sup> &lt;= n &lt;= 2<sup>31</sup> - 1</code></li></ul><p> </p><strong>Follow up:</strong> Could you solve it without loops/recursion?</div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "232. Implement Queue using Stacks",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (<code>push</code>, <code>peek</code>, <code>pop</code>, and <code>empty</code>).</p><p>Implement the <code>MyQueue</code> class:</p><ul><li><code>void push(int x)</code> Pushes element x to the back of the queue.</li><li><code>int pop()</code> Removes the element from the front of the queue and returns it.</li><li><code>int peek()</code> Returns the element at the front of the queue.</li><li><code>boolean empty()</code> Returns <code>true</code> if the queue is empty, <code>false</code> otherwise.</li></ul><p><strong>Notes:</strong></p><ul><li>You must use <strong>only</strong> standard operations of a stack, which means only <code>push to top</code>, <code>peek/pop from top</code>, <code>size</code>, and <code>is empty</code> operations are valid.</li><li>Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack\'s standard operations.</li></ul><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input</strong>["MyQueue", "push", "push", "peek", "pop", "empty"][[], [1], [2], [], [], []]<strong>Output</strong>[null, null, null, 1, 1, false]<strong>Explanation</strong>MyQueue myQueue = new MyQueue();myQueue.push(1); // queue is: [1]myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)myQueue.peek(); // return 1myQueue.pop(); // return 1, queue is [2]myQueue.empty(); // return false</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= x &lt;= 9</code></li><li>At most <code>100</code> calls will be made to <code>push</code>, <code>pop</code>, <code>peek</code>, and <code>empty</code>.</li><li>All the calls to <code>pop</code> and <code>peek</code> are valid.</li></ul><p> </p><p><strong>Follow-up:</strong> Can you implement the queue such that each operation is <strong><a href="https://en.wikipedia.org/wiki/Amortized_analysis" target="_blank">amortized</a></strong> <code>O(1)</code> time complexity? In other words, performing <code>n</code> operations will take overall <code>O(n)</code> time even if one of those operations may take longer.</p></div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "234. Palindrome Linked List",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>head</code> of a singly linked list, return <code>true</code><em> if it is a palindrome or </em><code>false</code><em> otherwise</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg" style="width: 422px; height: 62px;"/><pre><strong>Input:</strong> head = [1,2,2,1]<strong>Output:</strong> true</pre><p><strong class="example">Example 2:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/03/03/pal2linked-list.jpg" style="width: 182px; height: 62px;"/><pre><strong>Input:</strong> head = [1,2]<strong>Output:</strong> false</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[1, 10<sup>5</sup>]</code>.</li><li><code>0 &lt;= Node.val &lt;= 9</code></li></ul><p> </p><strong>Follow up:</strong> Could you do it in <code>O(n)</code> time and <code>O(1)</code> space?</div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "242. Valid Anagram",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> <em>if</em> <code>t</code> <em>is an anagram of</em> <code>s</code><em>, and</em> <code>false</code> <em>otherwise</em>.</p><p>An <strong>Anagram</strong> is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> s = "anagram", t = "nagaram"<strong>Output:</strong> true</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> s = "rat", t = "car"<strong>Output:</strong> false</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length, t.length &lt;= 5 ',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "257. Binary Tree Paths",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> of a binary tree, return <em>all root-to-leaf paths in <strong>any order</strong></em>.</p><p>A <strong>leaf</strong> is a node with no children.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/03/12/paths-tree.jpg" style="width: 207px; height: 293px;"/><pre><strong>Input:</strong> root = [1,2,3,null,5]<strong>Output:</strong> ["1-&gt;2-&gt;5","1-&gt;3"]</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> root = [1]<strong>Output:</strong> ["1"]</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 100]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul></div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "258. Add Digits",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer <code>num</code>, repeatedly add all its digits until the result has only one digit, and return it.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> num = 38<strong>Output:</strong> 2<strong>Explanation:</strong> The process is38 --&gt; 3 + 8 --&gt; 1111 --&gt; 1 + 1 --&gt; 2 Since 2 has only one digit, return it.</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> num = 0<strong>Output:</strong> 0</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= num &lt;= 2<sup>31</sup> - 1</code></li></ul><p> </p><p><strong>Follow up:</strong> Could you do it without any loop/recursion in <code>O(1)</code> runtime?</p></div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "263. Ugly Number",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>An <strong>ugly number</strong> is a positive integer whose prime factors are limited to <code>2</code>, <code>3</code>, and <code>5</code>.</p><p>Given an integer <code>n</code>, return <code>true</code> <em>if</em> <code>n</code> <em>is an <strong>ugly number</strong></em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> n = 6<strong>Output:</strong> true<strong>Explanation:</strong> 6 = 2 × 3</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> n = 1<strong>Output:</strong> true<strong>Explanation:</strong> 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> n = 14<strong>Output:</strong> false<strong>Explanation:</strong> 14 is not ugly since it includes the prime factor 7.</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>-2<sup>31</sup> &lt;= n &lt;= 2<sup>31</sup> - 1</code></li></ul></div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "268. Missing Number",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an array <code>nums</code> containing <code>n</code> distinct numbers in the range <code>[0, n]</code>, return <em>the only number in the range that is missing from the array.</em></p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> nums = [3,0,1]<strong>Output:</strong> 2<strong>Explanation:</strong> n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> nums = [0,1]<strong>Output:</strong> 2<strong>Explanation:</strong> n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> nums = [9,6,4,2,3,5,7,0,1]<strong>Output:</strong> 8<strong>Explanation:</strong> n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li><li><code>0 &lt;= nums[i] &lt;= n</code></li><li>All the numbers of <code>nums</code> are <strong>unique</strong>.</li></ul><p> </p><p><strong>Follow up:</strong> Could you implement a solution using only <code>O(1)</code> extra space complexity and <code>O(n)</code> runtime complexity?</p></div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "278. First Bad Version",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.</p><p>Suppose you have <code>n</code> versions <code>[1, 2, ..., n]</code> and you want to find out the first bad one, which causes all the following ones to be bad.</p><p>You are given an API <code>bool isBadVersion(version)</code> which returns whether <code>version</code> is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> n = 5, bad = 4<strong>Output:</strong> 4<strong>Explanation:</strong>call isBadVersion(3) -&gt; falsecall isBadVersion(5) -&gt; truecall isBadVersion(4) -&gt; trueThen 4 is the first bad version.</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> n = 1, bad = 1<strong>Output:</strong> 1</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= bad &lt;= n &lt;= 2<sup>31</sup> - 1</code></li></ul></div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "283. Move Zeroes",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer array <code>nums</code>, move all <code>0</code>\'s to the end of it while maintaining the relative order of the non-zero elements.</p><p><strong>Note</strong> that you must do this in-place without making a copy of the array.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> nums = [0,1,0,3,12]<strong>Output:</strong> [1,3,12,0,0]</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> nums = [0]<strong>Output:</strong> [0]</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li><li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li></ul><p> </p><strong>Follow up:</strong> Could you minimize the total number of operations done?</div></div><br><br><hr><br><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "290. Word Pattern",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given a <code>pattern</code> and a string <code>s</code>, find if <code>s</code> follows the same pattern.</p><p>Here <b>follow</b> means a full match, such that there is a bijection between a letter in <code>pattern</code> and a <b>non-empty</b> word in <code>s</code>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> pattern = "abba", s = "dog cat cat dog"<strong>Output:</strong> true</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> pattern = "abba", s = "dog cat cat fish"<strong>Output:</strong> false</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> pattern = "aaaa", s = "dog cat cat dog"<strong>Output:</strong> false</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= pattern.length &lt;= 300</code></li><li><code>pattern</code> contains only lower-case English letters.</li><li><code>1 &lt;= s.length &lt;= 3000</code></li><li><code>s</code> contains only lowercase English letters and spaces <code>\' \'</code>.</li><li><code>s</code> <strong>does not contain</strong> any leading or trailing spaces.</li><li>All the words in <code>s</code> are separated by a <strong>single space</strong>.</li></ul></div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "292. Nim Game",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>You are playing the following Nim Game with your friend:</p><ul><li>Initially, there is a heap of stones on the table.</li><li>You and your friend will alternate taking turns, and <strong>you go first</strong>.</li><li>On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.</li><li>The one who removes the last stone is the winner.</li></ul><p>Given <code>n</code>, the number of stones in the heap, return <code>true</code><em> if you can win the game assuming both you and your friend play optimally, otherwise return </em><code>false</code>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> n = 4<strong>Output:</strong> false<strong>Explanation:</strong> These are the possible outcomes:1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.3. You remove 3 stones. Your friend removes the last stone. Your friend wins.In all outcomes, your friend wins.</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> n = 1<strong>Output:</strong> true</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> n = 2<strong>Output:</strong> true</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li></ul></div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "303. Range Sum Query - Immutable",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer array <code>nums</code>, handle multiple queries of the following type:</p><ol><li>Calculate the <strong>sum</strong> of the elements of <code>nums</code> between indices <code>left</code> and <code>right</code> <strong>inclusive</strong> where <code>left &lt;= right</code>.</li></ol><p>Implement the <code>NumArray</code> class:</p><ul><li><code>NumArray(int[] nums)</code> Initializes the object with the integer array <code>nums</code>.</li><li><code>int sumRange(int left, int right)</code> Returns the <strong>sum</strong> of the elements of <code>nums</code> between indices <code>left</code> and <code>right</code> <strong>inclusive</strong> (i.e. <code>nums[left] + nums[left + 1] + ... + nums[right]</code>).</li></ul><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input</strong>["NumArray", "sumRange", "sumRange", "sumRange"][[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]<strong>Output</strong>[null, 1, -1, -3]<strong>Explanation</strong>NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li><li><code>-10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup></code></li><li><code>0 &lt;= left &lt;= right &lt; nums.length</code></li><li>At most <code>10<sup>4</sup></code> calls will be made to <code>sumRange</code>.</li></ul></div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "326. Power of Three",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer <code>n</code>, return <em><code>true</code> if it is a power of three. Otherwise, return <code>false</code></em>.</p><p>An integer <code>n</code> is a power of three, if there exists an integer <code>x</code> such that <code>n == 3<sup>x</sup></code>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> n = 27<strong>Output:</strong> true<strong>Explanation:</strong> 27 = 3<sup>3</sup></pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> n = 0<strong>Output:</strong> false<strong>Explanation:</strong> There is no x where 3<sup>x</sup> = 0.</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> n = -1<strong>Output:</strong> false<strong>Explanation:</strong> There is no x where 3<sup>x</sup> = (-1).</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>-2<sup>31</sup> &lt;= n &lt;= 2<sup>31</sup> - 1</code></li></ul><p> </p><strong>Follow up:</strong> Could you solve it without loops/recursion?</div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "338. Counting Bits",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer <code>n</code>, return <em>an array </em><code>ans</code><em> of length </em><code>n + 1</code><em> such that for each </em><code>i</code><em> </em>(<code>0 &lt;= i &lt;= n</code>)<em>, </em><code>ans[i]</code><em> is the <strong>number of </strong></em><code>1</code><em><strong>\'s</strong> in the binary representation of </em><code>i</code>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> n = 2<strong>Output:</strong> [0,1,1]<strong>Explanation:</strong>0 --&gt; 01 --&gt; 12 --&gt; 10</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> n = 5<strong>Output:</strong> [0,1,1,2,1,2]<strong>Explanation:</strong>0 --&gt; 01 --&gt; 12 --&gt; 103 --&gt; 114 --&gt; 1005 --&gt; 101</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= n &lt;= 10<sup>5</sup></code></li></ul><p> </p><p><strong>Follow up:</strong></p><ul><li>It is very easy to come up with a solution with a runtime of <code>O(n log n)</code>. Can you do it in linear time <code>O(n)</code> and possibly in a single pass?</li><li>Can you do it without using any built-in function (i.e., like <code>__builtin_popcount</code> in C++)?</li></ul></div></div><br><br><hr><br>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "342. Power of Four",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer <code>n</code>, return <em><code>true</code> if it is a power of four. Otherwise, return <code>false</code></em>.</p><p>An integer <code>n</code> is a power of four, if there exists an integer <code>x</code> such that <code>n == 4<sup>x</sup></code>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> n = 16<strong>Output:</strong> true</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> n = 5<strong>Output:</strong> false</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> n = 1<strong>Output:</strong> true</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>-2<sup>31</sup> &lt;= n &lt;= 2<sup>31</sup> - 1</code></li></ul><p> </p><strong>Follow up:</strong> Could you solve it without loops/recursion?</div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "344. Reverse String",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Write a function that reverses a string. The input string is given as an array of characters <code>s</code>.</p><p>You must do this by modifying the input array <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a> with <code>O(1)</code> extra memory.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> s = ["h","e","l","l","o"]<strong>Output:</strong> ["o","l","l","e","h"]</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> s = ["H","a","n","n","a","h"]<strong>Output:</strong> ["h","a","n","n","a","H"]</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li><li><code>s[i]</code> is a <a href="https://en.wikipedia.org/wiki/ASCII#Printable_characters" target="_blank">printable ascii character</a>.</li></ul></div></div><br><br><hr><br>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "345. Reverse Vowels of a String",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <code>s</code>, reverse only all the vowels in the string and return it.</p><p>The vowels are <code>\'a\'</code>, <code>\'e\'</code>, <code>\'i\'</code>, <code>\'o\'</code>, and <code>\'u\'</code>, and they can appear in both lower and upper cases, more than once.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> s = "hello"<strong>Output:</strong> "holle"</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> s = "leetcode"<strong>Output:</strong> "leotcede"</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 3 ',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "349. Intersection of Two Arrays",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given two integer arrays <code>nums1</code> and <code>nums2</code>, return <em>an array of their intersection</em>. Each element in the result must be <strong>unique</strong> and you may return the result in <strong>any order</strong>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> nums1 = [1,2,2,1], nums2 = [2,2]<strong>Output:</strong> [2]</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> nums1 = [4,9,5], nums2 = [9,4,9,8,4]<strong>Output:</strong> [9,4]<strong>Explanation:</strong> [4,9] is also accepted.</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums1.length, nums2.length &lt;= 1000</code></li><li><code>0 &lt;= nums1[i], nums2[i] &lt;= 1000</code></li></ul></div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "350. Intersection of Two Arrays II",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given two integer arrays <code>nums1</code> and <code>nums2</code>, return <em>an array of their intersection</em>. Each element in the result must appear as many times as it shows in both arrays and you may return the result in <strong>any order</strong>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> nums1 = [1,2,2,1], nums2 = [2,2]<strong>Output:</strong> [2,2]</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> nums1 = [4,9,5], nums2 = [9,4,9,8,4]<strong>Output:</strong> [4,9]<strong>Explanation:</strong> [9,4] is also accepted.</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums1.length, nums2.length &lt;= 1000</code></li><li><code>0 &lt;= nums1[i], nums2[i] &lt;= 1000</code></li></ul><p> </p><p><strong>Follow up:</strong></p><ul><li>What if the given array is already sorted? How would you optimize your algorithm?</li><li>What if <code>nums1</code>\'s size is small compared to <code>nums2</code>\'s size? Which algorithm is better?</li><li>What if elements of <code>nums2</code> are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?</li></ul></div></div><br><br><hr><br><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "367. Valid Perfect Square",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given a <strong>positive</strong> integer <i>num</i>, write a function which returns True if <i>num</i> is a perfect square else False.</p><p><b>Follow up:</b> <b>Do not</b> use any built-in library function such as <code>sqrt</code>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> num = 16<strong>Output:</strong> true</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> num = 14<strong>Output:</strong> false</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= num &lt;= 2^31 - 1</code></li></ul></div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "374. Guess Number Higher or Lower",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>We are playing the Guess Game. The game is as follows:</p><p>I pick a number from <code>1</code> to <code>n</code>. You have to guess which number I picked.</p><p>Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.</p><p>You call a pre-defined API <code>int guess(int num)</code>, which returns three possible results:</p><ul><li><code>-1</code>: Your guess is higher than the number I picked (i.e. <code>num &gt; pick</code>).</li><li><code>1</code>: Your guess is lower than the number I picked (i.e. <code>num &lt; pick</code>).</li><li><code>0</code>: your guess is equal to the number I picked (i.e. <code>num == pick</code>).</li></ul><p>Return <em>the number that I picked</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> n = 10, pick = 6<strong>Output:</strong> 6</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> n = 1, pick = 1<strong>Output:</strong> 1</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> n = 2, pick = 1<strong>Output:</strong> 1</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li><li><code>1 &lt;= pick &lt;= n</code></li></ul></div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "383. Ransom Note",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given two strings <code>ransomNote</code> and <code>magazine</code>, return <code>true</code><em> if </em><code>ransomNote</code><em> can be constructed by using the letters from </em><code>magazine</code><em> and </em><code>false</code><em> otherwise</em>.</p><p>Each letter in <code>magazine</code> can only be used once in <code>ransomNote</code>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> ransomNote = "a", magazine = "b"<strong>Output:</strong> false</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> ransomNote = "aa", magazine = "ab"<strong>Output:</strong> false</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> ransomNote = "aa", magazine = "aab"<strong>Output:</strong> true</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= ransomNote.length, magazine.length &lt;= 10<sup>5</sup></code></li><li><code>ransomNote</code> and <code>magazine</code> consist of lowercase English letters.</li></ul></div></div><br><br><hr><br>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "387. First Unique Character in a String",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <code>s</code>, <em>find the first non-repeating character in it and return its index</em>. If it does not exist, return <code>-1</code>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> s = "leetcode"<strong>Output:</strong> 0</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> s = "loveleetcode"<strong>Output:</strong> 2</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> s = "aabb"<strong>Output:</strong> -1</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10<sup>5</sup></code></li><li><code>s</code> consists of only lowercase English letters.</li></ul></div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "389. Find the Difference",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>You are given two strings <code>s</code> and <code>t</code>.</p><p>String <code>t</code> is generated by random shuffling string <code>s</code> and then add one more letter at a random position.</p><p>Return the letter that was added to <code>t</code>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> s = "abcd", t = "abcde"<strong>Output:</strong> "e"<strong>Explanation:</strong> \'e\' is the letter that was added.</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> s = "", t = "y"<strong>Output:</strong> "y"</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= s.length &lt;= 1000</code></li><li><code>t.length == s.length + 1</code></li><li><code>s</code> and <code>t</code> consist of lowercase English letters.</li></ul></div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "392. Is Subsequence",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code><em> if </em><code>s</code><em> is a <strong>subsequence</strong> of </em><code>t</code><em>, or </em><code>false</code><em> otherwise</em>.</p><p>A <strong>subsequence</strong> of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., <code>"ace"</code> is a subsequence of <code>"<u>a</u>b<u>c</u>d<u>e</u>"</code> while <code>"aec"</code> is not).</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> s = "abc", t = "ahbgdc"<strong>Output:</strong> true</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> s = "axc", t = "ahbgdc"<strong>Output:</strong> false</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= s.length &lt;= 100</code></li><li><code>0 &lt;= t.length &lt;= 10<sup>4</sup></code></li><li><code>s</code> and <code>t</code> consist only of lowercase English letters.</li></ul><p> </p><strong>Follow up:</strong> Suppose there are lots of incoming <code>s</code>, say <code>s<sub>1</sub>, s<sub>2</sub>, ..., s<sub>k</sub></code> where <code>k &gt;= 10<sup>9</sup></code>, and you want to check one by one to see if <code>t</code> has its subsequence. In this scenario, how would you change your code?</div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "401. Binary Watch",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.</p><ul><li>For example, the below binary watch reads <code>"4:51"</code>.</li></ul><p><img alt="" src="https://assets.leetcode.com/uploads/2021/04/08/binarywatch.jpg" style="width: 500px; height: 500px;"/></p><p>Given an integer <code>turnedOn</code> which represents the number of LEDs that are currently on (ignoring the PM), return <em>all possible times the watch could represent</em>. You may return the answer in <strong>any order</strong>.</p><p>The hour must not contain a leading zero.</p><ul><li>For example, <code>"01:00"</code> is not valid. It should be <code>"1:00"</code>.</li></ul><p>The minute must be consist of two digits and may contain a leading zero.</p><ul><li>For example, <code>"10:2"</code> is not valid. It should be <code>"10:02"</code>.</li></ul><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> turnedOn = 1<strong>Output:</strong> ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> turnedOn = 9<strong>Output:</strong> []</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= turnedOn &lt;= 10</code></li></ul></div></div><br><br><hr><br>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "404. Sum of Left Leaves",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given the <code>root</code> of a binary tree, return <em>the sum of all left leaves.</em></p><p>A <strong>leaf</strong> is a node with no children. A <strong>left leaf</strong> is a leaf that is the left child of another node.</p><p> </p><p><strong class="example">Example 1:</strong></p><img alt="" src="https://assets.leetcode.com/uploads/2021/04/08/leftsum-tree.jpg" style="width: 277px; height: 302px;"/><pre><strong>Input:</strong> root = [3,9,20,null,null,15,7]<strong>Output:</strong> 24<strong>Explanation:</strong> There are two left leaves in the binary tree, with values 9 and 15 respectively.</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> root = [1]<strong>Output:</strong> 0</pre><p> </p><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 1000]</code>.</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li></ul></div></div><br><br><hr><br><style>pre{white-space:pre-wrap;background:#f7f9fa;padding:10px 15px;color:#263238;line-height:1.6;font-size:13px;border-radius:3px margin-top: 0;margin-bottom:1em;overflow:auto}b,strong{font-weight:bolder}#title{font-size:16px;color:#212121;font-weight:600;margin-bottom:10px}hr{height:10px;border:0;box-shadow:0 10px 10px -10px #8c8b8b inset}</style>',
        difficulty: "easy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "405. Convert a Number to Hexadecimal",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer <code>num</code>, return <em>a string representing its hexadecimal representation</em>. For negative integers, <a href="https://en.wikipedia.org/wiki/Two%27s_complement" target="_blank">two’s complement</a> method is used.</p><p>All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.</p><p><strong>Note: </strong>You are not allowed to use any built-in library method to directly solve this problem.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> num = 26<strong>Output:</strong> "1a"</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> num = -1<strong>Output:</strong> "ffffffff"</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>-2<sup>31</sup> &lt;= num &lt;= 2<sup>31</sup> - 1</code></li></ul></div></div><br><br><hr><br>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "409. Longest Palindrome",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given a string <code>s</code> which consists of lowercase or uppercase letters, return <em>the length of the <strong>longest palindrome</strong></em> that can be built with those letters.</p><p>Letters are <strong>case sensitive</strong>, for example, <code>"Aa"</code> is not considered a palindrome here.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> s = "abccccdd"<strong>Output:</strong> 7<strong>Explanation:</strong> One longest palindrome that can be built is "dccaccd", whose length is 7.</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> s = "a"<strong>Output:</strong> 1<strong>Explanation:</strong> The longest palindrome that can be built is "a", whose length is 1.</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 2000</code></li><li><code>s</code> consists of lowercase <strong>and/or</strong> uppercase English letters only.</li></ul></div></div><br><br><hr><br>',
        difficulty: "hard",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "412. Fizz Buzz",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer <code>n</code>, return <em>a string array </em><code>answer</code><em> (<strong>1-indexed</strong>) where</em>:</p><ul><li><code>answer[i] == "FizzBuzz"</code> if <code>i</code> is divisible by <code>3</code> and <code>5</code>.</li><li><code>answer[i] == "Fizz"</code> if <code>i</code> is divisible by <code>3</code>.</li><li><code>answer[i] == "Buzz"</code> if <code>i</code> is divisible by <code>5</code>.</li><li><code>answer[i] == i</code> (as a string) if none of the above conditions are true.</li></ul><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> n = 3<strong>Output:</strong> ["1","2","Fizz"]</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> n = 5<strong>Output:</strong> ["1","2","Fizz","4","Buzz"]</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> n = 15<strong>Output:</strong> ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li></ul></div></div><br><br><hr><br>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        questionTitle: "414. Third Maximum Number",
        questionBody:
          '<div class="content__u3I1 question-content__JfgR"><div><p>Given an integer array <code>nums</code>, return <em>the <strong>third distinct maximum</strong> number in this array. If the third maximum does not exist, return the <strong>maximum</strong> number</em>.</p><p> </p><p><strong class="example">Example 1:</strong></p><pre><strong>Input:</strong> nums = [3,2,1]<strong>Output:</strong> 1<strong>Explanation:</strong>The first distinct maximum is 3.The second distinct maximum is 2.The third distinct maximum is 1.</pre><p><strong class="example">Example 2:</strong></p><pre><strong>Input:</strong> nums = [1,2]<strong>Output:</strong> 2<strong>Explanation:</strong>The first distinct maximum is 2.The second distinct maximum is 1.The third distinct maximum does not exist, so the maximum (2) is returned instead.</pre><p><strong class="example">Example 3:</strong></p><pre><strong>Input:</strong> nums = [2,2,3,1]<strong>Output:</strong> 1<strong>Explanation:</strong>The first distinct maximum is 3.The second distinct maximum is 2 (both 2\'s are counted together since they have the same value).The third distinct maximum is 1.</pre><p> </p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li><li><code>-2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1</code></li></ul><p> </p><strong>Follow up:</strong> Can you find an <code>O(n)</code> solution?</div></div><br><br><hr><br>',
        difficulty: "medium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Questions", null, {});
  },
};
