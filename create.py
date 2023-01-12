import os,subprocess
from dataclasses import replace
from itertools import combinations
os.system('color')
filename = 'replace.py'
filename2 = 'dictionary.hax'
if os.path.exists(filename):
    os.remove(filename)
if os.path.exists(filename2):
    os.remove(filename2)

replace_up = """
from dataclasses import replace
from itertools import combinations
import re
try:
    print("RUN.... Repace File!")
    l = {
""" 

replace_down = """ 
 
}

    #DATA INPUT FROM DATA.JSON FILE
    DATA_FILE = "encode.js"
    New_file_name = 'decode.js'
    pattern = '|'.join(sorted(re.escape(k) for k in l))

    with open(DATA_FILE, 'r') as file:
       lines = file.read()
       NEWS_CONTENT = re.sub(pattern, lambda m: l.get(m.group(0).upper()),  lines, flags=re.IGNORECASE)
       f = open(New_file_name, "w")
       f.write(NEWS_CONTENT)
       c = open('manually.js', "w")
       c.write(NEWS_CONTENT)
       print(NEWS_CONTENT)
       

except Exception as e:   
        print("ERROR FROM FILE NAME replace.py: ")  
        print(e)
"""

IMDB_URL= int(input('\033[93m'+"[+] DICTIONARY HAX LENGHT: "+ '\033[0m'))
if IMDB_URL:
    ZERO = 0
    for i in range(1,IMDB_URL+2):
        Create_dictionary_filename = "dictionary.hax"
        haxcode = hex(ZERO).upper()
        ZEROSTR= str(ZERO)
        dix1 = '"'+haxcode+')":"'+ZEROSTR+')",\n"'+haxcode+';":"'+ZEROSTR+';",\n"'+haxcode+' ":"'+ZEROSTR+' ",\n"'+haxcode+',":"'+ZEROSTR+',",\n"'+haxcode+':":"'+ZEROSTR+':",\n"'+haxcode+']":"'+ZEROSTR+']",\n"'+haxcode+'}":"'+ZEROSTR+'}",\n'
        ZERO = ZERO + 1
        Create_dictionary_file = open(Create_dictionary_filename, "a")
        Create_dictionary_file.write(dix1)
        print(haxcode+":"+ZEROSTR)
    
    dictionary_file = 'dictionary.hax'
    with open(dictionary_file, 'r') as dictionary_file_data:
        row_dictionary = dictionary_file_data.read()
        replace_py = replace_up + row_dictionary + '"_0X":"A",' + replace_down
        Create_dictionary_filename = "replace.py"
        Create_dictionary_file = open(Create_dictionary_filename, "w")
        Create_dictionary_file.write(replace_py)
        run_file = "python replace.py"
        subprocess.Popen(run_file, shell=True)

