var $ = function(selector) {
  if (selector.startsWith('#')) {
    let id = selector.substr(1);
    return document.getElementById(id);
  } else if (selector.startsWith('.')) {
    let className = selector.substr(1);
    return document.getElementsByClassName(className);
  }
};
