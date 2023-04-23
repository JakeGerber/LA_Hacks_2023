import selenium
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select
import schedule
import os
import sys

datadir = '/exceldata/'
options = webdriver.ChromeOptions()
prefs = {"download.default_directory": "/exceldata/"}
options.add_experimental_option('prefs', prefs)

PATH = "C:\Program Files (x86)\chromedriver.exe"
if not os.path.exists(PATH):
    sys.exit("Could not find Chrome Driver directory at: " + PATH)
driver = webdriver.Chrome(executable_path=PATH, options=options)
    
# Create output directory
if not os.path.exists(datadir):
    os.makedirs(json_dir)
    print('Created output directory at: ' + datadir)

def acquire_reports():
    driver.get('https://edd.ca.gov/siteassets/files/jobs_and_training/warn/warn_report.xlsx')
    time.sleep(5)
    driver.get('https://ocrportal.hhs.gov/ocr/breach/breach_report.jsf')
    breach_excel = driver.find_element(by=By.ID, value='ocrForm:j_idt363')
    breach_excel.click()
    time.sleep(5)
    driver.close
schedule.every().tuesday.do(aquire_reports())
schedule.every().thursday.do(aquire_reports())