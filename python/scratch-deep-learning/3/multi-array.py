import numpy as np

A = np.array([1, 2, 3, 4])
print("A = %s" % A)
print("np.ndim(A) = %s" % np.ndim(A)) # 次元数
print("A.shape = %s" % (A.shape,))
print("A.shape[0] = %s" % A.shape[0])

B = np.array([[1, 2], [3, 4], [5, 6]])
print("B = %s" % B)
print("np.ndim(B) = %s" % np.ndim(B))
print("B.shape = %s" % (B.shape,))
print("B.shape[0] = %s" % B.shape[0])

# 3.3.2 matrix
print("Matrix: (2, 2) * (2, 2)")
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print("A.shape = %s" % (A.shape,))
print("B.shape = %s" % (B.shape,))

print("np.dot(A, B) = %s" % np.dot(A, B)) # ドット積
print("np.dot(B, A) = %s" % np.dot(B, A))

print("Matrix: (3, 2) * (2, 3)")
A = np.array([[1, 2, 3], [4, 5, 6]])
B = np.array([[1, 2], [3, 4], [5, 6]])
print("A.shape = %s" % (A.shape,))
print("B.shape = %s" % (B.shape,))
print("A.shape = %s" % (A.shape,))
print("B.shape = %s" % (B.shape,))

print("np.dot(A, B) = %s" % np.dot(A, B))
print("np.dot(B, A) = %s" % np.dot(B, A))

print("Matrix: (3, 2) * (2, 1)")
A = np.array([[1, 2], [3, 4], [5, 6]])
B = np.array([7, 8])
print("A.shape = %s" % (A.shape,))
print("B.shape = %s" % (B.shape,))
print("A.shape = %s" % (A.shape,))
print("B.shape = %s" % (B.shape,))

print("np.dot(A, B) = %s" % np.dot(A, B))

print("---------- Simple Neural Network ----------")
X = np.array([1, 2])
print("X.shape = %s" % (X.shape,))
W = np.array([[1, 3, 5], [2, 4, 6]])
print("W.shape = %s" % (W.shape,))

Y = np.dot(X, W)
print("Y = %s" % Y)