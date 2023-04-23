import os
import sys
import pandas as pd
import json

# Location of scraped .xlsx files from WARN site
excel_dir = 'exceldata/warn/'
if not os.path.exists(excel_dir):
    sys.exit("Could not find Excel data directory at: " + excel_dir)

# Get the list of Excel files in the "exceldata" directory
excel_files = [f for f in os.listdir(excel_dir) if (f.endswith('.xlsx') or (f.endswith('.xls')))]

# Create the "jsondata" directory if it doesn't exist
json_dir = 'jsondata/warn/'
if not os.path.exists(json_dir):
    os.makedirs(json_dir)
    print('Created output directory at: ' + json_dir)

# Loop through each Excel file and create a JSON file
for excel_file in excel_files:
    # Read the Excel file into a Pandas dataframe
    df = pd.read_excel(os.path.join(excel_dir, excel_file))

    # Cleaning up column names
    df.columns = [x.lower() for x in df.columns]
    df = df.rename(columns=lambda x: x.replace('\n', ' '))
    df = df.rename(columns=lambda x: x.replace('.', ''))
    df = df.rename(columns=lambda x: x.replace('/', 'or'))
    df = df.rename(columns=lambda x: x.replace(' ', ''))
    

    # Convert the dataframe to a dictionary
    data_dict = df.to_dict(orient='records')

    # Convert the dictionary to a JSON string
    json_str = json.dumps(data_dict, indent=4, sort_keys=True, default=str)

    # Write the JSON string to a file
    output_file = os.path.splitext(excel_file)[0] + '.json'
    output_path = os.path.join(json_dir, output_file)
    with open(output_path, 'w', encoding = 'utf-8') as f:
        f.write(json_str)
    print('Wrote to: ' + output_path)