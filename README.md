# A Chrome Extension for emails:

## Current Version 1.0.1

## Suggested Features For The Extension:

A Google Chrome extension for emails can have various features depending on the needs and preferences of the user. Here are some features that can be included in a Google Chrome extension for emails:

1. Email tracking: The extension can track when the recipient opens the email or clicks on a link in the email.
2. Email templates: The extension can provide users with email templates to save time when composing emails.
3. Email search: The extension can provide advanced search capabilities to help users find emails quickly and efficiently.
4. Email reminders: The extension can allow users to set reminders for important emails they need to follow up on.
5. Email encryption: The extension can provide end-to-end encryption for users who need to send sensitive or confidential information via email.
6. Email Summerier: The extension can summarize emails for you.
7. Email Composer: The extension can compose high quality emails using chatGPT api.

## Loading The Chrome Extension

1. Open Chrome and navigate to `chrome://extensions/`
2. Toggle on `Developer mode` in the top right corner
3. Click `Load unpacked`
4. Select the entire `dist` folder

# Important Initial Steps

1. `git init` to start a new git repo for tracking your changes, do an initial base commit with all the default files
2. Update `package.json`, important fields include `author`, `version`, `name` and `description`
3. Update `manifest.json`, important fields include `version`, `name` and `description`
4. Update `webpack.commmon.js`, the title in the `getHtmlPlugins` function should be your extension name

# Production Build

1. `npm run build` to generate a minimized production build in the `dist` folder
2. ZIP the entire `dist` folder (e.g. `dist.zip`)
3. Publish the ZIP file on the Chrome Web Store Developer Dashboard!
