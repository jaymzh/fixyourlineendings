export const EDITORS = [
    {
        id: 'vscode',
        name: 'Visual Studio Code',
        fix: `In **VS Code**, open Settings (Ctrl+,) and search for *insert final newline*.

Enable the setting:

\n\n\`\`\`json
"files.insertFinalNewline": true,
"files.trimFinalNewlines": false
\`\`\`
\nThis ensures each saved file ends with exactly one newline.`,
    },
    {
        id: 'sublime',
        name: 'Sublime Text',
        fix: `Open **Preferences → Settings** and add:

\n\n\`\`\`json
{
    "ensure_newline_at_eof_on_save": true
}
\`\`\`
\nSublime will automatically append a newline at the end of files when saving.`,
    },
    {
        id: 'intellij',
        name: 'IntelliJ IDEA / WebStorm / PyCharm',
        fix: `Open **Settings → Editor → General** and enable *Ensure every saved file ends with a line break*.

JetBrains IDEs will then add a final newline when saving files.`,
    },
    {
        id: 'vim',
        name: 'Vim / Neovim',
        fix: `Vim typically adds a final newline automatically, but if not, add this to your **~/.vimrc**:

\n\n\`\`\`vim
augroup ensure_final_newline
    autocmd!
    autocmd BufWritePre * if getline('$') !=# '' | call append(line('$'), '') | endif
augroup END
\`\`\`
\nThis ensures one newline exists at EOF before saving.`,
    },
    {
        id: 'notepad++',
        name: 'Notepad++',
        fix: `**Notepad++** doesn’t always add a final newline automatically. Use an EditorConfig to enforce it:

\n\n\`\`\`ini
[*]
insert_final_newline = true
\`\`\`
\nInstall the EditorConfig plugin if needed.`,
    },
    {
        id: 'emacs',
        name: 'GNU Emacs',
        fix: `Emacs typically adds a final newline automatically, but if not, the variable \`require-final-newline\` can be customized to do this; see \`C-h v require-final-newline\`. Add to your Emacs init file:

\n\n\`\`\`lisp
(setq require-final-newline t)
\`\`\`
\nOptionally, install and use the \`editorconfig\` package to use #editorconfig:
\n\n\`\`\`lisp
(use-package editorconfig
  :ensure t
  :config
  (editorconfig-mode 1))
\`\`\`
`,
    },
    {
        id: 'nano',
        name: 'GNU Nano',
        fix: `**Nano** doesn’t have a direct 'insert final newline' option. The simplest fix is using EditorConfig in your project:

\n\n\`\`\`ini
[*]
insert_final_newline = true
\`\`\`
\nMost modern editors (and some command-line tools) respect this setting.`,
    },
    {
        id: 'editorconfig',
        name: 'EditorConfig (Project-wide)',
        fix: `To make all contributors’ editors automatically add a newline at EOF, add a **.editorconfig** file to your repo root:

\n\n\`\`\`ini
root = true

[*]
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
\`\`\`
\nThis works across many editors, including VS Code, Sublime, JetBrains IDEs, Atom, and more.`,
    },
]
