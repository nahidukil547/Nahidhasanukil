# n=0
# quiz=0
# while quiz<=10:
#     if quiz == 1:
#         print(f"Quiz:-{quiz} Qusention one")
#         print(f"Qusention one")
#         print(f"Qusention one")
#         input_anser= input("Enter Currect Anser separet with space:").split()
#         set_anser=sorted(list(set(input_anser)))
#         for i in range(len(set_anser)):
#             if set_anser[i].upper() == 'A':
#                 n+=1
#     if quiz==2:
#         print(f"Quiz:-{quiz} Qusention Two")
#         input_anser= input("Enter Currect Anser separet with space:").split()
#         set_anser=sorted(list(set(input_anser)))
#         for i in range(len(set_anser)):
#             if set_anser[i].upper() == 'A':
#                 n+=1
#     quiz+=1

# print(n)

import json
quiz_qsn={
    'Question Number':'',
    'Question':"Question",
    'A':"a",
    'B':'b',
    'C':'c',
    'D':'d'
}
n=0

class BuildQuiz:
    def quiz():
        n= input("Enter number of quiz")
        while 0>=n:
            try:
                with open ("quiz.json",'r') as f:
                    list_quiz=json.load(f)
            except json.JSONDecodeError:
                list_quiz=[]

            list_quiz.append(quiz_qsn)

            print(list_quiz)
            with open("quiz.json",'w') as f:
                json.dump(list_quiz, f, indent=4)
            n+=1
