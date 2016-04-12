import time

def wrapper(f):
    def inner(*arg):
        print f.func_name + ":" + str(arg)
        return f(*arg)
    return inner
    
def timer(f):
    def inner(*arg):
        begin = time.time()
        f(*arg)
        end = time.time()
        return "Execution time: " + str(end - begin)
    return inner

@wrapper
@timer
def fib(n):
    if n <=1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

print fib(1)
print fib(2)
print fib(3)
print fib(4)
print fib(5)
