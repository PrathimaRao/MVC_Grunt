@echo off
ECHO Minify - MyApplication

set /p sel="First time user(need to install all necessary modules)?[Y/N]"
if %sel%==Y goto initialize
if %sel%==N goto start

:initialize
npm install
goto start

:start
set /p choice="What all you need? minifyfiles, minify,all(jshint,qunit,minify),validateonly, default(all) or watch ?"
if %choice%==w goto minify
if %choice%==all goto all
if %choice%==validateonly goto validateonly
if %choice%==default goto default
if %choice%==watch goto watch
if %choice%==minifyfiles goto minifyfiles

:minify
grunt minify

:all
grunt all

:validateonly
grunt validateonly

:default
grunt default

:watch
grunt watch

:minifyfiles
grunt uglify:my_target

set /p done="Done [y/n] ?"
rem pause