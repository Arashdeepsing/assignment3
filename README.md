# assignment3



Q1. A.
1.	‘foo()’ sets ‘x’ to ‘2’ and returns a function that logs ‘x’.
2.	Calling the returned function logs ‘2’, and ‘console.log(x); 
Output:
2
2

B.
1. Functions pushed to ‘result’ capture ‘i’, which is ‘3’ after the loop. 
2. Calling these functions returns ‘items[3]’ which is undefined.

Output
[undefined,undefined,undefined]


C. 
1.‘let’ creates a new binding for ‘i’ in each iteration.
2. Function capture the correct ‘i’, returning ‘items[0]’, items[1],and items[2]
Output:
[1,2,3]

D.
1. IIFE captures the current ‘i’ value in each iteration.
2.Functions correctly return ‘items[0]’, items[1] and item[2]


Q2.)

a-	First of all console statement will run followed by “fast promise is done” and then “slow promise is done”

b-	Same as a that is, all the console statements will run followed by “fast promise is done” and then “slow promise is done”

c-	In this can “slow promise will run first” followed by console.log and “fast promise is done” 

Q3.)

a-	First console.log statements will run
It broke! Fast
If broke! Slow

b-	First console.log statements will run
it broke! Fast

