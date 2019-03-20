'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _SnackbarContext = require('./SnackbarContext');

var useSnackbar = function useSnackbar() {
    var handlePresentSnackbar = (0, _react.useContext)(_SnackbarContext.SnackbarContext);

    var _useContext = (0, _react.useContext)(_SnackbarContext.SnackbarContextNext),
        handleEnqueueSnackbar = _useContext.handleEnqueueSnackbar,
        handleCloseSnackbar = _useContext.handleCloseSnackbar;

    return {
        onPresentSnackbar: handlePresentSnackbar,
        enqueueSnackbar: handleEnqueueSnackbar,
        closeSnackbar: handleCloseSnackbar
    };
};

exports.default = useSnackbar;