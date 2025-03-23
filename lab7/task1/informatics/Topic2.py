#A
x = int(input())
y = int(input())
print(max(x, y))

#B
x = int(input())
print ("YES" if x % 400 == 0 or (x % 4 == 0 and x % 100 != 0) else "NO")

#C
x = int(input())
y = int(input())
x = bool(x - 1)
y = bool(y - 1)
print ("YES" if x == y else "NO")

#D
x = int(input())
print(-1 if x < 0 else not not bool(x))

#E
x = int(input())
y = int(input())
print (1 if x > y else 0 if x == y else 2)