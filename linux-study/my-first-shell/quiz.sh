read -p "日本で2番目に高い山は槍ヶ岳か？[y/n]" answer
if [ $answer = "n" ]; then
  echo 正解です！日本で2番目に高い山は北岳です!
else 
  echo 残念、日本で2番目に高い山は北岳だ！
fi