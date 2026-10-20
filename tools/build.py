#!/usr/bin/env python3
"""Build index.html from src/. Usage: python3 tools/build.py [version-string]
Replaces BUILD stamp in app.js, inlines words.json, css, and js into the template."""
import sys,os,re,datetime
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
rd=lambda p:open(os.path.join(R,'src',p),encoding='utf-8').read()
js=rd('app.js').replace('__WORDS__',rd('words.json').strip())
ver=sys.argv[1] if len(sys.argv)>1 else 'dev'
stamp=ver+' '+datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=8))).strftime('%m%d-%H%M')
js=js.replace('__BUILD__',stamp)
out=rd('tpl_head.txt')+rd('style.css')+rd('tpl_mid.txt')+js.replace('</script','<\\/script')+rd('tpl_tail.txt')
open(os.path.join(R,'index.html'),'w',encoding='utf-8').write(out)
print('built',stamp,len(out))
