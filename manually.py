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
import os,subprocess
from dataclasses import replace
from itertools import combinations
import re
try:
    print("RUN.... Replace file")
    l = {
""" 

replace_down = """ 
 
}

    DATA_FILE = "decode.js"
    pattern = '|'.join(sorted(re.escape(k) for k in l))

    with open(DATA_FILE, 'r') as file:
        lines = file.read()
        NEWS_CONTENT = re.sub(pattern, lambda m: l.get(m.group(0).upper()),  lines, flags=re.IGNORECASE)
        f = open('manually.js', "w")
        f.write(NEWS_CONTENT)
        print("REPLECE COMPLITE!")
        run_file = "python manually.py"
        subprocess.Popen(run_file, shell=True)
       

except Exception as e:   
        print("ERROR FROM FILE NAME replace.py: ")  
        print(e)
"""

IMDB_URL= input('\033[93m'+"[+] INPUT DICTIONARY HAX: "+ '\033[0m')
if IMDB_URL:
    with open('manually.js', 'r') as dictionary_file_data:
        row_dictionary = dictionary_file_data.read()
        Create_dictionary_file = open('decode.js', "w")
        Create_dictionary_file.write(row_dictionary)
    Create_dictionary_filename = "dictionary.hax"
    haxcode = IMDB_URL.upper()
    ZEROSTR= str(int(IMDB_URL, 0))
    dix1 = '"'+haxcode+')":"'+ZEROSTR+')",\n"'+haxcode+' ":"'+ZEROSTR+' ",\n"'+haxcode+';":"'+ZEROSTR+';",\n"'+haxcode+',":"'+ZEROSTR+',",\n"'+haxcode+':":"'+ZEROSTR+':",\n"'+haxcode+']":"'+ZEROSTR+']",\n"'+haxcode+'}":"'+ZEROSTR+'}",\n'
    Create_dictionary_file = open(Create_dictionary_filename, "a")
    Create_dictionary_file.write(dix1)
    print("[+] "+haxcode+":"+ZEROSTR)
    replace_py = replace_up + dix1 + replace_down
    Create_dictionary_filename = "replace.py"
    Create_dictionary_file = open(Create_dictionary_filename, "w")
    Create_dictionary_file.write( replace_py)
    run_file = "python replace.py"
    subprocess.Popen(run_file, shell=True)

