    
        "_0X":"A",
        "\X20":" ",
        "\X22":"'"
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