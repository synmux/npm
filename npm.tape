# https://github.com/charmbracelet/vhs
# Don't invoke directly. Use `pnpm run gif`.
# Needs to be able to chdir a directory up.

Output assets/npm.gif

Require pnpm

Set Shell "fish"
Set FontFamily "VictorMono Nerd Font"
Set FontSize 16
Set Width 850
Set Height 850

Type "pnpm start" Sleep 500ms  Enter

Sleep 15s
