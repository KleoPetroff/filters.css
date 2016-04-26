var filter = function (DOMNode) {
  var Elements = function Elements(element) {
    this.list = document.querySelectorAll(element);
  };

  var applyFilter = function applyFilter(elements,filter, value, sign) {
    elements.forEach(function (item) {
      item.style.webkitFilter += filter + '(' + value + sign + ')';
    });
  };

  Elements.prototype.grayscale = function grayscale(percentage) {
    applyFilter(this.list, 'grayscale', percentage, '%');
    return this;
  };

  Elements.prototype.sepia = function sepia(percentage) {
    applyFilter(this.list, 'sepia', percentage, '%');
    return this;
  };
  
  Elements.prototype.saturate = function saturate(percentage) {
    applyFilter(this.list, 'saturate', percentage, '%');
    return this;
  };

  Elements.prototype.hueRotate = function hueRotate(degrees) {
    applyFilter(this.list, 'hue-rotate', degrees, 'deg');
    return this;
  };

  Elements.prototype.invert = function invert(percentage) {
    applyFilter(this.list, 'invert', percentage, '%');
    return this;
  };

  Elements.prototype.brightness = function brightness(percentage) {
    applyFilter(this.list, 'brightness', percentage, '%');
    return this;
  };

  Elements.prototype.contrast = function contrast(percentage) {
    applyFilter(this.list, 'contrast', percentage, '%');
    return this;
  };

  Elements.prototype.blur = function blur(value) {
    applyFilter(this.list, 'blur', value, 'px');
    return this;
  };

  return new Elements(DOMNode);
};