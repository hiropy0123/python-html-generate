from jinja2 import Environment, FileSystemLoader
import json
import os

# 1.JSONからデータの読み込み
json_open = open('./data.json', 'r')
# データの格納された配列
items = json.load(json_open)

# 2.テンプレートファイルの読み込み
env = Environment(loader = FileSystemLoader('./templates'), autoescape = True)
template = env.get_template('page.html')

# 3.テンプレートにデータの流し込み
build_dir = 'dist'
# distディレクトリの存在を確認。なければ作成する
if not os.path.isdir(build_dir):
  os.mkdir(build_dir)

# データ配列の数だけ実行
for item in items:
  # テンプレートにデータを流し込んでHTMLを作成
  parse_html = template.render(item)

  # 保存先のパスを作成
  path = f"{build_dir}/{item['filename']}"

  # HTMLファイルの生成と保存
  with open(path, 'w') as file:
    file.write(parse_html)
