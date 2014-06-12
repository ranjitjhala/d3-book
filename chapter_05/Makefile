TSC=tsc

jsObjects   := $(patsubst %.ts,%.js,$(wildcard ./*.ts))

####################################################################

js: $(jsObjects)

clean: 
	rm *.js

./%.js: ./%.ts
	-$(TSC) $?



