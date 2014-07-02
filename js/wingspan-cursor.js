define([
    'assets/wingspan-cursor/js/Cursor', 'assets/wingspan-cursor/js/ReactCursor'
], function (Cursor, ReactCursor) {
    'use strict';

    return {
        build: Cursor.build,
        ReactCursor: ReactCursor
    };
});
