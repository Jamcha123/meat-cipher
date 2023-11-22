import random
import json

word = "Hello world".lower()
text = ["Beef", "Pork", "Lamb", "Chicken"]

newWord = []
for x in range(len(word)):
    num1 = random.randrange(0, 3)
    newWord.append(text[num1])
f2 = open("index.txt", "w")
swaped = "".join(newWord)
f2.write(swaped)
f2.close()