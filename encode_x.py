#!/usr/bin/env python
# -*- coding:UTF-8 -*-
# 2021/06/06 周日 19:39:11.50
# By  Hasaki-h1
import signal
import sys


def quit_p(signum, frame):
    sys.exit (0)


def encode_x():
    while True:
        signal.signal (signal.SIGINT, quit_p)
        i = input ("\n输入Payload:")
        if "\\" in i:
            i = i.replace ("\\", "\\\\")
        if "\"" in i:
            i = i.replace ("\"", "\\\"")
        print ("\n双引号、斜杠转义结果：\n\n", i, "\n")


if __name__ == '__main__':
    encode_x ()
