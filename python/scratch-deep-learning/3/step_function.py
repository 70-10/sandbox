import numpy as np
import matplotlib.pylab as plt

def step_function(x):
    return np.array(x > 0, dtype=np.int)


def sigmoid_function(x):
    return 1 / (1 + np.exp(-x))

def relu_function(x):
    return np.maximum(0, x)

# Step Function
x = np.arange(-5.0,5.0,0.1)
y = step_function(x)

plt.plot(x,y)
plt.ylim(-0.1, 1.1)
plt.show()

# Sigmoid Function
x = np.arange(-5.0,5.0,0.1)
y = sigmoid_function(x)
print("sigmoid_function(x) = %s" % y)
plt.plot(x, y)
plt.ylim(-0.1, 1.1)
plt.show()

# ReLU Function
x = np.arange(-5.0,5.0,0.1)
y = relu_function(x)
print("sigmoid_function(x) = %s" % y)
plt.plot(x, y)
plt.ylim(-0.1, 5.1)
plt.show()