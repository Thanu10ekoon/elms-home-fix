//URLs of Broken and Replacing image
const brokenImageIdentifier = "162164522_218096313434914_1009874435023468340_n.jpg";
const newImageURL = "https://i.ytimg.com/vi/C04r52TDgrM/sddefault.jpg";

function replaceImage(img) {
  if (img.src.includes(brokenImageIdentifier)) {
    img.src = newImageURL;
    console.log('Broken image replaced with custom image.');
  }
}


function observeDOM() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      
      mutation.addedNodes.forEach((node) => {
        if (node.tagName === 'IMG') {
          replaceImage(node);
        } else if (node.querySelectorAll) {
          node.querySelectorAll('img').forEach(replaceImage);
        }
      });

      
      if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
        replaceImage(mutation.target);
      }
    });
  });

  
  observer.observe(document.body, { childList: true, subtree: true, attributes: true });
}

document.querySelectorAll('img').forEach(replaceImage);

observeDOM();

//T.M. Thanujaya Avishka Bandara Tennekoon
//Visit my web		:- 	https://thanu10ekoon.github.io/web/
//Visit my GitHub	:-	https://github.com/Thanu10ekoon