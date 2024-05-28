***LinkedIn Profile Picture Modifier***

The LinkedIn Profile Picture Modifier is a Chrome extension that replaces all profile pictures, avatar placeholders, company logos, and group logos on the LinkedIn homepage (or feed page) with a specified image of your choice.


*How it Works*

*Detecting the LinkedIn URL*:
The extension is designed to be active only on the LinkedIn , ensuring that it doesn't interfere with other websites. It checks the current URL and only runs its logic on the specified LinkedIn pages.

*Targeting Profile Pictures and Related Elements*:
The extension uses a carefully crafted CSS selector to target various elements on the LinkedIn homepage that represent profile pictures, avatar placeholders, company logos, and group logos. This selector is optimized to handle different class names and HTML structures used by LinkedIn.

*Replacing the Images*:
Once the relevant elements are identified, the extension iterates through them and performs the following actions:

--For <img> elements (regular profile pictures, company logos, and group logos), it replaces the src attribute with the URL of the specified replacement image.

--For <div> elements representing "ghost person" avatar placeholders, it creates a new <img> element with the replacement image URL and replaces the <div> element with the newly created <img> element.


*Observing DOM Changes*:
Since the LinkedIn homepage is a dynamic web page, the extension uses a MutationObserver to watch for changes in the DOM. Whenever new content is loaded or added to the page, the extension re-runs its logic to replace any newly added profile pictures, avatar placeholders, company logos, or group logos with the specified image.

*Customization*
The extension allows you to specify the replacement image by modifying the replacementImageUrl variable in the code. You can either provide a URL or use the chrome.runtime.getURL function to load an image from the extension's local directory.

*Note*
Please note that this extension is designed to work with LinkedIn's current HTML structure and class naming conventions. If LinkedIn makes significant changes to their website in the future, the extension may need to be updated to accommodate those changes.
