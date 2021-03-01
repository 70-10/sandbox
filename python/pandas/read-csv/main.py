import pandas as pd

csv = pd.read_csv("./sample.csv", names=("name", "age"))

print(csv)
