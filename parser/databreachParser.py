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
json_dir = 'jsondata/hhs/'
if not os.path.exists(json_dir):
    os.makedirs(json_dir)
    print('Created output directory at: ' + json_dir)

for excel_file in excel_files:
    df = pd.read_excel(os.path.join(excel_dir, excel_file))
    
    # Dict of all columns
    fullDict = df.to_dict(orient='records')
    
    breaches = df["State"].tolist()
    affected = df["Individuals Affected"].tolist()

    #print(affected)

    # Aggregate dict - grouped by state, sum no. of affected
    stateSumDict = dict()

    for i in range(len(breaches)):
        if type(breaches[i]) == str:
            if breaches[i] not in stateSumDict:
                stateSumDict[breaches[i]] = [affected[i]]
            else:
                stateSumDict[breaches[i]][0] += affected[i]

    # Create a color range based on no. affected (i.e., more -> redder)
    for k, v in stateSumDict.items():
        if v[0] <= 50000:
            v.append("#F5A6A6")
        elif v[0] <= 150000:
            v.append("#EC6A6A")
        elif v[0] <= 500000:
            v.append("#E23434")
        elif v[0] <= 5000000:
            v.append("#D21010")
        elif v[0] > 5000000:
            v.append("#FF0000")
        
    #convert and write stateSum dictionary into json
    json_str = json.dumps(stateSumDict, indent=4, sort_keys=True, default=str)
    output_file = os.path.splitext(excel_file)[0] + '_stateAgg' + '.json'
    output_path = os.path.join(json_dir, output_file)
    with open(output_path, 'w', encoding = 'utf-8') as f:
        f.write(json_str)
    print('Wrote to: ' + output_path)
    
    #convert and write full dictionary into json
    json_str = json.dumps(fullDict, indent=4, sort_keys=True, default=str)
    output_file = os.path.splitext(excel_file)[0] + '_full' + '.json'
    output_path = os.path.join(json_dir, output_file)
    with open(output_path, 'w', encoding = 'utf-8') as f:
        f.write(json_str)
    print('Wrote to: ' + output_path)