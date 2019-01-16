objects = main.o linkedList.o
exec_dir = ./
CFLAGS = -g

main : $(objects)
	gcc -o run $(objects) $(CFLAGS)

main.o : linkedList.h

.PHONY : clean
clean :
	rm $(objects)
