// ==UserScript==
// @name         MantisBT improved
// @namespace    http://www.comexpertise.com/
// @version      0.2
// @description
// @author       David DIVERRES - ComExpertise SARL
// @match        https://www.mantisbt.org/bugs/view.php?id=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var bug_title = $('.page-content table td[class="bug-summary"]').text();
    var bug_no = bug_title.split(': ')[0];
    var bug_status = $('td.bug-status').text();
    var bug_status_color = $('td.bug-status .fa').attr('class').split(' ')[3];
    var bug_status_ico = $('td.bug-status .fa').css({ marginRight: '10px', verticalAlign: 'baseline' })[0];
    var bug_category = $('td.bug-category').text();
    var bug_project = $('td.bug-project').text();
    var bug_resolution = $('td.bug-resolution').text();

    bug_title = bug_title.replace(bug_no + ': ', '');
    $('#breadcrumbs').after('<div id="mbtimproved-bugtitle" style="margin: 0 20px 0 20px;" />');
    $('#mbtimproved-bugtitle').html('<div class="widget-header widget-header-small" style="color: #404040;padding-top: 5px;padding-bottom: 5px;"><div style="margin-top: 10px;"><span style="border-radius: 4px;background-color: #5090c1;color: white;padding: 0px 5px;">#' + bug_no + '</span> <span style="border-radius: 4px;background-color: #e3e3e3;color: #404040;padding: 0px 5px;">' + bug_status + ' (' + bug_resolution + ')</span> ' + bug_project + '/' + bug_category + '</div><h1 class="widget-title lighter"><b style="font-size: 22px;">' + bug_title + '</b></h1></div>');
    $('#mbtimproved-bugtitle .widget-title').before(bug_status_ico);
    $('td.bug-status').addClass(bug_status_color);

    // apply bold text to summary
    $('td.bug-summary').css({ fontWeight: 'bold' });
    // apply bold text to bug status
    $('td.bug-status').css({ fontWeight: 'bold', color: '#404040' });

    // hide first "table" heading
    $('.page-content .widget-header.widget-header-small:first').hide();
})();
