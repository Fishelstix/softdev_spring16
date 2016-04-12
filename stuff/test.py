import math

def makeAdder(n):
    def inner(x):
        return x+n
    return inner

add3=makeAdder(3)
add5=makeAdder(5)

def make_counter():
    count = [0]

    def inc():
        count[0]=count[0]+1
    def dec():
        count[0]=count[0]-1
    def reset():
        count[0]=0
    def get():
        return count[0]

def pyth(n):
    for i in range(1,int(math.sqrt(n))):
        for j in range(1,min(int(math.sqrt(n-i*i)),i)):
            x = i*i+j*j
            c = 1
            while(c*x<n):
                for k in range(2,int(math.sqrt(c/2))+1):
                    if(c%(k*k)==0):
                        print("("+str(c*(i*i-j*j))+","+str(c*(2*i*j))+","+str(c*x)+")")
                c+=1

pyth(1000)
