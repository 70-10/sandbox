import numpy as np

def softmax(a):
    c = np.max(a)
    exp_a = np.exp(a - c) # オーバーフロー対策
    sum_exp_a = np.sum(exp_a)
    return exp_a / sum_exp_a

a1 = np.array([0.3, 2.9, 4.0])
a2 = np.array([1010, 1000, 900])
print("softmax(a1) = %s" % softmax(a1))
print("np.sum(softmax(a1)) = %s" % np.sum(softmax(a1)))
print("softmax(a2) = %s" % softmax(a2))
print("np.sum(softmax(a2)) = %s" % np.sum(softmax(a2)))
