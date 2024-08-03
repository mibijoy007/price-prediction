import sys
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split


df = pd.read_csv()

x = df[['area']] 
y = df['price']

x_train, x_test, y_train, y_test = train_test_split(x,y,test_size=0.3,random_state=0) #test size 0.3 means using 30% of data to train

reg = LinearRegression()
reg.fit(x_train, y_train)

# score of our prediction
prediction_score = reg.score(x_test, y_test)

predicted_price = reg.predict([[]])

print("Price is: ",  predicted_price.item())
