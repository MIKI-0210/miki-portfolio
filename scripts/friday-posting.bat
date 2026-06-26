@echo off
chcp 65001 >nul
echo [%date% %time%] X週次投稿生成 Phase 2 開始

cd /d "C:\Users\02151\OneDrive\Desktop\Claudcodeプロジェクト　親\広報部_ポートフォリオ"

claude -p "X投稿の週次生成（Phase 2）を実行してください。.claude/skills/X投稿スキル/SKILL.md を読んでその手順通りに実行してください。まずweekly-analysis.mdを読み込んでから16投稿を生成し、xpost-strategy.mdを更新して最後にVercelにデプロイしてください。" --allowedTools "Read,Write,Edit,Glob,WebSearch,Bash"

echo [%date% %time%] Phase 2 完了
