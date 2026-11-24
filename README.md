# AI Teaching Lab — v1.0 starter

A static, English-language teaching platform. Agent Arena is the first module; other lab cards are placeholders. No LLM API calls or npm build are needed.

## Deployment (Traditional Chinese)

1. Firebase Console → Authentication → Sign-in method：啟用 Anonymous 及 Email/Password。確認教師帳號 UID 與 `core/firebase-config.js` 相符。Authentication → Settings → Authorized domains 加入 `oooo2552.github.io`。
2. Realtime Database → Rules：將 `firebase/database.rules.json` 的完整內容貼上並 Publish。不要使用 Test Mode。若已有其他資料庫規則，先備份；本規則針對這個獨立專案。
3. 解壓 ZIP，把資料夾內所有檔案（包括 `.nojekyll`）上傳至 `oooo2552/ai-teaching-lab` 的 main 分支根目錄，不要多包一層資料夾。保留原本 LICENSE。
4. Repository → Settings → Pages → Deploy from a branch → main → / (root) → Save。
5. 開啟 https://oooo2552.github.io/ai-teaching-lab/ ，進入 Teacher console，以教師 Email/Password 登入。Create room，開啟 projector，分享 Student link 或 QR code。
6. 用另一台手機或無痕視窗開啟學生端，先用 2–3 位測試者驗證流程。學生須在第一輪開始前加入；之後同一 UID 可重連。每輪 Start next round → 學生提交 → Close & reveal。結束後 Export CSV / End session。

## Classroom modes

- Free choice: students privately choose A or B.
- Randomized switching: previously successful agents keep their server; previously unsuccessful agents receive a randomized stay/switch assignment. Students confirm their assigned server. Use after a free-choice round. Agents without a previous vote choose freely.
- Local communication: students may discuss with nearby classmates, then choose privately.
- Central load balancing: teacher console automatically assigns and submits alternating A/B votes for eligible agents.

Game assumption: if a server exceeds its capacity, all votes to that server fail. Real systems may queue or partially reject requests. Non-submissions are shown separately from submitted requests. Students earn one point for each submitted successful vote. Public projector shows eligible count during voting, not live vote totals; results appear only after close. No countdown; teacher controls timing manually. QR images use api.qrserver.com (the room link is sent to that third party); the plain student link is always available.

## Security and limitations

Firebase Rules enforce teacher UID, per-UID single vote, eligible roster, open round and assigned choice. Student clients cannot read another UID's current votes or write results. Authenticated users with room code can read public state and results. Anonymous accounts do not guarantee one human per UID; room codes are random but not a substitute for strong access control. Joining is closed after first round. The UI rejects starting with more than 90 registered players, not a server-side admission cap. Use one student tab each; avoid simultaneous teacher tabs modifying the same room. Do not project private teacher counts. The same browser profile shares Firebase login across tabs; use a different profile/device for student tests. No personal names or student numbers are collected. Delete old room data via Firebase Console when no longer needed. No service account or teacher password belongs in GitHub.

## Verification before class

- Check teacher sign-in and anonymous join; unauthenticated reads/writes must be denied.
- Try duplicate vote, another UID's vote, writing room state, voting after close: all must be denied for student accounts.
- Verify projector shows no A/B counts until reveal; compare scores and CSV with actual votes.
- Verify all four modes, reloading a student page, resuming a teacher room, and missing votes.
- Test with representative devices and network, then 70 concurrent participants. Firebase Spark connection limits and anonymous sign-up throttling can affect a large class sharing a network; test first.

This starter has local syntax and game-logic checks only; deployed Firebase authorization and 70-user load have not been verified. Do not treat it as production-tested.
