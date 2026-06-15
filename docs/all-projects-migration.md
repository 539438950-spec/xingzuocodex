# All Projects Migration

## Goal
- Use this document on a new computer to recover the currently uploaded source projects and their working context.

## Uploaded Repos

### 1. xingzuocodex
- GitHub: `https://github.com/539438950-spec/xingzuocodex`
- Local path on old computer: `C:\Users\chenxi\Documents\Codex\2026-06-10\git`
- Main content: `outputs/guess-number-miniprogram`
- Branch to use: `main`
- Repo handoff file: `docs/handoff-context.md`

### 2. guangdong-gongkao-miniapp
- GitHub: `https://github.com/539438950-spec/guangdong-gongkao-miniapp`
- Local path on old computer: `C:\Users\chenxi\Documents\公考`
- Main content: WeChat miniapp + ingest + API + delivery workflow
- Branch to use: `main`
- Repo handoff file: `docs/handoff-context.md`

### 3. xiaochengxu-skill
- GitHub: `https://github.com/539438950-spec/xiaochengxu-skill`
- Local path on old computer: `C:\Users\chenxi\Documents\小程序skill`
- Main content: WeChat skill miniapp / group secretary project
- Branch to use: `main`
- Repo handoff file: `docs/handoff-context.md`

## Suggested New Computer Setup
1. Install `git`.
2. Install `Node.js`.
3. Install WeChat DevTools if you need to run miniapp projects.
4. Clone all three repos.
5. Open each repo and read its `docs/handoff-context.md` first.

## Clone Commands
```powershell
git clone https://github.com/539438950-spec/xingzuocodex.git
git clone https://github.com/539438950-spec/guangdong-gongkao-miniapp.git
git clone https://github.com/539438950-spec/xiaochengxu-skill.git
```

## Important Notes
- The GitHub repos contain source and handoff docs, not the full Codex chat transcript database.
- If you also want complete chat transcripts, they need to be exported separately from Codex/Chat history.
- Repository-local context has now been written into versioned Markdown files so a new machine can recover the project state faster.
