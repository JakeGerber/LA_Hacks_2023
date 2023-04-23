import os
import sys
import pandas as pd
import xlrd
import json

finalDict = dict()
#unused rn but can use it if I add to database in order to let us pick the format.

# Location of scraped .xlsx files from HHS site
excel_dir = 'exceldata/hhs/'
if not os.path.exists(excel_dir):
    sys.exit("Could not find Excel data directory at: " + excel_dir)

# Get the list of Excel files in the "exceldata" directory
excel_files = [f for f in os.listdir(excel_dir) if (f.endswith('.xlsx') or (f.endswith('.xls')))]

# Create the "jsondata" directory if it doesn't exist
json_dir = 'jsondata/breach/'
if not os.path.exists(json_dir):
    os.makedirs(json_dir)
    print('Created output directory at: ' + json_dir)

for excel_file in excel_files:
    df = pd.read_excel(os.path.join(excel_dir, excel_file))
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
    json_str = json.dumps(temp, indent=4, sort_keys=True, default=str)
    output_file = os.path.splitext(excel_file)[0] + '.json'
    output_path = os.path.join(json_dir, output_file)
    with open(output_path, 'w', encoding = 'utf-8') as f:
        f.write(json_str)
    print('Wrote to: ' + output_path)