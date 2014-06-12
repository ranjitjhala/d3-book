TSC=tsc --short-names 

jsObjects   := $(patsubst %.ts,%.js,$(wildcard ./*.ts))

####################################################################

js: $(jsObjects)

./%.js: ./%.ts
	-$(TSC) $?
