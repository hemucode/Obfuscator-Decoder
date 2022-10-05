# MIT License

# Copyright (c) 2022 Hemanta Gayen

# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:

# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.

# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

from dataclasses import replace
from itertools import combinations
import time
import subprocess

try:
   print("RUN.... Devoloper By Hemanta Gayen 2022")

   dictionary_file = 'dictionary.hax'
   with open(dictionary_file, 'r') as dictionary_file_data:
       row_dictionary = dictionary_file_data.read()
       #print("row_dictionary")
       # (0X0) To (0)
       combinations_1 = row_dictionary
       # 0X0) To 0)
       combinations_2 = row_dictionary.replace("(","")
       # 0X0 To 0 add gap
       combinations_3 = combinations_2.replace(")"," ")
       # 0X0, To 0,
       combinations_4 = combinations_2.replace(")",",")
       # 0X0; To 0;
       combinations_5 = combinations_2.replace(")",";")
       # 0X0: To 0:
       combinations_6 = combinations_2.replace(")",":")
       # [0X0] To [0]
       combination_1 = combinations_1.replace(")","]")
       combinations_7 = combination_1.replace("(","[")
       # {0X0} To {0}
       combination_2 = combinations_1.replace(")","}")
       combinations_8 = combination_1.replace("(","{")
       # 0X0] To 0]
       combinations_9 = combinations_2.replace(")","]")
       # 0X0} To 0}
       combinations_10 = combinations_2.replace(")","}")

       all_combinations = combinations_1 + combinations_2 + combinations_3 + combinations_4 + combinations_5 + combinations_6 + combinations_7  + combinations_8 + combinations_9 + combinations_10 


   replace_up = """
from dataclasses import replace
from itertools import combinations
import re
try:
    print("RUN.... Replace.py file")
    l = {
   """      
   replace_down = """ 
        "_0X":"A",
        "\X20":" ",
        '\X22':'"',
        '\X27':'"',
        "\X0A":" "
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
       print(NEWS_CONTENT)
       

except Exception as e:   
        print("ERROR FROM FILE NAME replace.py: ")  
        print(e)
   """

   replace_py = replace_up + all_combinations + replace_down

   Create_dictionary_filename = "replace.py"
   Create_dictionary_file = open(Create_dictionary_filename, "w")
   Create_dictionary_file.write( replace_py)

   print("new replace.py file create")
   time.sleep(2)
   run_file = "python " + Create_dictionary_filename
   subprocess.Popen(run_file, shell=True)
   
except Exception as e:   
        print("ERROR FROM FILE NAME dictionary.py ")  
        print(e)