export const ResizePanel = () => {
  // set initial panel position and content height
  var $accordion = $('#accordion');
  var accordionHeight = $accordion.innerHeight();
  var panelHeight = accordionHeight / 3;
  var toolbarHeight = $accordion.find('.panel-toolbar').outerHeight();
  var $panelContents = $accordion.find('.panel-content');
  var panelContentHeight = panelHeight - toolbarHeight;
  // set initial content height
  $panelContents.height(panelContentHeight);
  var $panel1Content = $panelContents.eq(0);
  var $panel2Content = $panelContents.eq(1);
  var $panel3Content = $panelContents.eq(2);

  var $panel2 = $('.panel-2').css({ top: panelHeight }).draggabilly({
    axis: 'y',
    handle: '.panel-toolbar',
  });

  var draggie2 = $panel2.data('draggabilly');

  draggie2.containDrag = function (axis, drag) {
    if (axis === 'x') {
      return drag;
    }
    var startY = draggie2.startPosition.y;
    var min = toolbarHeight - startY;
    var max = accordionHeight - startY - toolbarHeight * 2;
    return Math.max(min, Math.min(max, drag));
  };

  var $panel3 = $('.panel-3')
    .css({ top: panelHeight * 2 })
    .draggabilly({
      axis: 'y',
      handle: '.panel-toolbar',
    });

  var draggie3 = $panel3.data('draggabilly');
  draggie3.containDrag = function (axis, drag) {
    if (axis === 'x') {
      return drag;
    }
    var startY = draggie3.startPosition.y;
    var min = toolbarHeight * 2 - startY;
    var max = accordionHeight - startY - toolbarHeight;
    return Math.max(min, Math.min(max, drag));
  };

  // position panel3 when panel2 is moving
  draggie2.on('dragMove', function () {
    var panel3Top = parseInt($panel3.css('top'), 10);
    if (panel3Top < draggie2.position.y + toolbarHeight) {
      panel3Top = draggie2.position.y + toolbarHeight;
      $panel3.css({
        top: panel3Top,
      });
    }
    resizePanelContents(draggie2.position.y, panel3Top);
  });

  // position panel3 when panel2 is moving
  draggie3.on('dragMove', function () {
    var panel2Top = parseInt($panel2.css('top'), 10);
    if (panel2Top + toolbarHeight > draggie3.position.y) {
      panel2Top = draggie3.position.y - toolbarHeight;
      $panel2.css({
        top: panel2Top,
      });
    }
    resizePanelContents(panel2Top, draggie3.position.y);
  });

  // resizes panel contents with the two positions
  function resizePanelContents(panel2Y, panel3Y) {
    $panel1Content.height(panel2Y - toolbarHeight);
    // size the panels
    $panel2Content.height(panel3Y - panel2Y - toolbarHeight);
    $panel3Content.height(accordionHeight - panel3Y - toolbarHeight);
  }
};
