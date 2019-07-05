
from enchant.tokenize import get_tokenizer,HTMLChunker,EmailFilter,URLFilter,WikiWordFilter

def filter_text_before_spell_check(language,text):

    "The function will ignore email ,url , html tags from raw text and return the list of tuples"

    tknzr = get_tokenizer(language,chunkers=(HTMLChunker,),filters=[EmailFilter,URLFilter,WikiWordFilter])
    filteredText= ""
    filteredText = filteredText.join([w[0]+" " for w in tknzr(text)])

    return filteredText.strip()
    
# a=['A.csv', 'B.csv', 'C.csv', 'D.csv', 'E.csv', 'F.csv', 'G.csv', 'H.csv', 'I.csv', 'J.csv', 'K.csv', 'L.csv', 'M.csv', 'N.csv', 'O.csv', 'P.csv', 'Q.csv', 'R.csv', 'S.csv', 'T.csv', 'U.csv', 'V.csv', 'W.csv', 'X.csv', 'Y.csv', 'Z.csv']

a = ["merriem.csv"]
unicodes=[]

for f in a:

    f_all=open(f, "r+")
    words_list = f_all.read()
    dictonary = list(set(words_list.rsplit('\n')))
    dict_fil = []
    ws = ""
    for w in sorted(dictonary):
        for s in w.split(" "):
            # if(isinstance(s, str)):
            print(s)
            ws = ws + s.encode('ascii','ignore').decode("utf-8") + " "
            # else:
                # unicodes.append(s)


    ft= filter_text_before_spell_check("en_US",ws)

    # wft = ws.split(" ")

    list_ft = ft.split(" ")

    strin_lis = []
    strin_Abbre = []
    for w in list_ft:
        if(w.isupper()):
            # print("Yes")
            strin_Abbre.append(w.strip()+'\n')
        else:
            # print("No")
            strin_lis.append(w.strip().lower()+'\n')


    f_union = open("list_new_without_unicode"+f.split(".")[0]+".csv","w+")

    f_union_abrre = open("list_Abre_new_without_unicode"+f.split(".")[0]+".csv","w+")

    f_union.writelines((sorted(set(strin_lis))))

    f_union_abrre.writelines((sorted(set(strin_Abbre))))


print(unicodes)