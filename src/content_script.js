const replacementImageUrl = chrome.runtime.getURL('images/test.jpeg');

function replaceProfilePictures() {
  const profilePictures = document.querySelectorAll(
    'img[class*="EntityPhoto-"], img[class*="update-components-actor__avatar-image"], img[class*="feed-identity-module__member-photo"], img[class*="global-nav__me-photo"], div[class*="EntityPhoto-circle-3-ghost-person"], img[class*="ivm-view-attr__img--centered"][class*="ivm-view-attr__entity-img--company"], img[class*="ivm-view-attr__img--centered"][class*="ivm-image-view-model__circle-img"], img[class*="ivm-view-attr__img--centered"][class*="ivm-image-view-model__square-img"]'
  );

  profilePictures.forEach((profilePicture) => {
    if (profilePicture instanceof HTMLImageElement) {
      profilePicture.src = replacementImageUrl;
    } else {
      const ghostPersonDiv = profilePicture;
      const imgElement = document.createElement('img');
      imgElement.src = replacementImageUrl;
      ghostPersonDiv.replaceWith(imgElement);
    }
  });
}

replaceProfilePictures();
const observer = new MutationObserver(replaceProfilePictures);
observer.observe(document.body, { childList: true, subtree: true });