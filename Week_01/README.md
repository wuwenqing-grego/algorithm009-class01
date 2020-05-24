# 算法训练营

## 如何高效学习

### 基本原则

- 三分看视频，七分做练习

	- 倍速播放，难点暂停反复看

- 摒弃旧习惯

	- 不要死磕

		- 思考不超过5分钟，实现不超过15分钟

	- 高效刷题

		- 敢于背优秀代码，多看高票回答

### 精进三部曲

- chunk it up

	- 庖丁解牛

		- 建立知识树

- deliberate practicing

	- 刻意练习

		- 过遍数
		- 练习弱项

- feedback

	- 即时反馈

		- 主动

			- high vote solution

		- 被动

			- Code Review

### 切题四件套

- Clarification

	- 多看几遍题目，和面试官确认

- Possible solutions

	- 把所有可能解法都过一遍，比较后选择可能最优

- Coding

	- 写代码

- Test cases

	- 测试用例

### 五毒神掌

- 第一遍

	- 5分钟思考，没有思路直接看解法

		- 比较多种解法优劣
		- 背诵默写好的解法

- 第二遍

	- 马上自己写

		- debug 直到通过

- 第三遍

	- 第二天再做一遍

- 第四遍

	- 一周后再做一遍

		- 一定要去国际版看高票解答！

- 第五遍

	- 面试前再做一遍

### 编码技巧

- 提升效率

	- 熟练使用 IDE 快捷方式

- 自顶向下编程方式

	- 写代码类似写报纸

		- 重点在前，细节在后

	- 先思考主干逻辑

		- 写空函数，直接用

	- 再考虑实现细节

		- 用 IDE 补全函数声明

## 数据结构与算法总览

### 数据结构

- 一维

	- 基础

		- 数组：array
		- 链表：linked list

	- 高级

		- 栈：stack
		- 队列：queue

			- 双端队列：deque

		- 集合：set
		- 映射：map/hash

- 二维

	- 基础

		- 树：tree
		- 图：graph

	- 高级

		- 二叉搜索树：BST/red-black tree/AVL
		- 堆：heap
		- 并查集：disjoint set
		- 字典树：Trie

- 特殊

	- 位运算：Bitwise
	- 布隆过滤器：BloomFilter
	- 缓存：LRU Cache

### 算法

- 基石

	- if/else，switch：branch

		- 判断

	- for/while，loop：iteration

		- 循环

	- devide&conquer，backtrace：recursion

		- 递归

- 派生

	- Search

		- 搜索

	- Dynamic Programming

		- 动态规划

	- Binary Search

		- 二分查找

	- Greedy

		- 贪心算法

	- Math&Geometry

		- 数学

## 复杂度分析

### 时间复杂度

- 循环直接看最大次数
- 递归

	- 画出递归树，对所有情况求和
	- Master Theorem

		- 常用分治递推公式

### 空间复杂度

- 数组长度
- 递归深度

	- 递归树的高度

## 数组、链表、跳表

### 一维基础数据结构

- 顺序存储

	- 数组

		- prepend、append、lookup

			- O(1)

		- insert、delete

			- O(n)

- 链式存储

	- 链表

		- prepend、append、insert、delete

			- O(1)

		- lookup

			- O(n)

### 派生数据结构

- 跳表

	- 只能用于元素有序的情况

		- 对标平衡树和二分查找

	- 一维数据结构的优化常常用到的思想：升维

		- 多一层维度就多一层信息

	- 时间：O(logn)
	- 空间：O(n)

### 解题技巧

- 一维数组坐标变换问题

	- 双指针法

		- 一个指针用于遍历数组
		- 一个指针用于记录变换后的结果

	- 283.移动零

- 一维数组求极值问题

	- 左右夹逼法

		- 数组头尾指针逐渐向中间逼近
		- 两者相遇时即遍历完成

	- 11.盛水容器

*XMind - Trial Version*