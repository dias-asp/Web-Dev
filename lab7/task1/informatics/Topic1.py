#A
import math
a = int(input())
b = int(input())
print(math.sqrt(a*a + b*b))

#B
x = int(input())
print(f'The next number for the number {x} is {x + 1}.')
print(f'The next previous for the number {x} is {x - 1}.')

#C
n = int(input())
k = int(input())
print(n // k)

#D
n = int(input())
k = int(input())
print(n % k)

#E
v = int(input())
t = int(input())
s = (v * t) % 109
print((s + 109) % 109)