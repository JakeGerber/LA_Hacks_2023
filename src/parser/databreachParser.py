import pandas as pd

finalDict = dict()
#unused rn but can use it if I add to database in order to let us pick the format.

df = pd.read_excel('breach_report.xls')


#print(df.keys())

breaches = df["State"].tolist()
affected = df["Individuals Affected"].tolist()

#print(affected)

temp = dict()

for i in range(len(breaches)):
    if type(breaches[i]) == str:
        if breaches[i] not in temp:
            temp[breaches[i]] = [affected[i]]
        else:
            temp[breaches[i]][0] += affected[i]


for k, v in temp.items():
    print(v)
    #print(v)
    #under 50k, 150k, 500k, 1 million, 5million, > 5 million
    if v[0] <= 50000:
        #print("#F5A6A6")
        v.append("#F5A6A6")
    elif v[0] <= 150000:
        #print("#EC6A6A")
        v.append("#F5A6A6")
    elif v[0] <= 500000:
        #print("#E23434")
        v.append("#F5A6A6")

    elif v[0] <= 5000000:
        #print("#D21010")
        v.append("#F5A6A6")

    elif v[0] > 5000000:
        #print("#FF0000")
        v.append("#F5A6A6")
    

print(temp.values())
    


#convert dictionary into json