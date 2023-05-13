#!/bin/sh

NC='\033[0m' # No Color
RED='\033[0;31m'
GREEN='\033[0;32m'
PURPLE='\033[0;35m'

echo ${GREEN}"ПЕРЕКЛЮЧАЕМСЯ НА ВЕТКУ MASTER"${NC}
git checkout master

echo ${RED}"!_УДАЛЯЕМ REMOTE ВЕТКУ GH-PAGES_!"${NC}
git push origin --delete gh-pages

echo ${GREEN}"БИЛДИМ ПРОЕКТ"${NC}
yarn vite build

echo ${GREEN}"ДОБАВЛЯЕМ ФАЙЛЫ ИЗ ДИРЕКТОРИИ /dist"${NC}
git add dist -f

echo ${GREEN}"КОММИТИМ ВСЁ КАК 'dist'"${NC}
git commit -m "dist"

echo ${PURPLE}"ДЕЛАЕМ ОТДЕЛЬНУЮ ВЕТКУ GH-PAGES И ПУШИМ ИЗМЕНЕНИЯ В НЕЁ"${NC}
git subtree push --prefix dist origin gh-pages
