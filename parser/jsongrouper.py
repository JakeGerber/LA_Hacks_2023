import os
import json
import sys

json_dir = 'jsondata'
grouped_dir = 'jsondata/warn/grouped/'
top_n = 3
company_employees = {}

if not os.path.exists(json_dir):
    sys.exit("Could not find JSON data directory at: " + json_dir)
    
# Create the "jsondata/grouped" directory if it doesn't exist
if not os.path.exists(grouped_dir):
    os.makedirs(grouped_dir)
    print('Created output directory at: ' + grouped_dir)

# Loop through all JSON files in the jsondata directory
for filename in os.listdir(json_dir):
    if filename.endswith(".json"):
        with open(os.path.join(json_dir, filename),encoding='utf-8') as f:
            data = json.load(f)
            for company in data:
                # Add the number of employees to the existing total for the company
                try:
                    no_of_employees = int(company['noofemployees'])
                except ValueError:
                    # Handle non-integer values
                    no_of_employees = 0
                if company['company'] in company_employees:
                    company_employees[company['company']] += no_of_employees
                else:
                    company_employees[company['company']] = no_of_employees


# Sort the dictionary by the number of employees in descending order
sorted_companies = sorted(company_employees.items(), key=lambda x: x[1], reverse=True)

# Get the top N companies with the largest number of employees
top_companies = sorted_companies[:top_n]

# Create a new JSON object with the top companies
result = [{'company': c[0], 'noofemployees': c[1]} for c in top_companies]

# Save the result to a new JSON file
output_path = grouped_dir + 'top'+str(top_n)+'companies.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(result, f, indent=4)
    print('Wrote to: ' + output_path)
