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


# 1.5.5 Broadcast
A = np.array([[1,2], [3,4]])
B = np.array([10, 20])

print("A * 10 = %s" % (A * 10))
print("A * B = %s" % (A * B))

# 1.5.6
X = np.array([[51, 55], [14, 19], [0, 4]])
print("X = %s" % X)
print("X[0] = %s" % X[0])
print("X[0][1] = %s" % X[0][1])

print("Loop X = ")
for row in X:
    print(row)

Y = X.flatten()
print("Y = %s" % Y)
print("Y[np.array([0,2,4])] = %s" % Y[np.array([0,2,4])])
print("Y>15 = %s" % (Y > 15))
print("Y[Y>15] = %s" % (Y[Y>15]))
