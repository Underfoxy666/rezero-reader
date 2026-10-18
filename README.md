# Re:Zero Reader

An Android app for reading the Witch Cult Translations Re:Zero web novel translations.

- Pick an arc, then a chapter, and read. Arcs 1–10, including the Arc 2 and 3 chapters hosted by partner translators.
- Light, sepia and dark themes; three reading fonts; text size, line spacing and margins.
- Keeps the screen on while a chapter is open (can be switched off).
- Bookmarks: tap the bookmark button while reading to save the exact spot.
- **Download arc** saves every chapter, with its images, onto your phone. After that, reading uses no data.
- Remembers where you stopped ("Return to checkpoint") and ticks off chapters you've finished.

The app contains no story text itself. It loads chapters from witchculttranslation.com
(and keeps a copy on your phone once you've opened or downloaded them).

## Getting the app onto your phone

GitHub builds the installable `.apk` for you, for free:

1. Create a free account at github.com and sign in.
2. Click **+** (top right) → **New repository**. Name it `rezero-reader`, leave everything else, click **Create repository**.
3. On the next page, click **uploading an existing file**. Drag in **everything inside this folder**, including the
   `.github` folder (on a Mac, press Cmd+Shift+. in Finder to show it). Click **Commit changes**.
4. Open the **Actions** tab. A build called "Build Android app" starts by itself and takes about 5 minutes.
5. When it shows a green tick, open the repository on your phone, tap **Releases** (right side, or scroll down),
   then tap **ReZero-Reader.apk** to download it.
6. Open the downloaded file. Android will ask you to allow installing from your browser; allow it, then tap **Install**.

To update the app later, upload changed files to the same repository; a new build appears under Releases.

## How the build works

- `scripts/setup.js` runs during `npm install`. It copies the reading fonts into `www/fonts`
  and, on GitHub's build machine, installs the permanent signing key from `signing/`.
- The same signing key is used for every build, so a new version installs as an update
  and keeps your downloads, bookmarks and progress.
