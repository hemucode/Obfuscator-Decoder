from dataclasses import replace
from itertools import combinations
import time
import subprocess

try:
   print("RUN.... Devoloper By Hemanta Gayen 2022")

   dictionary_file = 'dictionary_codehemu.com.hax'
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

   replace_py_up_code = 'data_up.py'
   with open(replace_py_up_code, 'r') as data_1:
         replace_up =  data_1.read()

   replace_py_down_code = 'data_down.py'
   with open(replace_py_down_code, 'r') as data_2:
         replace_down =  data_2.read()

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