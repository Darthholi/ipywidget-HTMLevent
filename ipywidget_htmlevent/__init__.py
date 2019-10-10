from ._version import version_info, __version__

from .htmlevent import *

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'ipywidget_htmlevent',
        'require': 'ipywidget_htmlevent/extension'
    }]
