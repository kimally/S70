var Renderer = function() {};

Renderer.prototype.init = function(todo) {
  this._todo = todo;
  this._init();
};

Renderer.prototype.render = function(tasks) {
  this._render(tasks);
};

Renderer.prototype._init = function(todo) {
  throw '_init 오버라이드 해야 됨.';
};

Renderer.prototype._render = function(tasks) {
  throw '_render 오버라이드 해야 됨.';
};