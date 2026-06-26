@echo off
chcp 65001 >nul
echo [%date% %time%] X週次分析 Phase 1 開始

cd /d "C:\Users\02151\OneDrive\Desktop\Claudcodeプロジェクト　親\広報部_ポートフォリオ"

claude -p "X投稿の週次分析（Phase 1）を実行してください。.claude/skills/x-analysis/SKILL.md を読んでその手順通りに実行し、weekly-analysis.md に保存してください。" --allowedTools "Read,Write,Glob,WebSearch,Bash"

echo [%date% %time%] Phase 1 完了
