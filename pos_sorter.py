#!/usr/bin/env python
#-*- coding: UTF-8 -*-# enable debugging
import argparse
import cgi
import cgitb
import json
import nltk
from nltk import pos_tag, word_tokenize

cgitb.enable()

def pos_sort(text,pos):
	pos_list = []
	words = word_tokenize(text)
	token = pos_tag(words)
	for word,speech in token:
		if pos in speech:
			pos_list.append(word)
	return pos_list

parser = argparse.ArgumentParser(description='Process parts of speech.')
parser.add_argument('t', metavar = "t", type=str)
parser.add_argument('p', metavar = "p", type=str)
args = parser.parse_args()

print ', '.join(pos_sort(args.t,args.p))
