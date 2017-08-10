import numpy as np

x = np.array([1.0,2.0,3.0])
y = np.array([2.0, 4.0, 6.0])

print("x = %s" % x)
print("type(x) = %s" % type(x))

print("x + y = %s" % (x + y))
print("x - y = %s" % (x - y))
print("x * y = %s" % (x * y))
print("x / y = %s" % (x / y))

print("x / 2 = %s" % (x / 2))


A = np.array([[1,2], [3,4]])
print("A = %s" % A)
print("A shape = %s" % (A.shape,))
print("A dtype = %s" % A.dtype)

B = np.array([[3, 0], [0, 6]])

print("A + B = %s" % (A + B))
print("A * B = %s" % (A * B))


# Broadcast
A = np.array([[1,2], [3,4]])
B = np.array([10, 20])

print("A * 10 = %s" % (A * 10))
print("A * B = %s" % (A * B))
