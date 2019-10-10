var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'ipywidget_htmlevent',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'ipywidget_htmlevent',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

