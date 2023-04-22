import os
import pandas as pd
import json

# Get the list of Excel files in the "exceldata" directory
excel_files = [f for f in os.listdir('C:/Users/gliera/github/LA_Hacks_2023/src/parser/exceldata') if f.endswith('.xlsx')]

# Create the "jsondata" directory if it doesn't exist
json_dir = 'jsondata'
if not os.path.exists(json_dir):
    os.makedirs(json_dir)

# Loop through each Excel file and create a JSON file
for excel_file in excel_files:
    # Read the Excel file into a Pandas dataframe
    df = pd.read_excel(os.path.join('exceldata', excel_file))

    # Remove line breaks from column names
    df = df.rename(columns=lambda x: x.replace('\n', ' '))

    # Convert the dataframe to a dictionary
    data_dict = df.to_dict(orient='records')

    # Convert the dictionary to a JSON string
    json_str = json.dumps(data_dict, indent=4, sort_keys=True, default=str)

    # Write the JSON string to a file
    output_file = os.path.splitext(excel_file)[0] + '.json'
    output_path = os.path.join(json_dir, output_file)
    with open(output_path, 'w') as f:
        f.write(json_str)