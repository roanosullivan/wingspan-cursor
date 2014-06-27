define([
    'bower_components/wingspan-cursor/js/Cursor', 'bower_components/wingspan-cursor/js/ReactCursor'
], function (Cursor, ReactCursor) {
    'use strict';

    return {
        build: Cursor.build,
        ReactCursor: ReactCursor
    };
});
