/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/bundles/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/boot/applyTransform.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(3);

var _Injector2 = _interopRequireDefault(_Injector);

var _ownerAwareUnpublish = __webpack_require__("./client/src/transforms/FormAction/ownerAwareUnpublish.js");

var _ownerAwareUnpublish2 = _interopRequireDefault(_ownerAwareUnpublish);

var _moveTreeDropdownField = __webpack_require__("./client/src/transforms/TreeDropdownField/moveTreeDropdownField.js");

var _moveTreeDropdownField2 = _interopRequireDefault(_moveTreeDropdownField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var applyTransform = function applyTransform() {
  _Injector2.default.transform('move-form-disabled', function (updater) {
    updater.component('TreeDropdownField.AssetAdmin.MoveForm', _moveTreeDropdownField2.default);
  });

  _Injector2.default.transform('owner-unpublishing', function (updater) {
    updater.component('FormAction.AssetAdmin.EditForm.action_unpublish', _ownerAwareUnpublish2.default);
  });
};

exports.default = applyTransform;

/***/ }),

/***/ "./client/src/boot/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Config = __webpack_require__(25);

var _Config2 = _interopRequireDefault(_Config);

var _ReactRouteRegister = __webpack_require__(38);

var _ReactRouteRegister2 = _interopRequireDefault(_ReactRouteRegister);

var _AssetAdminRouter = __webpack_require__("./client/src/containers/AssetAdmin/AssetAdminRouter.js");

var _AssetAdminRouter2 = _interopRequireDefault(_AssetAdminRouter);

var _applyTransform = __webpack_require__("./client/src/boot/applyTransform.js");

var _applyTransform2 = _interopRequireDefault(_applyTransform);

var _registerReducers = __webpack_require__("./client/src/boot/registerReducers.js");

var _registerReducers2 = _interopRequireDefault(_registerReducers);

var _registerComponents = __webpack_require__("./client/src/boot/registerComponents.js");

var _registerComponents2 = _interopRequireDefault(_registerComponents);

var _registerQueries = __webpack_require__("./client/src/boot/registerQueries.js");

var _registerQueries2 = _interopRequireDefault(_registerQueries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  (0, _registerComponents2.default)();

  (0, _applyTransform2.default)();

  var sectionConfig = _Config2.default.getSection('SilverStripe\\AssetAdmin\\Controller\\AssetAdmin');

  _ReactRouteRegister2.default.add({
    path: '/',
    routes: [{
      path: '/' + sectionConfig.url + '/show/:folderId/:viewAction/:fileId',
      component: _AssetAdminRouter2.default
    }, {
      path: '/' + sectionConfig.url + '/show/:folderId/:viewAction',
      component: _AssetAdminRouter2.default
    }, {
      path: '/' + sectionConfig.url + '/show/:folderId',
      component: _AssetAdminRouter2.default
    }, {
      path: '/' + sectionConfig.url,
      component: _AssetAdminRouter2.default
    }]
  });

  (0, _registerQueries2.default)();

  (0, _registerReducers2.default)();
});

/***/ }),

/***/ "./client/src/boot/registerComponents.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(3);

var _Injector2 = _interopRequireDefault(_Injector);

var _UploadField = __webpack_require__("./client/src/components/UploadField/UploadField.js");

var _UploadField2 = _interopRequireDefault(_UploadField);

var _UploadFieldItem = __webpack_require__("./client/src/components/UploadField/UploadFieldItem.js");

var _UploadFieldItem2 = _interopRequireDefault(_UploadFieldItem);

var _AssetDropzone = __webpack_require__("./client/src/components/AssetDropzone/AssetDropzone.js");

var _AssetDropzone2 = _interopRequireDefault(_AssetDropzone);

var _InsertMediaModal = __webpack_require__(12);

var _InsertMediaModal2 = _interopRequireDefault(_InsertMediaModal);

var _PreviewImageField = __webpack_require__("./client/src/components/PreviewImageField/PreviewImageField.js");

var _PreviewImageField2 = _interopRequireDefault(_PreviewImageField);

var _ProportionConstraintField = __webpack_require__("./client/src/components/ProportionConstraintField/ProportionConstraintField.js");

var _ProportionConstraintField2 = _interopRequireDefault(_ProportionConstraintField);

var _HistoryList = __webpack_require__("./client/src/containers/HistoryList/HistoryList.js");

var _HistoryList2 = _interopRequireDefault(_HistoryList);

var _GalleryToolbar = __webpack_require__("./client/src/components/GalleryToolbar/GalleryToolbar.js");

var _GalleryToolbar2 = _interopRequireDefault(_GalleryToolbar);

var _GalleryItem = __webpack_require__("./client/src/components/GalleryItem/GalleryItem.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerComponents = function registerComponents() {
  _Injector2.default.component.registerMany({
    UploadField: _UploadField2.default,
    UploadFieldItem: _UploadFieldItem2.default,
    PreviewImageField: _PreviewImageField2.default,
    HistoryList: _HistoryList2.default,
    ProportionConstraintField: _ProportionConstraintField2.default,
    AssetDropzone: _AssetDropzone2.default,
    InsertMediaModal: _InsertMediaModal2.default,
    GalleryToolbar: _GalleryToolbar2.default,
    GalleryItemFile: _GalleryItem.File,
    GalleryItemFolder: _GalleryItem.Folder
  });
};

exports.default = registerComponents;

/***/ }),

/***/ "./client/src/boot/registerQueries.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(3);

var _Injector2 = _interopRequireDefault(_Injector);

var _fileFragments = __webpack_require__("./client/src/lib/fileFragments.js");

var _readFilesQuery = __webpack_require__("./client/src/state/files/readFilesQuery.js");

var _readFilesQuery2 = _interopRequireDefault(_readFilesQuery);

var _readOneFileQuery = __webpack_require__("./client/src/state/files/readOneFileQuery.js");

var _readOneFileQuery2 = _interopRequireDefault(_readOneFileQuery);

var _readFilesQuery3 = __webpack_require__("./client/src/state/files/_legacy/readFilesQuery.js");

var _readFilesQuery4 = _interopRequireDefault(_readFilesQuery3);

var _readDescendantFileCountsQuery = __webpack_require__("./client/src/state/files/readDescendantFileCountsQuery.js");

var _readDescendantFileCountsQuery2 = _interopRequireDefault(_readDescendantFileCountsQuery);

var _readOneFileQuery3 = __webpack_require__("./client/src/state/files/_legacy/readOneFileQuery.js");

var _readOneFileQuery4 = _interopRequireDefault(_readOneFileQuery3);

var _readFileUsageQuery = __webpack_require__("./client/src/state/files/readFileUsageQuery.js");

var _readFileUsageQuery2 = _interopRequireDefault(_readFileUsageQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isLegacy = !!document.body.getAttribute('data-graphql-legacy');

var registerQueries = function registerQueries() {
  _Injector2.default.query.registerFragment('FileInterfaceFields', _fileFragments.fileInterface);
  _Injector2.default.query.registerFragment('FileFields', _fileFragments.file);
  _Injector2.default.query.register('ReadFilesQuery', isLegacy ? _readFilesQuery4.default : _readFilesQuery2.default);
  _Injector2.default.query.register('readDescendantFileCountsQuery', _readDescendantFileCountsQuery2.default);
  _Injector2.default.query.register('ReadOneFileQuery', isLegacy ? _readOneFileQuery4.default : _readOneFileQuery2.default);
  _Injector2.default.query.register('readFileUsageQuery', _readFileUsageQuery2.default);
};
exports.default = registerQueries;

/***/ }),

/***/ "./client/src/boot/registerReducers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(3);

var _Injector2 = _interopRequireDefault(_Injector);

var _redux = __webpack_require__(5);

var _GalleryReducer = __webpack_require__("./client/src/state/gallery/GalleryReducer.js");

var _GalleryReducer2 = _interopRequireDefault(_GalleryReducer);

var _QueuedFilesReducer = __webpack_require__("./client/src/state/queuedFiles/QueuedFilesReducer.js");

var _QueuedFilesReducer2 = _interopRequireDefault(_QueuedFilesReducer);

var _UploadFieldReducer = __webpack_require__("./client/src/state/uploadField/UploadFieldReducer.js");

var _UploadFieldReducer2 = _interopRequireDefault(_UploadFieldReducer);

var _PreviewFieldReducer = __webpack_require__("./client/src/state/previewField/PreviewFieldReducer.js");

var _PreviewFieldReducer2 = _interopRequireDefault(_PreviewFieldReducer);

var _ImageLoadReducer = __webpack_require__("./client/src/state/imageLoad/ImageLoadReducer.js");

var _ImageLoadReducer2 = _interopRequireDefault(_ImageLoadReducer);

var _DisplaySearchReducer = __webpack_require__("./client/src/state/displaySearch/DisplaySearchReducer.js");

var _DisplaySearchReducer2 = _interopRequireDefault(_DisplaySearchReducer);

var _ConfirmDeletionReducer = __webpack_require__("./client/src/state/confirmDeletion/ConfirmDeletionReducer.js");

var _ConfirmDeletionReducer2 = _interopRequireDefault(_ConfirmDeletionReducer);

var _ModalReducer = __webpack_require__("./client/src/state/modal/ModalReducer.js");

var _ModalReducer2 = _interopRequireDefault(_ModalReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registerReducers = function registerReducers() {
  _Injector2.default.reducer.register('assetAdmin', (0, _redux.combineReducers)({
    gallery: _GalleryReducer2.default,
    queuedFiles: _QueuedFilesReducer2.default,
    uploadField: _UploadFieldReducer2.default,
    previewField: _PreviewFieldReducer2.default,
    imageLoad: _ImageLoadReducer2.default,
    displaySearch: _DisplaySearchReducer2.default,
    confirmDeletion: _ConfirmDeletionReducer2.default,
    modal: _ModalReducer2.default
  }));
};

exports.default = registerReducers;

/***/ }),

/***/ "./client/src/bundles/bundle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./node_modules/expose-loader/index.js?InsertMediaModal!./client/src/containers/InsertMediaModal/InsertMediaModal.js-exposed");
__webpack_require__("./node_modules/expose-loader/index.js?InsertEmbedModal!./client/src/components/InsertEmbedModal/InsertEmbedModal.js-exposed");

__webpack_require__("./client/src/boot/index.js");
__webpack_require__("./client/src/entwine/UploadField/UploadFieldEntwine.js");

/***/ }),

/***/ "./client/src/components/AssetDropzone/AssetDropzone.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _dropzone = __webpack_require__("./node_modules/dropzone/dist/dropzone.js");

var _dropzone2 = _interopRequireDefault(_dropzone);

var _jquery = __webpack_require__(7);

var _jquery2 = _interopRequireDefault(_jquery);

var _DataFormat = __webpack_require__(14);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var idCounter = 0;

var AssetDropzone = function (_Component) {
  _inherits(AssetDropzone, _Component);

  function AssetDropzone(props) {
    _classCallCheck(this, AssetDropzone);

    var _this = _possibleConstructorReturn(this, (AssetDropzone.__proto__ || Object.getPrototypeOf(AssetDropzone)).call(this, props));

    _this.dropzone = null;
    _this.dragging = false;

    _this.handleAccept = _this.handleAccept.bind(_this);
    _this.handleAddedFile = _this.handleAddedFile.bind(_this);
    _this.handleDragEnter = _this.handleDragEnter.bind(_this);
    _this.handleDragLeave = _this.handleDragLeave.bind(_this);
    _this.handleDrop = _this.handleDrop.bind(_this);
    _this.handleUploadProgress = _this.handleUploadProgress.bind(_this);
    _this.handleUploadComplete = _this.handleUploadComplete.bind(_this);
    _this.handleError = _this.handleError.bind(_this);
    _this.handleSending = _this.handleSending.bind(_this);
    _this.handleSuccess = _this.handleSuccess.bind(_this);
    _this.handleQueueComplete = _this.handleQueueComplete.bind(_this);
    _this.loadImage = _this.loadImage.bind(_this);
    _this.handleMaxFilesExceeded = _this.handleMaxFilesExceeded.bind(_this);
    return _this;
  }

  _createClass(AssetDropzone, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.dropzone = new _dropzone2.default(_reactDom2.default.findDOMNode(this), Object.assign({}, this.getDefaultOptions(), this.props.options));

      var name = this.props.name;

      if (name && this.dropzone.hiddenFileInput) {
        this.dropzone.hiddenFileInput.classList.add('dz-input-' + name);
      }

      if (typeof this.props.promptOnRemove !== 'undefined') {
        this.setPromptOnRemove(this.props.promptOnRemove);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.canUpload) {
        if (this.dropzone) {
          this.dropzone.enable();

          this.dropzone.options = Object.assign({}, this.getDefaultOptions(), this.dropzone.options, this.props.options);
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var name = this.props.name;


      if (name && this.dropzone.hiddenFileInput) {
        this.dropzone.hiddenFileInput.classList.add('dz-input-' + name);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.dropzone.files = [];
      this.dropzone.destroy();
    }
  }, {
    key: 'getDefaultOptions',
    value: function getDefaultOptions() {
      var clickable = null;
      var uploadSelector = this.props.uploadSelector;
      if (!uploadSelector && this.props.uploadButton) {
        uploadSelector = '.asset-dropzone__upload-button';
      }

      if (uploadSelector) {
        var found = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this)).find(uploadSelector);
        if (found && found.length) {
          clickable = found.toArray();
        }
      }

      return {
        accept: this.handleAccept,

        addedfile: this.handleAddedFile,

        dragenter: this.handleDragEnter,

        dragleave: this.handleDragLeave,

        drop: this.handleDrop,

        maxfilesexceeded: this.handleMaxFilesExceeded,

        uploadprogress: this.handleUploadProgress,

        complete: this.handleUploadComplete,

        dictDefaultMessage: _i18n2.default._t('AssetAdmin.DROPZONE_DEFAULT_MESSAGE', 'Drop files here to upload'),

        dictFallbackMessage: _i18n2.default._t('AssetAdmin.DROPZONE_FALLBACK_MESSAGE', 'Your browser does not support drag\'n\'drop file uploads.'),

        dictFallbackText: _i18n2.default._t('AssetAdmin.DROPZONE_FALLBACK_TEXT', 'Please use the fallback form below to upload your files like in the olden days.'),

        dictInvalidFileType: _i18n2.default._t('AssetAdmin.DROPZONE_INVALID_FILE_TYPE', 'You can\'t upload files of this type.'),

        dictResponseError: _i18n2.default._t('AssetAdmin.DROPZONE_RESPONSE_ERROR', 'Server responded with an error.'),

        dictCancelUpload: _i18n2.default._t('AssetAdmin.DROPZONE_CANCEL_UPLOAD', 'Cancel upload'),

        dictCancelUploadConfirmation: _i18n2.default._t('AssetAdmin.DROPZONE_CANCEL_UPLOAD_CONFIRMATION', 'Are you sure you want to cancel this upload?'),

        dictRemoveFile: _i18n2.default._t('AssetAdmin.DROPZONE_REMOVE_FILE', 'Remove file'),

        dictMaxFilesExceeded: _i18n2.default._t('AssetAdmin.DROPZONE_MAX_FILES_EXCEEDED', 'You can not upload any more files.'),

        error: this.handleError,

        sending: this.handleSending,

        success: this.handleSuccess,

        queuecomplete: this.handleQueueComplete,

        thumbnailHeight: 150,

        thumbnailWidth: 200,

        timeout: 0,

        clickable: clickable
      };
    }
  }, {
    key: 'getFileCategory',
    value: function getFileCategory(fileType) {
      return fileType.split('/')[0];
    }
  }, {
    key: 'getLoadPreview',
    value: function getLoadPreview(file) {
      var _this2 = this;

      return new Promise(function (resolve) {
        var reader = new FileReader();

        reader.onload = function (event) {

          if (_this2.getFileCategory(file.type) === 'image') {
            var img = new Image();

            resolve(_this2.loadImage(img, event.target.result));
          } else {
            resolve({});
          }
        };

        reader.readAsDataURL(file);
      });
    }
  }, {
    key: 'getFileTitle',
    value: function getFileTitle(filename) {
      return filename.replace(/[.][^.]+$/, '').replace(/-_/, ' ');
    }
  }, {
    key: 'setPromptOnRemove',
    value: function setPromptOnRemove(userPrompt) {
      this.dropzone.options.dictRemoveFileConfirmation = userPrompt;
    }
  }, {
    key: 'handleDragEnter',
    value: function handleDragEnter(event) {
      if (!this.props.canUpload) {
        return;
      }

      this.dragging = true;
      this.forceUpdate();

      if (typeof this.props.onDragEnter === 'function') {
        this.props.onDragEnter(event);
      }
    }
  }, {
    key: 'handleDragLeave',
    value: function handleDragLeave(event) {
      var componentNode = _reactDom2.default.findDOMNode(this);

      if (!this.props.canUpload) {
        return;
      }

      if (event.target !== componentNode) {
        return;
      }

      this.dragging = false;
      this.forceUpdate();

      if (typeof this.props.onDragLeave === 'function') {
        this.props.onDragLeave(event, componentNode);
      }
    }
  }, {
    key: 'handleUploadProgress',
    value: function handleUploadProgress(file, progress, bytesSent) {
      if (typeof this.props.onUploadProgress === 'function') {
        this.props.onUploadProgress(file, progress, bytesSent);
      }
    }
  }, {
    key: 'handleUploadComplete',
    value: function handleUploadComplete(file) {
      if (typeof this.props.onUploadComplete === 'function') {
        this.props.onUploadComplete(file.status);
      }
    }
  }, {
    key: 'handleDrop',
    value: function handleDrop(event) {
      this.dragging = false;
      this.forceUpdate();

      if (typeof this.props.onDrop === 'function') {
        this.props.onDrop(event);
      }
    }
  }, {
    key: 'handleSending',
    value: function handleSending(file, xhr, formData) {
      var _this3 = this;

      if (typeof this.props.updateFormData === 'function') {
        this.props.updateFormData(formData);
      }
      formData.append('SecurityID', this.props.securityID);
      formData.append('ParentID', this.props.folderId);

      var newXhr = Object.assign({}, xhr, {
        abort: function abort() {
          _this3.dropzone.cancelUpload(file);
          xhr.abort();
        }
      });
      if (typeof this.props.onSending === 'function') {
        this.props.onSending(file, newXhr, formData);
      }
    }
  }, {
    key: 'handleMaxFilesExceeded',
    value: function handleMaxFilesExceeded(file) {
      if (typeof this.props.onMaxFilesExceeded === 'function') {
        return this.props.onMaxFilesExceeded(file);
      }

      return true;
    }
  }, {
    key: 'generateQueuedId',
    value: function generateQueuedId() {
      idCounter += 1;
      return idCounter;
    }
  }, {
    key: 'handleAccept',
    value: function handleAccept(file, done) {
      if (typeof this.props.canFileUpload === 'function' && !this.props.canFileUpload(file)) {
        return done(_i18n2.default._t('AssetAdmin.DROPZONE_CANNOT_UPLOAD', 'Uploading not permitted.'));
      }

      if (!this.props.canUpload) {
        return done(_i18n2.default._t('AssetAdmin.DROPZONE_CANNOT_UPLOAD', 'Uploading not permitted.'));
      }

      return done();
    }
  }, {
    key: 'handleAddedFile',
    value: function handleAddedFile(file) {
      var _this4 = this;

      file._queuedId = this.generateQueuedId();
      var details = {
        category: this.getFileCategory(file.type),
        filename: file.name,
        queuedId: file._queuedId,
        size: file.size,
        title: this.getFileTitle(file.name),
        extension: (0, _DataFormat.getFileExtension)(file.name),
        type: file.type,
        uploadedToFolderId: this.props.folderId
      };

      this.props.onAddedFile(details);

      var loadPreview = this.getLoadPreview(file);

      return loadPreview.then(function (preview) {
        var previewDetails = {
          height: preview.height,
          width: preview.width,
          url: preview.thumbnailURL,
          thumbnail: preview.thumbnailURL,
          smallThumbnail: preview.thumbnailURL
        };
        if (typeof _this4.props.onPreviewLoaded === 'function') {
          _this4.props.onPreviewLoaded(details, previewDetails);
        }

        return _extends({}, details, previewDetails);
      });
    }
  }, {
    key: 'loadImage',
    value: function loadImage(img, newSource) {
      var _this5 = this;

      return new Promise(function (resolve) {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');

        img.onload = function () {
          var previewWidth = _this5.props.preview.width * 2;
          var previewHeight = _this5.props.preview.height * 2;
          var ratio = img.naturalWidth / img.naturalHeight;

          if (img.naturalWidth < previewWidth || img.naturalHeight < previewHeight) {
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
          } else if (ratio < 1) {
            canvas.width = previewWidth;
            canvas.height = previewWidth / ratio;
          } else {
            canvas.width = previewHeight * ratio;
            canvas.height = previewHeight;
          }

          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          var thumbnailURL = canvas.toDataURL('image/png');

          resolve({
            width: img.naturalWidth,
            height: img.naturalHeight,
            thumbnailURL: thumbnailURL
          });
        };

        img.src = newSource;
      });
    }
  }, {
    key: 'handleError',
    value: function handleError(file, message) {
      this.dropzone.removeFile(file);

      this.props.onError(file, message);
    }
  }, {
    key: 'handleSuccess',
    value: function handleSuccess(file) {
      this.dropzone.removeFile(file);

      this.props.onSuccess(file);
    }
  }, {
    key: 'handleQueueComplete',
    value: function handleQueueComplete() {
      if (this.props.onQueueComplete) {
        this.props.onQueueComplete();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var className = ['asset-dropzone'];

      if (this.props.className) {
        className.push(this.props.className);
      }

      var buttonProps = {
        className: 'asset-dropzone__upload-button ss-ui-button font-icon-upload',
        type: 'button'
      };

      if (!this.props.canUpload) {
        buttonProps.disabled = true;
      }

      if (this.dragging === true) {
        className.push('dragging');
      }

      return _react2.default.createElement(
        'div',
        { className: className.join(' ') },
        this.props.uploadButton && _react2.default.createElement(
          'button',
          buttonProps,
          _i18n2.default._t('AssetAdmin.DROPZONE_UPLOAD')
        ),
        this.props.children
      );
    }
  }]);

  return AssetDropzone;
}(_react.Component);

AssetDropzone.propTypes = {
  folderId: _propTypes2.default.number.isRequired,
  onAccept: _propTypes2.default.func,
  onAddedFile: _propTypes2.default.func.isRequired,
  onDragEnter: _propTypes2.default.func,
  onDragLeave: _propTypes2.default.func,
  onDrop: _propTypes2.default.func,
  onError: _propTypes2.default.func.isRequired,
  onPreviewLoaded: _propTypes2.default.func,
  onSending: _propTypes2.default.func,
  onSuccess: _propTypes2.default.func.isRequired,
  onMaxFilesExceeded: _propTypes2.default.func,
  updateFormData: _propTypes2.default.func,
  canFileUpload: _propTypes2.default.func,
  onQueueComplete: _propTypes2.default.func,
  options: _propTypes2.default.shape({
    url: _propTypes2.default.string.isRequired
  }),
  promptOnRemove: _propTypes2.default.string,
  securityID: _propTypes2.default.string.isRequired,
  uploadButton: _propTypes2.default.bool,
  uploadSelector: _propTypes2.default.string,
  canUpload: _propTypes2.default.bool.isRequired,
  preview: _propTypes2.default.shape({
    width: _propTypes2.default.number,
    height: _propTypes2.default.number
  }),
  className: _propTypes2.default.string
};

AssetDropzone.defaultProps = {
  uploadButton: true
};

exports.default = AssetDropzone;

/***/ }),

/***/ "./client/src/components/BackButton/BackButton.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _droppable = __webpack_require__("./client/src/components/GalleryItem/droppable.js");

var _droppable2 = _interopRequireDefault(_droppable);

var _Badge = __webpack_require__(18);

var _Badge2 = _interopRequireDefault(_Badge);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BackButton = function (_Component) {
  _inherits(BackButton, _Component);

  function BackButton() {
    _classCallCheck(this, BackButton);

    return _possibleConstructorReturn(this, (BackButton.__proto__ || Object.getPrototypeOf(BackButton)).apply(this, arguments));
  }

  _createClass(BackButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isDropping = _props.isDropping,
          badge = _props.badge,
          onClick = _props.onClick;

      var classList = ['btn', 'btn-secondary', 'btn--no-text', 'font-icon-level-up', 'btn--icon-large', 'gallery__back'];

      if (isDropping) {
        classList.push('z-depth-1');
        classList.push('gallery__back--droppable-hover');
      }

      var backBadge = badge ? _react2.default.createElement(_Badge2.default, {
        className: 'gallery__back-badge',
        status: badge.status,
        message: badge.message
      }) : null;

      var button = _react2.default.createElement(
        'button',
        {
          className: classList.join(' '),
          title: _i18n2.default._t('AssetAdmin.BACK_DESCRIPTION', 'Navigate up a level'),
          onClick: onClick
        },
        backBadge
      );

      return button;
    }
  }]);

  return BackButton;
}(_react.Component);

BackButton.propTypes = {
  onClick: _propTypes2.default.func,
  isDropping: _propTypes2.default.bool,
  badge: _propTypes2.default.shape(_Badge2.default.propTypes)
};

exports.Component = BackButton;
exports.default = (0, _droppable2.default)('GalleryItem')(BackButton);

/***/ }),

/***/ "./client/src/components/BulkActions/BulkActions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _Injector = __webpack_require__(3);

var _reactstrap = __webpack_require__(22);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BulkActions = function (_Component) {
  _inherits(BulkActions, _Component);

  function BulkActions(props) {
    _classCallCheck(this, BulkActions);

    var _this = _possibleConstructorReturn(this, (BulkActions.__proto__ || Object.getPrototypeOf(BulkActions)).call(this, props));

    _this.handleChangeValue = _this.handleChangeValue.bind(_this);
    _this.renderChild = _this.renderChild.bind(_this);
    return _this;
  }

  _createClass(BulkActions, [{
    key: 'getOptionByValue',
    value: function getOptionByValue(value) {
      return this.props.actions.find(function (action) {
        return action.value === value;
      });
    }
  }, {
    key: 'handleChangeValue',
    value: function handleChangeValue(event) {
      var _this2 = this;

      var promise = null;

      var option = this.getOptionByValue(event.target.value);
      if (option === null) {
        return null;
      }

      if (typeof option.confirm === 'function') {
        promise = option.confirm(this.props.items).then(function () {
          return option.callback(event, _this2.props.items);
        }).catch(function (reason) {
          if (reason !== 'cancelled') {
            throw reason;
          }
        });
      } else {
        promise = option.callback(event, this.props.items) || Promise.resolve();
      }

      return promise;
    }
  }, {
    key: 'renderChild',
    value: function renderChild(action, i) {
      var className = (0, _classnames2.default)('bulk-actions__action', action.className || 'font-icon-info-circled', {
        btn: i < 2,
        'bulk-actions__action--more': i > 2
      });
      if (i < 2) {
        return _react2.default.createElement(
          _reactstrap.Button,
          {
            className: className,
            key: action.value,
            onClick: this.handleChangeValue,
            value: action.value,
            color: action.color
          },
          action.label
        );
      }
      return _react2.default.createElement(
        _reactstrap.DropdownItem,
        {
          type: 'button',
          className: className,
          key: action.value,
          onClick: this.handleChangeValue,
          value: action.value
        },
        action.label
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (!this.props.items.length) {
        return null;
      }

      var children = this.props.actions.filter(function (action) {
        return !action.canApply || action.canApply(_this3.props.items);
      });

      children = children.map(this.renderChild);

      if (!children.length) {
        return null;
      }

      var _props = this.props,
          ActionMenu = _props.ActionMenu,
          showCount = _props.showCount;


      var count = this.props.items.length;

      return _react2.default.createElement(
        'div',
        { className: 'bulk-actions fieldholder-small' },
        showCount && _react2.default.createElement(
          'div',
          { className: 'bulk-actions-counter' },
          count
        ),
        children.slice(0, 2),
        children.length > 2 && ActionMenu ? _react2.default.createElement(
          ActionMenu,
          {
            id: 'BulkActions',
            className: 'bulk-actions__more-actions-menu'
          },
          children.slice(2)
        ) : children.slice(2)
      );
    }
  }]);

  return BulkActions;
}(_react.Component);

BulkActions.propTypes = {
  items: _propTypes2.default.array,
  actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    value: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string.isRequired,
    className: _propTypes2.default.string,
    destructive: _propTypes2.default.bool,
    callback: _propTypes2.default.func,
    canApply: _propTypes2.default.func,
    confirm: _propTypes2.default.func
  })),
  ActionMenu: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  showCount: _propTypes2.default.bool
};

BulkActions.defaultProps = {
  items: [],
  actions: [],
  ActionMenu: null,
  total: null,
  showCount: true,
  totalReachedMessage: _i18n2.default._t('')
};

function mapStateToProps(state) {
  return {
    gallery: state.assetAdmin.gallery
  };
}

var BulkActionsWithState = (0, _reactRedux.connect)(mapStateToProps)(BulkActions);

exports.Component = BulkActions;
exports.default = (0, _Injector.inject)(['ActionMenu'], function (ActionMenu) {
  return { ActionMenu: ActionMenu };
}, function () {
  return 'BulkActions';
})(BulkActionsWithState);

/***/ }),

/***/ "./client/src/components/GalleryItem/GalleryItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.File = exports.Folder = exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(9);

var _classnames3 = _interopRequireDefault(_classnames2);

var _index = __webpack_require__("./client/src/constants/index.js");

var _index2 = _interopRequireDefault(_index);

var _fileShape = __webpack_require__("./client/src/lib/fileShape.js");

var _fileShape2 = _interopRequireDefault(_fileShape);

var _draggable = __webpack_require__("./client/src/components/GalleryItem/draggable.js");

var _draggable2 = _interopRequireDefault(_draggable);

var _droppable = __webpack_require__("./client/src/components/GalleryItem/droppable.js");

var _droppable2 = _interopRequireDefault(_droppable);

var _Badge = __webpack_require__(18);

var _Badge2 = _interopRequireDefault(_Badge);

var _FileStatusIcon = __webpack_require__(19);

var _FileStatusIcon2 = _interopRequireDefault(_FileStatusIcon);

var _configShape = __webpack_require__("./client/src/lib/configShape.js");

var _configShape2 = _interopRequireDefault(_configShape);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(5);

var _reactSelectable = __webpack_require__("./node_modules/react-selectable/dist/react-selectable.js");

var _ImageLoadActions = __webpack_require__("./client/src/state/imageLoad/ImageLoadActions.js");

var imageLoadActions = _interopRequireWildcard(_ImageLoadActions);

var _ImageLoadStatus = __webpack_require__("./client/src/state/imageLoad/ImageLoadStatus.js");

var _ImageLoadStatus2 = _interopRequireDefault(_ImageLoadStatus);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function shouldLoadImage(props) {
  return props.item.thumbnail && props.item.category === 'image' && props.item.exists && !props.item.queuedId && props.sectionConfig.imageRetry.minRetry && props.sectionConfig.imageRetry.maxRetry;
}

var preventFocus = function preventFocus(event) {
  event.preventDefault();
};

var GalleryItem = function (_Component) {
  _inherits(GalleryItem, _Component);

  function GalleryItem(props) {
    _classCallCheck(this, GalleryItem);

    var _this = _possibleConstructorReturn(this, (GalleryItem.__proto__ || Object.getPrototypeOf(GalleryItem)).call(this, props));

    _this.handleSelect = _this.handleSelect.bind(_this);
    _this.handleActivate = _this.handleActivate.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.handleCancelUpload = _this.handleCancelUpload.bind(_this);
    return _this;
  }

  _createClass(GalleryItem, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (shouldLoadImage(nextProps)) {
        nextProps.actions.imageLoad.loadImage(nextProps.item.thumbnail, nextProps.sectionConfig.imageRetry);
      }
    }
  }, {
    key: 'getThumbnailStyles',
    value: function getThumbnailStyles() {
      var _props = this.props,
          _props$item = _props.item,
          thumbnail = _props$item.thumbnail,
          version = _props$item.version,
          bustCache = _props.bustCache;

      if (!this.isImage() || !thumbnail || this.missing()) {
        return {};
      }

      var url = bustCache === false || !version || thumbnail.startsWith('data:image/') ? thumbnail : thumbnail + '?vid=' + version;

      switch (this.props.loadState) {
        case _ImageLoadStatus2.default.SUCCESS:
        case _ImageLoadStatus2.default.DISABLED:
          return {
            backgroundImage: 'url(' + url + ')'
          };
        default:
          return {};
      }
    }
  }, {
    key: 'getErrorMessage',
    value: function getErrorMessage() {
      var message = null;
      var _props2 = this.props,
          item = _props2.item,
          loadState = _props2.loadState;


      if (this.hasError()) {
        message = item.message.value;
      } else if (this.missing()) {
        message = _i18n2.default._t('AssetAdmin.FILE_MISSING', 'File cannot be found');
      } else if (loadState === _ImageLoadStatus2.default.FAILED) {
        message = _i18n2.default._t('AssetAdmin.FILE_LOAD_ERROR', 'Thumbnail not available');
      }

      if (message !== null) {
        var updateErrorMessage = this.getItemFunction('updateErrorMessage');
        message = updateErrorMessage(message, this.props);
        return _react2.default.createElement(
          'span',
          { className: 'gallery-item__error-message' },
          message
        );
      }

      return null;
    }
  }, {
    key: 'getThumbnailClassNames',
    value: function getThumbnailClassNames() {
      var thumbnailClassNames = ['gallery-item__thumbnail'];

      if (this.isImageSmallerThanThumbnail()) {
        thumbnailClassNames.push('gallery-item__thumbnail--small');
      }

      if (!this.props.item.thumbnail && this.isImage()) {
        thumbnailClassNames.push('gallery-item__thumbnail--no-preview');
      }

      switch (this.props.loadState) {
        case _ImageLoadStatus2.default.LOADING:
        case _ImageLoadStatus2.default.WAITING:
          thumbnailClassNames.push('gallery-item__thumbnail--loading');
          break;

        case _ImageLoadStatus2.default.FAILED:
          thumbnailClassNames.push('gallery-item__thumbnail--error');
          break;
        default:
          break;
      }

      return thumbnailClassNames.join(' ');
    }
  }, {
    key: 'getItemClassNames',
    value: function getItemClassNames() {
      var _classnames;

      var category = this.props.item.category || 'false';
      var selected = this.props.selectable && (this.props.item.selected || this.props.isDragging);

      return (0, _classnames3.default)((_classnames = {
        'gallery-item': true
      }, _defineProperty(_classnames, 'gallery-item--' + category, true), _defineProperty(_classnames, 'gallery-item--max-selected', this.props.maxSelected && !selected), _defineProperty(_classnames, 'gallery-item--missing', this.missing()), _defineProperty(_classnames, 'gallery-item--selectable', this.props.selectable), _defineProperty(_classnames, 'gallery-item--selected', selected), _defineProperty(_classnames, 'gallery-item--dropping', this.props.isDropping), _defineProperty(_classnames, 'gallery-item--highlighted', this.props.item.highlighted), _defineProperty(_classnames, 'gallery-item--error', this.hasError()), _defineProperty(_classnames, 'gallery-item--dragging', this.props.isDragging), _classnames));
    }
  }, {
    key: 'getItemFunction',
    value: function getItemFunction(functionName) {
      var item = this.props.item;


      return typeof item[functionName] === 'function' ? item[functionName] : this.props[functionName];
    }
  }, {
    key: 'getStatusFlags',
    value: function getStatusFlags() {
      var flags = [];
      var item = this.props.item;

      if (item.type !== 'folder') {
        if (item.draft) {
          flags.push({
            key: 'status-draft',
            title: _i18n2.default._t('File.DRAFT', 'Draft'),
            className: 'gallery-item--draft'
          });
        } else if (item.modified) {
          flags.push({
            key: 'status-modified',
            title: _i18n2.default._t('File.MODIFIED', 'Modified'),
            className: 'gallery-item--modified'
          });
        }
      }
      var updateStatusFlags = this.getItemFunction('updateStatusFlags');
      flags = updateStatusFlags(flags, this.props);
      return _react2.default.createElement(
        'div',
        { className: 'gallery-item__status-flags' },
        flags.map(function (attrs) {
          return _react2.default.createElement('span', attrs);
        })
      );
    }
  }, {
    key: 'getStatusIcons',
    value: function getStatusIcons() {
      var item = this.props.item;

      var icons = [];
      if (item.hasRestrictedAccess) {
        icons.push({
          key: 'status-restricted',
          fileID: item.id,
          hasRestrictedAccess: true,
          placement: 'top',
          disableTooltip: item.type === 'folder',
          includeBackground: item.type !== 'folder'
        });
      }
      if (item.isTrackedFormUpload && item.type !== 'folder') {
        icons.push({
          key: 'status-tracked-form-upload',
          fileID: item.id,
          isTrackedFormUpload: true,
          hasRestrictedAccess: item.hasRestrictedAccess,
          placement: 'top',
          includeBackground: true
        });
      }
      return _react2.default.createElement(
        'div',
        { className: 'gallery-item__status-icons' },
        icons.map(function (attrs) {
          return _react2.default.createElement(_FileStatusIcon2.default, attrs);
        })
      );
    }
  }, {
    key: 'getProgressBar',
    value: function getProgressBar() {
      var progressBar = null;
      var item = this.props.item;

      var progressBarProps = {
        className: 'gallery-item__progress-bar',
        style: {
          width: item.progress + '%'
        }
      };

      if (!this.hasError() && this.uploading() && !this.complete()) {
        progressBar = _react2.default.createElement(
          'div',
          { className: 'gallery-item__upload-progress' },
          _react2.default.createElement('div', progressBarProps)
        );
      }
      var updateProgressBar = this.getItemFunction('updateProgressBar');
      progressBar = updateProgressBar(progressBar, this.props);
      return progressBar;
    }
  }, {
    key: 'isImageSmallerThanThumbnail',
    value: function isImageSmallerThanThumbnail() {
      if (!this.isImage() || this.missing()) {
        return false;
      }
      var width = this.props.item.width;
      var height = this.props.item.height;

      return height && width && height < _index2.default.THUMBNAIL_HEIGHT && width < _index2.default.THUMBNAIL_WIDTH;
    }
  }, {
    key: 'complete',
    value: function complete() {
      return this.props.item.queuedId && this.saved();
    }
  }, {
    key: 'saved',
    value: function saved() {
      return this.props.item.id > 0;
    }
  }, {
    key: 'missing',
    value: function missing() {
      return !this.exists() && this.saved();
    }
  }, {
    key: 'uploading',
    value: function uploading() {
      return this.props.item.queuedId && !this.saved();
    }
  }, {
    key: 'exists',
    value: function exists() {
      return this.props.item.exists;
    }
  }, {
    key: 'isImage',
    value: function isImage() {
      return this.props.item.category === 'image';
    }
  }, {
    key: 'canBatchSelect',
    value: function canBatchSelect() {
      return this.props.selectable && this.props.item.canEdit;
    }
  }, {
    key: 'hasError',
    value: function hasError() {
      var hasError = false;

      if (this.props.item.message) {
        hasError = this.props.item.message.type === 'error';
      }

      return hasError;
    }
  }, {
    key: 'handleActivate',
    value: function handleActivate(event) {
      event.stopPropagation();
      if (typeof this.props.onActivate === 'function' && this.saved()) {
        this.props.onActivate(event, this.props.item);
      }
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect(event) {
      event.stopPropagation();
      event.preventDefault();
      if (typeof this.props.onSelect === 'function') {
        this.props.onSelect(event, this.props.item);
      }
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      if (_index2.default.SPACE_KEY_CODE === event.keyCode) {
        event.preventDefault();
        if (this.canBatchSelect()) {
          this.handleSelect(event);
        }
      }

      if (_index2.default.RETURN_KEY_CODE === event.keyCode) {
        this.handleActivate(event);
      }
    }
  }, {
    key: 'handleCancelUpload',
    value: function handleCancelUpload(event) {
      event.stopPropagation();
      event.preventDefault();
      if (this.hasError()) {
        this.props.onRemoveErroredUpload(this.props.item);
      } else if (this.props.onCancelUpload) {
        this.props.onCancelUpload(this.props.item);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var action = null;
      var actionIcon = null;
      var overlay = null;
      var _props$item2 = this.props.item,
          id = _props$item2.id,
          queuedId = _props$item2.queuedId;

      var htmlID = id ? 'item-' + id : 'queued-' + queuedId;
      if (this.props.selectable) {
        if (this.canBatchSelect()) {
          action = this.handleSelect;
        }
        actionIcon = 'font-icon-tick';
      }

      if (this.uploading()) {
        action = this.handleCancelUpload;
        actionIcon = 'font-icon-cancel';
      } else if (this.exists()) {
        var label = _i18n2.default._t('AssetAdmin.VIEW', 'View');
        overlay = _react2.default.createElement(
          'div',
          { className: 'gallery-item--overlay font-icon-eye' },
          label
        );
      }

      var badge = this.props.badge;

      var inputProps = {
        className: 'gallery-item__checkbox',
        type: 'checkbox',
        title: _i18n2.default._t('AssetAdmin.SELECT', 'Select'),
        tabIndex: -1,
        onMouseDown: preventFocus,
        id: htmlID
      };
      var inputLabelClasses = ['gallery-item__checkbox-label', actionIcon];
      if (!this.canBatchSelect()) {
        inputProps.disabled = true;
        inputLabelClasses.push('gallery-item__checkbox-label--disabled');
      }
      var inputLabelProps = {
        className: inputLabelClasses.join(' '),
        onClick: action
      };

      return _react2.default.createElement(
        'div',
        {
          className: this.getItemClassNames(),
          'data-id': this.props.item.id,
          tabIndex: 0,
          role: 'button',
          onKeyDown: this.handleKeyDown,
          onClick: this.handleActivate
        },
        !!badge && _react2.default.createElement(_Badge2.default, {
          className: 'gallery-item__badge',
          status: badge.status,
          message: badge.message
        }),
        _react2.default.createElement(
          'div',
          {
            ref: function ref(thumbnail) {
              _this2.thumbnail = thumbnail;
            },
            className: this.getThumbnailClassNames(),
            style: this.getThumbnailStyles()
          },
          overlay,
          this.getStatusFlags(),
          this.getStatusIcons()
        ),
        this.getProgressBar(),
        this.getErrorMessage(),
        this.props.children,
        _react2.default.createElement(
          'div',
          {
            className: 'gallery-item__title',
            ref: function ref(title) {
              _this2.title = title;
            }
          },
          _react2.default.createElement(
            'label',
            _extends({}, inputLabelProps, { htmlFor: htmlID }),
            _react2.default.createElement('input', inputProps)
          ),
          this.props.item.title
        )
      );
    }
  }]);

  return GalleryItem;
}(_react.Component);

GalleryItem.propTypes = {
  sectionConfig: _configShape2.default,
  item: _fileShape2.default,
  loadState: _propTypes2.default.oneOf(Object.values(_ImageLoadStatus2.default)),
  bustCache: _propTypes2.default.bool,

  highlighted: _propTypes2.default.bool,

  selected: _propTypes2.default.bool,

  isDropping: _propTypes2.default.bool,
  isDragging: _propTypes2.default.bool,
  message: _propTypes2.default.shape({
    value: _propTypes2.default.string,
    type: _propTypes2.default.string
  }),
  selectable: _propTypes2.default.bool,
  onActivate: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  onCancelUpload: _propTypes2.default.func,
  onRemoveErroredUpload: _propTypes2.default.func,
  badge: _propTypes2.default.shape({
    status: _propTypes2.default.string,
    message: _propTypes2.default.string
  }),
  updateStatusFlags: _propTypes2.default.func,
  updateProgressBar: _propTypes2.default.func,
  updateErrorMessage: _propTypes2.default.func
};

GalleryItem.defaultProps = {
  item: {},
  sectionConfig: {
    imageRetry: {}
  },
  updateStatusFlags: function updateStatusFlags(flags) {
    return flags;
  },
  updateProgressBar: function updateProgressBar(progressBar) {
    return progressBar;
  },
  updateErrorMessage: function updateErrorMessage(message) {
    return message;
  },
  bustCache: true
};

function mapStateToProps(state, ownprops) {
  var sectionConfigKey = 'SilverStripe\\AssetAdmin\\Controller\\AssetAdmin';

  var _state$config$section = state.config.sections.find(function (section) {
    return section.name === sectionConfigKey;
  }),
      bustCache = _state$config$section.bustCache;

  var loadState = _ImageLoadStatus2.default.DISABLED;

  if (shouldLoadImage(ownprops)) {
    var imageLoad = state.assetAdmin.imageLoad;
    var file = imageLoad.files.find(function (next) {
      return ownprops.item.thumbnail === next.url;
    });

    loadState = file && file.status || _ImageLoadStatus2.default.NONE;
  }

  return { bustCache: bustCache, loadState: loadState };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      imageLoad: (0, _redux.bindActionCreators)(imageLoadActions, dispatch)
    }
  };
}

var ConnectedGalleryItem = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(GalleryItem);
var type = 'GalleryItem';

var File = (0, _reactSelectable.createSelectable)((0, _draggable2.default)(type)(ConnectedGalleryItem));
var Folder = (0, _reactSelectable.createSelectable)((0, _droppable2.default)(type)(File));
exports.Component = GalleryItem;
exports.Folder = Folder;
exports.File = File;
exports.default = ConnectedGalleryItem;

/***/ }),

/***/ "./client/src/components/GalleryItem/GalleryItemDragLayer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = __webpack_require__(21);

var _GalleryItem = __webpack_require__("./client/src/components/GalleryItem/GalleryItem.js");

var _GalleryItem2 = _interopRequireDefault(_GalleryItem);

var _Badge = __webpack_require__(18);

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GalleryItemDragLayer = function (_Component) {
  _inherits(GalleryItemDragLayer, _Component);

  function GalleryItemDragLayer() {
    _classCallCheck(this, GalleryItemDragLayer);

    return _possibleConstructorReturn(this, (GalleryItemDragLayer.__proto__ || Object.getPrototypeOf(GalleryItemDragLayer)).apply(this, arguments));
  }

  _createClass(GalleryItemDragLayer, [{
    key: 'getOffset',
    value: function getOffset() {
      var _props = this.props,
          offset = _props.offset,
          dragged = _props.dragged;

      return {
        transform: offset && 'translate(' + (offset.x + dragged.x) + 'px, ' + (offset.y + dragged.y) + 'px)'
      };
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.isDragging) {
        return null;
      }
      var item = this.props.item;

      if (!item.selected) {
        return null;
      }
      var selectionCount = item.selected.length;
      var shadows = [selectionCount > 1 ? _react2.default.createElement('div', { key: '1', className: 'gallery-item__drag-shadow' }) : null, selectionCount > 2 ? _react2.default.createElement('div', { key: '2', className: 'gallery-item__drag-shadow gallery-item__drag-shadow--second' }) : null];

      return _react2.default.createElement(
        'div',
        { className: 'gallery-item__drag-layer' },
        _react2.default.createElement(
          'div',
          { className: 'gallery-item__drag-layer-item', style: this.getOffset() },
          _react2.default.createElement(
            'div',
            { className: 'gallery-item__drag-layer-preview' },
            shadows,
            _react2.default.createElement(_GalleryItem2.default, _extends({}, item.props, { isDragging: true }))
          ),
          selectionCount > 1 ? _react2.default.createElement(_Badge2.default, {
            className: 'gallery-item__drag-layer-count',
            status: 'info',
            message: '' + selectionCount
          }) : null
        )
      );
    }
  }]);

  return GalleryItemDragLayer;
}(_react.Component);

GalleryItemDragLayer.propTypes = {
  item: _propTypes2.default.object,
  offset: _propTypes2.default.shape({
    x: _propTypes2.default.number.isRequired,
    y: _propTypes2.default.number.isRequired
  }),
  isDragging: _propTypes2.default.bool.isRequired
};

var collect = function collect(monitor) {
  return {
    item: monitor.getItem(),
    offset: monitor.getInitialClientOffset(),
    dragged: monitor.getDifferenceFromInitialOffset(),
    isDragging: monitor.isDragging()
  };
};

exports.default = (0, _reactDnd.DragLayer)(collect)(GalleryItemDragLayer);

/***/ }),

/***/ "./client/src/components/GalleryItem/draggable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = draggable;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = __webpack_require__(21);

var _reactDndHtml5Backend = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function draggable(type) {
  var spec = {
    canDrag: function canDrag(props) {
      return props.canDrag;
    },
    beginDrag: function beginDrag(props) {
      var id = props.item.id;

      if (typeof props.onDrag === 'function') {
        props.onDrag(true, id);
      }
      var selected = props.selectedFiles.concat([]);
      if (!selected.includes(id)) {
        selected.push(id);
      }

      return { selected: selected, props: props };
    },
    endDrag: function endDrag(props) {
      var id = props.item.id;

      if (typeof props.onDrag === 'function') {
        props.onDrag(false, id);
      }
    }
  };

  var collect = function collect(connect, monitor) {
    return {
      connectDragPreview: connect.dragPreview(),
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    };
  };

  var dragItem = (0, _reactDnd.DragSource)(type, spec, collect);

  return function (Item) {
    var DraggableItem = function (_Component) {
      _inherits(DraggableItem, _Component);

      function DraggableItem() {
        _classCallCheck(this, DraggableItem);

        return _possibleConstructorReturn(this, (DraggableItem.__proto__ || Object.getPrototypeOf(DraggableItem)).apply(this, arguments));
      }

      _createClass(DraggableItem, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.props.connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)(), {
            captureDraggingState: true
          });
        }
      }, {
        key: 'render',
        value: function render() {
          var connectDragSource = this.props.connectDragSource;

          var item = _react2.default.createElement(Item, this.props);

          if (typeof item.type === 'string') {
            return connectDragSource(item);
          }
          return connectDragSource(_react2.default.createElement(
            'div',
            { className: 'gallery-item__draggable' },
            item
          ));
        }
      }]);

      return DraggableItem;
    }(_react.Component);

    DraggableItem.propTypes = {
      connectDragSource: _propTypes2.default.func.isRequired,
      connectDragPreview: _propTypes2.default.func.isRequired,
      item: _propTypes2.default.shape({
        id: _propTypes2.default.number.isRequired
      }).isRequired,
      onDrag: _propTypes2.default.func,
      selectedFiles: _propTypes2.default.arrayOf(_propTypes2.default.number)
    };

    return dragItem(DraggableItem);
  };
}

/***/ }),

/***/ "./client/src/components/GalleryItem/droppable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = droppable;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function droppable(types) {
  var spec = {
    drop: function drop(props, monitor) {
      if (monitor.canDrop()) {
        var item = monitor.getItem();
        props.onDropFiles(props.item.id, item.selected);
      }
    },
    canDrop: function canDrop(props, monitor) {
      var item = monitor.getItem();

      return !item.selected.includes(props.item.id);
    }
  };

  var collect = function collect(connect, monitor) {
    var over = monitor.isOver();
    return {
      isDropping: over && monitor.canDrop(),
      connectDropTarget: connect.dropTarget(),
      isOver: over
    };
  };

  var dropItem = (0, _reactDnd.DropTarget)(types, spec, collect);

  return function (Item) {
    var DroppableItem = function (_Component) {
      _inherits(DroppableItem, _Component);

      function DroppableItem() {
        _classCallCheck(this, DroppableItem);

        return _possibleConstructorReturn(this, (DroppableItem.__proto__ || Object.getPrototypeOf(DroppableItem)).apply(this, arguments));
      }

      _createClass(DroppableItem, [{
        key: 'render',
        value: function render() {
          var connectDropTarget = this.props.connectDropTarget;

          var item = _react2.default.createElement(Item, this.props);

          if (typeof item.type === 'string') {
            return connectDropTarget(item);
          }
          return connectDropTarget(_react2.default.createElement(
            'div',
            { className: 'gallery-item__droppable' },
            item
          ));
        }
      }]);

      return DroppableItem;
    }(_react.Component);

    DroppableItem.propTypes = {
      connectDropTarget: _propTypes2.default.func.isRequired,
      item: _propTypes2.default.shape({
        id: _propTypes2.default.number.isRequired
      }).isRequired
    };

    return dropItem(DroppableItem);
  };
}

/***/ }),

/***/ "./client/src/components/GalleryToolbar/Buttons/AddFolderButton.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddFolderButton = function (_Component) {
  _inherits(AddFolderButton, _Component);

  function AddFolderButton() {
    _classCallCheck(this, AddFolderButton);

    var _this = _possibleConstructorReturn(this, (AddFolderButton.__proto__ || Object.getPrototypeOf(AddFolderButton)).call(this));

    _this.handleCreateFolder = _this.handleCreateFolder.bind(_this);
    return _this;
  }

  _createClass(AddFolderButton, [{
    key: 'handleCreateFolder',
    value: function handleCreateFolder(event) {
      var onCreateFolder = this.props.onCreateFolder;

      event.preventDefault();
      if (typeof onCreateFolder === 'function') {
        onCreateFolder();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var canEdit = this.props.canEdit;

      return _react2.default.createElement(
        'button',
        {
          id: 'add-folder-button',
          className: 'btn btn-secondary font-icon-folder-add btn--icon-xl',
          type: 'button',
          onClick: this.handleCreateFolder,
          disabled: !canEdit
        },
        _react2.default.createElement(
          'span',
          { className: 'btn__text btn__title' },
          _i18n2.default._t('AssetAdmin.ADD_FOLDER_BUTTON')
        )
      );
    }
  }]);

  return AddFolderButton;
}(_react.Component);

AddFolderButton.propTypes = {
  canEdit: _propTypes2.default.bool.isRequired,
  onCreateFolder: _propTypes2.default.func.isRequired
};

exports.default = AddFolderButton;

/***/ }),

/***/ "./client/src/components/GalleryToolbar/Buttons/BackButton.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BackButton = __webpack_require__("./client/src/components/BackButton/BackButton.js");

var _BackButton2 = _interopRequireDefault(_BackButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BackButton = function (_Component) {
  _inherits(BackButton, _Component);

  function BackButton(props) {
    _classCallCheck(this, BackButton);

    var _this = _possibleConstructorReturn(this, (BackButton.__proto__ || Object.getPrototypeOf(BackButton)).call(this, props));

    _this.handleBackClick = _this.handleBackClick.bind(_this);
    return _this;
  }

  _createClass(BackButton, [{
    key: 'handleBackClick',
    value: function handleBackClick(event) {
      var _props = this.props,
          onOpenFolder = _props.onOpenFolder,
          folder = _props.folder;


      event.preventDefault();
      if (typeof onOpenFolder === 'function') {
        onOpenFolder(folder.parentId);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          folder = _props2.folder,
          badges = _props2.badges,
          onMoveFiles = _props2.onMoveFiles;
      var itemId = folder.parentId;

      if (itemId === null) {
        return null;
      }
      var badge = badges.find(function (item) {
        return item.id === itemId;
      });
      return _react2.default.createElement(
        'div',
        { className: 'gallery__back-container' },
        _react2.default.createElement(_BackButton2.default, {
          item: { id: itemId },
          onClick: this.handleBackClick,
          onDropFiles: onMoveFiles,
          badge: badge
        })
      );
    }
  }]);

  return BackButton;
}(_react.Component);

BackButton.propTypes = {
  folder: _propTypes2.default.shape({
    id: _propTypes2.default.number,
    title: _propTypes2.default.string,
    parentId: _propTypes2.default.number,
    canView: _propTypes2.default.bool,
    canEdit: _propTypes2.default.bool
  }).isRequired,
  badges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.number,
    message: _propTypes2.default.node,
    status: _propTypes2.default.string
  })).isRequired,
  onOpenFolder: _propTypes2.default.func.isRequired,
  onMoveFiles: _propTypes2.default.func.isRequired
};

exports.default = BackButton;

/***/ }),

/***/ "./client/src/components/GalleryToolbar/Buttons/UploadButton.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UploadButton = function (_Component) {
  _inherits(UploadButton, _Component);

  function UploadButton() {
    _classCallCheck(this, UploadButton);

    return _possibleConstructorReturn(this, (UploadButton.__proto__ || Object.getPrototypeOf(UploadButton)).apply(this, arguments));
  }

  _createClass(UploadButton, [{
    key: 'render',
    value: function render() {
      var canEdit = this.props.canEdit;

      return _react2.default.createElement(
        'button',
        {
          id: 'upload-button',
          className: 'btn btn-secondary font-icon-upload btn--icon-xl',
          type: 'button',
          disabled: !canEdit
        },
        _react2.default.createElement(
          'span',
          { className: 'btn__text btn__title' },
          _i18n2.default._t('AssetAdmin.DROPZONE_UPLOAD')
        )
      );
    }
  }]);

  return UploadButton;
}(_react.Component);

UploadButton.defaultProps = {
  canEdit: _propTypes2.default.func.isRequired
};

exports.default = UploadButton;

/***/ }),

/***/ "./client/src/components/GalleryToolbar/GalleryToolbar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _BackButton = __webpack_require__("./client/src/components/GalleryToolbar/Buttons/BackButton.js");

var _BackButton2 = _interopRequireDefault(_BackButton);

var _UploadButton = __webpack_require__("./client/src/components/GalleryToolbar/Buttons/UploadButton.js");

var _UploadButton2 = _interopRequireDefault(_UploadButton);

var _AddFolderButton = __webpack_require__("./client/src/components/GalleryToolbar/Buttons/AddFolderButton.js");

var _AddFolderButton2 = _interopRequireDefault(_AddFolderButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GalleryToolbar = function (_Component) {
  _inherits(GalleryToolbar, _Component);

  function GalleryToolbar(props) {
    _classCallCheck(this, GalleryToolbar);

    var _this = _possibleConstructorReturn(this, (GalleryToolbar.__proto__ || Object.getPrototypeOf(GalleryToolbar)).call(this, props));

    _this.handleSelectSort = _this.handleSelectSort.bind(_this);
    _this.handleViewChange = _this.handleViewChange.bind(_this);
    return _this;
  }

  _createClass(GalleryToolbar, [{
    key: 'handleSelectSort',
    value: function handleSelectSort(event) {
      this.props.onSort(event.currentTarget.value);
    }
  }, {
    key: 'handleViewChange',
    value: function handleViewChange(event) {
      var view = event.currentTarget.value;

      this.props.onViewChange(view);
    }
  }, {
    key: 'renderSort',
    value: function renderSort() {
      var _this2 = this;

      if (this.props.view !== 'tile') {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'gallery__sort fieldholder-small' },
        _react2.default.createElement(
          'select',
          {
            className: 'dropdown no-change-track no-chzn',
            tabIndex: '0',
            style: { width: '160px' },
            defaultValue: this.props.sort
          },
          this.props.sorters.map(function (sorter) {
            var label = sorter.label.replace(/^\w|[\s\-]+\w/g, function (c) {
              return c.toUpperCase();
            });
            return _react2.default.createElement(
              'option',
              {
                key: sorter.field + '-' + sorter.direction,
                onClick: _this2.handleSelectSort,
                'data-field': sorter.field,
                'data-direction': sorter.direction,
                value: sorter.field + ',' + sorter.direction
              },
              label
            );
          })
        )
      );
    }
  }, {
    key: 'renderViewChangeButtons',
    value: function renderViewChangeButtons() {
      var _this3 = this;

      var views = ['tile', 'table'];
      return views.map(function (view) {
        var icon = view === 'table' ? 'list' : 'thumbnails';
        var classNames = ['gallery__view-change-button', 'btn btn-secondary', 'btn--icon-sm', 'btn--no-text'];

        if (view === _this3.props.view) {
          return null;
        }
        classNames.push('font-icon-' + icon);
        return _react2.default.createElement('button', {
          id: 'button-view-' + view,
          key: view,
          className: classNames.join(' '),
          type: 'button',
          title: 'Change view gallery/list',
          onClick: _this3.handleViewChange,
          value: view
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          badges = _props.badges,
          children = _props.children,
          folder = _props.folder,
          onMoveFiles = _props.onMoveFiles,
          onOpenFolder = _props.onOpenFolder,
          onCreateFolder = _props.onCreateFolder,
          BackButton = _props.BackButton,
          UploadButton = _props.UploadButton,
          AddFolderButton = _props.AddFolderButton;
      var canEdit = folder.canEdit;


      return _react2.default.createElement(
        'div',
        { className: 'toolbar--content toolbar--space-save' },
        _react2.default.createElement(
          'div',
          { className: 'fill-width' },
          _react2.default.createElement(
            'div',
            { className: 'gallery__btn-toolbar flexbox-area-grow' },
            _react2.default.createElement(
              'div',
              { className: 'btn-toolbar' },
              _react2.default.createElement(BackButton, {
                folder: folder,
                badges: badges,
                onOpenFolder: onOpenFolder,
                onMoveFiles: onMoveFiles
              }),
              _react2.default.createElement(UploadButton, {
                canEdit: canEdit
              }),
              _react2.default.createElement(AddFolderButton, {
                canEdit: canEdit,
                onCreateFolder: onCreateFolder
              }),
              children
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'gallery__state-buttons' },
            this.renderSort(),
            _react2.default.createElement(
              'div',
              { className: 'btn-group', role: 'group', 'aria-label': 'View mode' },
              this.renderViewChangeButtons()
            )
          )
        )
      );
    }
  }]);

  return GalleryToolbar;
}(_react.Component);

GalleryToolbar.propTypes = {
  onMoveFiles: _propTypes2.default.func.isRequired,
  onCreateFolder: _propTypes2.default.func.isRequired,
  onViewChange: _propTypes2.default.func.isRequired,
  onOpenFolder: _propTypes2.default.func.isRequired,
  onSort: _propTypes2.default.func.isRequired,
  folder: _propTypes2.default.shape({
    id: _propTypes2.default.number,
    title: _propTypes2.default.string,
    parentId: _propTypes2.default.number,
    canView: _propTypes2.default.bool,
    canEdit: _propTypes2.default.bool
  }).isRequired,
  view: _propTypes2.default.oneOf(['tile', 'table']),
  sort: _propTypes2.default.string,
  badges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.number,
    message: _propTypes2.default.node,
    status: _propTypes2.default.string
  })),
  BackButton: _propTypes2.default.func,
  UploadButton: _propTypes2.default.func,
  AddFolderButton: _propTypes2.default.func
};

GalleryToolbar.defaultProps = {
  view: 'tile',
  BackButton: _BackButton2.default,
  UploadButton: _UploadButton2.default,
  AddFolderButton: _AddFolderButton2.default
};

function mapStateToProps(state, ownProps) {
  var sort = ownProps.sort;
  var _state$assetAdmin$gal = state.assetAdmin.gallery,
      badges = _state$assetAdmin$gal.badges,
      sorters = _state$assetAdmin$gal.sorters;

  if (sort === '') {
    sort = sorters[0].field + ',' + sorters[0].direction;
  }
  return { badges: badges, sorters: sorters, sort: sort };
}

exports.Component = GalleryToolbar;
exports.default = (0, _reactRedux.connect)(mapStateToProps)(GalleryToolbar);

/***/ }),

/***/ "./client/src/components/PreviewImageField/PreviewImageField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AssetDropzone = __webpack_require__("./client/src/components/AssetDropzone/AssetDropzone.js");

var _AssetDropzone2 = _interopRequireDefault(_AssetDropzone);

var _index = __webpack_require__("./client/src/constants/index.js");

var _index2 = _interopRequireDefault(_index);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(5);

var _reduxForm = __webpack_require__(28);

var _PreviewFieldActions = __webpack_require__("./client/src/state/previewField/PreviewFieldActions.js");

var previewFieldActions = _interopRequireWildcard(_PreviewFieldActions);

var _DataFormat = __webpack_require__(14);

var _getFormState = __webpack_require__(29);

var _getFormState2 = _interopRequireDefault(_getFormState);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _url = __webpack_require__(27);

var _url2 = _interopRequireDefault(_url);

var _qs = __webpack_require__(17);

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PreviewImageField = function (_Component) {
  _inherits(PreviewImageField, _Component);

  function PreviewImageField(props) {
    _classCallCheck(this, PreviewImageField);

    var _this = _possibleConstructorReturn(this, (PreviewImageField.__proto__ || Object.getPrototypeOf(PreviewImageField)).call(this, props));

    _this.handleAddedFile = _this.handleAddedFile.bind(_this);
    _this.handleFailedUpload = _this.handleFailedUpload.bind(_this);
    _this.handleSuccessfulUpload = _this.handleSuccessfulUpload.bind(_this);
    _this.handleSending = _this.handleSending.bind(_this);
    _this.handleUploadProgress = _this.handleUploadProgress.bind(_this);
    _this.handleUploadComplete = _this.handleUploadComplete.bind(_this);
    _this.handleCancelUpload = _this.handleCancelUpload.bind(_this);
    _this.handleRemoveErroredUpload = _this.handleRemoveErroredUpload.bind(_this);
    _this.canFileUpload = _this.canFileUpload.bind(_this);
    _this.updateFormData = _this.updateFormData.bind(_this);
    _this.cacheBustUrl = _this.cacheBustUrl.bind(_this);
    return _this;
  }

  _createClass(PreviewImageField, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.data.url && this.props.data.url !== prevProps.data.url || prevProps.data.version && this.props.data.version !== prevProps.data.version) {
        this.props.actions.previewField.removeFile(prevProps.id);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.actions.previewField.removeFile(this.props.id);
    }
  }, {
    key: 'getDropzoneProps',
    value: function getDropzoneProps() {
      var endpoint = this.props.data.uploadFileEndpoint;
      var name = this.props.name;
      var options = {
        url: endpoint && endpoint.url,
        method: endpoint && endpoint.method,
        paramName: 'Upload',
        clickable: true,
        maxFiles: 1
      };
      var preview = {
        height: _index2.default.THUMBNAIL_HEIGHT,
        width: _index2.default.THUMBNAIL_WIDTH
      };
      var securityID = this.props.securityID;

      var classNames = ['asset-dropzone--button', 'preview-image-field__container', this.props.className, this.props.extraClass];

      return {
        name: name,
        className: classNames.join(' '),
        canUpload: endpoint && this.canEdit(),
        preview: preview,
        folderId: this.props.data.parentid,
        options: options,
        securityID: securityID,
        uploadButton: false,
        onAddedFile: this.handleAddedFile,
        onError: this.handleFailedUpload,
        onSuccess: this.handleSuccessfulUpload,
        onSending: this.handleSending,
        onUploadProgress: this.handleUploadProgress,
        onUploadComplete: this.handleUploadComplete,
        canFileUpload: this.canFileUpload,
        updateFormData: this.updateFormData
      };
    }
  }, {
    key: 'getButtonClasses',
    value: function getButtonClasses(type) {
      return (0, _classnames2.default)(['preview-image-field__toolbar-button--' + type, 'preview-image-field__toolbar-button']);
    }
  }, {
    key: 'updateFormData',
    value: function updateFormData(formData) {
      formData.append('ID', this.props.data.id);
      formData.append('Name', this.props.nameValue);
    }
  }, {
    key: 'handleSending',
    value: function handleSending(file, xhr) {
      this.props.actions.previewField.updateFile(this.props.id, { xhr: xhr });
    }
  }, {
    key: 'handleSuccessfulUpload',
    value: function handleSuccessfulUpload(fileXhr) {
      var json = JSON.parse(fileXhr.xhr.response);

      if (typeof this.props.onAutofill === 'function') {
        this.props.onAutofill('FileFilename', json.Filename);
        this.props.onAutofill('FileHash', json.Hash);
        this.props.onAutofill('FileVariant', json.Variant);

        if (json.Name) {
          this.props.onAutofill(this.props.data.nameField, json.Name);
        }
      }
    }
  }, {
    key: 'handleFailedUpload',
    value: function handleFailedUpload(file, response) {
      this.props.actions.previewField.failUpload(this.props.id, response);
    }
  }, {
    key: 'handleAddedFile',
    value: function handleAddedFile(data) {
      this.props.actions.previewField.addFile(this.props.id, data);
    }
  }, {
    key: 'handleRemoveErroredUpload',
    value: function handleRemoveErroredUpload() {
      if (typeof this.props.onAutofill === 'function') {
        var initial = this.props.data.initialValues;

        this.props.onAutofill('FileFilename', initial.FileFilename);
        this.props.onAutofill('FileHash', initial.FileHash);
        this.props.onAutofill('FileVariant', initial.FileVariant);
      }

      this.props.actions.previewField.removeFile(this.props.id);
    }
  }, {
    key: 'handleCancelUpload',
    value: function handleCancelUpload() {
      if (this.props.upload.xhr) {
        this.props.upload.xhr.abort();
      }
      this.handleRemoveErroredUpload();
    }
  }, {
    key: 'canFileUpload',
    value: function canFileUpload(file) {
      var prevName = this.props.data.initialValues.FileFilename;
      var prevExt = (0, _DataFormat.getFileExtension)(prevName);
      var nextExt = (0, _DataFormat.getFileExtension)(file.name);

      if (!prevExt || prevExt === nextExt) {
        return true;
      }

      var message = _i18n2.default._t('AssetAdmin.CONFIRM_CHANGE_EXTENSION', 'Are you sure you want upload a file with a different extension?');

      return this.props.confirm(message);
    }
  }, {
    key: 'preventDefault',
    value: function preventDefault(e) {
      e.preventDefault();
    }
  }, {
    key: 'canEdit',
    value: function canEdit() {
      return !this.props.readOnly && !this.props.disabled && this.props.data.category !== 'folder';
    }
  }, {
    key: 'handleUploadProgress',
    value: function handleUploadProgress(file, progress) {
      this.props.actions.previewField.updateFile(this.props.id, { progress: progress });
    }
  }, {
    key: 'handleUploadComplete',
    value: function handleUploadComplete(status) {
      this.props.actions.previewField.updateStatus(this.props.id, { status: status });
    }
  }, {
    key: 'preview',
    value: function preview(category, upload, data) {
      if (category && category !== 'image') {
        return _index2.default.DEFAULT_PREVIEW;
      }
      var url = upload.url || data.preview || data.url;
      if (url) {
        var plainUrl = url.startsWith('data:image/');
        return plainUrl ? url : this.cacheBustUrl(url, data.version);
      }

      return null;
    }
  }, {
    key: 'cacheBustUrl',
    value: function cacheBustUrl(url) {
      var versionId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var vid = versionId || this.props.data.version;
      if (this.props.bustCache === false || !vid) {
        return url;
      }

      var parsedUrl = _url2.default.parse(url);
      var parsedQs = _extends({}, _qs2.default.parse(parsedUrl.query), { vid: vid });
      return _url2.default.format(_extends({}, parsedUrl, { search: _qs2.default.stringify(parsedQs) }));
    }
  }, {
    key: 'renderImage',
    value: function renderImage() {
      var _props = this.props,
          data = _props.data,
          upload = _props.upload;

      if (!data.mock && !data.exists && !upload.url) {
        return _react2.default.createElement(
          'div',
          { className: 'editor__file-preview-message--file-missing' },
          _i18n2.default._t('AssetAdmin.FILE_MISSING', 'File cannot be found')
        );
      }

      var category = upload.category,
          progress = upload.progress,
          message = upload.message;

      var errors = upload.errors ? upload.errors[0] : null;
      var status = upload.status ? upload.status : null;
      var preview = this.preview(category, upload, data);
      var image = _react2.default.createElement('img', { alt: 'preview', src: preview, className: 'editor__thumbnail' });
      var linkedImage = data.url && !progress ? _react2.default.createElement(
        'a',
        {
          className: 'editor__file-preview-link',
          href: this.cacheBustUrl(data.url),
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        image
      ) : null;
      var progressBar = progress > 0 && progress < 100 ? _react2.default.createElement(
        'div',
        { className: 'preview-image-field__progress' },
        _react2.default.createElement('div', { className: 'preview-image-field__progress-bar', style: { width: progress + '%' } })
      ) : null;
      var messageBox = null;

      if (errors || status === 'error') {
        var errorMessage = errors && errors.value ? errors.value : _i18n2.default._t('AssetAdmin.DROPZONE_RESPONSE_ERROR', 'Server responded with an error.');

        var errorType = errors && errors.type ? errors.type : 'error';

        messageBox = _react2.default.createElement(
          'div',
          { className: 'preview-image-field__message preview-image-field__message--' + errorType },
          errorMessage
        );
      } else if (message) {
        messageBox = _react2.default.createElement(
          'div',
          { className: 'preview-image-field__message preview-image-field__message--' + message.type },
          message.value
        );
      } else if (progress === 100 && status === 'success') {
        messageBox = _react2.default.createElement(
          'div',
          { className: 'preview-image-field__message preview-image-field__message--success' },
          _i18n2.default._t('AssetAdmin.REPlACE_FILE_SUCCESS', 'Upload successful, the file will be replaced when you Save.'),
          (progress || message) && _react2.default.createElement(
            'button',
            {
              onClick: this.handleCancelUpload,
              className: 'preview-image-field__message-button btn btn-outline-light',
              type: 'button'
            },
            _i18n2.default._t('AssetAdmin.REPLACE_FILE_UNDO', 'Undo')
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'editor__thumbnail-container' },
        linkedImage || image,
        progressBar,
        messageBox
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var dropzoneProps = this.getDropzoneProps();

      if (this.canEdit()) {
        return _react2.default.createElement(
          _AssetDropzone2.default,
          dropzoneProps,
          this.renderImage()
        );
      }
      var classNames = ['preview-image-field__container', this.props.className, this.props.extraClass];

      return _react2.default.createElement(
        'div',
        { className: classNames.join(' ') },
        this.renderImage()
      );
    }
  }]);

  return PreviewImageField;
}(_react.Component);

PreviewImageField.propTypes = {
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string,
  className: _propTypes2.default.string,
  extraClass: _propTypes2.default.string,
  readOnly: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  bustCache: _propTypes2.default.bool,
  onAutofill: _propTypes2.default.func,
  formid: _propTypes2.default.string,
  nameValue: _propTypes2.default.string,
  data: _propTypes2.default.shape({
    id: _propTypes2.default.number,
    parentid: _propTypes2.default.number,
    version: _propTypes2.default.number,
    url: _propTypes2.default.string,
    mock: _propTypes2.default.bool,
    exists: _propTypes2.default.bool,
    preview: _propTypes2.default.string,
    category: _propTypes2.default.string,
    nameField: _propTypes2.default.string,
    uploadFileEndpoint: _propTypes2.default.shape({
      url: _propTypes2.default.string.isRequired,
      method: _propTypes2.default.string.isRequired,
      payloadFormat: _propTypes2.default.string
    }),
    initialValues: _propTypes2.default.object
  }).isRequired,
  upload: _propTypes2.default.shape({
    url: _propTypes2.default.string,
    progress: _propTypes2.default.number,
    xhr: _propTypes2.default.object,
    category: _propTypes2.default.string,
    message: _propTypes2.default.shape({
      type: _propTypes2.default.string.isRequired,
      value: _propTypes2.default.string.isRequired
    }),
    status: _propTypes2.default.string
  }),
  actions: _propTypes2.default.object,
  securityID: _propTypes2.default.string,
  confirm: _propTypes2.default.func
};

PreviewImageField.defaultProps = {
  extraClass: '',
  className: '',
  data: {},
  upload: {},

  confirm: function confirm(msg) {
    return window.confirm(msg);
  },
  bustCache: true
};

function mapStateToProps(state, ownProps) {
  var securityID = state.config.SecurityID;
  var id = ownProps.id;
  var upload = state.assetAdmin.previewField[id] || {};
  var selector = (0, _reduxForm.formValueSelector)(ownProps.formid, _getFormState2.default);
  var sectionConfigKey = 'SilverStripe\\AssetAdmin\\Controller\\AssetAdmin';

  var _state$config$section = state.config.sections.find(function (section) {
    return section.name === sectionConfigKey;
  }),
      bustCache = _state$config$section.bustCache;

  return {
    securityID: securityID,
    upload: upload,
    nameValue: selector(state, 'Name'),
    bustCache: bustCache
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      previewField: (0, _redux.bindActionCreators)(previewFieldActions, dispatch)
    }
  };
}

exports.Component = PreviewImageField;
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PreviewImageField);

/***/ }),

/***/ "./client/src/components/ProportionConstraintField/ImageSizePresetList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(22);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var srText = function srText(text) {
  return _i18n2.default.inject(_i18n2.default._t('AssetAdmin.SET_IMAGE_SIZE_TO', 'Set image size to "{preset}"'), { preset: text });
};

var PresetButton = function PresetButton(_ref) {
  var onSelect = _ref.onSelect,
      currentWidth = _ref.currentWidth,
      originalWidth = _ref.originalWidth,
      width = _ref.width,
      text = _ref.text;
  return _react2.default.createElement(
    _reactstrap.Button,
    {
      color: 'link',
      size: 'sm',
      onClick: function onClick() {
        return onSelect(width || originalWidth);
      },
      disabled: originalWidth < width || currentWidth === (width || originalWidth)
    },
    _react2.default.createElement(
      'span',
      { className: 'sr-only' },
      srText(text)
    ),
    _react2.default.createElement(
      'span',
      { 'aria-hidden': 'true' },
      text
    )
  );
};

var ImageSizePresetList = function ImageSizePresetList(_ref2) {
  var imageSizePresets = _ref2.imageSizePresets,
      btnProps = _objectWithoutProperties(_ref2, ['imageSizePresets']);

  return imageSizePresets ? _react2.default.createElement(
    'ul',
    { className: 'image-size-preset-list' },
    imageSizePresets.map(function (presetProps) {
      return _react2.default.createElement(
        'li',
        { key: presetProps.text, className: 'image-size-preset-list__list-item' },
        _react2.default.createElement(PresetButton, _extends({}, presetProps, btnProps))
      );
    })
  ) : null;
};

ImageSizePresetList.propTypes = {
  onSelect: _propTypes2.default.func,
  imageSizePresets: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    text: _propTypes2.default.string,
    width: _propTypes2.default.number
  })),
  currentWidth: _propTypes2.default.number,
  originalWidth: _propTypes2.default.number.isRequired
};

exports.default = ImageSizePresetList;

/***/ }),

/***/ "./client/src/components/ProportionConstraintField/ProportionConstraintField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Injector = __webpack_require__(3);

var _ImageSizePresetList = __webpack_require__("./client/src/components/ProportionConstraintField/ImageSizePresetList.js");

var _ImageSizePresetList2 = _interopRequireDefault(_ImageSizePresetList);

var _reduxForm = __webpack_require__(28);

var _getFormState = __webpack_require__(29);

var _getFormState2 = _interopRequireDefault(_getFormState);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProportionConstraintField = function (_Component) {
  _inherits(ProportionConstraintField, _Component);

  function ProportionConstraintField(props) {
    _classCallCheck(this, ProportionConstraintField);

    var _this = _possibleConstructorReturn(this, (ProportionConstraintField.__proto__ || Object.getPrototypeOf(ProportionConstraintField)).call(this, props));

    var childrenArray = _react.Children.toArray(props.children);

    if (childrenArray.length !== 2) {
      throw new Error('ProportionConstraintField must be passed two children -- one field for each value');
    }

    _this.handlePresetSelect = _this.handlePresetSelect.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);

    _this.state = { hasFocus: false };
    return _this;
  }

  _createClass(ProportionConstraintField, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.componentDidUpdate(this.props);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(newProps) {
      if (!this.state.hasFocus) {
        var width = newProps.current.width;

        var value = parseInt(width, 10);
        if (!value || value <= 0) {
          this.resetDimensions();
        }
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(childIndex, e, newValue) {
      var value = parseInt(newValue || e.target && e.target.value, 10);
      if (value && value > 0) {
        this.syncFields(childIndex, value);
      }
    }
  }, {
    key: 'syncFields',
    value: function syncFields(childIndex, newValue) {
      var _props = this.props,
          children = _props.children,
          active = _props.active,
          onAutofill = _props.onAutofill,
          ratio = _props.data.ratio;

      var peerIndex = childIndex === 0 ? 1 : 0;

      var currentName = children[childIndex].props.name;
      var peerName = children[peerIndex].props.name;
      var multiplier = childIndex === 0 ? 1 / ratio : ratio;

      onAutofill(currentName, newValue);

      if (active) {
        onAutofill(peerName, Math.round(newValue * multiplier));
      }
    }
  }, {
    key: 'handlePresetSelect',
    value: function handlePresetSelect(newWidth) {
      this.syncFields(0, newWidth);

      var key = this.props.children[0].key;

      var fieldEl = document.getElementById(key);
      if (fieldEl) {
        fieldEl.focus();
      }
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(key, e) {
      this.setState({ hasFocus: false });

      var newValue = parseInt(e && e.target && e.target.value, 10);
      if (!newValue || newValue <= 0) {
        e.preventDefault();
        this.resetDimensions();
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      this.setState({ hasFocus: true });
    }
  }, {
    key: 'defaultWidth',
    value: function defaultWidth() {
      var _props2 = this.props,
          imageSizePresets = _props2.imageSizePresets,
          originalWidth = _props2.data.originalWidth;

      var defaultPreset = imageSizePresets && imageSizePresets.find(function (preset) {
        return preset.default;
      });
      var defaultWidth = defaultPreset && defaultPreset.width || originalWidth || 600;

      return originalWidth && originalWidth < defaultWidth ? originalWidth : defaultWidth;
    }
  }, {
    key: 'resetDimensions',
    value: function resetDimensions() {
      var defaultValue = this.defaultWidth();
      this.syncFields(0, defaultValue);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          FieldGroup = _props3.FieldGroup,
          _props3$data = _props3.data,
          originalWidth = _props3$data.originalWidth,
          isRemoteFile = _props3$data.isRemoteFile,
          currentWidth = _props3.current.width,
          imageSizePresets = _props3.imageSizePresets;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          FieldGroup,
          _extends({ smallholder: false }, this.props),
          this.props.children.map(function (child, key) {
            return (0, _react.cloneElement)(child, {
              onChange: function onChange(e, newValue) {
                return _this2.handleChange(key, e, newValue);
              },
              onBlur: function onBlur(e) {
                return _this2.handleBlur(key, e);
              },
              onFocus: function onFocus() {
                return _this2.handleFocus();
              },
              key: key
            }, child.props.children);
          }),
          !isRemoteFile && _react2.default.createElement(_ImageSizePresetList2.default, {
            originalWidth: parseInt(originalWidth, 10),
            currentWidth: currentWidth,
            imageSizePresets: imageSizePresets,
            onSelect: this.handlePresetSelect
          })
        )
      );
    }
  }]);

  return ProportionConstraintField;
}(_react.Component);

ProportionConstraintField.propTypes = {
  children: _propTypes2.default.array,
  onAutofill: _propTypes2.default.func,
  active: _propTypes2.default.bool,
  data: _propTypes2.default.shape({
    ratio: _propTypes2.default.number.isRequired,
    isRemoteFile: _propTypes2.default.bool,
    originalWidth: _propTypes2.default.number,
    originalHeight: _propTypes2.default.number
  }),
  current: _propTypes2.default.shape({
    width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
  }).isRequired,
  FieldGroup: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]).isRequired,
  imageSizePresets: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    width: _propTypes2.default.number,
    text: _propTypes2.default.string,
    default: _propTypes2.default.bool
  }))
};

ProportionConstraintField.defaultProps = {
  active: true
};

function mapStateToProps(state, _ref) {
  var formid = _ref.formid;

  var selector = (0, _reduxForm.formValueSelector)(formid, _getFormState2.default);

  var currentWidth = selector(state, 'Width');
  var currentHeight = selector(state, 'Height');

  return {
    current: {
      width: currentWidth ? parseInt(currentWidth, 10) : undefined,
      heigth: currentHeight ? parseInt(currentHeight, 10) : undefined
    },
    imageSizePresets: state.assetAdmin.modal.imageSizePresets
  };
}

exports.Component = ProportionConstraintField;
exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps), (0, _Injector.inject)(['FieldGroup']))(ProportionConstraintField);

/***/ }),

/***/ "./client/src/components/UploadField/UploadField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectedUploadField = exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(5);

var _Injector = __webpack_require__(3);

var _index = __webpack_require__("./client/src/constants/index.js");

var _index2 = _interopRequireDefault(_index);

var _FieldHolder = __webpack_require__(34);

var _FieldHolder2 = _interopRequireDefault(_FieldHolder);

var _fileShape = __webpack_require__("./client/src/lib/fileShape.js");

var _fileShape2 = _interopRequireDefault(_fileShape);

var _getStatusCodeMessage = __webpack_require__("./client/src/lib/getStatusCodeMessage.js");

var _getStatusCodeMessage2 = _interopRequireDefault(_getStatusCodeMessage);

var _UploadFieldActions = __webpack_require__("./client/src/state/uploadField/UploadFieldActions.js");

var uploadFieldActions = _interopRequireWildcard(_UploadFieldActions);

var _ModalActions = __webpack_require__("./client/src/state/modal/ModalActions.js");

var modalActions = _interopRequireWildcard(_ModalActions);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _md = __webpack_require__("./node_modules/crypto-js/md5.js");

var _md2 = _interopRequireDefault(_md);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function compareValues(left, right) {
  if (left.length !== right.length) {
    return true;
  }

  for (var i = 0; i < left.length; i++) {
    if (left[i].id !== right[i].id) {
      return true;
    }
  }
  return false;
}

var UploadField = function (_Component) {
  _inherits(UploadField, _Component);

  function UploadField(props) {
    _classCallCheck(this, UploadField);

    var _this = _possibleConstructorReturn(this, (UploadField.__proto__ || Object.getPrototypeOf(UploadField)).call(this, props));

    _this.getMaxFiles = _this.getMaxFiles.bind(_this);
    _this.getFolderId = _this.getFolderId.bind(_this);
    _this.renderChild = _this.renderChild.bind(_this);
    _this.handleAddShow = _this.handleAddShow.bind(_this);
    _this.handleHide = _this.handleHide.bind(_this);
    _this.handleAddInsert = _this.handleAddInsert.bind(_this);
    _this.handleInsertMany = _this.handleInsertMany.bind(_this);
    _this.handleAddedFile = _this.handleAddedFile.bind(_this);
    _this.handleSending = _this.handleSending.bind(_this);
    _this.handleUploadProgress = _this.handleUploadProgress.bind(_this);
    _this.handleFailedUpload = _this.handleFailedUpload.bind(_this);
    _this.handleSuccessfulUpload = _this.handleSuccessfulUpload.bind(_this);
    _this.handleItemRemove = _this.handleItemRemove.bind(_this);
    _this.handleReplaceShow = _this.handleReplaceShow.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleReplace = _this.handleReplace.bind(_this);
    _this.canEdit = _this.canEdit.bind(_this);
    _this.canAttach = _this.canAttach.bind(_this);
    _this.canUpload = _this.canUpload.bind(_this);

    _this.state = {
      selecting: false,
      selectingItem: null
    };
    return _this;
  }

  _createClass(UploadField, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          id = _props.id,
          formSchemaFilesHash = _props.formSchemaFilesHash,
          data = _props.data,
          actions = _props.actions,
          files = _props.files;

      var newFormSchemaFilesHash = (0, _md2.default)(JSON.stringify(data.files)).toString();

      if (formSchemaFilesHash !== newFormSchemaFilesHash) {
        actions.uploadField.setFormSchemaFilesHash(id, newFormSchemaFilesHash);
        actions.uploadField.setFiles(id, data.files);
        return;
      }

      actions.uploadField.setFiles(id, files);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var existingFiles = this.props.files || [];
      var newFiles = nextProps.files || [];
      var filesChanged = compareValues(existingFiles, newFiles);

      if (filesChanged) {
        this.handleChange(null, nextProps);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          id = _props2.id,
          formSchemaFilesHash = _props2.formSchemaFilesHash,
          data = _props2.data,
          files = _props2.files,
          value = _props2.value.Files,
          _props2$actions$uploa = _props2.actions.uploadField,
          setFormSchemaFilesHash = _props2$actions$uploa.setFormSchemaFilesHash,
          setFiles = _props2$actions$uploa.setFiles;


      var newFormSchemaFilesHash = (0, _md2.default)(JSON.stringify(data.files)).toString();

      if (formSchemaFilesHash !== newFormSchemaFilesHash) {
        setFormSchemaFilesHash(id, newFormSchemaFilesHash);
        setFiles(id, data.files);
        return;
      }

      var prevValue = prevProps.value.Files;


      if (value.length === prevValue.length && value.filter(function (item) {
        return !prevValue.includes(item);
      }).length === 0) {
        return;
      }

      var fileIds = files.map(function (file) {
        return file.id;
      });

      if (fileIds.length === value.length && fileIds.filter(function (fileId) {
        return !value.includes(fileId);
      }).length === 0) {
        return;
      }

      setFiles(id, data.files);
    }
  }, {
    key: 'getMaxFiles',
    value: function getMaxFiles() {
      var maxFiles = this.props.data.multi ? this.props.data.maxFiles : 1;
      if (maxFiles === null || typeof maxFiles === 'undefined') {
        return null;
      }

      var filesCount = this.props.files.filter(function (file) {
        return file.id > 0 && (!file.message || file.message.type !== 'error');
      }).length;

      var allowed = Math.max(maxFiles - filesCount, 0);

      return allowed;
    }
  }, {
    key: 'getMaxFilesize',
    value: function getMaxFilesize() {
      return this.props.data.maxFilesize || null;
    }
  }, {
    key: 'getFolderId',
    value: function getFolderId() {
      var selectingItem = this.state.selectingItem;


      if (selectingItem && (typeof selectingItem === 'undefined' ? 'undefined' : _typeof(selectingItem)) === 'object') {
        return selectingItem.parent.id;
      }

      return this.props.data.parentid || 0;
    }
  }, {
    key: 'handleAddedFile',
    value: function handleAddedFile(data) {
      var file = _extends({}, data, { uploaded: true });
      this.props.actions.uploadField.addFile(this.props.id, file);
    }
  }, {
    key: 'handleSending',
    value: function handleSending(file, xhr) {
      this.props.actions.uploadField.updateQueuedFile(this.props.id, file._queuedId, { xhr: xhr });
    }
  }, {
    key: 'handleUploadProgress',
    value: function handleUploadProgress(file, progress) {
      this.props.actions.uploadField.updateQueuedFile(this.props.id, file._queuedId, { progress: progress });
    }
  }, {
    key: 'handleSuccessfulUpload',
    value: function handleSuccessfulUpload(file) {
      var json = JSON.parse(file.xhr.response);

      if (typeof json[0].error !== 'undefined') {
        this.handleFailedUpload(file);
        return;
      }

      this.props.actions.uploadField.succeedUpload(this.props.id, file._queuedId, json[0]);
    }
  }, {
    key: 'handleFailedUpload',
    value: function handleFailedUpload(file, response) {
      var statusCodeMessage = file.xhr && file.xhr.status ? (0, _getStatusCodeMessage2.default)(file.xhr.status) : '';
      this.props.actions.uploadField.failUpload(this.props.id, file._queuedId, response, statusCodeMessage);
    }
  }, {
    key: 'handleItemRemove',
    value: function handleItemRemove(event, item) {
      this.props.actions.uploadField.removeFile(this.props.id, item);
    }
  }, {
    key: 'handleReplaceShow',
    value: function handleReplaceShow(event, selectingItem) {
      this.props.actions.modal.initFormStack('select', 'admin');
      this.setState({
        selecting: true,
        selectingItem: selectingItem
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;

      if (typeof props.onChange === 'function') {
        var fileIds = props.files.filter(function (file) {
          return file.id;
        }).map(function (file) {
          return file.id;
        });
        var newValue = { Files: fileIds };
        props.onChange(event, { id: props.id, value: newValue });
      }
    }
  }, {
    key: 'handleUploadButton',
    value: function handleUploadButton(event) {
      event.preventDefault();
    }
  }, {
    key: 'handleAddShow',
    value: function handleAddShow(event) {
      event.preventDefault();
      this.props.actions.modal.initFormStack('select', 'admin');
      this.setState({
        selecting: true,
        selectingItem: null
      });
    }
  }, {
    key: 'handleHide',
    value: function handleHide() {
      this.props.actions.modal.reset();
      this.setState({
        selecting: false,
        selectingItem: null
      });
    }
  }, {
    key: 'handleAddInsert',
    value: function handleAddInsert(event, data, file) {
      this.props.actions.uploadField.addFile(this.props.id, file);
      this.handleHide();

      return Promise.resolve({});
    }
  }, {
    key: 'handleInsertMany',
    value: function handleInsertMany(event, files) {
      var _this2 = this;

      var selectingItem = this.state.selectingItem;

      if (selectingItem) {
        this.handleReplace(event, null, files[0]);
        return;
      }
      files.forEach(function (file) {
        _this2.handleAddInsert(event, null, file);
      });
    }
  }, {
    key: 'handleReplace',
    value: function handleReplace(event, data, file) {
      var selectingItem = this.state.selectingItem;
      var _props3 = this.props,
          id = _props3.id,
          _props3$actions$uploa = _props3.actions.uploadField,
          addFile = _props3$actions$uploa.addFile,
          removeFile = _props3$actions$uploa.removeFile;


      if (!selectingItem) {
        throw new Error('Tried to replace a file when none was selected.');
      }
      removeFile(id, selectingItem);
      addFile(id, file);
      this.handleHide();

      return Promise.resolve({});
    }
  }, {
    key: 'canEdit',
    value: function canEdit() {
      return !this.props.disabled && !this.props.readOnly && (this.props.data.canUpload || this.props.data.canAttach);
    }
  }, {
    key: 'canUpload',
    value: function canUpload() {
      return this.canEdit() && this.props.data.canUpload;
    }
  }, {
    key: 'canAttach',
    value: function canAttach() {
      return this.canEdit() && this.props.data.canAttach;
    }
  }, {
    key: 'renderDropzone',
    value: function renderDropzone() {
      var AssetDropzone = this.props.AssetDropzone;

      if (!this.props.data.createFileEndpoint) {
        return null;
      }
      var dimensions = {
        height: _index2.default.SMALL_THUMBNAIL_HEIGHT,
        width: _index2.default.SMALL_THUMBNAIL_WIDTH
      };
      var maxFiles = this.getMaxFiles();
      var maxFilesize = this.getMaxFilesize();

      var dropzoneOptions = {
        url: this.props.data.createFileEndpoint.url,
        method: this.props.data.createFileEndpoint.method,
        paramName: 'Upload',
        maxFiles: maxFiles,
        maxFilesize: maxFilesize,
        thumbnailWidth: _index2.default.SMALL_THUMBNAIL_WIDTH,
        thumbnailHeight: _index2.default.SMALL_THUMBNAIL_HEIGHT
      };

      var classNames = ['uploadfield__dropzone'];
      if (maxFiles === 0) {
        classNames.push('uploadfield__dropzone--hidden');
      }

      if (!this.canEdit()) {
        if (this.props.files.length) {
          return null;
        }
        return _react2.default.createElement(
          'p',
          null,
          _i18n2.default._t('AssetAdmin.EMPTY', 'No files')
        );
      }

      var securityID = this.props.securityId;
      var options = [];
      if (this.canUpload()) {
        options.push(_react2.default.createElement(
          'button',
          {
            key: 'uploadbutton',
            type: 'button',
            onClick: this.handleUploadButton,
            className: 'uploadfield__upload-button'
          },
          _i18n2.default._t('AssetAdmin.UPLOADFIELD_UPLOAD_NEW', 'Upload new')
        ));
      }
      if (this.canAttach()) {
        if (options.length) {
          options.push(_react2.default.createElement(
            'span',
            { key: 'uploadjoin', className: 'uploadfield__join' },
            _i18n2.default._t('AssetAdmin.OR', 'or')
          ));
        }
        options.push(_react2.default.createElement(
          'button',
          {
            key: 'attachbutton',
            type: 'button',
            onClick: this.handleAddShow,
            className: 'uploadfield__add-button'
          },
          _i18n2.default._t('AssetAdmin.UPLOADFIELD_CHOOSE_EXISTING', 'Choose existing')
        ));
      }

      return _react2.default.createElement(
        AssetDropzone,
        {
          name: this.props.name,
          canUpload: this.canUpload(),
          uploadButton: false,
          uploadSelector: '.uploadfield__upload-button, .uploadfield__backdrop',
          folderId: this.props.data.parentid,
          onAddedFile: this.handleAddedFile,
          onError: this.handleFailedUpload,
          onSuccess: this.handleSuccessfulUpload,
          onSending: this.handleSending,
          onUploadProgress: this.handleUploadProgress,
          preview: dimensions,
          options: dropzoneOptions,
          securityID: securityID,
          className: classNames.join(' ')
        },
        _react2.default.createElement('div', { className: 'uploadfield__backdrop' }),
        _react2.default.createElement(
          'span',
          { className: 'uploadfield__droptext' },
          options
        )
      );
    }
  }, {
    key: 'renderModal',
    value: function renderModal() {
      var InsertMediaModal = this.props.InsertMediaModal;
      var _state = this.state,
          selecting = _state.selecting,
          selectingItem = _state.selectingItem;

      var maxFiles = this.getMaxFiles();
      var folderId = this.getFolderId();

      return _react2.default.createElement(InsertMediaModal, {
        title: false,
        isOpen: selecting,
        onInsert: selectingItem ? this.handleReplace : this.handleAddInsert,
        onClosed: this.handleHide,
        onInsertMany: this.handleInsertMany,
        maxFiles: selectingItem ? 1 : maxFiles,
        type: 'select',
        bodyClassName: 'modal__dialog',
        className: 'insert-media-react__dialog-wrapper',
        fileAttributes: selectingItem ? { ID: selectingItem.id } : null,
        folderId: folderId
      });
    }
  }, {
    key: 'renderChild',
    value: function renderChild(item, index) {
      var UploadFieldItem = this.props.UploadFieldItem;

      var draftProps = {
        key: item.id ? 'file-' + item.id : 'queued-' + item.queuedId,
        item: item,
        name: this.props.name,
        onRemove: this.handleItemRemove,
        canEdit: this.canEdit(),
        onView: this.handleReplaceShow
      };
      var itemProps = this.props.getItemProps(draftProps, index, this.props);

      return _react2.default.createElement(UploadFieldItem, itemProps);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'uploadfield' },
        this.renderDropzone(),
        this.props.files.map(this.renderChild),
        this.renderModal()
      );
    }
  }]);

  return UploadField;
}(_react.Component);

UploadField.propTypes = {
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.shape({
    Files: _propTypes2.default.arrayOf(_propTypes2.default.number)
  }),
  files: _propTypes2.default.arrayOf(_fileShape2.default),
  formSchemaFilesHash: _propTypes2.default.string,
  readOnly: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  data: _propTypes2.default.shape({
    files: _propTypes2.default.arrayOf(_fileShape2.default),
    createFileEndpoint: _propTypes2.default.shape({
      url: _propTypes2.default.string.isRequired,
      method: _propTypes2.default.string.isRequired,
      payloadFormat: _propTypes2.default.string.isRequired
    }),
    multi: _propTypes2.default.bool,
    parentid: _propTypes2.default.number,
    canUpload: _propTypes2.default.bool,
    canAttach: _propTypes2.default.bool,
    maxFiles: _propTypes2.default.number
  }),
  UploadFieldItem: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  AssetDropzone: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  InsertMediaModal: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  getItemProps: _propTypes2.default.func
};

UploadField.defaultProps = {
  value: { Files: [] },
  className: '',
  getItemProps: function getItemProps(props) {
    return props;
  }
};

function mapStateToProps(state, ownprops) {
  var id = ownprops.id;
  var files = [];
  var formSchemaFilesHash = null;
  if (state.assetAdmin && state.assetAdmin.uploadField && state.assetAdmin.uploadField.fields && state.assetAdmin.uploadField.fields[id]) {
    files = state.assetAdmin.uploadField.fields[id].files || [];
    formSchemaFilesHash = state.assetAdmin.uploadField.fields[id].formSchemaFilesHash || null;
  }
  var securityId = state.config.SecurityID;
  return { files: files, securityId: securityId, formSchemaFilesHash: formSchemaFilesHash };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      uploadField: (0, _redux.bindActionCreators)(uploadFieldActions, dispatch),
      modal: (0, _redux.bindActionCreators)(modalActions, dispatch)
    }
  };
}

var ConnectedUploadField = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UploadField);

exports.Component = UploadField;
exports.ConnectedUploadField = ConnectedUploadField;
exports.default = (0, _redux.compose)((0, _Injector.inject)(['UploadFieldItem', 'AssetDropzone', 'InsertMediaModal']), _FieldHolder2.default)(ConnectedUploadField);

/***/ }),

/***/ "./client/src/components/UploadField/UploadFieldItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__("./node_modules/constants-browserify/constants.json");

var _constants2 = _interopRequireDefault(_constants);

var _fileShape = __webpack_require__("./client/src/lib/fileShape.js");

var _fileShape2 = _interopRequireDefault(_fileShape);

var _DataFormat = __webpack_require__(14);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FileStatusIcon = __webpack_require__(19);

var _FileStatusIcon2 = _interopRequireDefault(_FileStatusIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UploadFieldItem = function (_Component) {
  _inherits(UploadFieldItem, _Component);

  function UploadFieldItem(props) {
    _classCallCheck(this, UploadFieldItem);

    var _this = _possibleConstructorReturn(this, (UploadFieldItem.__proto__ || Object.getPrototypeOf(UploadFieldItem)).call(this, props));

    _this.handleRemove = _this.handleRemove.bind(_this);
    _this.handleItemClick = _this.handleItemClick.bind(_this);
    _this.handleView = _this.handleView.bind(_this);
    return _this;
  }

  _createClass(UploadFieldItem, [{
    key: 'getThumbnailStyles',
    value: function getThumbnailStyles() {
      if (this.isImage() && (this.exists() || this.uploading())) {
        var thumbnail = this.props.item.smallThumbnail || this.props.item.url || '';
        return {
          backgroundImage: 'url(' + thumbnail + ')'
        };
      }

      return {};
    }
  }, {
    key: 'getThumbnailClassNames',
    value: function getThumbnailClassNames() {
      var thumbnailClassNames = ['uploadfield-item__thumbnail'];

      if (this.isImageSmallerThanThumbnail()) {
        thumbnailClassNames.push('uploadfield-item__thumbnail--small');
      }

      return thumbnailClassNames.join(' ');
    }
  }, {
    key: 'getItemClassNames',
    value: function getItemClassNames() {
      var category = this.props.item.category || 'none';
      var itemClassNames = ['fill-width', 'uploadfield-item', 'uploadfield-item--' + category];

      if (this.missing()) {
        itemClassNames.push('uploadfield-item--missing');
      }

      if (this.hasError()) {
        itemClassNames.push('uploadfield-item--error');
      }

      return itemClassNames.join(' ');
    }
  }, {
    key: 'hasError',
    value: function hasError() {
      if (this.props.item.message) {
        return this.props.item.message.type === 'error';
      }

      return false;
    }
  }, {
    key: 'isImage',
    value: function isImage() {
      return this.props.item.category === 'image';
    }
  }, {
    key: 'exists',
    value: function exists() {
      return this.props.item.exists;
    }
  }, {
    key: 'uploading',
    value: function uploading() {
      return this.props.item.queuedId && !this.saved();
    }
  }, {
    key: 'complete',
    value: function complete() {
      return this.props.item.queuedId && this.saved();
    }
  }, {
    key: 'saved',
    value: function saved() {
      return this.props.item.id > 0;
    }
  }, {
    key: 'missing',
    value: function missing() {
      return !this.exists() && this.saved();
    }
  }, {
    key: 'isImageSmallerThanThumbnail',
    value: function isImageSmallerThanThumbnail() {
      if (!this.isImage() || this.missing()) {
        return false;
      }
      var width = this.props.item.width;
      var height = this.props.item.height;

      return height && width && height < _constants2.default.SMALL_THUMBNAIL_HEIGHT && width < _constants2.default.SMALL_THUMBNAIL_WIDTH;
    }
  }, {
    key: 'handleRemove',
    value: function handleRemove(event) {
      event.preventDefault();
      if (this.props.onRemove) {
        this.props.onRemove(event, this.props.item);
      }
    }
  }, {
    key: 'handleView',
    value: function handleView(event) {
      event.preventDefault();
      if (this.props.onView) {
        this.props.onView(event, this.props.item);
      }
    }
  }, {
    key: 'handleItemClick',
    value: function handleItemClick(event) {
      event.preventDefault();
      if (this.props.onItemClick) {
        this.props.onItemClick(event, this.props.item);
      }
    }
  }, {
    key: 'renderStatus',
    value: function renderStatus() {
      if (this.props.item.draft) {
        return _react2.default.createElement(
          'span',
          { className: 'uploadfield-item__status' },
          _i18n2.default._t('File.DRAFT', 'Draft')
        );
      } else if (this.props.item.modified) {
        return _react2.default.createElement(
          'span',
          { className: 'uploadfield-item__status' },
          _i18n2.default._t('File.MODIFIED', 'Modified')
        );
      }
      return null;
    }
  }, {
    key: 'renderErrorMessage',
    value: function renderErrorMessage() {
      var message = null;

      if (this.hasError()) {
        message = this.props.item.message.value;
      } else if (this.missing()) {
        message = _i18n2.default._t('AssetAdmin.FILE_MISSING', 'File cannot be found');
      }

      if (message !== null) {
        return _react2.default.createElement(
          'div',
          { className: 'uploadfield-item__error-message', title: message },
          message
        );
      }

      return null;
    }
  }, {
    key: 'renderProgressBar',
    value: function renderProgressBar() {
      var progressBarProps = {
        className: 'uploadfield-item__progress-bar',
        style: {
          width: this.props.item.progress + '%'
        }
      };

      if (!this.hasError() && this.props.item.queuedId) {
        if (this.complete()) {
          return _react2.default.createElement('div', { className: 'uploadfield-item__complete-icon' });
        }
        return _react2.default.createElement(
          'div',
          { className: 'uploadfield-item__upload-progress' },
          _react2.default.createElement('div', progressBarProps)
        );
      }

      return null;
    }
  }, {
    key: 'renderRemoveButton',
    value: function renderRemoveButton() {
      if (!this.props.canEdit) {
        return null;
      }
      var classes = ['btn', 'uploadfield-item__remove-btn', 'btn-secondary', 'btn--no-text', 'font-icon-cancel', 'btn--icon-md'].join(' ');
      return _react2.default.createElement('button', {
        className: classes,
        onClick: this.handleRemove
      });
    }
  }, {
    key: 'renderViewButton',
    value: function renderViewButton() {
      if (!this.props.canEdit || !this.props.item.id) {
        return null;
      }
      var classes = ['btn', 'uploadfield-item__view-btn', 'btn-secondary', 'btn--no-text', 'font-icon-eye', 'btn--icon-md'].join(' ');
      return _react2.default.createElement('button', {
        className: classes,
        onClick: this.handleView
      });
    }
  }, {
    key: 'renderRestrictedAccess',
    value: function renderRestrictedAccess(item) {
      var id = item.id,
          hasRestrictedAccess = item.hasRestrictedAccess;

      var attrs = {
        fileID: id,
        placement: 'top',
        hasRestrictedAccess: hasRestrictedAccess
      };
      return _react2.default.createElement(_FileStatusIcon2.default, attrs);
    }
  }, {
    key: 'renderTrackedFormUpload',
    value: function renderTrackedFormUpload(item) {
      var id = item.id,
          isTrackedFormUpload = item.isTrackedFormUpload,
          hasRestrictedAccess = item.hasRestrictedAccess;

      var attrs = {
        fileID: id,
        placement: 'top',
        isTrackedFormUpload: isTrackedFormUpload,
        hasRestrictedAccess: hasRestrictedAccess
      };
      return _react2.default.createElement(_FileStatusIcon2.default, attrs);
    }
  }, {
    key: 'renderFileDetails',
    value: function renderFileDetails() {
      var item = this.props.item;
      var size = '';
      if (item.size) {
        size = ', ' + (0, _DataFormat.fileSize)(item.size);
      }
      return _react2.default.createElement(
        'div',
        { className: 'uploadfield-item__details fill-height flexbox-area-grow' },
        _react2.default.createElement(
          'div',
          { className: 'fill-width' },
          _react2.default.createElement(
            'span',
            { className: 'uploadfield-item__title flexbox-area-grow' },
            item.title
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'fill-width uploadfield-item__meta' },
          _react2.default.createElement(
            'span',
            { className: 'uploadfield-item__specs' },
            item.extension,
            size
          ),
          this.renderStatus(),
          item.hasRestrictedAccess && this.renderRestrictedAccess(item),
          item.isTrackedFormUpload && this.renderTrackedFormUpload(item)
        )
      );
    }
  }, {
    key: 'renderThumbnail',
    value: function renderThumbnail() {
      return _react2.default.createElement('div', {
        className: this.getThumbnailClassNames(),
        style: this.getThumbnailStyles(),
        onClick: this.handleItemClick,
        role: 'button',
        tabIndex: this.props.onItemClick ? 0 : -1
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var fieldName = this.props.name + '[Files][]';
      return _react2.default.createElement(
        'div',
        { className: this.getItemClassNames() },
        _react2.default.createElement('input', { type: 'hidden', value: this.props.item.id, name: fieldName }),
        this.renderThumbnail(),
        this.renderFileDetails(),
        this.renderProgressBar(),
        this.renderErrorMessage(),
        this.renderViewButton(),
        this.renderRemoveButton()
      );
    }
  }]);

  return UploadFieldItem;
}(_react.Component);

UploadFieldItem.propTypes = {
  canEdit: _propTypes2.default.bool,
  name: _propTypes2.default.string.isRequired,
  item: _fileShape2.default,
  onRemove: _propTypes2.default.func,
  onItemClick: _propTypes2.default.func,
  onView: _propTypes2.default.func
};

exports.default = UploadFieldItem;

/***/ }),

/***/ "./client/src/constants/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  ACTIONS: {
    CREATE_FOLDER: 'create-folder',
    EDIT_FILE: 'edit'
  },
  MOVE_SUCCESS_DURATION: 3000,
  CSS_TRANSITION_TIME: 300,
  SMALL_THUMBNAIL_HEIGHT: 60,
  SMALL_THUMBNAIL_WIDTH: 60,
  THUMBNAIL_HEIGHT: 150,
  THUMBNAIL_WIDTH: 200,
  BULK_ACTIONS: [{
    value: 'delete',
    label: _i18n2.default._t('AssetAdmin.BULK_ACTIONS_DELETE', 'Delete'),
    className: 'font-icon-trash',
    destructive: true,
    callback: null,
    canApply: function canApply(items) {
      return items.every(function (item) {
        return item && item.canDelete;
      });
    }
  }, {
    value: 'edit',
    label: _i18n2.default._t('AssetAdmin.BULK_ACTIONS_EDIT', 'Edit'),
    className: 'font-icon-edit',
    destructive: false,

    canApply: function canApply(items) {
      return items.length === 1;
    },
    callback: null }, {
    value: 'move',
    label: _i18n2.default._t('AssetAdmin.BULK_ACTIONS_MOVE', 'Move'),
    className: 'font-icon-folder-move',
    canApply: function canApply(items) {
      return items.every(function (item) {
        return item && item.canEdit;
      });
    },
    destructive: false,
    callback: null
  }, {
    value: 'publish',
    label: _i18n2.default._t('AssetAdmin.BULK_ACTIONS_PUBLISH', 'Publish'),
    className: 'font-icon-rocket',
    destructive: false,
    callback: null,
    canApply: function canApply(items) {
      return items.some(function (item) {
        return item && item.modified;
      }) && items.every(function (item) {
        return item.canEdit && item.type !== 'folder';
      });
    },
    confirm: null
  }, {
    value: 'unpublish',
    label: _i18n2.default._t('AssetAdmin.BULK_ACTIONS_UNPUBLISH', 'Unpublish'),
    className: 'font-icon-cancel-circled',
    destructive: false,
    callback: null,
    canApply: function canApply(items) {
      return items.some(function (item) {
        return item.published;
      }) && items.every(function (item) {
        return item.canEdit && item.type !== 'folder';
      });
    },
    confirm: null
  }, {
    value: 'insert',
    label: _i18n2.default._t('AssetAdmin.BULK_ACTIONS_INSERT', 'Insert'),
    className: 'font-icon-plus-circled btn-primary',
    destructive: false,
    callback: null,
    canApply: function canApply(items) {
      return items.length;
    },
    confirm: null
  }],
  BULK_ACTIONS_PLACEHOLDER: _i18n2.default._t('AssetAdmin.BULK_ACTIONS_PLACEHOLDER'),
  SPACE_KEY_CODE: 32,
  RETURN_KEY_CODE: 13,
  DEFAULT_PREVIEW: 'framework/client/dist/images/app_icons/generic_92.png',
  MODAL_MOVE: 'MODAL_MOVE'
};

/***/ }),

/***/ "./client/src/containers/AssetAdmin/AssetAdmin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(5);

var _Backend = __webpack_require__(24);

var _Backend2 = _interopRequireDefault(_Backend);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

var _GalleryActions = __webpack_require__("./client/src/state/gallery/GalleryActions.js");

var galleryActions = _interopRequireWildcard(_GalleryActions);

var _ToastsActions = __webpack_require__(23);

var toastsActions = _interopRequireWildcard(_ToastsActions);

var _QueuedFilesActions = __webpack_require__("./client/src/state/queuedFiles/QueuedFilesActions.js");

var queuedFilesActions = _interopRequireWildcard(_QueuedFilesActions);

var _DisplaySearchActions = __webpack_require__("./client/src/state/displaySearch/DisplaySearchActions.js");

var displaySearchActions = _interopRequireWildcard(_DisplaySearchActions);

var _Editor = __webpack_require__("./client/src/containers/Editor/Editor.js");

var _Editor2 = _interopRequireDefault(_Editor);

var _Gallery = __webpack_require__("./client/src/containers/Gallery/Gallery.js");

var _Gallery2 = _interopRequireDefault(_Gallery);

var _AssetAdminBreadcrumb = __webpack_require__("./client/src/containers/AssetAdmin/AssetAdminBreadcrumb.js");

var _AssetAdminBreadcrumb2 = _interopRequireDefault(_AssetAdminBreadcrumb);

var _Toolbar = __webpack_require__(41);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _reactApollo = __webpack_require__(11);

var _Search = __webpack_require__(16);

var _Search2 = _interopRequireDefault(_Search);

var _SearchToggle = __webpack_require__(40);

var _SearchToggle2 = _interopRequireDefault(_SearchToggle);

var _deleteFilesMutation = __webpack_require__("./client/src/state/files/deleteFilesMutation.js");

var _deleteFilesMutation2 = _interopRequireDefault(_deleteFilesMutation);

var _unpublishFilesMutation = __webpack_require__("./client/src/state/files/unpublishFilesMutation.js");

var _unpublishFilesMutation2 = _interopRequireDefault(_unpublishFilesMutation);

var _publishFilesMutation = __webpack_require__("./client/src/state/files/publishFilesMutation.js");

var _publishFilesMutation2 = _interopRequireDefault(_publishFilesMutation);

var _index = __webpack_require__("./client/src/constants/index.js");

var _index2 = _interopRequireDefault(_index);

var _configShape = __webpack_require__("./client/src/lib/configShape.js");

var _configShape2 = _interopRequireDefault(_configShape);

var _Injector = __webpack_require__(3);

var _BulkDeleteConfirmation = __webpack_require__("./client/src/containers/BulkDeleteConfirmation/BulkDeleteConfirmation.js");

var _BulkDeleteConfirmation2 = _interopRequireDefault(_BulkDeleteConfirmation);

var _ConfirmDeletionActions = __webpack_require__("./client/src/state/confirmDeletion/ConfirmDeletionActions.js");

var confirmDeletionActions = _interopRequireWildcard(_ConfirmDeletionActions);

var _getFormSchema2 = __webpack_require__("./client/src/lib/getFormSchema.js");

var _getFormSchema3 = _interopRequireDefault(_getFormSchema2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AssetAdmin = function (_Component) {
  _inherits(AssetAdmin, _Component);

  function AssetAdmin(props) {
    _classCallCheck(this, AssetAdmin);

    var _this = _possibleConstructorReturn(this, (AssetAdmin.__proto__ || Object.getPrototypeOf(AssetAdmin)).call(this, props));

    _this.handleOpenFile = _this.handleOpenFile.bind(_this);
    _this.handleCloseFile = _this.handleCloseFile.bind(_this);
    _this.handleDelete = _this.handleDelete.bind(_this);
    _this.doPublish = _this.doPublish.bind(_this);
    _this.doUnpublish = _this.doUnpublish.bind(_this);
    _this.handleUnpublish = _this.handleUnpublish.bind(_this);
    _this.handleDoSearch = _this.handleDoSearch.bind(_this);
    _this.handleClearSearch = _this.handleClearSearch.bind(_this);
    _this.handleSubmitEditor = _this.handleSubmitEditor.bind(_this);
    _this.handleOpenFolder = _this.handleOpenFolder.bind(_this);
    _this.handleSort = _this.handleSort.bind(_this);
    _this.handleSetPage = _this.handleSetPage.bind(_this);
    _this.createEndpoint = _this.createEndpoint.bind(_this);
    _this.handleBackButtonClick = _this.handleBackButtonClick.bind(_this);
    _this.handleFolderIcon = _this.handleFolderIcon.bind(_this);
    _this.handleBrowse = _this.handleBrowse.bind(_this);
    _this.handleViewChange = _this.handleViewChange.bind(_this);
    _this.handleUpload = _this.handleUpload.bind(_this);
    _this.handleUploadQueue = _this.handleUploadQueue.bind(_this);
    _this.handleCreateFolder = _this.handleCreateFolder.bind(_this);
    _this.handleMoveFilesSuccess = _this.handleMoveFilesSuccess.bind(_this);
    return _this;
  }

  _createClass(AssetAdmin, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (!props.loading && props.folder && props.folderId !== props.folder.id) {
        props.onReplaceUrl(props.folder.id, props.fileId, props.query, props.viewAction);
      }
    }
  }, {
    key: 'getFolderId',
    value: function getFolderId() {
      if (this.props.folderId !== null) {
        return this.props.folderId;
      }
      if (this.props.folder) {
        return this.props.folder.id;
      }
      return 0;
    }
  }, {
    key: 'getFiles',
    value: function getFiles() {
      var _props = this.props,
          files = _props.files,
          queuedFiles = _props.queuedFiles,
          folderId = _props.folderId;


      var combinedFilesList = [].concat(_toConsumableArray(queuedFiles.items.filter(function (item) {
        return (!item.id || !files.find(function (file) {
          return file.id === item.id;
        })) && (!item.hasOwnProperty('uploadedToFolderId') || item.uploadedToFolderId === folderId);
      })), _toConsumableArray(files));

      var foldersList = combinedFilesList.filter(function (file) {
        return file.type === 'folder';
      });
      var filesList = combinedFilesList.filter(function (file) {
        return file.type !== 'folder';
      });
      return foldersList.concat(filesList);
    }
  }, {
    key: 'handleBrowse',
    value: function handleBrowse(folderId, fileId, query) {
      if (typeof this.props.onBrowse === 'function') {
        this.props.onBrowse(folderId, fileId, query);
      }
      if (folderId !== this.getFolderId()) {
        this.props.actions.gallery.deselectFiles();
      }
    }
  }, {
    key: 'handleSetPage',
    value: function handleSetPage(page) {
      this.handleBrowse(this.getFolderId(), this.props.fileId, Object.assign({}, this.props.query, { page: page }));
    }
  }, {
    key: 'handleDoSearch',
    value: function handleDoSearch(data) {
      this.props.actions.gallery.deselectFiles();
      this.props.actions.queuedFiles.purgeUploadQueue();
      this.props.actions.files.readFiles();
      this.handleBrowse(data.currentFolderOnly ? this.getFolderId() : 0, null, { filter: data, view: this.props.query.view });
    }
  }, {
    key: 'handleClearSearch',
    value: function handleClearSearch(event) {
      this.props.actions.displaySearch.closeSearch();
      this.props.actions.gallery.deselectFiles();
      this.props.actions.queuedFiles.purgeUploadQueue();
      this.props.actions.files.readFiles();
      this.handleOpenFolder(event, this.props.folder);
    }
  }, {
    key: 'handleSort',
    value: function handleSort(sort) {
      this.handleBrowse(this.getFolderId(), this.props.fileId, _extends({}, this.props.query, {
        sort: sort,

        limit: undefined,
        page: undefined
      }));
    }
  }, {
    key: 'handleViewChange',
    value: function handleViewChange(view) {
      this.handleBrowse(this.getFolderId(), this.props.fileId, Object.assign({}, this.props.query, { view: view }));
    }
  }, {
    key: 'createEndpoint',
    value: function createEndpoint(endpointConfig) {
      var includeToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      return _Backend2.default.createEndpointFetcher(Object.assign({}, endpointConfig, includeToken ? { defaultData: { SecurityID: this.props.securityId } } : {}));
    }
  }, {
    key: 'handleBackButtonClick',
    value: function handleBackButtonClick(event) {
      event.preventDefault();
      this.props.actions.gallery.deselectFiles();
      if (this.props.folder) {
        this.handleOpenFolder(this.props.folder.parentId || 0);
      } else {
        this.handleOpenFolder(0);
      }
    }
  }, {
    key: 'resetFile',
    value: function resetFile(file) {
      if (file.queuedId) {
        this.props.actions.queuedFiles.removeQueuedFile(file.queuedId);
      }

      if (this.props.fileId === file.id) {
        this.handleCloseFile();
        this.handleOpenFile(file.id);
      }
    }
  }, {
    key: 'handleFolderIcon',
    value: function handleFolderIcon() {
      this.handleOpenFile(this.getFolderId());
    }
  }, {
    key: 'handleOpenFile',
    value: function handleOpenFile(fileId) {
      this.handleBrowse(this.getFolderId(), fileId, this.props.query);
    }
  }, {
    key: 'handleSubmitEditor',
    value: function handleSubmitEditor(data, action, submitFn) {
      var _this2 = this;

      var promise = null;

      if (action === 'action_insert' && this.props.type === 'select') {
        var files = this.getFiles();
        var file = files.find(function (item) {
          return item.id === parseInt(data.ID, 10);
        });

        this.props.onInsertMany(null, [file]);
        return Promise.resolve();
      }

      if (typeof this.props.onSubmitEditor === 'function') {
        var _file = this.findFile(this.props.fileId);
        promise = this.props.onSubmitEditor(data, action, submitFn, _file);
      } else {
        promise = submitFn();
      }

      if (!promise) {
        throw new Error('Promise was not returned for submitting');
      }
      return promise.then(function (response) {
        if (action === 'action_createfolder' && _this2.props.type === 'admin') {
          _this2.handleOpenFile(response.record.id);
        }

        return _this2.props.actions.files.readFiles().then(function () {
          if (action === 'action_createfolder' && _this2.props.type !== 'admin') {
            _this2.handleOpenFolder(_this2.getFolderId());
          }
          return response;
        });
      });
    }
  }, {
    key: 'handleCloseFile',
    value: function handleCloseFile() {
      this.handleBrowse(this.getFolderId(), null, this.props.query);
    }
  }, {
    key: 'handleOpenFolder',
    value: function handleOpenFolder(folderId) {
      var _props$query = this.props.query,
          page = _props$query.page,
          filter = _props$query.filter,
          query = _objectWithoutProperties(_props$query, ['page', 'filter']);

      this.handleBrowse(folderId, null, query);
    }
  }, {
    key: 'handleDelete',
    value: function handleDelete(ids) {
      var _this3 = this;

      this.props.actions.confirmDeletion.deleting();

      var files = ids.map(function (id) {
        var result = _this3.findFile(id);
        if (!result) {
          throw new Error('File selected for deletion cannot be found: ' + id);
        }
        if (result.queuedId) {
          _this3.props.actions.queuedFiles.removeQueuedFile(result.queuedId);
        }
        return result;
      });

      var fileIDs = files.map(function (file) {
        return file.id;
      });
      var parentId = this.props.folder ? this.props.folder.id : 0;

      return this.props.actions.files.deleteFiles(fileIDs, parentId).then(function (_ref) {
        var deleteFiles = _ref.data.deleteFiles;

        _this3.handleBrowse(parentId, null, _this3.props.query);

        var queuedFiles = _this3.props.queuedFiles.items.filter(function (file) {
          return fileIDs.includes(file.id);
        });

        queuedFiles.forEach(function (file) {
          if (file.queuedId) {
            _this3.props.actions.queuedFiles.removeQueuedFile(file.queuedId);
          }
        });

        _this3.props.actions.files.readFiles();

        return deleteFiles;
      }).then(function (resultItems) {
        var successes = resultItems.filter(function (result) {
          return result;
        }).length;
        if (successes !== ids.length) {
          _this3.props.actions.toasts.error(_i18n2.default.sprintf(_i18n2.default._t('AssetAdmin.BULK_ACTIONS_DELETE_FAIL', '%s folders/files were successfully deleted, but %s files were not able to be deleted.'), successes, ids.length - successes));
        } else {
          _this3.props.actions.toasts.success(_i18n2.default.sprintf(_i18n2.default._t('AssetAdmin.BULK_ACTIONS_DELETE_SUCCESS', '%s folders/files were successfully deleted.'), successes));
          _this3.props.actions.gallery.deselectFiles();
        }

        return resultItems;
      }).finally(this.props.actions.confirmDeletion.reset);
    }
  }, {
    key: 'doUnpublish',
    value: function doUnpublish(ids) {
      var _this4 = this;

      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var files = ids.map(function (id) {
        var result = _this4.findFile(id);
        if (!result) {
          throw new Error('File selected for unpublishing cannot be found: ' + id);
        } else if (result.type === 'folder') {
          throw new Error('Cannot unpublish folders');
        }

        return result;
      });

      var fileIDs = files.map(function (file) {
        return file.id;
      });
      return this.props.actions.files.unpublishFiles(fileIDs, force).then(function (_ref2) {
        var unpublishFiles = _ref2.data.unpublishFiles;

        var successes = unpublishFiles.filter(function (result) {
          return result.__typename === 'File';
        });
        var confirmationRequired = unpublishFiles.filter(function (result) {
          return result.__typename === 'PublicationNotice' && result.noticeType === 'HAS_OWNERS';
        });
        var successful = successes.map(function (file) {
          _this4.resetFile(file);
          return file;
        });
        var displayedMessages = confirmationRequired.slice(0, 4);
        var rest = confirmationRequired.slice(5);
        var body = displayedMessages.map(function (warning) {
          return warning.message;
        });
        if (rest.length) {
          body.push(_i18n2.default.inject(_i18n2.default._t('AssetAdmin.BULK_OWNED_WARNING_REMAINING', 'And {count} other file(s)'), { count: rest.length }));
        }
        if (displayedMessages.length) {
          var alertMessage = [_i18n2.default.inject(_i18n2.default._t('AssetAdmin.BULK_OWNED_WARNING_HEADING', '{count} file(s) are being used by other published content.'), { count: confirmationRequired.length }), body.join('\n'), _i18n2.default._t('AssetAdmin.BULK_OWNED_WARNING_FOOTER', 'Unpublishing will only remove files from the published version of the content. They will remain on the draft version. Unpublish anyway?')];

          if (confirm(alertMessage.join('\n\n'))) {
            var secondPassIDs = confirmationRequired.reduce(function (acc, curr) {
              return acc.concat(curr.ids);
            }, []);
            return _this4.doUnpublish(secondPassIDs, true).then(function (next) {
              return successful.concat(next);
            });
          }
        }

        return successful;
      });
    }
  }, {
    key: 'handleUnpublish',
    value: function handleUnpublish(fileIds) {
      var _this5 = this;

      return this.doUnpublish(fileIds).then(function (response) {
        var fileId = _this5.props.fileId;

        _this5.props.actions.files.readFiles().then(function () {
          if (fileId && response.find(function (file) {
            return file.id === fileId;
          })) {
            _this5.handleCloseFile();
            _this5.handleOpenFile(fileId);
          }
        });
      });
    }
  }, {
    key: 'doPublish',
    value: function doPublish(ids) {
      var _this6 = this;

      var files = ids.map(function (id) {
        var result = _this6.findFile(id);
        if (!result) {
          throw new Error('File selected for publishing cannot be found: ' + id);
        } else if (result.type === 'folder') {
          throw new Error('Cannot publish folders');
        }

        return result;
      });

      var fileIDs = files.map(function (file) {
        return file.id;
      });

      return this.props.actions.files.publishFiles(fileIDs).then(function (_ref3) {
        var publishFiles = _ref3.data.publishFiles;

        var successes = publishFiles.filter(function (result) {
          return result.__typename === 'File';
        });

        var successful = successes.map(function (file) {
          _this6.resetFile(file);
          return file;
        });

        return successful;
      });
    }
  }, {
    key: 'findFile',
    value: function findFile(fileId) {
      var allFiles = this.getFiles();

      return allFiles.find(function (item) {
        return item.id === parseInt(fileId, 10);
      });
    }
  }, {
    key: 'handleUpload',
    value: function handleUpload() {}
  }, {
    key: 'handleUploadQueue',
    value: function handleUploadQueue() {
      if (this.props.fileId) {
        this.props.actions.files.readFiles();
      }
    }
  }, {
    key: 'handleCreateFolder',
    value: function handleCreateFolder() {
      this.props.onBrowse(this.getFolderId(), null, this.props.query, _index2.default.ACTIONS.CREATE_FOLDER);
    }
  }, {
    key: 'handleMoveFilesSuccess',
    value: function handleMoveFilesSuccess(folderId, fileIds) {
      var _this7 = this;

      var files = this.props.queuedFiles.items.filter(function (file) {
        return fileIds.includes(file.id);
      });

      files.forEach(function (file) {
        if (file.queuedId) {
          _this7.props.actions.queuedFiles.removeQueuedFile(file.queuedId);
        }
      });

      this.props.actions.gallery.deselectFiles();

      this.props.actions.files.readFiles();
    }
  }, {
    key: 'renderGallery',
    value: function renderGallery() {
      var config = this.props.sectionConfig;
      var createFileApiUrl = config.createFileEndpoint.url;
      var createFileApiMethod = config.createFileEndpoint.method;

      var limit = this.props.query && parseInt(this.props.query.limit || config.limit, 10);
      var page = this.props.query && parseInt(this.props.query.page || 1, 10);

      var sort = this.props.query && this.props.query.sort;
      var view = this.props.query && this.props.query.view;
      var filters = this.props.query.filter || {};

      return _react2.default.createElement(_Gallery2.default, {
        files: this.getFiles(),
        fileId: this.props.fileId,
        folderId: this.getFolderId(),
        folder: this.props.folder,
        type: this.props.type,
        limit: limit,
        page: page,
        totalCount: this.props.filesTotalCount,
        view: view,
        filters: filters,
        graphQLErrors: this.props.graphQLErrors,
        createFileApiUrl: createFileApiUrl,
        createFileApiMethod: createFileApiMethod,
        onInsertMany: this.props.onInsertMany,
        onPublish: this.doPublish,
        onUnpublish: this.doUnpublish,
        onOpenFile: this.handleOpenFile,
        onOpenFolder: this.handleOpenFolder,
        onSuccessfulUpload: this.handleUpload,
        onSuccessfulUploadQueue: this.handleUploadQueue,
        onCreateFolder: this.handleCreateFolder,
        onMoveFilesSuccess: this.handleMoveFilesSuccess,
        onClearSearch: this.handleClearSearch,
        onSort: this.handleSort,
        onSetPage: this.handleSetPage,
        onViewChange: this.handleViewChange,
        sort: sort,
        sectionConfig: config,
        loading: this.props.loading,
        maxFilesSelect: this.props.maxFiles,
        dialog: this.props.dialog
      });
    }
  }, {
    key: 'renderEditor',
    value: function renderEditor() {
      var _props2 = this.props,
          config = _props2.sectionConfig,
          viewAction = _props2.viewAction,
          type = _props2.type,
          fileId = _props2.fileId,
          dialog = _props2.dialog,
          requireLinkText = _props2.requireLinkText,
          fileSelected = _props2.fileSelected;

      var _getFormSchema = (0, _getFormSchema3.default)({
        config: config,
        viewAction: viewAction,
        folderId: this.getFolderId(),
        type: type,
        fileId: fileId
      }),
          schemaUrl = _getFormSchema.schemaUrl,
          targetId = _getFormSchema.targetId;

      if (!schemaUrl) {
        return null;
      }

      var schemaUrlQueries = [];
      if (requireLinkText) {
        schemaUrlQueries.push({ name: 'requireLinkText', value: true });
      }

      if (fileSelected) {
        schemaUrlQueries.push({ name: 'fileSelected', value: true });
      }

      var editorProps = {
        dialog: dialog,
        fileId: targetId,
        schemaUrl: schemaUrl,
        schemaUrlQueries: schemaUrlQueries,
        onClose: this.handleCloseFile,
        onSubmit: this.handleSubmitEditor,
        onUnpublish: this.handleUnpublish,
        addToCampaignSchemaUrl: config.form.addToCampaignForm.schemaUrl
      };

      return _react2.default.createElement(_Editor2.default, editorProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          folder = _props3.folder,
          folderId = _props3.folderId,
          query = _props3.query,
          getUrl = _props3.getUrl,
          type = _props3.type,
          maxFiles = _props3.maxFiles,
          toolbarChildren = _props3.toolbarChildren;


      var showBackButton = Boolean(folderId || (0, _Search.hasFilters)(query.filter));
      var searchFormSchemaUrl = this.props.sectionConfig.form.fileSearchForm.schemaUrl;
      var filters = query.filter || {};
      var classNames = (0, _classnames2.default)('fill-height asset-admin', type === 'select' && {
        'asset-admin--single-select': maxFiles === 1,
        'asset-admin--multi-select': maxFiles !== 1
      });
      var showSearch = (0, _Search.hasFilters)(query.filter) || this.props.showSearch;
      var onSearchToggle = this.props.actions.displaySearch ? this.props.actions.displaySearch.toggleSearch : undefined;

      var breadcrumbProps = {
        folder: folder,
        query: query,
        getUrl: getUrl,
        onBrowse: this.handleBrowse,
        onFolderIcon: this.handleFolderIcon
      };

      return _react2.default.createElement(
        'div',
        { className: classNames },
        _react2.default.createElement(
          _Toolbar2.default,
          {
            showBackButton: showBackButton,
            onBackButtonClick: this.handleBackButtonClick
          },
          _react2.default.createElement(_AssetAdminBreadcrumb2.default, breadcrumbProps),
          _react2.default.createElement(
            'div',
            { className: 'asset-admin__toolbar-extra pull-xs-right fill-width vertical-align-items' },
            _react2.default.createElement(_SearchToggle2.default, { toggled: showSearch, onToggle: onSearchToggle }),
            toolbarChildren
          )
        ),
        showSearch && _react2.default.createElement(_Search2.default, {
          onSearch: this.handleDoSearch,
          id: 'AssetSearchForm',
          formSchemaUrl: searchFormSchemaUrl,
          onHide: this.handleClearSearch,
          displayBehavior: 'HIDEABLE',
          filters: filters,
          name: 'name'
        }),
        _react2.default.createElement(
          'div',
          { className: 'flexbox-area-grow fill-width fill-height gallery' },
          this.renderGallery(),
          this.renderEditor()
        ),
        _react2.default.createElement(_BulkDeleteConfirmation2.default, { onConfirm: this.handleDelete })
      );
    }
  }]);

  return AssetAdmin;
}(_react.Component);

AssetAdmin.propTypes = {
  dialog: _propTypes2.default.bool,
  sectionConfig: _configShape2.default,
  fileId: _propTypes2.default.number,
  folderId: _propTypes2.default.number,
  onBrowse: _propTypes2.default.func,
  onReplaceUrl: _propTypes2.default.func,
  onInsertMany: _propTypes2.default.func,
  graphQLErrors: _propTypes2.default.arrayOf(_propTypes2.default.string),
  getUrl: _propTypes2.default.func,
  query: _propTypes2.default.shape({
    sort: _propTypes2.default.string,
    limit: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    page: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    filter: _propTypes2.default.object
  }),
  onSubmitEditor: _propTypes2.default.func,
  type: _propTypes2.default.oneOf(['insert-media', 'insert-link', 'select', 'admin']),
  files: _propTypes2.default.array,
  queuedFiles: _propTypes2.default.shape({
    items: _propTypes2.default.array.isRequired
  }),
  filesTotalCount: _propTypes2.default.number,
  folder: _propTypes2.default.shape({
    id: _propTypes2.default.number,
    title: _propTypes2.default.string,
    parents: _propTypes2.default.array,
    parentId: _propTypes2.default.number,
    canView: _propTypes2.default.bool,
    canEdit: _propTypes2.default.bool
  }),
  loading: _propTypes2.default.bool,
  actions: _propTypes2.default.object,
  maxFiles: _propTypes2.default.number,
  fileSelected: _propTypes2.default.bool
};

AssetAdmin.defaultProps = {
  type: 'admin',
  query: {
    sort: '',
    limit: null,
    page: 0,
    filter: {}
  },
  maxFiles: null
};

function mapStateToProps(state, ownProps) {
  var formSchema = state.assetAdmin.modal.formSchema;

  return {
    securityId: state.config.SecurityID,

    queuedFiles: state.assetAdmin.queuedFiles,
    showSearch: state.assetAdmin.displaySearch.isOpen,
    type: formSchema && formSchema.type || ownProps.type
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      gallery: (0, _redux.bindActionCreators)(galleryActions, dispatch),
      toasts: (0, _redux.bindActionCreators)(toastsActions, dispatch),
      displaySearch: (0, _redux.bindActionCreators)(displaySearchActions, dispatch),

      queuedFiles: (0, _redux.bindActionCreators)(queuedFilesActions, dispatch),
      confirmDeletion: (0, _redux.bindActionCreators)(confirmDeletionActions, dispatch)
    }
  };
}

exports.Component = AssetAdmin;
exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _Injector.injectGraphql)('ReadFilesQuery'), _deleteFilesMutation2.default, _unpublishFilesMutation2.default, _publishFilesMutation2.default, _reactApollo.withApollo)(AssetAdmin);

/***/ }),

/***/ "./client/src/containers/AssetAdmin/AssetAdminBreadcrumb.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _Breadcrumb = __webpack_require__(32);

var _Search = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AssetAdminBreadcrumb = function AssetAdminBreadcrumb(_ref) {
  var folder = _ref.folder,
      query = _ref.query,
      getUrl = _ref.getUrl,
      onBrowse = _ref.onBrowse,
      onFolderIcon = _ref.onFolderIcon;

  var handleClick = function handleClick() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return function (event) {
      event.preventDefault();
      onBrowse.apply(undefined, args);
    };
  };

  var hrefBuilder = function hrefBuilder() {
    return getUrl && getUrl.apply(undefined, arguments);
  };

  var breadcrumbs = [{
    text: _i18n2.default._t('AssetAdmin.FILES', 'Files'),
    href: hrefBuilder(0, null, query),
    onClick: handleClick(0, null, query)
  }];

  if (folder && folder.id) {
    if (folder.parents) {
      folder.parents.forEach(function (parent) {
        breadcrumbs.push({
          text: parent.title,
          href: hrefBuilder(parent.id, null, query),
          onClick: handleClick(parent.id, null, query)
        });
      });
    }

    var icons = [{
      className: 'icon font-icon-edit-list',
      onClick: function onClick(e) {
        e.preventDefault();
        onFolderIcon();
      }
    }];

    if (folder.hasRestrictedAccess) {
      icons.push({
        nodeName: 'FileStatusIcon',
        hasRestrictedAccess: true
      });
    }

    breadcrumbs.push({
      text: folder.title,
      href: hrefBuilder(folder.id, null, query),
      onClick: handleClick(folder.id, null, query),
      icons: icons
    });
  }

  if ((0, _Search.hasFilters)(query.filter)) {
    breadcrumbs.push({
      text: _i18n2.default._t('LeftAndMain.SEARCHRESULTS', 'Search results')
    });
  }

  return _react2.default.createElement(_Breadcrumb.Component, { multiline: true, crumbs: breadcrumbs });
};

AssetAdminBreadcrumb.propTypes = {
  onBrowse: _propTypes2.default.func,
  onFolderIcon: _propTypes2.default.func,
  getUrl: _propTypes2.default.func,
  query: _propTypes2.default.shape({
    sort: _propTypes2.default.string,
    limit: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    page: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    filter: _propTypes2.default.object,
    view: _propTypes2.default.string
  }),
  folder: _propTypes2.default.shape({
    id: _propTypes2.default.number,
    title: _propTypes2.default.string,
    parents: _propTypes2.default.array,
    parentId: _propTypes2.default.number,
    canView: _propTypes2.default.bool,
    canEdit: _propTypes2.default.bool
  })
};

exports.default = AssetAdminBreadcrumb;

/***/ }),

/***/ "./client/src/containers/AssetAdmin/AssetAdminRouter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildUrl = exports.Component = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(39);

var _AssetAdmin = __webpack_require__("./client/src/containers/AssetAdmin/AssetAdmin.js");

var _AssetAdmin2 = _interopRequireDefault(_AssetAdmin);

var _DataFormat = __webpack_require__(14);

var _qs = __webpack_require__(17);

var _qs2 = _interopRequireDefault(_qs);

var _index = __webpack_require__("./client/src/constants/index.js");

var _index2 = _interopRequireDefault(_index);

var _configShape = __webpack_require__("./client/src/lib/configShape.js");

var _configShape2 = _interopRequireDefault(_configShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sectionConfigKey = 'SilverStripe\\AssetAdmin\\Controller\\AssetAdmin';

var actions = Object.keys(_index2.default.ACTIONS).map(function (key) {
  return _index2.default.ACTIONS[key];
});

function buildUrl(_ref) {
  var base = _ref.base,
      folderId = _ref.folderId,
      fileId = _ref.fileId,
      query = _ref.query,
      action = _ref.action;

  if (action && actions.indexOf(action) === -1) {
    throw new Error('Invalid action provided: ' + action);
  }

  var url = null;
  if (fileId) {
    url = base + '/show/' + folderId + '/' + _index2.default.ACTIONS.EDIT_FILE + '/' + fileId;
  } else if (folderId) {
    url = base + '/show/' + folderId;
  } else {
    url = base + '/';
  }

  if (action === _index2.default.ACTIONS.CREATE_FOLDER) {
    url = base + '/show/' + (folderId || 0) + '/' + action;
  }

  var hasQuery = query && Object.keys(query).length > 0;
  if (hasQuery) {
    url = url + '?' + _qs2.default.stringify(query);
  }

  return url;
}

var AssetAdminRouter = function (_Component) {
  _inherits(AssetAdminRouter, _Component);

  function AssetAdminRouter(props) {
    _classCallCheck(this, AssetAdminRouter);

    var _this = _possibleConstructorReturn(this, (AssetAdminRouter.__proto__ || Object.getPrototypeOf(AssetAdminRouter)).call(this, props));

    _this.handleBrowse = _this.handleBrowse.bind(_this);
    _this.handleReplaceUrl = _this.handleReplaceUrl.bind(_this);
    _this.getUrl = _this.getUrl.bind(_this);
    return _this;
  }

  _createClass(AssetAdminRouter, [{
    key: 'getUrl',
    value: function getUrl() {
      var folderId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var fileId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var action = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _index2.default.ACTIONS.EDIT_FILE;

      var newFolderId = parseInt(folderId || 0, 10);
      var newFileId = parseInt(fileId || 0, 10);

      var hasFolderChanged = newFolderId !== this.getFolderId();
      var newQuery = Object.assign({}, query);
      if (hasFolderChanged || newQuery.page <= 1) {
        delete newQuery.page;
      }

      return buildUrl({
        base: '/' + this.props.sectionConfig.url,
        folderId: newFolderId,
        fileId: newFileId,
        query: newQuery,
        action: action
      });
    }
  }, {
    key: 'getFolderId',
    value: function getFolderId() {
      if (this.props.match.params && this.props.match.params.folderId) {
        return parseInt(this.props.match.params.folderId, 10);
      }
      return 0;
    }
  }, {
    key: 'getFileId',
    value: function getFileId() {
      if (this.props.match.params && this.props.match.params.fileId) {
        return parseInt(this.props.match.params.fileId, 10);
      }
      return 0;
    }
  }, {
    key: 'getViewAction',
    value: function getViewAction() {
      if (this.props.match.params && this.props.match.params.viewAction) {
        return this.props.match.params.viewAction;
      }
      return _index2.default.ACTIONS.EDIT_FILE;
    }
  }, {
    key: 'getSectionProps',
    value: function getSectionProps() {
      return {
        sectionConfig: this.props.sectionConfig,
        type: 'admin',
        folderId: this.getFolderId(),
        viewAction: this.getViewAction(),
        fileId: this.getFileId(),
        query: this.getQuery(),
        getUrl: this.getUrl,
        onBrowse: this.handleBrowse,
        onReplaceUrl: this.handleReplaceUrl
      };
    }
  }, {
    key: 'getQuery',
    value: function getQuery() {
      return (0, _DataFormat.decodeQuery)(this.props.location.search);
    }
  }, {
    key: 'handleBrowse',
    value: function handleBrowse(folderId, fileId, query, action) {
      var pathname = this.getUrl(folderId, fileId, query, action);

      this.props.history.push(pathname);
    }
  }, {
    key: 'handleReplaceUrl',
    value: function handleReplaceUrl(folderId, fileId, query, action) {
      var pathname = this.getUrl(folderId, fileId, query, action);

      this.props.history.replace(pathname);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.sectionConfig) {
        return null;
      }
      return _react2.default.createElement(_AssetAdmin2.default, this.getSectionProps());
    }
  }]);

  return AssetAdminRouter;
}(_react.Component);

AssetAdminRouter.propTypes = {
  sectionConfig: _configShape2.default,
  location: _propTypes2.default.shape({
    pathname: _propTypes2.default.string,
    query: _propTypes2.default.object,
    search: _propTypes2.default.string
  }),
  params: _propTypes2.default.object,
  router: _propTypes2.default.object
};

function mapStateToProps(state) {
  var sectionConfig = state.config.sections.find(function (section) {
    return section.name === sectionConfigKey;
  });

  return {
    sectionConfig: sectionConfig
  };
}

exports.Component = AssetAdminRouter;
exports.buildUrl = buildUrl;
exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(AssetAdminRouter));

/***/ }),

/***/ "./client/src/containers/AssetAdmin/stateRouter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssetAdminStateRouter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _AssetAdminRouter = __webpack_require__("./client/src/containers/AssetAdmin/AssetAdminRouter.js");

var _index = __webpack_require__("./client/src/constants/index.js");

var _index2 = _interopRequireDefault(_index);

var _ModalActions = __webpack_require__("./client/src/state/modal/ModalActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sectionConfigKey = 'SilverStripe\\AssetAdmin\\Controller\\AssetAdmin';

var initialState = {
  folderId: null,
  fileId: null,
  query: {},
  action: _index2.default.ACTIONS.EDIT_FILE
};

var AssetAdminStateRouter = function (_Component) {
  _inherits(AssetAdminStateRouter, _Component);

  function AssetAdminStateRouter(props) {
    _classCallCheck(this, AssetAdminStateRouter);

    var _this = _possibleConstructorReturn(this, (AssetAdminStateRouter.__proto__ || Object.getPrototypeOf(AssetAdminStateRouter)).call(this, props));

    _this.handleBrowse = _this.handleBrowse.bind(_this);
    _this.getUrl = _this.getUrl.bind(_this);

    _this.state = Object.assign({}, initialState, { folderId: props.folderId });
    return _this;
  }

  _createClass(AssetAdminStateRouter, [{
    key: 'getUrl',
    value: function getUrl() {
      var folderId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var fileId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var action = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _index2.default.ACTIONS.EDIT_FILE;

      var newFolderId = parseInt(folderId || 0, 10);
      var newFileId = parseInt(fileId || 0, 10);
      var oldFolderId = this.getFolderId();

      var hasFolderChanged = newFolderId !== oldFolderId && oldFolderId !== null;
      var newQuery = Object.assign({}, query);
      if (hasFolderChanged || newQuery.page <= 1) {
        delete newQuery.page;
      }

      return (0, _AssetAdminRouter.buildUrl)({
        base: this.props.sectionConfig.url,
        folderId: newFolderId,
        fileId: newFileId,
        query: newQuery,
        action: action
      });
    }
  }, {
    key: 'getFolderId',
    value: function getFolderId() {
      if (this.state.folderId === null) {
        return null;
      }
      return parseInt(this.state.folderId || 0, 10);
    }
  }, {
    key: 'getFileId',
    value: function getFileId() {
      return parseInt(this.state.fileId || this.props.fileId || 0, 10);
    }
  }, {
    key: 'getViewAction',
    value: function getViewAction() {
      return this.state.action || _index2.default.ACTIONS.EDIT_FILE;
    }
  }, {
    key: 'getSectionProps',
    value: function getSectionProps() {
      var props = Object.assign({}, this.props, {
        folderId: this.getFolderId(),
        fileId: this.getFileId(),
        viewAction: this.getViewAction(),
        query: this.state.query,
        getUrl: this.getUrl,
        onBrowse: this.handleBrowse
      });

      delete props.Component;

      return props;
    }
  }, {
    key: 'handleBrowse',
    value: function handleBrowse(folderId, fileId) {
      var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var action = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _index2.default.ACTIONS.EDIT_FILE;

      if (action && Object.values(_index2.default.ACTIONS).indexOf(action) === -1) {
        throw new Error('Invalid action provided: ' + action);
      }

      if (this.state.fileId !== fileId) {
        this.props.actions.resetFormStack();
      }

      this.setState({
        folderId: folderId,
        fileId: fileId,
        query: query,
        action: action
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var sectionProps = this.getSectionProps();
      var AssetAdmin = this.props.Component;

      return _react2.default.createElement(AssetAdmin, sectionProps);
    }
  }]);

  return AssetAdminStateRouter;
}(_react.Component);

AssetAdminStateRouter.propTypes = {
  Component: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  sectionConfig: _propTypes2.default.shape({
    url: _propTypes2.default.string.isRequired
  }).isRequired,
  fileId: _propTypes2.default.number
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      resetFormStack: function resetFormStack() {
        return dispatch((0, _ModalActions.resetFormStack)());
      }
    }
  };
}

function stateRouter(AssetAdmin) {
  function mapStateToProps(state) {
    var sectionConfig = state.config.sections.find(function (section) {
      return section.name === sectionConfigKey;
    });

    return {
      Component: AssetAdmin,
      sectionConfig: sectionConfig
    };
  }

  return (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AssetAdminStateRouter);
}

exports.AssetAdminStateRouter = AssetAdminStateRouter;
exports.default = stateRouter;

/***/ }),

/***/ "./client/src/containers/BulkDeleteConfirmation/BulkDeleteConfirmation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = __webpack_require__(11);

var _Injector = __webpack_require__(3);

var _ConfirmDeletionActions = __webpack_require__("./client/src/state/confirmDeletion/ConfirmDeletionActions.js");

var confirmDeletionActions = _interopRequireWildcard(_ConfirmDeletionActions);

var _ConfirmDeletionTransitions = __webpack_require__("./client/src/state/confirmDeletion/ConfirmDeletionTransitions.js");

var TRANSITIONS = _interopRequireWildcard(_ConfirmDeletionTransitions);

var _DeletionModal = __webpack_require__("./client/src/containers/BulkDeleteConfirmation/DeletionModal.js");

var _DeletionModal2 = _interopRequireDefault(_DeletionModal);

var _BulkDeleteMessage = __webpack_require__("./client/src/containers/BulkDeleteConfirmation/BulkDeleteMessage.js");

var _BulkDeleteMessage2 = _interopRequireDefault(_BulkDeleteMessage);

var _helpers = __webpack_require__("./client/src/containers/BulkDeleteConfirmation/helpers.js");

var _fileShape = __webpack_require__("./client/src/lib/fileShape.js");

var _fileShape2 = _interopRequireDefault(_fileShape);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BulkDeleteConfirmation = function BulkDeleteConfirmation(_ref) {
  var loading = _ref.loading,
      LoadingComponent = _ref.LoadingComponent,
      transition = _ref.transition,
      files = _ref.files,
      descendantFileCounts = _ref.descendantFileCounts,
      onModalClose = _ref.onModalClose,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm;

  var body = null;
  var actions = [{
    label: _i18n2.default._t('AssetAdmin.DELETE', 'Delete'),
    handler: function handler() {
      return onConfirm(files.map(function (_ref2) {
        var id = _ref2.id;
        return id;
      }));
    },
    color: 'danger'
  }, {
    label: _i18n2.default._t('AssetAdmin.CANCEL', 'Cancel'),
    handler: onCancel
  }];

  if (loading) {
    body = _react2.default.createElement(LoadingComponent, null);
  } else {
    var folderCount = Object.keys(descendantFileCounts).length;
    var folderDescendantFileTotals = (0, _helpers.getFolderDescendantFileTotals)(files, descendantFileCounts);
    var fileTotalItems = (0, _helpers.getFileTotalItems)(files);

    var bodyProps = { folderCount: folderCount, folderDescendantFileTotals: folderDescendantFileTotals, fileTotalItems: fileTotalItems };
    body = _react2.default.createElement(_BulkDeleteMessage2.default, bodyProps);

    if (folderDescendantFileTotals.totalItems || fileTotalItems) {
      actions = [{
        label: _i18n2.default._t('AssetAdmin.CANCEL', 'Cancel'),
        handler: onCancel,
        color: 'primary'
      }, {
        label: _i18n2.default._t('AssetAdmin.DELETE', 'Delete'),
        handler: function handler() {
          return onConfirm(files.map(function (_ref3) {
            var id = _ref3.id;
            return id;
          }));
        },
        color: 'danger'
      }];
    }
  }

  var isOpen = ![TRANSITIONS.CANCELING, TRANSITIONS.DELETING].includes(transition);

  return _react2.default.createElement(_DeletionModal2.default, {
    body: body,
    isOpen: isOpen,
    actions: actions,
    onCancel: onCancel,
    onClosed: onModalClose
  });
};

BulkDeleteConfirmation.propTypes = {
  loading: _propTypes2.default.bool.isRequired,
  LoadingComponent: _propTypes2.default.func,
  transition: _propTypes2.default.oneOf(['canceling', 'deleting', false]),
  files: _propTypes2.default.arrayOf(_fileShape2.default),
  descendantFileCounts: _propTypes2.default.object,
  onCancel: _propTypes2.default.func.isRequired,
  onModalClose: _propTypes2.default.func.isRequired,
  onConfirm: _propTypes2.default.func.isRequired
};

var ConnectedModal = (0, _redux.compose)((0, _Injector.inject)(['Loading'], function (Loading) {
  return { LoadingComponent: Loading };
}), (0, _Injector.injectGraphql)('readDescendantFileCountsQuery'), _reactApollo.withApollo)(BulkDeleteConfirmation);

var ConditionalModal = function ConditionalModal(_ref4) {
  var showConfirmation = _ref4.showConfirmation,
      files = _ref4.files,
      props = _objectWithoutProperties(_ref4, ['showConfirmation', 'files']);

  return showConfirmation && files.length > 0 ? _react2.default.createElement(ConnectedModal, _extends({}, props, { files: files })) : null;
};

var mapStateToProps = function mapStateToProps(_ref5) {
  var confirmDeletion = _ref5.assetAdmin.confirmDeletion;
  return confirmDeletion;
};
var mapDispatchToProps = {
  onCancel: confirmDeletionActions.cancel,
  onModalClose: confirmDeletionActions.modalClose
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(ConditionalModal);
exports.Component = BulkDeleteConfirmation;

/***/ }),

/***/ "./client/src/containers/BulkDeleteConfirmation/BulkDeleteMessage.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__("./client/src/containers/BulkDeleteConfirmation/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var confirmationMessage = function confirmationMessage(folderCount, folderDescendantFileTotals, fileTotalItems) {
  var fileCount = folderDescendantFileTotals.totalCount + fileTotalItems;
  if (fileCount > 0) {
    return _i18n2.default.sprintf(_i18n2.default._t('AssetAdmin.BULK_ACTIONS_DELETE_ITEMS_CONFIRM', ["You're about to delete %s file(s) which may be used in your site's content.", 'Carefully check the file usage on the files before deleting the folder.'].join(' ')), fileCount);
  } else if (folderCount === 1) {
    return _i18n2.default._t('AssetAdmin.BULK_ACTIONS_DELETE_FOLDER_CONFIRM', 'Are you sure you want to delete this folder?');
  }
  return _i18n2.default._t('AssetAdmin.BULK_ACTIONS_DELETE_FOLDERS_CONFIRM', 'Are you sure you want to delete these folders?');
};

var BulkDeleteMessage = function BulkDeleteMessage(_ref) {
  var folderCount = _ref.folderCount,
      folderDescendantFileTotals = _ref.folderDescendantFileTotals,
      fileTotalItems = _ref.fileTotalItems;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'p',
      null,
      confirmationMessage(folderCount, folderDescendantFileTotals, fileTotalItems)
    ),
    (folderDescendantFileTotals.totalItems > 0 || fileTotalItems > 0) && _react2.default.createElement(
      'p',
      null,
      _i18n2.default._t('AssetAdmin.BULK_ACTIONS_DELETE_WARNING', 'Ensure files are removed from content areas prior to deleting them, otherwise they will appear as broken links.')
    )
  );
};

BulkDeleteMessage.propTypes = {
  folderCount: _propTypes2.default.number,
  folderDescendantFileTotals: _helpers.descendantFileTotalsShape,
  fileTotalItems: _propTypes2.default.number
};

BulkDeleteMessage.defaultProps = {
  folderCount: 0,
  folderDescendantFileTotals: { totalItems: 0, totalCount: 0 },
  fileTotalItems: 0
};

exports.default = BulkDeleteMessage;

/***/ }),

/***/ "./client/src/containers/BulkDeleteConfirmation/DeletionModal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeletionModal = function DeletionModal(_ref) {
  var isOpen = _ref.isOpen,
      body = _ref.body,
      onCancel = _ref.onCancel,
      actions = _ref.actions;
  return _react2.default.createElement(
    _reactstrap.Modal,
    { isOpen: isOpen, toggle: onCancel },
    _react2.default.createElement(
      _reactstrap.ModalHeader,
      { toggle: onCancel },
      _i18n2.default._t('AssetAdmin.CONFIRM_FILE_DELETION', 'Confirm deletion')
    ),
    _react2.default.createElement(
      _reactstrap.ModalBody,
      null,
      body
    ),
    _react2.default.createElement(
      _reactstrap.ModalFooter,
      null,
      actions.map(function (_ref2) {
        var label = _ref2.label,
            handler = _ref2.handler,
            color = _ref2.color;
        return _react2.default.createElement(
          _reactstrap.Button,
          { key: label, color: color, onClick: handler },
          label
        );
      })
    )
  );
};

DeletionModal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired,
  body: _propTypes2.default.node.isRequired,
  onCancel: _propTypes2.default.func.isRequired,
  actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string.isRequired,
    handler: _propTypes2.default.func,
    color: _propTypes2.default.string
  }))
};

exports.default = DeletionModal;

/***/ }),

/***/ "./client/src/containers/BulkDeleteConfirmation/helpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFileTotalItems = exports.getFolderDescendantFileTotals = exports.descendantFileTotalsShape = undefined;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isFolder = function isFolder(_ref) {
  var type = _ref.type;
  return type === 'folder';
};

var isFile = function isFile(file) {
  return !isFolder(file);
};

var descendantFileCountsReducer = function descendantFileCountsReducer(descendentFileCount) {
  return function (accumulator, _ref2) {
    var id = _ref2.id;
    return descendentFileCount[id] > 0 ? {
      totalItems: accumulator.totalItems + 1,
      totalCount: accumulator.totalCount + descendentFileCount[id]
    } : accumulator;
  };
};

var descendantFileCountsInitAccumulator = { totalItems: 0, totalCount: 0 };

var descendantFileTotalsShape = exports.descendantFileTotalsShape = _propTypes2.default.shape({
  totalItems: _propTypes2.default.number,
  totalCount: _propTypes2.default.number
});

var getFolderDescendantFileTotals = exports.getFolderDescendantFileTotals = function getFolderDescendantFileTotals(files, descendantFileCounts) {
  return files.filter(isFolder).reduce(descendantFileCountsReducer(descendantFileCounts), descendantFileCountsInitAccumulator);
};
var getFileTotalItems = exports.getFileTotalItems = function getFileTotalItems(files) {
  return files.filter(isFile).length;
};

/***/ }),

/***/ "./client/src/containers/Editor/Editor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(5);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__("./client/src/constants/index.js");

var _index2 = _interopRequireDefault(_index);

var _FormBuilderLoader = __webpack_require__(26);

var _FormBuilderLoader2 = _interopRequireDefault(_FormBuilderLoader);

var _FormBuilderModal = __webpack_require__(13);

var _FormBuilderModal2 = _interopRequireDefault(_FormBuilderModal);

var _UnsavedFormsActions = __webpack_require__(43);

var UnsavedFormsActions = _interopRequireWildcard(_UnsavedFormsActions);

var _fileShape = __webpack_require__("./client/src/lib/fileShape.js");

var _fileShape2 = _interopRequireDefault(_fileShape);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Injector = __webpack_require__(3);

var _ConfirmDeletionActions = __webpack_require__("./client/src/state/confirmDeletion/ConfirmDeletionActions.js");

var confirmDeletionActions = _interopRequireWildcard(_ConfirmDeletionActions);

var _ModalActions = __webpack_require__("./client/src/state/modal/ModalActions.js");

var modalActions = _interopRequireWildcard(_ModalActions);

var _EditorHeader = __webpack_require__("./client/src/containers/Editor/EditorHeader.js");

var _EditorHeader2 = _interopRequireDefault(_EditorHeader);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

var _url = __webpack_require__(27);

var _url2 = _interopRequireDefault(_url);

var _qs = __webpack_require__(17);

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formIdentifier = 'AssetAdmin.EditForm';

var Editor = function (_Component) {
  _inherits(Editor, _Component);

  function Editor(props) {
    _classCallCheck(this, Editor);

    var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));

    _this.getFormSchemaUrl = _this.getFormSchemaUrl.bind(_this);
    _this.handleCancelKeyDown = _this.handleCancelKeyDown.bind(_this);
    _this.handleClose = _this.handleClose.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleAction = _this.handleAction.bind(_this);
    _this.handleLoadingSuccess = _this.handleLoadingSuccess.bind(_this);
    _this.handleLoadingError = _this.handleLoadingError.bind(_this);
    _this.handleFetchingSchema = _this.handleFetchingSchema.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    _this.openModal = _this.openModal.bind(_this);
    _this.createFn = _this.createFn.bind(_this);
    _this.editorHeader = _this.editorHeader.bind(_this);

    _this.state = {
      openModal: false,
      loadingForm: false,
      loadingError: null
    };
    return _this;
  }

  _createClass(Editor, [{
    key: 'getFormSchemaUrl',
    value: function getFormSchemaUrl() {
      var _props = this.props,
          schemaUrlQueries = _props.schemaUrlQueries,
          schemaUrl = _props.schemaUrl,
          fileId = _props.fileId;


      var parsedURL = _url2.default.parse(schemaUrl);
      var parsedQs = schemaUrlQueries.reduce(function (accumulator, _ref) {
        var name = _ref.name,
            value = _ref.value;
        return _extends({}, accumulator, _defineProperty({}, name, value));
      }, {});

      return _url2.default.format(_extends({}, parsedURL, {
        pathname: parsedURL.path + '/' + fileId,
        search: _qs2.default.stringify(parsedQs)
      }));
    }
  }, {
    key: 'handleAction',
    value: function handleAction(event) {
      switch (event.currentTarget.name) {
        case 'action_addtocampaign':
          this.openModal();
          event.preventDefault();

          break;
        case 'action_replacefile':
          this.replaceFile();
          event.preventDefault();

          break;
        case 'action_downloadfile':
          this.downloadFile();
          event.preventDefault();

          break;
        case 'action_delete':
          this.props.actions.confirmDeletion.confirm([this.props.file]);
          event.preventDefault();

          break;
        default:
          break;
      }
    }
  }, {
    key: 'handleCancelKeyDown',
    value: function handleCancelKeyDown(event) {
      if (event.keyCode === _index2.default.SPACE_KEY_CODE || event.keyCode === _index2.default.RETURN_KEY_CODE) {
        this.handleClose(event);
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(data, action, submitFn) {
      var _props2 = this.props,
          showingSubForm = _props2.showingSubForm,
          actions = _props2.actions;

      if (typeof this.props.onSubmit === 'function') {
        return this.props.onSubmit(data, action, submitFn).finally(function () {
          if (showingSubForm && ['action_save', 'action_publish'].indexOf(action) !== -1) {
            actions.modal.popFormStackEntry();
          }
        });
      }

      return submitFn();
    }
  }, {
    key: 'handleClose',
    value: function handleClose(event) {
      var _props3 = this.props,
          showingSubForm = _props3.showingSubForm,
          onClose = _props3.onClose,
          actions = _props3.actions;


      if (showingSubForm) {
        actions.modal.popFormStackEntry();
      } else {
        onClose();
        this.closeModal();
      }

      if (event) {
        event.preventDefault();
      }
    }
  }, {
    key: 'openModal',
    value: function openModal() {
      this.setState({ openModal: true });
    }
  }, {
    key: 'closeModal',
    value: function closeModal() {
      this.setState({ openModal: false });
    }
  }, {
    key: 'replaceFile',
    value: function replaceFile() {
      var hiddenFileInput = document.querySelector('.dz-input-PreviewImage');

      if (hiddenFileInput) {
        hiddenFileInput.click();
      }
    }
  }, {
    key: 'downloadFile',
    value: function downloadFile() {
      function downloadURI(uri, name) {
        var link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      downloadURI(this.props.file.url, this.props.file.name);
      document.getElementById('Form_fileEditForm_PopoverActions').focus();
    }
  }, {
    key: 'handleLoadingError',
    value: function handleLoadingError(exception) {
      this.setState({
        loadingForm: false,
        loadingError: exception.errors[0]
      });
    }
  }, {
    key: 'handleLoadingSuccess',
    value: function handleLoadingSuccess() {
      this.setState({
        loadingForm: false,
        loadingError: null
      });
    }
  }, {
    key: 'handleFetchingSchema',
    value: function handleFetchingSchema() {
      this.setState({
        loadingForm: true
      });
    }
  }, {
    key: 'editorHeader',
    value: function editorHeader(_ref2) {
      var SchemaComponent = _ref2.SchemaComponent,
          fieldProps = _objectWithoutProperties(_ref2, ['SchemaComponent']);

      var _props4 = this.props,
          dialog = _props4.dialog,
          nextType = _props4.nextType,
          showingSubForm = _props4.showingSubForm,
          actions = _props4.actions,
          file = _props4.file;

      var schemaUrl = this.getFormSchemaUrl();

      var showButton = _EditorHeader.buttonStates.SWITCH;

      if (dialog && file && file.type !== 'folder') {
        showButton = showingSubForm ? _EditorHeader.buttonStates.ALWAYS_BACK : _EditorHeader.buttonStates.ONLY_BACK;
      }

      var formid = fieldProps.formid;

      var onDetails = nextType && file && file.type !== 'folder' ? function () {
        actions.modal.stashFormValues(formid, schemaUrl);
        actions.modal.pushFormStackEntry(nextType);
      } : undefined;

      var props = {
        onCancel: this.handleClose,
        showButton: showButton,
        onDetails: onDetails
      };

      return _react2.default.createElement(
        _EditorHeader2.default,
        props,
        _react2.default.createElement(SchemaComponent, fieldProps)
      );
    }
  }, {
    key: 'createFn',
    value: function createFn(SchemaComponent, componentProps) {
      if (componentProps.name === 'AssetEditorHeaderFieldGroup') {
        var EditorHeaderComponent = this.editorHeader;
        var editorHeaderProps = _extends({
          key: componentProps.id,
          SchemaComponent: SchemaComponent
        }, componentProps);
        return _react2.default.createElement(EditorHeaderComponent, editorHeaderProps);
      }

      return _react2.default.createElement(SchemaComponent, _extends({ key: componentProps.id }, componentProps));
    }
  }, {
    key: 'render',
    value: function render() {
      var formSchemaUrl = this.getFormSchemaUrl();
      var modalSchemaUrl = this.props.addToCampaignSchemaUrl + '/' + this.props.fileId;
      var editorClasses = (0, _classnames2.default)('panel', 'form--no-dividers', 'editor', {
        'editor--asset-dropzone--disable': !this.props.enableDropzone
      }, this.props.className);

      var error = null;
      if (this.state.loadingError) {
        var message = this.state.loadingError.value;
        if (this.state.loadingError.code === 404) {
          message = _i18n2.default._t('AssetAdmin.FILE_MISSING', 'File cannot be found');
        }
        if (!message) {
          message = _i18n2.default._t('Admin.UNKNOWN_ERROR', 'An unknown error has occurred');
        }
        error = _react2.default.createElement(
          'div',
          { className: 'editor__file-preview-message--file-missing' },
          message
        );
      }
      var campaignTitle = _i18n2.default._t('Admin.ADD_TO_CAMPAIGN', 'Add to campaign');
      var Loading = this.props.loadingComponent;

      var file = this.props.file;


      return _react2.default.createElement(
        'div',
        { className: editorClasses },
        _react2.default.createElement(
          'div',
          { className: 'editor__details fill-height' },
          _react2.default.createElement(_FormBuilderLoader2.default, {
            identifier: formIdentifier,
            schemaUrl: formSchemaUrl,
            onSubmit: this.handleSubmit,
            onAction: this.handleAction,
            onLoadingSuccess: this.handleLoadingSuccess,
            onLoadingError: this.handleLoadingError,
            onFetchingSchema: this.handleFetchingSchema,
            createFn: this.createFn,
            file: file
          }),
          error,
          _react2.default.createElement(_FormBuilderModal2.default, {
            title: campaignTitle,
            identifier: 'AssetAdmin.AddToCampaign',
            isOpen: this.state.openModal,
            onClosed: this.closeModal,
            schemaUrl: modalSchemaUrl,
            bodyClassName: 'modal__dialog',
            responseClassBad: 'modal__response modal__response--error',
            responseClassGood: 'modal__response modal__response--good'
          }),
          this.state.loadingForm && _react2.default.createElement(Loading, null)
        )
      );
    }
  }]);

  return Editor;
}(_react.Component);

Editor.propTypes = {
  file: _fileShape2.default,
  className: _propTypes2.default.string,
  fileId: _propTypes2.default.number.isRequired,
  enableDropzone: _propTypes2.default.bool,
  dialog: _propTypes2.default.bool,
  onClose: _propTypes2.default.func.isRequired,
  onSubmit: _propTypes2.default.func.isRequired,
  schemaUrl: _propTypes2.default.string.isRequired,
  schemaUrlQueries: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string,
    value: _propTypes2.default.any
  })),
  addToCampaignSchemaUrl: _propTypes2.default.string,
  actions: _propTypes2.default.object,
  showingSubForm: _propTypes2.default.bool,
  nextType: _propTypes2.default.string
};

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      unsavedForms: (0, _redux.bindActionCreators)(UnsavedFormsActions, dispatch),
      confirmDeletion: (0, _redux.bindActionCreators)(confirmDeletionActions, dispatch),
      modal: (0, _redux.bindActionCreators)(modalActions, dispatch)
    }
  };
}

function mapStateToProps(_ref3) {
  var _ref3$assetAdmin = _ref3.assetAdmin,
      gallery = _ref3$assetAdmin.gallery,
      modal = _ref3$assetAdmin.modal;

  return {
    enableDropzone: gallery.enableDropzone,
    nextType: modal.formSchema && modal.formSchema.nextType,
    showingSubForm: modal.formSchemaStack && modal.formSchemaStack.length > 1
  };
}

exports.Component = Editor;
exports.default = (0, _redux.compose)((0, _Injector.inject)(['Loading'], function (Loading) {
  return {
    loadingComponent: Loading
  };
}, function () {
  return 'AssetAdmin.Editor';
}), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _Injector.injectGraphql)('ReadOneFileQuery'))(Editor);

/***/ }),

/***/ "./client/src/containers/Editor/EditorHeader.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonStates = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _Button = __webpack_require__(33);

var _Button2 = _interopRequireDefault(_Button);

var _BackButton = __webpack_require__(31);

var _BackButton2 = _interopRequireDefault(_BackButton);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handle = function handle(handler) {
  return function (e) {
    e.preventDefault();
    if (handler) {
      handler();
    }
  };
};

var ALWAYS_BACK = 'ALWAYS_BACK';

var ALWAYS_CANCEL = 'ALWAYS_CANCEL';

var SWITCH = 'SWITCH';

var ONLY_BACK = 'ONLY_BACK';

var ONLY_CANCEL = 'ONLY_CANCEL';

var NONE = 'NONE';

var buttonStates = exports.buttonStates = {
  ALWAYS_BACK: ALWAYS_BACK,
  ALWAYS_CANCEL: ALWAYS_CANCEL,
  SWITCH: SWITCH,
  ONLY_BACK: ONLY_BACK,
  ONLY_CANCEL: ONLY_CANCEL,
  NONE: NONE
};

var EditorHeader = function EditorHeader(_ref) {
  var onCancel = _ref.onCancel,
      onDetails = _ref.onDetails,
      showButton = _ref.showButton,
      children = _ref.children;

  var cancelHandler = handle(onCancel);

  var showBack = [ALWAYS_BACK, SWITCH, ONLY_BACK].indexOf(showButton) >= 0;
  var showCancel = [ALWAYS_CANCEL, SWITCH, ONLY_CANCEL].indexOf(showButton) >= 0;

  var backClassName = (0, _classnames2.default)('editor-header__back-button', 'btn--icon-xl', {
    'editor-header__back-button--md-below': [SWITCH, ONLY_BACK].indexOf(showButton) >= 0
  });

  var cancelClassName = (0, _classnames2.default)('editor-header__cancel-button', 'btn--icon-xl', {
    'editor-header__cancel-button--lg-above': [SWITCH, ONLY_CANCEL].indexOf(showButton) >= 0
  });

  return _react2.default.createElement(
    'div',
    { className: 'editor-header' },
    showBack && _react2.default.createElement(_BackButton2.default, { className: backClassName, onClick: cancelHandler }),
    _react2.default.createElement(
      'div',
      { className: 'editor-header__field' },
      children
    ),
    onDetails && _react2.default.createElement(
      _Button2.default,
      { onClick: handle(onDetails), icon: 'edit-list', className: 'editor-header__edit', outline: true },
      _i18n2.default._t('AssetAdmin.DETAILS', 'Details')
    ),
    showCancel && _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Button2.default,
        { icon: 'cancel', className: cancelClassName, noText: true, onClick: cancelHandler },
        _i18n2.default._t('AssetAdmin.CANCEL')
      )
    )
  );
};

EditorHeader.propTypes = {
  onCancel: _propTypes2.default.func,
  onDetails: _propTypes2.default.func,
  showButton: _propTypes2.default.oneOf(Object.keys(buttonStates).map(function (state) {
    return buttonStates[state];
  })),
  children: _propTypes2.default.node
};

exports.default = EditorHeader;

/***/ }),

/***/ "./client/src/containers/Gallery/Gallery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.galleryViewDefaultProps = exports.galleryViewPropTypes = exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = __webpack_require__(7);

var _jquery2 = _interopRequireDefault(_jquery);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(5);

var _AssetDropzone = __webpack_require__("./client/src/components/AssetDropzone/AssetDropzone.js");

var _AssetDropzone2 = _interopRequireDefault(_AssetDropzone);

var _BulkActions = __webpack_require__("./client/src/components/BulkActions/BulkActions.js");

var _BulkActions2 = _interopRequireDefault(_BulkActions);

var _ThumbnailView = __webpack_require__("./client/src/containers/ThumbnailView/ThumbnailView.js");

var _ThumbnailView2 = _interopRequireDefault(_ThumbnailView);

var _TableView = __webpack_require__("./client/src/containers/TableView/TableView.js");

var _TableView2 = _interopRequireDefault(_TableView);

var _index = __webpack_require__("./client/src/constants/index.js");

var _index2 = _interopRequireDefault(_index);

var _FormAlert = __webpack_require__(36);

var _FormAlert2 = _interopRequireDefault(_FormAlert);

var _GalleryActions = __webpack_require__("./client/src/state/gallery/GalleryActions.js");

var galleryActions = _interopRequireWildcard(_GalleryActions);

var _ToastsActions = __webpack_require__(23);

var toastsActions = _interopRequireWildcard(_ToastsActions);

var _QueuedFilesActions = __webpack_require__("./client/src/state/queuedFiles/QueuedFilesActions.js");

var queuedFilesActions = _interopRequireWildcard(_QueuedFilesActions);

var _ConfirmDeletionActions = __webpack_require__("./client/src/state/confirmDeletion/ConfirmDeletionActions.js");

var confirmDeletionActions = _interopRequireWildcard(_ConfirmDeletionActions);

var _moveFilesMutation = __webpack_require__("./client/src/state/files/moveFilesMutation.js");

var _moveFilesMutation2 = _interopRequireDefault(_moveFilesMutation);

var _reactApollo = __webpack_require__(11);

var _reactSelectable = __webpack_require__("./node_modules/react-selectable/dist/react-selectable.js");

var _GalleryDND = __webpack_require__("./client/src/containers/Gallery/GalleryDND.js");

var _GalleryDND2 = _interopRequireDefault(_GalleryDND);

var _configShape = __webpack_require__("./client/src/lib/configShape.js");

var _configShape2 = _interopRequireDefault(_configShape);

var _getStatusCodeMessage = __webpack_require__("./client/src/lib/getStatusCodeMessage.js");

var _getStatusCodeMessage2 = _interopRequireDefault(_getStatusCodeMessage);

var _MoveModal = __webpack_require__("./client/src/containers/MoveModal/MoveModal.js");

var _MoveModal2 = _interopRequireDefault(_MoveModal);

var _Injector = __webpack_require__(3);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ACTION_TYPES = {
  DELETE: 'delete',
  EDIT: 'edit',
  MOVE: 'move',
  PUBLISH: 'publish',
  UNPUBLISH: 'unpublish',
  INSERT: 'insert',
  ADMIN: 'admin',
  SELECT: 'select'
};

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery(props) {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

    _this.handleOpenFolder = _this.handleOpenFolder.bind(_this);
    _this.handleOpenFile = _this.handleOpenFile.bind(_this);
    _this.handleSelect = _this.handleSelect.bind(_this);
    _this.handleAddedFile = _this.handleAddedFile.bind(_this);
    _this.handlePreviewLoaded = _this.handlePreviewLoaded.bind(_this);
    _this.handleCancelUpload = _this.handleCancelUpload.bind(_this);
    _this.handleRemoveErroredUpload = _this.handleRemoveErroredUpload.bind(_this);
    _this.handleUploadProgress = _this.handleUploadProgress.bind(_this);
    _this.handleSending = _this.handleSending.bind(_this);
    _this.handleSort = _this.handleSort.bind(_this);
    _this.handleSetPage = _this.handleSetPage.bind(_this);
    _this.handleSuccessfulUpload = _this.handleSuccessfulUpload.bind(_this);
    _this.handleQueueComplete = _this.handleQueueComplete.bind(_this);
    _this.handleFailedUpload = _this.handleFailedUpload.bind(_this);
    _this.handleClearSearch = _this.handleClearSearch.bind(_this);
    _this.handleEnableDropzone = _this.handleEnableDropzone.bind(_this);
    _this.handleMoveFiles = _this.handleMoveFiles.bind(_this);
    _this.handleBulkEdit = _this.handleBulkEdit.bind(_this);
    _this.handleBulkPublish = _this.handleBulkPublish.bind(_this);
    _this.handleBulkUnpublish = _this.handleBulkUnpublish.bind(_this);
    _this.handleBulkMove = _this.handleBulkMove.bind(_this);
    _this.handleBulkInsert = _this.handleBulkInsert.bind(_this);
    _this.handleBeginSelection = _this.handleBeginSelection.bind(_this);
    _this.handleGroupSelect = _this.handleGroupSelect.bind(_this);
    _this.handleClearSelection = _this.handleClearSelection.bind(_this);
    _this.toggleSelectConcat = _this.toggleSelectConcat.bind(_this);
    _this.getSelectableFiles = _this.getSelectableFiles.bind(_this);
    return _this;
  }

  _createClass(Gallery, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initSortDropdown();
      window.addEventListener('keydown', this.toggleSelectConcat);
      window.addEventListener('keyup', this.toggleSelectConcat);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.view !== 'tile') {
        var $select = this.getSortElement();

        $select.off('change');
      }

      if (this.props.folderId !== nextProps.folderId) {
        nextProps.actions.queuedFiles.purgeUploadQueue();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.initSortDropdown();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('keydown', this.toggleSelectConcat);
      window.removeEventListener('keyup', this.toggleSelectConcat);
    }
  }, {
    key: 'getSortElement',
    value: function getSortElement() {
      return (0, _jquery2.default)(_reactDom2.default.findDOMNode(this)).find('.gallery__sort .dropdown');
    }
  }, {
    key: 'getSearchMessage',
    value: function getSearchMessage(filters) {
      var messages = [];
      if (filters.name) {
        messages.push(_i18n2.default._t('AssetAdmin.SEARCHRESULTSMESSAGEKEYWORDS', 'with keywords \'{name}\''));
      }

      if (filters.lastEditedFrom && filters.lastEditedTo) {
        messages.push(_i18n2.default._t('AssetAdmin.SEARCHRESULTSMESSAGEEDITEDBETWEEN', 'last edited between \'{lastEditedFrom}\' and \'{lastEditedTo}\''));
      } else if (filters.lastEditedFrom) {
        messages.push(_i18n2.default._t('AssetAdmin.SEARCHRESULTSMESSAGEEDITEDFROM', 'last edited after \'{lastEditedFrom}\''));
      } else if (filters.lastEditedTo) {
        messages.push(_i18n2.default._t('AssetAdmin.SEARCHRESULTSMESSAGEEDITEDTO', 'last edited before \'{lastEditedTo}\''));
      }

      if (filters.appCategory) {
        messages.push(_i18n2.default._t('AssetAdmin.SEARCHRESULTSMESSAGECATEGORY', 'categorised as \'{appCategory}\''));
      }

      if (filters.currentFolderOnly && this.props.folder.title) {
        messages.push(_i18n2.default._t('AssetAdmin.SEARCHRESULTSMESSAGELIMIT', 'limited to the folder \'{folder}\''));
      }

      var parts = [messages.slice(0, -1).join(_i18n2.default._t('AssetAdmin.JOIN', ',') + ' '), messages.slice(-1)].filter(function (part) {
        return part;
      }).join(' ' + _i18n2.default._t('AssetAdmin.JOINLAST', 'and') + ' ');

      if (parts === '') {
        return '';
      }

      var searchResults = {
        parts: _i18n2.default.inject(parts, Object.assign({ folder: this.props.folder.title }, filters, { appCategory: filters.appCategory ? filters.appCategory.toLowerCase() : undefined }))
      };

      return _i18n2.default.inject(_i18n2.default._t('AssetAdmin.SEARCHRESULTSMESSAGE', 'Search results {parts}'), searchResults);
    }
  }, {
    key: 'getSelection',
    value: function getSelection(firstId, lastId) {
      var selectable = this.getSelectableFiles();
      var indexes = [firstId, lastId].map(function (id) {
        return selectable.findIndex(function (file) {
          return file.id === id;
        });
      }).filter(function (index) {
        return index !== -1;
      }).sort(function (a, b) {
        return a - b;
      });

      if (indexes.length !== 2) {
        return indexes.map(function (index) {
          return selectable[index].id;
        });
      }

      var _indexes = _slicedToArray(indexes, 2),
          firstIndex = _indexes[0],
          lastIndex = _indexes[1];

      return selectable.filter(function (file, index) {
        return index >= firstIndex && index <= lastIndex;
      }).map(function (file) {
        return file.id;
      });
    }
  }, {
    key: 'getSelectableFiles',
    value: function getSelectableFiles() {
      var selectable = this.props.files.filter(function (file) {
        return file.id;
      });

      if (this.props.type === ACTION_TYPES.SELECT) {
        return selectable.filter(function (item) {
          return item.type !== 'folder';
        });
      }

      return selectable;
    }
  }, {
    key: 'handleBulkInsert',
    value: function handleBulkInsert(event, items) {
      this.props.onInsertMany(event, items);
    }
  }, {
    key: 'handleBulkPublish',
    value: function handleBulkPublish(event, items) {
      var _this2 = this;

      var publishItems = items.map(function (item) {
        return item.id;
      });
      if (!publishItems.length) {
        this.props.actions.gallery.deselectFiles();

        return Promise.resolve(true);
      }
      this.props.actions.gallery.setLoading(true);

      return this.props.onPublish(publishItems).then(function (resultItems) {
        _this2.props.actions.gallery.setLoading(false);
        _this2.props.actions.toasts.success(_i18n2.default.sprintf(_i18n2.default._t('AssetAdmin.BULK_ACTIONS_PUBLISH_SUCCESS', '%s folders/files were successfully published.'), resultItems.length));
        _this2.props.actions.gallery.deselectFiles();
      });
    }
  }, {
    key: 'handleBulkUnpublish',
    value: function handleBulkUnpublish(event, items) {
      var _this3 = this;

      var unpublishItems = items.filter(function (item) {
        return item.published;
      }).map(function (item) {
        return item.id;
      });
      if (!unpublishItems.length) {
        this.props.actions.gallery.deselectFiles();

        return Promise.resolve(true);
      }
      this.props.actions.gallery.setLoading(true);

      return this.props.onUnpublish(unpublishItems).then(function (resultItems) {
        _this3.props.actions.gallery.setLoading(false);
        _this3.props.actions.toasts.success(_i18n2.default.sprintf(_i18n2.default._t('AssetAdmin.BULK_ACTIONS_UNPUBLISH_SUCCESS', '%s folders/files were successfully unpublished.'), resultItems.length));
        _this3.props.actions.gallery.deselectFiles();
      });
    }
  }, {
    key: 'initSortDropdown',
    value: function initSortDropdown() {
      if (this.props.view === 'tile') {
        var $select = this.getSortElement();

        $select.chosen({
          allow_single_deselect: true,
          disable_search_threshold: 20
        });

        $select.off('change');

        $select.on('change', function () {
          return $select.find(':selected')[0].click();
        });
      }
    }
  }, {
    key: 'handleSort',
    value: function handleSort(value) {
      this.props.actions.queuedFiles.purgeUploadQueue();
      this.props.onSort(value);
    }
  }, {
    key: 'handleSetPage',
    value: function handleSetPage(page) {
      this.props.onSetPage(page);
    }
  }, {
    key: 'handleCancelUpload',
    value: function handleCancelUpload(fileData) {
      fileData.xhr.abort();
      this.props.actions.queuedFiles.removeQueuedFile(fileData.queuedId);
    }
  }, {
    key: 'handleRemoveErroredUpload',
    value: function handleRemoveErroredUpload(fileData) {
      this.props.actions.queuedFiles.removeQueuedFile(fileData.queuedId);
    }
  }, {
    key: 'handleAddedFile',
    value: function handleAddedFile(fileData) {
      this.props.actions.queuedFiles.addQueuedFile(fileData);
    }
  }, {
    key: 'handlePreviewLoaded',
    value: function handlePreviewLoaded(fileData, previewData) {
      this.props.actions.queuedFiles.updateQueuedFile(fileData.queuedId, previewData);
    }
  }, {
    key: 'handleSending',
    value: function handleSending(file, xhr) {
      this.props.actions.queuedFiles.updateQueuedFile(file._queuedId, { xhr: xhr });
    }
  }, {
    key: 'handleUploadProgress',
    value: function handleUploadProgress(file, progress) {
      this.props.actions.queuedFiles.updateQueuedFile(file._queuedId, { progress: progress });
    }
  }, {
    key: 'handleSuccessfulUpload',
    value: function handleSuccessfulUpload(fileXhr) {
      var json = JSON.parse(fileXhr.xhr.response);

      if (typeof json[0].error !== 'undefined') {
        this.handleFailedUpload(fileXhr);
        return;
      }

      this.props.actions.queuedFiles.succeedUpload(fileXhr._queuedId, json[0]);

      if (this.props.onSuccessfulUpload) {
        this.props.onSuccessfulUpload(json);
      }

      var filesInProgress = this.props.queuedFiles.items.reduce(function (inProgress, file) {
        if (file.progress !== 100) {
          return inProgress + 1;
        }
        return inProgress;
      }, 0);

      if (!this.props.fileId && !this.props.selectedFiles.length && filesInProgress === 0) {
        var lastFile = json.pop();
        this.props.onOpenFile(lastFile.id);
      }
    }
  }, {
    key: 'handleQueueComplete',
    value: function handleQueueComplete() {
      if (this.props.onSuccessfulUploadQueue) {
        this.props.onSuccessfulUploadQueue();
      }
    }
  }, {
    key: 'handleFailedUpload',
    value: function handleFailedUpload(fileXhr, response) {
      var statusCodeMessage = fileXhr.xhr && fileXhr.xhr.status ? (0, _getStatusCodeMessage2.default)(fileXhr.xhr.status) : '';
      this.props.actions.queuedFiles.failUpload(fileXhr._queuedId, response, statusCodeMessage);
    }
  }, {
    key: 'itemIsSelected',
    value: function itemIsSelected(id) {
      return this.props.selectedFiles.indexOf(id) > -1;
    }
  }, {
    key: 'toggleSelectConcat',
    value: function toggleSelectConcat(event) {
      this.props.actions.gallery.setConcatenateSelect(this.isConcat(event));
    }
  }, {
    key: 'isConcat',
    value: function isConcat(event) {
      return event.metaKey || event.ctrlKey || event.shiftKey;
    }
  }, {
    key: 'itemIsHighlighted',
    value: function itemIsHighlighted(id) {
      return this.props.fileId === id;
    }
  }, {
    key: 'hasOpenedItem',
    value: function hasOpenedItem() {
      return !!this.props.fileId;
    }
  }, {
    key: 'handleClearSearch',
    value: function handleClearSearch(event) {
      this.props.onClearSearch(event);
    }
  }, {
    key: 'handleGroupSelect',
    value: function handleGroupSelect(items, event) {
      var _this4 = this;

      var _props$actions$galler = this.props.actions.gallery,
          setSelectedFiles = _props$actions$galler.setSelectedFiles,
          selectFiles = _props$actions$galler.selectFiles;

      var selectableFiles = this.getSelectableFiles();

      var selectItems = items.filter(function (id, index) {
        if (items.indexOf(id) !== index) {
          return false;
        }
        return selectableFiles.find(function (file) {
          return file.id === id;
        });
      });

      var concat = this.props.concatenateSelect || this.isConcat(event);

      if (this.props.maxFilesSelect !== null) {
        var totalFiles = selectItems.length;
        if (concat) {
          var totalSelected = this.props.selectedFiles.filter(function (id) {
            return !_this4.props.selectedFiles.includes(id);
          }).concat(this.props.selectedFiles);

          totalFiles = totalSelected.length;
        }

        if (totalFiles >= this.props.maxFilesSelect) {
          return;
        }
      }

      if (!concat) {
        setSelectedFiles(selectItems);
      } else {
        selectFiles(selectItems);
      }
    }
  }, {
    key: 'handleClearSelection',
    value: function handleClearSelection() {
      this.props.actions.gallery.deselectFiles();
    }
  }, {
    key: 'handleBeginSelection',
    value: function handleBeginSelection(e) {
      var node = e.target;

      while (node) {
        if (node.classList.contains('griddle-footer')) {
          return false;
        }
        if (node.classList.contains('gallery__main--selectable')) {
          break;
        }
        node = node.parentNode;
      }
      return true;
    }
  }, {
    key: 'handleOpenFolder',
    value: function handleOpenFolder(event, folder) {
      event.preventDefault();
      this.props.onOpenFolder(folder.id);
    }
  }, {
    key: 'handleOpenFile',
    value: function handleOpenFile(event, file) {
      event.preventDefault();

      if (file.created === null) {
        return;
      }

      if ((!this.props.selectedFiles.length || this.props.maxFilesSelect === 1) && this.props.type === ACTION_TYPES.SELECT) {
        this.handleSelect(event, file);
      }

      this.props.onOpenFile(file.id, file);
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect(event, item) {
      var maxFiles = this.props.maxFilesSelect;
      var selectable = this.getSelectableFiles();
      var selectedItemIDs = selectable.filter(function (file) {
        return file.id === item.id;
      }).map(function (file) {
        return file.id;
      });

      if (maxFiles === 1) {
        this.props.actions.gallery.setSelectedFiles(selectedItemIDs);
        return;
      }

      if (this.props.selectedFiles.indexOf(item.id) === -1) {
        if (event.shiftKey) {
          selectedItemIDs = this.getSelection(this.props.lastSelected, item.id);
        }

        var totalSelected = this.props.selectedFiles.filter(function (id) {
          return !selectedItemIDs.includes(id);
        }).concat(selectedItemIDs);

        if (totalSelected.length > maxFiles && maxFiles !== null) {
          return;
        }

        this.props.actions.gallery.selectFiles(selectedItemIDs);
        this.props.actions.gallery.setLastSelected(item.id);
      } else {
        this.props.actions.gallery.deselectFiles([item.id]);

        if (event.shiftKey) {
          this.props.actions.gallery.setLastSelected(null);
        }
      }
    }
  }, {
    key: 'handleEnableDropzone',
    value: function handleEnableDropzone(enabled) {
      this.props.actions.gallery.setEnableDropzone(enabled);
    }
  }, {
    key: 'handleMoveFiles',
    value: function handleMoveFiles(folderId, fileIds) {
      var _this5 = this;

      this.props.actions.files.moveFiles(folderId, fileIds).then(function () {
        var duration = _index2.default.MOVE_SUCCESS_DURATION;
        var message = '+' + fileIds.length;

        _this5.props.actions.gallery.setFileBadge(folderId, message, 'success', duration);

        if (typeof _this5.props.onMoveFilesSuccess === 'function') {
          _this5.props.onMoveFilesSuccess(folderId, fileIds);
        }
      }).catch(function () {
        _this5.props.actions.toasts.error(_i18n2.default._t('AssetAdmin.FAILED_MOVE', 'There was an error moving the selected items.'));
      });
    }
  }, {
    key: 'handleBulkEdit',
    value: function handleBulkEdit(event, items) {
      this.handleOpenFile(event, items[0]);
    }
  }, {
    key: 'handleBulkMove',
    value: function handleBulkMove() {
      this.props.actions.gallery.activateModal(_index2.default.MODAL_MOVE);
    }
  }, {
    key: 'renderTransitionBulkActions',
    value: function renderTransitionBulkActions() {
      return this.renderBulkActions();
    }
  }, {
    key: 'renderBulkActions',
    value: function renderBulkActions() {
      var _this6 = this;

      var _props = this.props,
          type = _props.type,
          dialog = _props.dialog,
          maxFilesSelect = _props.maxFilesSelect,
          files = _props.files,
          selectedFiles = _props.selectedFiles;

      var actionFilter = type === ACTION_TYPES.SELECT || dialog ? function (action) {
        return action.value === ACTION_TYPES.INSERT;
      } : function (action) {
        return action.value !== ACTION_TYPES.INSERT;
      };

      var actions = _index2.default.BULK_ACTIONS.filter(actionFilter).map(function (action) {
        if (action.callback) {
          return action;
        }
        switch (action.value) {
          case ACTION_TYPES.DELETE:
            {
              return _extends({}, action, {
                callback: function callback(event, items) {
                  _this6.props.actions.confirmDeletion.confirm(items);
                },
                confirm: undefined
              });
            }
          case ACTION_TYPES.EDIT:
            {
              return _extends({}, action, { callback: _this6.handleBulkEdit });
            }
          case ACTION_TYPES.MOVE:
            {
              return _extends({}, action, { callback: _this6.handleBulkMove });
            }
          case ACTION_TYPES.PUBLISH:
            {
              return _extends({}, action, { callback: _this6.handleBulkPublish });
            }
          case ACTION_TYPES.UNPUBLISH:
            {
              return _extends({}, action, { callback: _this6.handleBulkUnpublish });
            }
          case ACTION_TYPES.INSERT:
            {
              return _extends({}, action, { callback: _this6.handleBulkInsert, color: 'primary' });
            }
          default:
            {
              return action;
            }
        }
      });

      var selected = selectedFiles.map(function (id) {
        return files.find(function (file) {
          return file && id === file.id;
        });
      }).filter(function (item) {
        return item;
      });

      if (selected.length > 0 && [ACTION_TYPES.ADMIN, ACTION_TYPES.SELECT].includes(type)) {
        return _react2.default.createElement(_BulkActions2.default, {
          actions: actions,
          items: selected,
          total: maxFilesSelect,
          key: selected.length > 0,
          container: this.gallery,
          showCount: maxFilesSelect !== 1
        });
      }

      return null;
    }
  }, {
    key: 'renderGalleryView',
    value: function renderGalleryView() {
      var _this7 = this;

      var GalleryView = this.props.view === 'table' ? _TableView2.default : _ThumbnailView2.default;
      var files = this.props.files.map(function (file) {
        var selected = _this7.itemIsSelected(file.id);
        var highlighted = _this7.itemIsHighlighted(file.id);
        var key = (file.queuedId ? 'queueId' + file.queuedId : 'id' + file.id) + (selected ? '--selected' : '');
        return _extends({}, file, { selected: selected, highlighted: highlighted, key: key });
      });
      var _props2 = this.props,
          type = _props2.type,
          loading = _props2.loading,
          dialog = _props2.dialog,
          page = _props2.page,
          totalCount = _props2.totalCount,
          limit = _props2.limit,
          sort = _props2.sort,
          selectedFiles = _props2.selectedFiles,
          badges = _props2.badges,
          maxFilesSelect = _props2.maxFilesSelect,
          sectionConfig = _props2.sectionConfig;

      var selectableItems = type === ACTION_TYPES.SELECT || type === ACTION_TYPES.ADMIN && (!maxFilesSelect || maxFilesSelect > 1);

      var props = {
        selectableItems: selectableItems,
        selectableFolders: type !== ACTION_TYPES.SELECT && !dialog,
        files: files,
        loading: loading,
        page: page,
        totalCount: totalCount,
        limit: limit,
        sort: sort,
        selectedFiles: selectedFiles,
        badges: badges,
        onSort: this.handleSort,
        onSetPage: this.handleSetPage,
        onOpenFile: this.handleOpenFile,
        onOpenFolder: this.handleOpenFolder,
        onSelect: this.handleSelect,
        onCancelUpload: this.handleCancelUpload,
        onDropFiles: this.handleMoveFiles,
        onRemoveErroredUpload: this.handleRemoveErroredUpload,
        onEnableDropzone: this.handleEnableDropzone,
        sectionConfig: sectionConfig,
        canDrag: type === ACTION_TYPES.ADMIN,
        maxFilesSelect: maxFilesSelect
      };

      return _react2.default.createElement(GalleryView, props);
    }
  }, {
    key: 'renderToolbar',
    value: function renderToolbar() {
      var _props3 = this.props,
          GalleryToolbar = _props3.GalleryToolbar,
          sort = _props3.sort,
          view = _props3.view,
          folder = _props3.folder,
          onCreateFolder = _props3.onCreateFolder,
          onOpenFolder = _props3.onOpenFolder,
          onViewChange = _props3.onViewChange;


      var props = {
        onMoveFiles: this.handleMoveFiles,
        onSort: this.handleSort,
        onCreateFolder: onCreateFolder,
        onOpenFolder: onOpenFolder,
        onViewChange: onViewChange,
        view: view,
        sort: sort,
        folder: folder
      };

      return _react2.default.createElement(GalleryToolbar, props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      var _props4 = this.props,
          folder = _props4.folder,
          loading = _props4.loading,
          errorMessage = _props4.errorMessage,
          graphQLErrors = _props4.graphQLErrors,
          noticeMessage = _props4.noticeMessage;

      var Loading = this.props.LoadingComponent;
      var hasGraphQLErrors = graphQLErrors && graphQLErrors.length > 0;

      if (!folder) {
        if (errorMessage || hasGraphQLErrors) {
          return _react2.default.createElement(
            'div',
            { className: 'gallery__error flexbox-area-grow' },
            _react2.default.createElement(
              'div',
              { className: 'gallery__error-message' },
              _react2.default.createElement(
                'h3',
                null,
                _i18n2.default._t('AssetAdmin.DROPZONE_RESPONSE_ERROR', 'Server responded with an error.')
              ),
              errorMessage && _react2.default.createElement(
                'p',
                null,
                errorMessage
              ),
              hasGraphQLErrors && graphQLErrors.map(function (error, index) {
                return _react2.default.createElement(
                  'p',
                  { key: index },
                  error
                );
              })
            )
          );
        }
        if (loading) {
          return _react2.default.createElement(
            'div',
            { className: 'flexbox-area-grow' },
            _react2.default.createElement(Loading, null)
          );
        }
        return _react2.default.createElement(
          'div',
          { className: 'flexbox-area-grow' },
          _react2.default.createElement(
            'div',
            { className: 'editor__file-preview-message--file-missing m-t-3' },
            _i18n2.default._t('Admin.UNKNOWN_ERROR', 'An unknown error has occurred')
          )
        );
      }

      var messages = _react2.default.createElement(
        'div',
        { className: 'gallery_messages' },
        errorMessage && _react2.default.createElement(_FormAlert2.default, { value: errorMessage, type: 'danger' }),
        noticeMessage && _react2.default.createElement(_FormAlert2.default, { value: noticeMessage, type: 'success' })
      );

      var dimensions = {
        height: _index2.default.THUMBNAIL_HEIGHT,
        width: _index2.default.THUMBNAIL_WIDTH
      };
      var dropzoneOptions = _extends({
        url: this.props.createFileApiUrl,
        method: this.props.createFileApiMethod,
        paramName: 'Upload',
        clickable: '#upload-button'
      }, this.props.sectionConfig.dropzoneOptions);

      var securityID = this.props.securityId;
      var canEdit = this.props.folder.canEdit && this.props.enableDropzone;

      var galleryClasses = ['panel', 'panel--padded', 'panel--scrollable', 'gallery__main', 'fill-height'];
      if (this.props.type === ACTION_TYPES.INSERT) {
        galleryClasses.push('insert-media-modal__main');
      }

      var cssClasses = galleryClasses;
      if (this.hasOpenedItem()) {
        cssClasses.push('gallery__main--has-opened-item');
      }

      return _react2.default.createElement(
        'div',
        {
          className: 'flexbox-area-grow gallery__outer',
          ref: function ref(gallery) {
            _this8.gallery = gallery;
          }
        },
        this.renderTransitionBulkActions(),
        _react2.default.createElement(
          _GalleryDND2.default,
          { className: galleryClasses.join(' ') },
          this.renderToolbar(),
          _react2.default.createElement(
            _reactSelectable.SelectableGroup,
            {
              enabled: this.props.view === 'tile' && this.props.type === ACTION_TYPES.ADMIN,
              className: 'flexbox-area-grow fill-height gallery__main--selectable',
              onSelection: this.handleGroupSelect,
              onNonItemClick: this.handleClearSelection,
              onBeginSelection: this.handleBeginSelection,
              preventDefault: false,
              fixedPosition: true
            },
            _react2.default.createElement(
              _AssetDropzone2.default,
              {
                name: 'gallery-container',
                className: 'flexbox-area-grow',
                canUpload: canEdit,
                onAddedFile: this.handleAddedFile,
                onPreviewLoaded: this.handlePreviewLoaded,
                onError: this.handleFailedUpload,
                onSuccess: this.handleSuccessfulUpload,
                onQueueComplete: this.handleQueueComplete,
                onSending: this.handleSending,
                onUploadProgress: this.handleUploadProgress,
                preview: dimensions,
                folderId: this.props.folderId,
                options: dropzoneOptions,
                securityID: securityID,
                uploadButton: false
              },
              messages,
              this.renderGalleryView()
            )
          )
        ),
        this.props.loading && _react2.default.createElement(Loading, null),
        _react2.default.createElement(_MoveModal2.default, {
          sectionConfig: this.props.sectionConfig,
          folderId: this.props.folderId,
          onSuccess: this.props.onMoveFilesSuccess,
          onOpenFolder: this.props.onOpenFolder
        })
      );
    }
  }]);

  return Gallery;
}(_react.Component);

var sharedDefaultProps = {
  page: 1,
  limit: 15
};

var sharedPropTypes = {
  sectionConfig: _configShape2.default,
  loading: _propTypes2.default.bool,
  sort: _propTypes2.default.string,
  files: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.number,
    parent: _propTypes2.default.shape({
      id: _propTypes2.default.number
    })
  })).isRequired,
  selectedFiles: _propTypes2.default.arrayOf(_propTypes2.default.number),
  totalCount: _propTypes2.default.number,
  page: _propTypes2.default.number,
  limit: _propTypes2.default.number,
  badges: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.number,
    message: _propTypes2.default.node,
    status: _propTypes2.default.string
  })),
  onOpenFile: _propTypes2.default.func.isRequired,
  onOpenFolder: _propTypes2.default.func.isRequired,
  onSort: _propTypes2.default.func.isRequired,
  onSetPage: _propTypes2.default.func.isRequired,
  maxFilesSelect: _propTypes2.default.number
};

var galleryViewDefaultProps = Object.assign({}, sharedDefaultProps, {
  selectableItems: false
});

var galleryViewPropTypes = Object.assign({}, sharedPropTypes, {
  selectableItems: _propTypes2.default.bool,
  selectableFolders: _propTypes2.default.bool,
  onSelect: _propTypes2.default.func,
  onCancelUpload: _propTypes2.default.func,
  onRemoveErroredUpload: _propTypes2.default.func,
  onEnableDropzone: _propTypes2.default.func
});

Gallery.defaultProps = Object.assign({}, sharedDefaultProps, {
  type: ACTION_TYPES.ADMIN,
  view: 'tile',
  enableDropzone: true,
  dialog: false
});

Gallery.propTypes = Object.assign({}, sharedPropTypes, {
  onSuccessfulUpload: _propTypes2.default.func,
  onSuccessfulUploadQueue: _propTypes2.default.func,
  onCreateFolder: _propTypes2.default.func,
  onMoveFilesSuccess: _propTypes2.default.func,
  onPublish: _propTypes2.default.func,
  onUnpublish: _propTypes2.default.func,
  type: _propTypes2.default.oneOf(['insert-media', 'insert-link', ACTION_TYPES.SELECT, ACTION_TYPES.ADMIN]),
  view: _propTypes2.default.oneOf(['tile', 'table']),
  lastSelected: _propTypes2.default.number,
  dialog: _propTypes2.default.bool,
  fileId: _propTypes2.default.number,
  folderId: _propTypes2.default.number.isRequired,
  folder: _propTypes2.default.shape({
    id: _propTypes2.default.number,
    title: _propTypes2.default.string,
    parentId: _propTypes2.default.number,
    canView: _propTypes2.default.bool,
    canEdit: _propTypes2.default.bool
  }),

  files: _propTypes2.default.array,
  errorMessage: _propTypes2.default.string,
  graphQLErrors: _propTypes2.default.arrayOf(_propTypes2.default.string),
  actions: _propTypes2.default.object,
  securityId: _propTypes2.default.string,
  onViewChange: _propTypes2.default.func.isRequired,
  createFileApiUrl: _propTypes2.default.string,
  createFileApiMethod: _propTypes2.default.string,
  search: _propTypes2.default.object,
  enableDropzone: _propTypes2.default.bool,
  concatenateSelect: _propTypes2.default.bool,
  GalleryToolbar: _propTypes2.default.func,
  sorters: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    field: _propTypes2.default.string.isRequired,
    direction: _propTypes2.default.oneOf(['asc', 'desc']).isRequired,
    label: _propTypes2.default.string.isRequired
  })).isRequired
});

function mapStateToProps(state, ownProps) {
  var sort = ownProps.sort;
  var _state$assetAdmin$gal = state.assetAdmin.gallery,
      selectedFiles = _state$assetAdmin$gal.selectedFiles,
      errorMessage = _state$assetAdmin$gal.errorMessage,
      noticeMessage = _state$assetAdmin$gal.noticeMessage,
      enableDropzone = _state$assetAdmin$gal.enableDropzone,
      badges = _state$assetAdmin$gal.badges,
      concatenateSelect = _state$assetAdmin$gal.concatenateSelect,
      loading = _state$assetAdmin$gal.loading,
      sorters = _state$assetAdmin$gal.sorters,
      lastSelected = _state$assetAdmin$gal.lastSelected;

  if (!sort && sorters && sorters[0]) {
    sort = sorters[0].field + ',' + sorters[0].direction;
  }

  return {
    lastSelected: lastSelected,
    selectedFiles: selectedFiles,
    errorMessage: errorMessage,
    noticeMessage: noticeMessage,
    enableDropzone: enableDropzone,
    badges: badges,
    concatenateSelect: concatenateSelect,
    loading: ownProps.loading || loading,
    queuedFiles: state.assetAdmin.queuedFiles,
    securityId: state.config.SecurityID,
    sorters: sorters,
    sort: sort
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      gallery: (0, _redux.bindActionCreators)(galleryActions, dispatch),
      toasts: (0, _redux.bindActionCreators)(toastsActions, dispatch),
      queuedFiles: (0, _redux.bindActionCreators)(queuedFilesActions, dispatch),
      confirmDeletion: (0, _redux.bindActionCreators)(confirmDeletionActions, dispatch)
    }
  };
}

exports.Component = Gallery;
exports.galleryViewPropTypes = galleryViewPropTypes;
exports.galleryViewDefaultProps = galleryViewDefaultProps;
exports.default = (0, _redux.compose)((0, _Injector.inject)(['GalleryToolbar', 'Loading'], function (GalleryToolbar, Loading) {
  return {
    GalleryToolbar: GalleryToolbar,
    LoadingComponent: Loading
  };
}, function () {
  return 'AssetAdmin.Gallery';
}), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _moveFilesMutation2.default, function (component) {
  return (0, _reactApollo.withApollo)(component);
})(Gallery);

/***/ }),

/***/ "./client/src/containers/Gallery/GalleryDND.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

var _GalleryItemDragLayer = __webpack_require__("./client/src/components/GalleryItem/GalleryItemDragLayer.js");

var _GalleryItemDragLayer2 = _interopRequireDefault(_GalleryItemDragLayer);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withDragDropContext = __webpack_require__(46);

var _withDragDropContext2 = _interopRequireDefault(_withDragDropContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GalleryDND = function (_Component) {
  _inherits(GalleryDND, _Component);

  function GalleryDND(props) {
    _classCallCheck(this, GalleryDND);

    var _this = _possibleConstructorReturn(this, (GalleryDND.__proto__ || Object.getPrototypeOf(GalleryDND)).call(this, props));

    _this.state = {
      dragging: false
    };
    _this.mounted = false;
    _this.handleDrop = _this.handleDrop.bind(_this);
    return _this;
  }

  _createClass(GalleryDND, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mounted = true;
      window.addEventListener('drop', this.handleDrop, true);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      var _this2 = this;

      setTimeout(function () {
        if (!_this2.mounted || !_this2.context.dragDropManager) {
          return;
        }
        var manager = _this2.context.dragDropManager;

        var dragging = manager.monitor.isDragging();
        if (_this2.state.dragging !== dragging) {
          _this2.setState({ dragging: dragging });
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;
      window.removeEventListener('drop', this.handleDrop, true);
    }
  }, {
    key: 'handleDrop',
    value: function handleDrop() {
      var manager = this.context.dragDropManager;
      var backend = manager && manager.backend;

      if (backend && backend.isDraggingNativeItem()) {
        backend.endDragNativeItem();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(className, { 'gallery__main--dragging': this.state.dragging }) },
        children,
        _react2.default.createElement(_GalleryItemDragLayer2.default, null)
      );
    }
  }]);

  return GalleryDND;
}(_react.Component);

GalleryDND.contextTypes = {
  dragDropManager: _propTypes2.default.object
};

GalleryDND.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node])
};

exports.default = (0, _withDragDropContext2.default)(GalleryDND);

/***/ }),

/***/ "./client/src/containers/HistoryList/HistoryItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HistoryItem = function (_Component) {
  _inherits(HistoryItem, _Component);

  function HistoryItem(props) {
    _classCallCheck(this, HistoryItem);

    var _this = _possibleConstructorReturn(this, (HistoryItem.__proto__ || Object.getPrototypeOf(HistoryItem)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(HistoryItem, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      if (typeof this.props.onClick === 'function') {
        this.props.onClick(this.props.versionid);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var publishedLine = null;

      if (this.props.status === 'Published') {
        publishedLine = _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'span',
            { className: 'history-item__status-flag' },
            this.props.status
          ),
          ' at ',
          this.props.date_formatted
        );
      }

      return _react2.default.createElement(
        'li',
        {
          className: 'list-group-item history-item',
          onClick: this.handleClick
        },
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'span',
            { className: 'history-item__version' },
            'v.',
            this.props.versionid
          ),
          _react2.default.createElement(
            'span',
            { className: 'history-item__date' },
            this.props.date_ago,
            ' ',
            this.props.author
          ),
          this.props.summary
        ),
        publishedLine
      );
    }
  }]);

  return HistoryItem;
}(_react.Component);

HistoryItem.propTypes = {
  versionid: _propTypes2.default.number.isRequired,
  summary: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]).isRequired,
  status: _propTypes2.default.string,
  author: _propTypes2.default.string,
  date_formatted: _propTypes2.default.string,
  date_ago: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

exports.default = HistoryItem;

/***/ }),

/***/ "./client/src/containers/HistoryList/HistoryList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _Backend = __webpack_require__(24);

var _Backend2 = _interopRequireDefault(_Backend);

var _Config = __webpack_require__(25);

var _Config2 = _interopRequireDefault(_Config);

var _HistoryItem = __webpack_require__("./client/src/containers/HistoryList/HistoryItem.js");

var _HistoryItem2 = _interopRequireDefault(_HistoryItem);

var _FormBuilderLoader = __webpack_require__(26);

var _FormBuilderLoader2 = _interopRequireDefault(_FormBuilderLoader);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sectionConfigKey = 'SilverStripe\\AssetAdmin\\Controller\\AssetAdmin';

var createEndpoint = function createEndpoint(endpointConfig) {
  var includeToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return _Backend2.default.createEndpointFetcher(Object.assign({}, endpointConfig, includeToken ? { defaultData: { SecurityID: _Config2.default.get('SecurityID') } } : {}));
};

var HistoryList = function (_Component) {
  _inherits(HistoryList, _Component);

  function HistoryList(props) {
    _classCallCheck(this, HistoryList);

    var _this = _possibleConstructorReturn(this, (HistoryList.__proto__ || Object.getPrototypeOf(HistoryList)).call(this, props));

    _this.state = {
      detailView: null,
      history: [],
      loadedDetails: false
    };

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleBack = _this.handleBack.bind(_this);

    _this.timer = null;

    _this.api = createEndpoint(props.sectionConfig.historyEndpoint);
    return _this;
  }

  _createClass(HistoryList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.refreshHistoryIfNeeded();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.refreshHistoryIfNeeded(nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }, {
    key: 'refreshHistoryIfNeeded',
    value: function refreshHistoryIfNeeded(nextProps) {
      var _this2 = this;

      if (!nextProps && !this.state.loadedDetails || nextProps.data.fileId !== this.props.data.fileId || nextProps.data.latestVersionId !== this.props.data.latestVersionId) {
        this.setState({ loadedDetails: false });
        var fileId = nextProps ? nextProps.data.fileId : this.props.data.fileId;
        clearTimeout(this.timer);

        this.timer = setTimeout(function () {
          _this2.api({
            fileId: fileId
          }).then(function (history) {
            if (_this2.timer) {
              _this2.setState({ history: history, loadedDetails: true });
            }
          });
        }, 250);
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(versionId) {
      this.setState({
        viewDetails: versionId
      });
    }
  }, {
    key: 'handleBack',
    value: function handleBack(event) {
      event.preventDefault();

      this.setState({
        viewDetails: null
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (!this.state.loadedDetails) {
        return _react2.default.createElement(
          'div',
          { className: 'history-list history-list--loading' },
          'Loading...'
        );
      }

      if (this.state.viewDetails) {
        var schemaUrl = [this.props.historySchemaUrl, this.props.data.fileId, this.state.viewDetails].join('/');

        var backButtonClasses = ['btn', 'btn-secondary', 'btn--icon-xl', 'btn--no-text', 'font-icon-left-open-big', 'history-list__back'].join(' ');

        return _react2.default.createElement(
          'div',
          { className: 'history-list' },
          _react2.default.createElement('a', { href: '#', className: backButtonClasses, onClick: this.handleBack }),
          _react2.default.createElement(_FormBuilderLoader2.default, {
            identifier: 'AssetAdmin.HistoryList',
            schemaUrl: schemaUrl,
            formTag: 'div'
          })
        );
      }

      var historyList = this.state.history || [];
      return _react2.default.createElement(
        'div',
        { className: 'history-list' },
        _react2.default.createElement(
          'ul',
          { className: 'list-group list-group-flush history-list__list' },
          historyList.map(function (history) {
            return _react2.default.createElement(_HistoryItem2.default, _extends({
              key: history.versionid
            }, history, {
              onClick: _this3.handleClick
            }));
          })
        )
      );
    }
  }]);

  return HistoryList;
}(_react.Component);

HistoryList.propTypes = {
  sectionConfig: _propTypes2.default.shape({
    form: _propTypes2.default.object,
    historyEndpoint: _propTypes2.default.shape({
      url: _propTypes2.default.string,
      method: _propTypes2.default.string,
      responseFormat: _propTypes2.default.string
    })
  }),
  historySchemaUrl: _propTypes2.default.string,
  data: _propTypes2.default.object
};

HistoryList.defaultProps = {
  data: {
    fieldId: 0
  }
};

function mapStateToProps(state) {
  var sectionConfig = state.config.sections.find(function (section) {
    return section.name === sectionConfigKey;
  });
  return {
    sectionConfig: sectionConfig,
    historySchemaUrl: sectionConfig.form.fileHistoryForm.schemaUrl
  };
}

exports.Component = HistoryList;
exports.default = (0, _reactRedux.connect)(mapStateToProps)(HistoryList);

/***/ }),

/***/ "./client/src/containers/MoveModal/MoveModal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(5);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _index = __webpack_require__("./client/src/constants/index.js");

var _index2 = _interopRequireDefault(_index);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GalleryActions = __webpack_require__("./client/src/state/gallery/GalleryActions.js");

var _ToastsActions = __webpack_require__(23);

var _FormBuilderModal = __webpack_require__(13);

var _FormBuilderModal2 = _interopRequireDefault(_FormBuilderModal);

var _configShape = __webpack_require__("./client/src/lib/configShape.js");

var _configShape2 = _interopRequireDefault(_configShape);

var _moveFilesMutation = __webpack_require__("./client/src/state/files/moveFilesMutation.js");

var _moveFilesMutation2 = _interopRequireDefault(_moveFilesMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MoveModal = function (_React$Component) {
  _inherits(MoveModal, _React$Component);

  function MoveModal(props) {
    _classCallCheck(this, MoveModal);

    var _this = _possibleConstructorReturn(this, (MoveModal.__proto__ || Object.getPrototypeOf(MoveModal)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.timeout = null;
    return _this;
  }

  _createClass(MoveModal, [{
    key: 'handleSubmit',
    value: function handleSubmit(_ref) {
      var _this2 = this;

      var FolderID = _ref.FolderID;
      var moveFiles = this.props.actions.files.moveFiles;
      var _props = this.props,
          selectedFiles = _props.selectedFiles,
          onSuccess = _props.onSuccess,
          onClosed = _props.onClosed,
          setNotice = _props.setNotice,
          setError = _props.setError,
          setBadge = _props.setBadge;

      return moveFiles(FolderID || 0, selectedFiles).then(function (_ref2) {
        var _ref2$data$moveFiles = _ref2.data.moveFiles,
            id = _ref2$data$moveFiles.id,
            filename = _ref2$data$moveFiles.filename;

        if (typeof onSuccess === 'function') {
          onSuccess(FolderID, selectedFiles);
        }

        setBadge(id, '' + selectedFiles.length, 'success', _index2.default.MOVE_SUCCESS_DURATION);

        setNotice(_i18n2.default.sprintf(_i18n2.default._t('AssetAdmin.MOVED_ITEMS_TO', 'Moved %s item(s) to %s'), selectedFiles.length, filename), [{
          label: _i18n2.default._t('AssetAdmin.GO_TO_FOLDER', 'Go to folder'),
          onClick: function onClick() {
            return _this2.props.onOpenFolder(id);
          }
        }]);

        onClosed();
      }).catch(function () {
        setError(_i18n2.default._t('AssetAdmin.FAILED_MOVE', 'There was an error moving the selected items.'));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          isOpen = _props2.isOpen,
          onClosed = _props2.onClosed,
          title = _props2.title,
          folderId = _props2.folderId,
          sectionConfig = _props2.sectionConfig;
      var schemaUrl = sectionConfig.form.moveForm.schemaUrl;

      return _react2.default.createElement(_FormBuilderModal2.default, {
        title: title,
        isOpen: isOpen,
        onClosed: onClosed,
        onSubmit: this.handleSubmit,
        identifier: 'AssetAdmin.MoveForm',
        schemaUrl: schemaUrl + '/' + folderId
      });
    }
  }]);

  return MoveModal;
}(_react2.default.Component);

MoveModal.propTypes = {
  sectionConfig: _configShape2.default,
  folderId: _propTypes2.default.number.isRequired,
  isOpen: _propTypes2.default.bool,
  onClosed: _propTypes2.default.func,
  setNotice: _propTypes2.default.func,
  setBadge: _propTypes2.default.func,
  setError: _propTypes2.default.func,
  title: _propTypes2.default.string,
  onSuccess: _propTypes2.default.func,
  onOpenFolder: _propTypes2.default.func.isRequired,
  selectedFiles: _propTypes2.default.array.isRequired,
  actions: _propTypes2.default.shape({
    files: _propTypes2.default.shape({
      moveFiles: _propTypes2.default.func
    })
  }).isRequired
};

MoveModal.defaultProps = {
  isOpen: false
};

function mapStateToProps(state) {
  var _state$assetAdmin$gal = state.assetAdmin.gallery,
      modal = _state$assetAdmin$gal.modal,
      selectedFiles = _state$assetAdmin$gal.selectedFiles;

  return {
    isOpen: modal === _index2.default.MODAL_MOVE,
    selectedFiles: selectedFiles,
    title: _i18n2.default.sprintf(_i18n2.default._t('AssetAdmin.MOVE_ITEMS_TO', 'Move %s item(s) to...'), selectedFiles.length)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClosed: function onClosed() {
      dispatch((0, _GalleryActions.deactivateModal)());
    },
    setNotice: function setNotice(msg) {
      var actions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      dispatch((0, _ToastsActions.display)({ text: msg, type: 'success', actions: actions }));
    },
    setError: function setError(msg) {
      dispatch((0, _ToastsActions.display)({ text: msg, type: 'error' }));
    },
    setBadge: function setBadge() {
      dispatch(_GalleryActions.setFileBadge.apply(undefined, arguments));
    }
  };
}

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _moveFilesMutation2.default)(MoveModal);

/***/ }),

/***/ "./client/src/containers/TableView/TableView.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _griddleReact = __webpack_require__("./node_modules/griddle-react/modules/griddle.jsx.js");

var _griddleReact2 = _interopRequireDefault(_griddleReact);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _FileStatusIcon = __webpack_require__(19);

var _FileStatusIcon2 = _interopRequireDefault(_FileStatusIcon);

var _Gallery = __webpack_require__("./client/src/containers/Gallery/Gallery.js");

var _DataFormat = __webpack_require__(14);

var _Injector = __webpack_require__(3);

var _redux = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableView = function (_Component) {
  _inherits(TableView, _Component);

  function TableView(props) {
    _classCallCheck(this, TableView);

    var _this = _possibleConstructorReturn(this, (TableView.__proto__ || Object.getPrototypeOf(TableView)).call(this, props));

    _this.getColumns = _this.getColumns.bind(_this);
    _this.handleSort = _this.handleSort.bind(_this);
    _this.handleSetPage = _this.handleSetPage.bind(_this);
    _this.handleRowClick = _this.handleRowClick.bind(_this);
    _this.renderSelect = _this.renderSelect.bind(_this);
    _this.renderTitle = _this.renderTitle.bind(_this);
    _this.renderStatus = _this.renderStatus.bind(_this);
    _this.renderNoItemsNotice = _this.renderNoItemsNotice.bind(_this);
    return _this;
  }

  _createClass(TableView, [{
    key: 'getColumns',
    value: function getColumns() {
      var columns = ['thumbnail', 'title', 'status', 'size', 'lastEdited'];

      if (this.props.selectableItems) {
        columns.unshift('selected');
      }

      return columns;
    }
  }, {
    key: 'getColumnConfig',
    value: function getColumnConfig() {
      return [{
        columnName: 'selected',
        sortable: false,
        displayName: '',
        cssClassName: 'gallery__table-column--select',
        customComponent: this.renderSelect
      }, {
        columnName: 'thumbnail',
        sortable: false,
        displayName: '',
        cssClassName: 'gallery__table-column--image',
        customComponent: this.renderThumbnail
      }, {
        columnName: 'title',
        customCompareFn: function customCompareFn() {
          return 0;
        },
        displayName: _i18n2.default._t('File.TITLE', 'Title'),
        cssClassName: 'gallery__table-column--title',
        customComponent: this.renderTitle
      }, {
        columnName: 'status',
        sortable: false,
        cssClassName: 'sort--disabled',
        customComponent: this.renderStatus,
        displayName: _i18n2.default._t('File.STATUS', 'Status')
      }, {
        columnName: 'lastEdited',
        displayName: _i18n2.default._t('File.MODIFIED', 'Modified'),
        customComponent: this.renderDate
      }, {
        columnName: 'size',
        sortable: false,
        displayName: _i18n2.default._t('File.SIZE', 'Size'),
        cssClassName: 'sort--disabled',
        customComponent: this.renderSize
      }];
    }
  }, {
    key: 'getRowMetadata',
    value: function getRowMetadata(rowData) {
      return 'gallery__table-row ' + (rowData.highlighted ? 'gallery__table-row--highlighted' : '');
    }
  }, {
    key: 'getTableProps',
    value: function getTableProps() {
      var _props$sort$split = this.props.sort.split(','),
          _props$sort$split2 = _slicedToArray(_props$sort$split, 2),
          sortColumn = _props$sort$split2[0],
          sortDirection = _props$sort$split2[1];

      return {
        tableClassName: 'gallery__table table table-hover',
        gridClassName: 'gallery__main-view--table',
        rowMetadata: {
          bodyCssClassName: this.getRowMetadata,
          key: 'key'
        },
        sortAscendingComponent: '',
        sortDescendingComponent: '',
        useExternal: true,
        externalSetPage: this.handleSetPage,
        externalChangeSort: this.handleSort,

        externalSetFilter: function externalSetFilter() {
          return null;
        },
        externalSetPageSize: function externalSetPageSize() {
          return null;
        },
        externalCurrentPage: this.props.page - 1,
        externalMaxPage: Math.ceil(this.props.totalCount / this.props.limit),
        externalSortColumn: sortColumn,
        externalSortAscending: sortDirection === 'asc',
        initialSort: sortColumn,
        columns: this.getColumns(),
        columnMetadata: this.getColumnConfig(),
        useGriddleStyles: false,
        onRowClick: this.handleRowClick,

        results: this.props.files,
        customNoDataComponent: this.renderNoItemsNotice
      };
    }
  }, {
    key: 'handleActivate',
    value: function handleActivate(event, item) {
      if (item.type === 'folder') {
        this.props.onOpenFolder(event, item);
      } else {
        this.props.onOpenFile(event, item);
      }
    }
  }, {
    key: 'handleRowClick',
    value: function handleRowClick(row, event) {
      var item = row.props.data;

      if (event.currentTarget.classList.contains('gallery__table-column--select')) {
        event.stopPropagation();
        event.preventDefault();
        if (typeof this.props.onSelect === 'function') {
          this.props.onSelect(event, item);
          return;
        }
      }

      this.handleActivate(event, item);
    }
  }, {
    key: 'handleSort',
    value: function handleSort(column, ascending) {
      var direction = ascending ? 'asc' : 'desc';

      this.props.onSort(column + ',' + direction);
    }
  }, {
    key: 'handleSetPage',
    value: function handleSetPage(page) {
      this.props.onSetPage(page + 1);
    }
  }, {
    key: 'preventFocus',
    value: function preventFocus(event) {
      event.preventDefault();
    }
  }, {
    key: 'renderNoItemsNotice',
    value: function renderNoItemsNotice() {
      if (this.props.files.length === 0 && !this.props.loading) {
        return _react2.default.createElement(
          'p',
          { className: 'gallery__no-item-notice' },
          _i18n2.default._t('AssetAdmin.NOITEMSFOUND')
        );
      }

      return null;
    }
  }, {
    key: 'renderSize',
    value: function renderSize(props) {
      if (props.rowData.type === 'folder') {
        return null;
      }
      var description = (0, _DataFormat.fileSize)(props.data);

      return _react2.default.createElement(
        'span',
        null,
        description
      );
    }
  }, {
    key: 'renderStatus',
    value: function renderStatus(props) {
      var flags = [];
      var item = props.rowData;
      var VersionedBadge = this.props.VersionedBadge;


      if (item.type !== 'folder') {
        if (item.draft) {
          flags.push({
            key: 'status-draft',
            status: 'draft'
          });
        } else if (item.modified) {
          flags.push({
            key: 'status-modified',
            status: 'modified'
          });
        }
      }

      flags = flags.map(function (_ref) {
        var attributes = _objectWithoutProperties(_ref, []);

        return _react2.default.createElement(VersionedBadge, attributes);
      });

      return flags ? _react2.default.createElement(
        'span',
        null,
        flags
      ) : null;
    }
  }, {
    key: 'renderProgressBar',
    value: function renderProgressBar(rowData) {
      if (!rowData.queuedId || rowData.message && rowData.message.type === 'error') {
        return null;
      }
      if (rowData.id > 0) {
        return _react2.default.createElement('div', { className: 'gallery__progress-bar--complete' });
      }
      var progressBarProps = {
        className: 'gallery__progress-bar-progress',
        style: {
          width: rowData.progress + '%'
        }
      };

      return _react2.default.createElement(
        'div',
        { className: 'gallery__progress-bar' },
        _react2.default.createElement('div', progressBarProps)
      );
    }
  }, {
    key: 'renderRestrictedAccess',
    value: function renderRestrictedAccess(rowData) {
      var hasRestrictedAccess = rowData.hasRestrictedAccess;

      var attrs = {
        fileID: rowData.id,
        placement: 'top',
        hasRestrictedAccess: hasRestrictedAccess
      };
      return _react2.default.createElement(_FileStatusIcon2.default, attrs);
    }
  }, {
    key: 'renderTrackedFormUpload',
    value: function renderTrackedFormUpload(rowData) {
      var isTrackedFormUpload = rowData.isTrackedFormUpload,
          hasRestrictedAccess = rowData.hasRestrictedAccess;

      var attrs = {
        fileID: rowData.id,
        placement: 'top',
        isTrackedFormUpload: isTrackedFormUpload,
        hasRestrictedAccess: hasRestrictedAccess
      };
      return _react2.default.createElement(_FileStatusIcon2.default, attrs);
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle(props) {
      var progress = this.renderProgressBar(props.rowData);

      return _react2.default.createElement(
        'div',
        { className: 'fill-width' },
        _react2.default.createElement(
          'div',
          { className: 'flexbox-area-grow' },
          _react2.default.createElement(
            'span',
            null,
            props.data
          ),
          props.rowData.hasRestrictedAccess && this.renderRestrictedAccess(props.rowData),
          props.rowData.isTrackedFormUpload && this.renderTrackedFormUpload(props.rowData)
        ),
        progress
      );
    }
  }, {
    key: 'renderSelect',
    value: function renderSelect(props) {
      if (this.props.selectableItems && (this.props.selectableFolders || props.rowData.type !== 'folder')) {
        var checkboxProps = {
          type: 'checkbox',
          title: _i18n2.default._t('AssetAdmin.SELECT'),
          defaultChecked: props.data,
          tabIndex: -1,
          onMouseDown: this.preventFocus
        };

        var maxSelected = ![null, 1].includes(this.props.maxFilesSelect) && this.props.selectedFiles.length >= this.props.maxFilesSelect;

        if (maxSelected && !props.data) {
          checkboxProps.disabled = true;
        }

        return _react2.default.createElement('input', checkboxProps);
      }
      return null;
    }
  }, {
    key: 'renderDate',
    value: function renderDate(props) {
      if (props.rowData.type === 'folder') {
        return null;
      }

      moment.locale(_i18n2.default.detectLocale());
      return _react2.default.createElement(
        'span',
        null,
        moment(props.data).format('L LT')
      );
    }
  }, {
    key: 'renderThumbnail',
    value: function renderThumbnail(props) {
      var url = props.data || props.rowData.url;
      var uploading = props.rowData.queuedId && !props.rowData.id;
      var category = props.rowData.category || 'false';
      var baseClass = 'gallery__table-image';
      var classNames = [baseClass];
      var styles = {};

      classNames.push(baseClass + '--' + category);

      if (category === 'image' && url) {
        styles.backgroundImage = 'url("' + url + '")';
      }

      if (!uploading && !url && category !== 'folder') {
        classNames.push(baseClass + '--error');
      }

      return _react2.default.createElement('div', { className: classNames.join(' '), style: styles });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_griddleReact2.default, this.getTableProps());
    }
  }]);

  return TableView;
}(_react.Component);

TableView.defaultProps = _Gallery.galleryViewDefaultProps;

TableView.propTypes = _extends({}, _Gallery.galleryViewPropTypes, {
  sort: _propTypes2.default.string.isRequired,
  VersionedBadge: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func])
});

exports.Component = TableView;
exports.default = (0, _redux.compose)((0, _Injector.inject)(['VersionedBadge'], function (VersionedBadge) {
  return { VersionedBadge: VersionedBadge };
}))(TableView);

/***/ }),

/***/ "./client/src/containers/ThumbnailView/ThumbnailView.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Injector = __webpack_require__(3);

var _Gallery = __webpack_require__("./client/src/containers/Gallery/Gallery.js");

var _griddleReact = __webpack_require__("./node_modules/griddle-react/modules/griddle.jsx.js");

var _griddleReact2 = _interopRequireDefault(_griddleReact);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThumbnailView = function (_Component) {
  _inherits(ThumbnailView, _Component);

  function ThumbnailView(props) {
    _classCallCheck(this, ThumbnailView);

    var _this = _possibleConstructorReturn(this, (ThumbnailView.__proto__ || Object.getPrototypeOf(ThumbnailView)).call(this, props));

    _this.renderItem = _this.renderItem.bind(_this);
    _this.handleSetPage = _this.handleSetPage.bind(_this);
    _this.handlePrevPage = _this.handlePrevPage.bind(_this);
    _this.handleNextPage = _this.handleNextPage.bind(_this);
    _this.handleDrag = _this.handleDrag.bind(_this);
    return _this;
  }

  _createClass(ThumbnailView, [{
    key: 'handleDrag',
    value: function handleDrag(dragging) {
      this.props.onEnableDropzone(!dragging);
    }
  }, {
    key: 'handleSetPage',
    value: function handleSetPage(page) {
      this.props.onSetPage(page + 1);
    }
  }, {
    key: 'handleNextPage',
    value: function handleNextPage() {
      var currentPage = this.props.page - 1;
      this.handleSetPage(currentPage + 1);
    }
  }, {
    key: 'handlePrevPage',
    value: function handlePrevPage() {
      var currentPage = this.props.page - 1;
      if (currentPage === 0) {
        this.handleSetPage(currentPage);
        return;
      }
      this.handleSetPage(currentPage - 1);
    }
  }, {
    key: 'folderFilter',
    value: function folderFilter(file) {
      return file.type === 'folder';
    }
  }, {
    key: 'fileFilter',
    value: function fileFilter(file) {
      return file.type !== 'folder';
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      if (this.props.totalCount <= this.props.limit) {
        return null;
      }
      var props = {
        setPage: this.handleSetPage,
        maxPage: Math.ceil(this.props.totalCount / this.props.limit),
        next: this.handleNextPage,
        nextText: _i18n2.default._t('AssetAdmin.NEXT', 'Next'),
        previous: this.handlePrevPage,
        previousText: _i18n2.default._t('AssetAdmin.PREVIOUS', 'Previous'),
        currentPage: this.props.page - 1,
        useGriddleStyles: false
      };
      return _react2.default.createElement(
        'div',
        { className: 'griddle-footer' },
        _react2.default.createElement(_griddleReact2.default.GridPagination, props)
      );
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item) {
      var _props = this.props,
          File = _props.File,
          Folder = _props.Folder,
          badges = _props.badges,
          sectionConfig = _props.sectionConfig,
          selectedFiles = _props.selectedFiles,
          selectableItems = _props.selectableItems,
          selectableFolders = _props.selectableFolders;

      var badge = badges.find(function (badgeItem) {
        return badgeItem.id === item.id;
      });
      var props = {
        sectionConfig: sectionConfig,
        key: item.key,
        selectableKey: item.id,
        item: item,
        selectedFiles: selectedFiles,
        onDrag: this.handleDrag,
        badge: badge,
        canDrag: this.props.canDrag
      };

      if (item.queuedId && !item.id) {
        var _props2 = this.props,
            onCancelUpload = _props2.onCancelUpload,
            onRemoveErroredUpload = _props2.onRemoveErroredUpload;

        props = _extends({}, props, { onCancelUpload: onCancelUpload, onRemoveErroredUpload: onRemoveErroredUpload });
      } else {
        var _props3 = this.props,
            onOpenFolder = _props3.onOpenFolder,
            onOpenFile = _props3.onOpenFile;

        props = _extends({}, props, {
          onActivate: item.type === 'folder' ? onOpenFolder : onOpenFile
        });
      }

      if (selectableItems && (selectableFolders || item.type !== 'folder')) {
        var maxSelected = ![null, 1].includes(this.props.maxFilesSelect) && this.props.selectedFiles.length >= this.props.maxFilesSelect;
        var onSelect = this.props.maxFilesSelect === 1 ? props.onActivate : this.props.onSelect;
        props = _extends({}, props, { selectable: true, onSelect: onSelect, maxSelected: maxSelected });
      }

      if (item.type === 'folder') {
        var onDropFiles = this.props.onDropFiles;

        props = _extends({}, props, { onDropFiles: onDropFiles });
        return _react2.default.createElement(Folder, props);
      }
      return _react2.default.createElement(File, props);
    }
  }, {
    key: 'render',
    value: function render() {
      var className = 'gallery__main-view--tile';
      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'div',
          { className: 'gallery__folders' },
          this.props.files.filter(this.folderFilter).map(this.renderItem)
        ),
        _react2.default.createElement(
          'div',
          { className: 'gallery__files' },
          this.props.files.filter(this.fileFilter).map(this.renderItem)
        ),
        this.props.files.length === 0 && !this.props.loading && _react2.default.createElement(
          'p',
          { className: 'gallery__no-item-notice' },
          _i18n2.default._t('AssetAdmin.NOITEMSFOUND')
        ),
        _react2.default.createElement(
          'div',
          { className: 'gallery__load' },
          this.renderPagination()
        )
      );
    }
  }]);

  return ThumbnailView;
}(_react.Component);

ThumbnailView.defaultProps = _Gallery.galleryViewDefaultProps;

ThumbnailView.propTypes = _extends({}, _Gallery.galleryViewPropTypes, {
  File: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
  Folder: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired
});

var injector = (0, _Injector.inject)(['GalleryItemFile', 'GalleryItemFolder'], function (GalleryItemFile, GalleryItemFolder) {
  return {
    File: GalleryItemFile,
    Folder: GalleryItemFolder
  };
}, function () {
  return 'AssetAdmin.Gallery.ThumbnailView';
});

exports.Component = ThumbnailView;
exports.default = injector(ThumbnailView);

/***/ }),

/***/ "./client/src/entwine/UploadField/UploadFieldEntwine.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jquery = __webpack_require__(7);

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _schemaFieldValues = __webpack_require__(45);

var _Injector = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jquery2.default.entwine('ss', function ($) {
  $('.js-injector-boot input.entwine-uploadfield').entwine({
    Component: null,

    getContainer: function getContainer() {
      var container = this.siblings('.uploadfield-holder')[0];
      if (!container) {
        var newContainer = $('<div class="uploadfield-holder"></div>');
        this.before(newContainer);

        container = newContainer[0];
      }
      return container;
    },
    onunmatch: function onunmatch() {
      this._super();

      _reactDom2.default.unmountComponentAtNode(this.siblings('.uploadfield-holder')[0]);
    },
    onmatch: function onmatch() {
      var cmsContent = this.closest('.cms-content').attr('id');
      var context = cmsContent ? { context: cmsContent } : {};

      var UploadField = (0, _Injector.loadComponent)('UploadField', context);
      this.setComponent(UploadField);

      this._super();
      this.hide();
      this.refresh();
    },
    onclick: function onclick(e) {
      e.preventDefault();
    },
    refresh: function refresh() {
      var props = this.getAttributes();
      var form = $(this).closest('form');
      var onChange = function onChange() {
        setTimeout(function () {
          form.trigger('change');
        }, 0);
      };

      var UploadField = this.getComponent();

      _reactDom2.default.render(_react2.default.createElement(UploadField, _extends({}, props, {
        onChange: onChange,
        noHolder: true
      })), this.getContainer());
    },
    getAttributes: function getAttributes() {
      var state = $(this).data('state');
      var schema = $(this).data('schema');
      return (0, _schemaFieldValues.schemaMerge)(schema, state);
    }
  });
});

/***/ }),

/***/ "./client/src/lib/configShape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configShape = _propTypes2.default.shape({
  url: _propTypes2.default.string,
  limit: _propTypes2.default.number,
  imageRetry: _propTypes2.default.shape({
    minRetry: _propTypes2.default.number,
    maxRetry: _propTypes2.default.number,
    expiry: _propTypes2.default.number
  }),
  form: _propTypes2.default.object,
  dropzoneOptions: _propTypes2.default.object
});

exports.default = configShape;

/***/ }),

/***/ "./client/src/lib/fileFragments.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var fileInterface = "\n  fragment FileInterfaceFields on FileInterface {\n    canDelete\n    canEdit\n    canView\n    category\n    exists\n    filename\n    id\n    lastEdited\n    name\n    parentId\n    title\n    type\n    url\n    visibility\n    hasRestrictedAccess\n  }\n";

var file = "\n  fragment FileFields on File {\n    draft\n    extension\n    published\n    modified\n    size\n    smallThumbnail\n    thumbnail\n    version\n    isTrackedFormUpload\n  }\n";

exports.fileInterface = fileInterface;
exports.file = file;

/***/ }),

/***/ "./client/src/lib/fileShape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fileShape = _propTypes2.default.shape({
  canEdit: _propTypes2.default.bool,
  canDelete: _propTypes2.default.bool,
  canView: _propTypes2.default.bool,
  exists: _propTypes2.default.bool,
  type: _propTypes2.default.string,
  smallThumbnail: _propTypes2.default.string,
  thumbnail: _propTypes2.default.string,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  category: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  id: _propTypes2.default.number,
  url: _propTypes2.default.string,
  title: _propTypes2.default.string,
  progress: _propTypes2.default.number,
  visibility: _propTypes2.default.string,
  hasRestrictedAccess: _propTypes2.default.bool,
  isTrackedFormUpload: _propTypes2.default.bool
});

exports.default = fileShape;

/***/ }),

/***/ "./client/src/lib/fileStructure.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deepFreezeStrict = __webpack_require__(15);

var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fileStructure = (0, _deepFreezeStrict2.default)({
  name: null,
  canDelete: false,
  canEdit: false,
  category: null,
  created: null,
  extension: null,
  filename: null,
  id: 0,
  lastEdited: null,
  messages: null,
  owner: {
    id: 0,
    title: null
  },
  parent: {
    filename: null,
    id: 0,
    title: null
  },
  queuedId: null,
  size: null,
  title: null,
  type: null,
  url: null,
  xhr: null,
  thumbnail: null,
  smallThumbnail: null,
  height: null,
  width: null
});

exports.default = fileStructure;

/***/ }),

/***/ "./client/src/lib/getFormSchema.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFormSchema;

var _index = __webpack_require__("./client/src/constants/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _CONSTANTS$ACTIONS = _index2.default.ACTIONS,
    CREATE_FOLDER = _CONSTANTS$ACTIONS.CREATE_FOLDER,
    EDIT_FILE = _CONSTANTS$ACTIONS.EDIT_FILE;
function getFormSchema(_ref) {
  var form = _ref.config.form,
      viewAction = _ref.viewAction,
      folderId = _ref.folderId,
      fileId = _ref.fileId,
      type = _ref.type;

  var schemaUrl = null;
  var targetId = null;

  if (viewAction === CREATE_FOLDER) {
    schemaUrl = form.folderCreateForm.schemaUrl;
    targetId = folderId;

    return { schemaUrl: schemaUrl, targetId: targetId };
  }

  if (viewAction === EDIT_FILE && fileId) {
    switch (type) {
      case 'insert-media':
        schemaUrl = form.fileInsertForm.schemaUrl;
        break;
      case 'insert-link':
        schemaUrl = form.fileEditorLinkForm.schemaUrl;
        break;
      case 'select':
        schemaUrl = form.fileSelectForm.schemaUrl;
        break;
      case 'admin':
      default:
        schemaUrl = form.fileEditForm.schemaUrl;
        break;
    }

    targetId = fileId;
    return { schemaUrl: schemaUrl, targetId: targetId };
  }

  return {};
}

/***/ }),

/***/ "./client/src/lib/getStatusCodeMessage.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getStatusCodeMessage;

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStatusCodeMessage(statusCode) {
  if (statusCode === 413) {
    return _i18n2.default._t('AssetAdmin.ERROR_FILE_SIZE', 'File size limit exceeded');
  }
  return _i18n2.default._t('AssetAdmin.ERROR_DEFAULT', 'Something went wrong, please try again');
}

/***/ }),

/***/ "./client/src/state/confirmDeletion/ConfirmDeletionActionTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  CONFIRM_DELETION_ASK: 'CONFIRM_DELETION_ASK',
  CONFIRM_DELETION_CONFIRM: 'CONFIRM_DELETION_CONFIRM',
  CONFIRM_DELETION_CANCEL: 'CONFIRM_DELETION_CANCEL',
  CONFIRM_DELETION_RESET: 'CONFIRM_DELETION_RESET',
  CONFIRM_DELETION_MODAL_CLOSE: 'CONFIRM_DELETION_MODAL_CLOSE'
};

/***/ }),

/***/ "./client/src/state/confirmDeletion/ConfirmDeletionActions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirm = confirm;
exports.deleting = deleting;
exports.cancel = cancel;
exports.reset = reset;
exports.modalClose = modalClose;

var _ConfirmDeletionActionTypes = __webpack_require__("./client/src/state/confirmDeletion/ConfirmDeletionActionTypes.js");

var _ConfirmDeletionActionTypes2 = _interopRequireDefault(_ConfirmDeletionActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function confirm(files) {
  return {
    type: _ConfirmDeletionActionTypes2.default.CONFIRM_DELETION_ASK,
    payload: { files: files }
  };
}

function deleting() {
  return {
    type: _ConfirmDeletionActionTypes2.default.CONFIRM_DELETION_CONFIRM,
    payload: {}
  };
}

function cancel() {
  return {
    type: _ConfirmDeletionActionTypes2.default.CONFIRM_DELETION_CANCEL,
    payload: {}
  };
}

function reset() {
  return {
    type: _ConfirmDeletionActionTypes2.default.CONFIRM_DELETION_RESET,
    payload: {}
  };
}

function modalClose() {
  return {
    type: _ConfirmDeletionActionTypes2.default.CONFIRM_DELETION_MODAL_CLOSE,
    payload: {}
  };
}

/***/ }),

/***/ "./client/src/state/confirmDeletion/ConfirmDeletionReducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ConfirmDeletionActionTypes = __webpack_require__("./client/src/state/confirmDeletion/ConfirmDeletionActionTypes.js");

var _ConfirmDeletionActionTypes2 = _interopRequireDefault(_ConfirmDeletionActionTypes);

var _ConfirmDeletionTransitions = __webpack_require__("./client/src/state/confirmDeletion/ConfirmDeletionTransitions.js");

var TRANSITIONS = _interopRequireWildcard(_ConfirmDeletionTransitions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  showConfirmation: false,
  files: [],
  transition: TRANSITIONS.NO_TRANSITION
};

function confirmDeletionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _ConfirmDeletionActionTypes2.default.CONFIRM_DELETION_ASK:
      return _extends({}, initialState, { showConfirmation: true, files: action.payload.files });

    case _ConfirmDeletionActionTypes2.default.CONFIRM_DELETION_CANCEL:
      if (state.showConfirmation) {
        return _extends({}, state, { transition: TRANSITIONS.CANCELING });
      }
      break;

    case _ConfirmDeletionActionTypes2.default.CONFIRM_DELETION_CONFIRM:
      if (state.showConfirmation) {
        return _extends({}, state, { transition: TRANSITIONS.DELETING });
      }
      break;

    case _ConfirmDeletionActionTypes2.default.CONFIRM_DELETION_MODAL_CLOSE:
      return _extends({}, state, { showConfirmation: false, transition: TRANSITIONS.NO_TRANSITION });

    case _ConfirmDeletionActionTypes2.default.CONFIRM_DELETION_RESET:
      return initialState;

    default:
  }

  return state;
}

exports.default = confirmDeletionReducer;

/***/ }),

/***/ "./client/src/state/confirmDeletion/ConfirmDeletionTransitions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var NO_TRANSITION = exports.NO_TRANSITION = false;

var CANCELING = exports.CANCELING = 'canceling';

var DELETING = exports.DELETING = 'deleting';

/***/ }),

/***/ "./client/src/state/displaySearch/DisplaySearchActionTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  TOGGLE_SEARCH: 'TOGGLE_SEARCH',
  OPEN_SEARCH: 'OPEN_SEARCH',
  CLOSE_SEARCH: 'CLOSE_SEARCH'
};

/***/ }),

/***/ "./client/src/state/displaySearch/DisplaySearchActions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleSearch = toggleSearch;
exports.openSearch = openSearch;
exports.closeSearch = closeSearch;

var _DisplaySearchActionTypes = __webpack_require__("./client/src/state/displaySearch/DisplaySearchActionTypes.js");

var _DisplaySearchActionTypes2 = _interopRequireDefault(_DisplaySearchActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toggleSearch() {
  return {
    type: _DisplaySearchActionTypes2.default.TOGGLE_SEARCH,
    payload: null
  };
}

function openSearch() {
  return {
    type: _DisplaySearchActionTypes2.default.OPEN_SEARCH,
    payload: null
  };
}

function closeSearch() {
  return {
    type: _DisplaySearchActionTypes2.default.CLOSE_SEARCH,
    payload: null
  };
}

/***/ }),

/***/ "./client/src/state/displaySearch/DisplaySearchReducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _deepFreezeStrict = __webpack_require__(15);

var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);

var _DisplaySearchActionTypes = __webpack_require__("./client/src/state/displaySearch/DisplaySearchActionTypes.js");

var _DisplaySearchActionTypes2 = _interopRequireDefault(_DisplaySearchActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  isOpen: false
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _DisplaySearchActionTypes2.default.TOGGLE_SEARCH:
      {
        return (0, _deepFreezeStrict2.default)(_extends({}, state, { isOpen: !state.isOpen }));
      }

    case _DisplaySearchActionTypes2.default.OPEN_SEARCH:
      {
        return (0, _deepFreezeStrict2.default)(_extends({}, state, { isOpen: true }));
      }

    case _DisplaySearchActionTypes2.default.CLOSE_SEARCH:
      {
        return (0, _deepFreezeStrict2.default)(_extends({}, state, { isOpen: false }));
      }

    default:
      {
        return state;
      }
  }
}

exports.default = reducer;

/***/ }),

/***/ "./client/src/state/files/_legacy/readFilesQuery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Search = __webpack_require__(16);

var _Injector = __webpack_require__(3);

var apolloConfig = {
  options: function options(_ref) {
    var sectionConfig = _ref.sectionConfig,
        folderId = _ref.folderId,
        fileId = _ref.fileId,
        params = _ref.query;

    var filter = Object.assign({}, params.filter);
    var childrenFilter = Object.assign({}, filter, {
      parentId: undefined,

      recursive: (0, _Search.hasFilters)(filter),

      currentFolderOnly: undefined
    });

    var anyChildId = (0, _Search.hasFilters)(filter) ? null : fileId || null;
    var id = anyChildId ? null : folderId || 0;

    var rootFilter = {
      id: id,

      anyChildId: anyChildId
    };

    var _ref2 = params.sort ? params.sort.split(',') : ['', ''],
        _ref3 = _slicedToArray(_ref2, 2),
        sortField = _ref3[0],
        sortDir = _ref3[1];

    var limit = params.limit || sectionConfig.limit;
    return {
      variables: {
        rootFilter: rootFilter,
        childrenFilter: childrenFilter,
        limit: limit,
        offset: ((params.page || 1) - 1) * limit,
        sortBy: sortField && sortDir ? [{ field: sortField, direction: sortDir.toUpperCase() }] : undefined
      }
    };
  },
  props: function props(_ref4) {
    var _ref4$data = _ref4.data,
        error = _ref4$data.error,
        refetch = _ref4$data.refetch,
        readFiles = _ref4$data.readFiles,
        networkLoading = _ref4$data.loading,
        actions = _ref4.ownProps.actions;

    var folder = readFiles && readFiles.nodes[0] ? readFiles.nodes[0] : null;
    var files = folder && folder.children ? folder.children.nodes.filter(function (file) {
      return file;
    }) : [];
    var filesTotalCount = folder && folder.children ? folder.children.pageInfo.totalCount : 0;

    var filesLoading = folder && !folder.children;

    var errors = error && error.graphQLErrors && error.graphQLErrors.map(function (graphQLError) {
      return graphQLError.message;
    });
    return {
      loading: networkLoading || filesLoading,
      folder: folder,
      files: files,
      filesTotalCount: filesTotalCount,
      graphQLErrors: errors,
      actions: Object.assign({}, actions, {
        files: Object.assign({}, actions.files, {
          readFiles: refetch
        })
      })
    };
  }
};

var READ = _Injector.graphqlTemplates.READ;

var query = {
  apolloConfig: apolloConfig,
  templateName: READ,
  pluralName: 'Files',
  pagination: false,
  params: {
    limit: 'Int!',
    offset: 'Int!',
    rootFilter: 'FileFilterInput',
    childrenFilter: 'FileFilterInput',
    sortBy: '[ChildrenSortInputType]'
  },
  args: {
    root: {
      filter: 'rootFilter'
    },
    'root/nodes/...on Folder/children': {
      limit: 'limit',
      offset: 'offset',
      filter: 'childrenFilter',
      sortBy: 'sortBy'
    }
  },
  fragments: ['FileInterfaceFields', 'FileFields'],
  fields: ['pageInfo', ['totalCount'], 'nodes', ['...FileInterfaceFields', '...FileFields', '...on Folder', ['children', ['pageInfo', ['totalCount'], 'nodes', ['...FileInterfaceFields', '...FileFields']], 'parents', ['id', 'title']]]]
};

exports.default = query;

/***/ }),

/***/ "./client/src/state/files/_legacy/readOneFileQuery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(3);

var apolloConfig = {
  options: function options(_ref) {
    var fileId = _ref.fileId;

    return {
      variables: {
        rootFilter: {
          id: fileId
        }
      }
    };
  },
  props: function props(_ref2) {
    var _ref2$data = _ref2.data,
        error = _ref2$data.error,
        readFiles = _ref2$data.readFiles,
        loading = _ref2$data.loading;

    var file = readFiles && readFiles.nodes[0] ? readFiles.nodes[0] : null;
    var errors = error && error.graphQLErrors && error.graphQLErrors.map(function (graphQLError) {
      return graphQLError.message;
    });
    return {
      loading: loading,
      file: file,
      graphQLErrors: errors
    };
  }
};

var READ = _Injector.graphqlTemplates.READ;

var query = {
  apolloConfig: apolloConfig,
  templateName: READ,
  pluralName: 'Files',
  pagination: false,
  params: {
    rootFilter: 'FileFilterInput'
  },
  args: {
    root: {
      filter: 'rootFilter'
    }
  },
  fragments: ['FileInterfaceFields', 'FileFields'],
  fields: ['nodes', ['...FileInterfaceFields', '...FileFields']]
};

exports.default = query;

/***/ }),

/***/ "./client/src/state/files/buildPublicationMutation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  mutation ', '($ids:[ID]!, $force:Boolean, $quiet:Boolean) {\n    ', '(ids: $ids, force: $force, quiet: $quiet) {\n      ...on File {\n        __typename\n        ...FileInterfaceFields\n        ...FileFields\n      }\n      ...on PublicationNotice {\n        __typename\n        noticeType\n        message\n        ids\n      }\n    }\n  }\n  ', '\n  ', '\n'], ['\n  mutation ', '($ids:[ID]!, $force:Boolean, $quiet:Boolean) {\n    ', '(ids: $ids, force: $force, quiet: $quiet) {\n      ...on File {\n        __typename\n        ...FileInterfaceFields\n        ...FileFields\n      }\n      ...on PublicationNotice {\n        __typename\n        noticeType\n        message\n        ids\n      }\n    }\n  }\n  ', '\n  ', '\n']);

var _graphqlTag = __webpack_require__(20);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _fileFragments = __webpack_require__("./client/src/lib/fileFragments.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var buildPublicationMutation = function buildPublicationMutation(mutationName) {
  var operationName = mutationName.charAt(0).toUpperCase() + mutationName.slice(1);
  var mutation = (0, _graphqlTag2.default)(_templateObject, operationName, mutationName, _fileFragments.fileInterface, _fileFragments.file);

  var isProd = "development" === 'production';
  var config = {
    props: function props(_ref) {
      var mutate = _ref.mutate,
          actions = _ref.ownProps.actions;

      var mutationAction = function mutationAction(ids) {
        var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var quiet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : isProd;
        return mutate({
          variables: {
            ids: ids,
            quiet: quiet,
            force: force
          }
        });
      };

      return {
        actions: _extends({}, actions, {
          files: _extends({}, actions.files, _defineProperty({}, mutationName, mutationAction))
        })
      };
    }
  };

  return { mutation: mutation, config: config };
};

exports.default = buildPublicationMutation;

/***/ }),

/***/ "./client/src/state/files/deleteFilesMutation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.mutation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['mutation DeleteFiles($ids:[ID]!) {\n  deleteFiles(ids: $ids)\n}'], ['mutation DeleteFiles($ids:[ID]!) {\n  deleteFiles(ids: $ids)\n}']);

var _reactApollo = __webpack_require__(11);

var _graphqlTag = __webpack_require__(20);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _Injector = __webpack_require__(3);

var _Injector2 = _interopRequireDefault(_Injector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var mutation = (0, _graphqlTag2.default)(_templateObject);

var config = {
  props: function props(_ref) {
    var mutate = _ref.mutate,
        ownProps = _ref.ownProps;
    var actions = ownProps.actions;

    var deleteFiles = function deleteFiles(ids) {
      var parentId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return mutate({
        variables: {
          ids: ids
        },
        update: function update(store) {
          var readFilesQuery = _Injector2.default.query.get('ReadFilesQuery');
          var readFilesConfig = readFilesQuery.getApolloConfig();
          var variables = readFilesConfig.options(ownProps).variables;
          if (parentId !== null) {
            variables.rootFilter.id = parentId;
            variables.rootFilter.anyChildId = null;
          }
          var query = readFilesQuery.getGraphqlAST();
          var data = store.readQuery({ query: query, variables: variables });

          var newData = JSON.parse(JSON.stringify(data));

          if (newData.readFiles.nodes) {
            var nodes = newData.readFiles.nodes[0].children.nodes;

            nodes = nodes.filter(function (node) {
              return !ids.includes(node.id);
            });
            newData.readFiles.nodes[0].children.nodes = nodes;
            newData.readFiles.nodes[0].children.pageInfo.totalCount = nodes.length;
          } else {
            var _nodes = newData.readFiles[0].children.nodes;

            _nodes = _nodes.filter(function (node) {
              return !ids.includes(node.id);
            });
            newData.readFiles[0].children.nodes = _nodes;
            newData.readFiles[0].children.pageInfo.totalCount = _nodes.length;
          }
          store.writeQuery({ query: query, data: newData, variables: variables });
        }
      });
    };

    return {
      actions: _extends({}, actions, {
        files: _extends({}, actions.files, {
          deleteFiles: deleteFiles
        })
      })
    };
  }
};

exports.mutation = mutation;
exports.config = config;
exports.default = (0, _reactApollo.graphql)(mutation, config);

/***/ }),

/***/ "./client/src/state/files/moveFilesMutation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.mutation = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  mutation MoveFiles($folderId:ID!, $fileIds:[ID]!) {\n    moveFiles(folderId: $folderId, fileIds: $fileIds) {\n      ...FileInterfaceFields\n      ...FileFields\n    }\n  }\n  ', '\n  ', '\n'], ['\n  mutation MoveFiles($folderId:ID!, $fileIds:[ID]!) {\n    moveFiles(folderId: $folderId, fileIds: $fileIds) {\n      ...FileInterfaceFields\n      ...FileFields\n    }\n  }\n  ', '\n  ', '\n']);

var _reactApollo = __webpack_require__(11);

var _graphqlTag = __webpack_require__(20);

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _fileFragments = __webpack_require__("./client/src/lib/fileFragments.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var mutation = (0, _graphqlTag2.default)(_templateObject, _fileFragments.fileInterface, _fileFragments.file);

var config = {
  props: function props(_ref) {
    var mutate = _ref.mutate,
        _ref$ownProps$actions = _ref.ownProps.actions,
        actions = _ref$ownProps$actions === undefined ? {} : _ref$ownProps$actions;
    return {
      actions: Object.assign({}, actions, {
        files: Object.assign({}, actions.files, {
          moveFiles: function moveFiles(folderId, fileIds) {
            return mutate({
              variables: {
                folderId: folderId,
                fileIds: fileIds
              },
              update: function update() {
                window.ss.apolloClient.resetStore();
              }
            });
          }
        })
      })
    };
  }
};

exports.mutation = mutation;
exports.config = config;
exports.default = (0, _reactApollo.graphql)(mutation, config);

/***/ }),

/***/ "./client/src/state/files/publishFilesMutation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.mutation = undefined;

var _reactApollo = __webpack_require__(11);

var _buildPublicationMutation = __webpack_require__("./client/src/state/files/buildPublicationMutation.js");

var _buildPublicationMutation2 = _interopRequireDefault(_buildPublicationMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _buildPublicationMuta = (0, _buildPublicationMutation2.default)('publishFiles'),
    mutation = _buildPublicationMuta.mutation,
    config = _buildPublicationMuta.config;

exports.mutation = mutation;
exports.config = config;
exports.default = (0, _reactApollo.graphql)(mutation, config);

/***/ }),

/***/ "./client/src/state/files/readDescendantFileCountsQuery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Injector = __webpack_require__(3);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var apolloConfig = {
  options: function options(_ref) {
    var files = _ref.files;

    return {
      variables: {
        ids: files.map(function (file) {
          return file.id;
        })
      }
    };
  },
  props: function props(_props) {
    var _props$data = _props.data,
        error = _props$data.error,
        readDescendantFileCounts = _props$data.readDescendantFileCounts,
        networkLoading = _props$data.loading;

    var errors = error && error.graphQLErrors && error.graphQLErrors.map(function (graphQLError) {
      return graphQLError.message;
    });

    var descendantFileCounts = readDescendantFileCounts ? readDescendantFileCounts.reduce(function (accumulator, _ref2) {
      var id = _ref2.id,
          count = _ref2.count;
      return _extends({}, accumulator, _defineProperty({}, id, count));
    }, {}) : {};

    return {
      loading: networkLoading,
      descendantFileCounts: descendantFileCounts,
      graphQLErrors: errors
    };
  }
};

var READ = _Injector.graphqlTemplates.READ;

var query = {
  apolloConfig: apolloConfig,
  templateName: READ,
  pluralName: 'DescendantFileCounts',
  pagination: false,
  params: {
    ids: '[ID]!'
  },
  args: {
    root: {
      ids: 'ids'
    }
  },
  fields: ['id', 'count']
};
exports.default = query;

/***/ }),

/***/ "./client/src/state/files/readFileUsageQuery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Injector = __webpack_require__(3);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var apolloConfig = {
  options: function options(_ref) {
    var files = _ref.files;

    return {
      variables: {
        ids: files.map(function (file) {
          return file.id;
        })
      }
    };
  },
  props: function props(_props) {
    var _props$data = _props.data,
        error = _props$data.error,
        readFileUsage = _props$data.readFileUsage,
        networkLoading = _props$data.loading;

    var errors = error && error.graphQLErrors && error.graphQLErrors.map(function (graphQLError) {
      return graphQLError.message;
    });

    var fileUsage = readFileUsage ? readFileUsage.reduce(function (accumulator, _ref2) {
      var id = _ref2.id,
          inUseCount = _ref2.inUseCount;
      return _extends({}, accumulator, _defineProperty({}, id, inUseCount));
    }, {}) : {};

    return {
      loading: networkLoading,
      fileUsage: fileUsage,
      graphQLErrors: errors
    };
  }
};

var READ = _Injector.graphqlTemplates.READ;

var query = {
  apolloConfig: apolloConfig,
  templateName: READ,
  pluralName: 'FileUsage',
  pagination: false,
  params: {
    ids: '[ID]!'
  },
  args: {
    root: {
      ids: 'ids'
    }
  },
  fields: ['id', 'inUseCount']
};
exports.default = query;

/***/ }),

/***/ "./client/src/state/files/readFilesQuery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _Search = __webpack_require__(16);

var _Injector = __webpack_require__(3);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var apolloConfig = {
  options: function options(_ref) {
    var sectionConfig = _ref.sectionConfig,
        folderId = _ref.folderId,
        fileId = _ref.fileId,
        params = _ref.query;

    var filter = Object.assign({}, params.filter);
    var childrenFilter = Object.assign({}, filter, {
      parentId: undefined,

      recursive: (0, _Search.hasFilters)(filter),

      currentFolderOnly: undefined
    });

    var anyChildId = (0, _Search.hasFilters)(filter) ? null : fileId || null;
    var id = anyChildId ? null : folderId || 0;

    var rootFilter = {
      id: id,

      anyChildId: anyChildId
    };

    var _ref2 = params.sort ? params.sort.split(',') : ['', ''],
        _ref3 = _slicedToArray(_ref2, 2),
        sortField = _ref3[0],
        sortDir = _ref3[1];

    var limit = params.limit || sectionConfig.limit;
    return {
      variables: {
        rootFilter: rootFilter,
        childrenFilter: childrenFilter,
        limit: limit,
        offset: ((params.page || 1) - 1) * limit,
        sortBy: sortField && sortDir ? _defineProperty({}, sortField, sortDir.toUpperCase()) : undefined
      }
    };
  },
  props: function props(_ref5) {
    var _ref5$data = _ref5.data,
        error = _ref5$data.error,
        refetch = _ref5$data.refetch,
        readFiles = _ref5$data.readFiles,
        networkLoading = _ref5$data.loading,
        actions = _ref5.ownProps.actions;

    var folder = readFiles ? readFiles[0] : null;
    var files = folder && folder.children ? folder.children.nodes.filter(function (file) {
      return file;
    }) : [];
    var filesTotalCount = folder && folder.children ? folder.children.pageInfo.totalCount : 0;

    var filesLoading = folder && !folder.children;
    var errors = error && error.graphQLErrors && error.graphQLErrors.map(function (graphQLError) {
      return graphQLError.message;
    });
    return {
      loading: networkLoading || filesLoading,
      folder: folder,
      files: files,
      filesTotalCount: filesTotalCount,
      graphQLErrors: errors,
      actions: Object.assign({}, actions, {
        files: Object.assign({}, actions.files, {
          readFiles: refetch
        })
      })
    };
  }
};

var READ = _Injector.graphqlTemplates.READ;

var query = {
  apolloConfig: apolloConfig,
  templateName: READ,
  pluralName: 'Files',
  pagination: false,
  params: {
    limit: 'Int!',
    offset: 'Int!',
    rootFilter: 'FileFilterInput',
    childrenFilter: 'FileFilterInput',
    sortBy: 'FolderChildrenSortFields'
  },
  args: {
    root: {
      filter: 'rootFilter'
    },
    'root/...on Folder/children': {
      limit: 'limit',
      offset: 'offset',
      filter: 'childrenFilter',
      sort: 'sortBy'
    }
  },
  fragments: ['FileInterfaceFields', 'FileFields'],
  fields: ['...FileInterfaceFields', '...FileFields', '...on Folder', ['children', ['pageInfo', ['totalCount'], 'nodes', ['...FileInterfaceFields', '...FileFields']], 'parents', ['id', 'title']]]
};

exports.default = query;

/***/ }),

/***/ "./client/src/state/files/readOneFileQuery.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(3);

var apolloConfig = {
  options: function options(_ref) {
    var fileId = _ref.fileId;

    return {
      variables: {
        rootFilter: {
          id: fileId
        }
      }
    };
  },
  props: function props(_ref2) {
    var _ref2$data = _ref2.data,
        error = _ref2$data.error,
        readFiles = _ref2$data.readFiles,
        networkLoading = _ref2$data.loading;

    var file = readFiles ? readFiles[0] : null;
    var errors = error && error.graphQLErrors && error.graphQLErrors.map(function (graphQLError) {
      return graphQLError.message;
    });
    return {
      loading: networkLoading,
      file: file,
      graphQLErrors: errors
    };
  }
};

var READ = _Injector.graphqlTemplates.READ;

var query = {
  apolloConfig: apolloConfig,
  templateName: READ,
  pluralName: 'Files',
  pagination: false,
  params: {
    rootFilter: 'FileFilterInput'
  },
  args: {
    root: {
      filter: 'rootFilter'
    }
  },
  fragments: ['FileInterfaceFields', 'FileFields'],
  fields: ['...FileInterfaceFields', '...FileFields']
};

exports.default = query;

/***/ }),

/***/ "./client/src/state/files/unpublishFilesMutation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.mutation = undefined;

var _reactApollo = __webpack_require__(11);

var _buildPublicationMutation = __webpack_require__("./client/src/state/files/buildPublicationMutation.js");

var _buildPublicationMutation2 = _interopRequireDefault(_buildPublicationMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _buildPublicationMuta = (0, _buildPublicationMutation2.default)('unpublishFiles'),
    mutation = _buildPublicationMuta.mutation,
    config = _buildPublicationMuta.config;

exports.mutation = mutation;
exports.config = config;
exports.default = (0, _reactApollo.graphql)(mutation, config);

/***/ }),

/***/ "./client/src/state/gallery/GalleryActionTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = ['SET_LAST_SELECTED', 'SET_SELECTED_FILES', 'DESELECT_FILES', 'SELECT_FILES', 'LOAD_FILE_REQUEST', 'LOAD_FILE_SUCCESS', 'HIGHLIGHT_FILES', 'UPDATE_BATCH_ACTIONS', 'SET_NOTICE_MESSAGE', 'SET_ERROR_MESSAGE', 'SET_ENABLE_DROPZONE', 'SET_FILE_BADGE', 'CLEAR_FILE_BADGE', 'ACTIVATE_MODAL', 'DEACTIVATE_MODAL', 'CONCATENATE_SELECT', 'SET_LOADING'].reduce(function (obj, item) {
  return Object.assign(obj, _defineProperty({}, item, 'GALLERY.' + item));
}, {});

/***/ }),

/***/ "./client/src/state/gallery/GalleryActions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLastSelected = setLastSelected;
exports.setSelectedFiles = setSelectedFiles;
exports.loadFile = loadFile;
exports.selectFiles = selectFiles;
exports.setConcatenateSelect = setConcatenateSelect;
exports.deselectFiles = deselectFiles;
exports.setNoticeMessage = setNoticeMessage;
exports.setErrorMessage = setErrorMessage;
exports.setEnableDropzone = setEnableDropzone;
exports.clearFileBadge = clearFileBadge;
exports.setFileBadge = setFileBadge;
exports.activateModal = activateModal;
exports.deactivateModal = deactivateModal;
exports.setLoading = setLoading;

var _GalleryActionTypes = __webpack_require__("./client/src/state/gallery/GalleryActionTypes.js");

var _GalleryActionTypes2 = _interopRequireDefault(_GalleryActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setLastSelected(id) {
  return function (dispatch) {
    dispatch({
      type: _GalleryActionTypes2.default.SET_LAST_SELECTED,
      payload: { id: id }
    });
  };
}

function setSelectedFiles(files) {
  return function (dispatch) {
    dispatch({
      type: _GalleryActionTypes2.default.SET_SELECTED_FILES,
      payload: { files: files }
    });
  };
}

function loadFile(id, file) {
  return function (dispatch) {
    dispatch({
      type: _GalleryActionTypes2.default.LOAD_FILE_SUCCESS,
      payload: {
        id: id,
        file: file
      }
    });
  };
}

function selectFiles() {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  return function (dispatch) {
    return dispatch({
      type: _GalleryActionTypes2.default.SELECT_FILES,
      payload: { ids: ids }
    });
  };
}

function setConcatenateSelect(concat) {
  return function (dispatch) {
    return dispatch({
      type: _GalleryActionTypes2.default.CONCATENATE_SELECT,
      payload: !!concat
    });
  };
}
function deselectFiles() {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  return function (dispatch) {
    return dispatch({
      type: _GalleryActionTypes2.default.DESELECT_FILES,
      payload: { ids: ids }
    });
  };
}

function setNoticeMessage(message) {
  return function (dispatch) {
    return dispatch({
      type: _GalleryActionTypes2.default.SET_NOTICE_MESSAGE,
      payload: { message: message }
    });
  };
}

function setErrorMessage(message) {
  return function (dispatch) {
    return dispatch({
      type: _GalleryActionTypes2.default.SET_ERROR_MESSAGE,
      payload: { message: message }
    });
  };
}

function setEnableDropzone(enableDropzone) {
  return function (dispatch) {
    return dispatch({
      type: _GalleryActionTypes2.default.SET_ENABLE_DROPZONE,
      payload: { enableDropzone: enableDropzone }
    });
  };
}

function clearFileBadge(id) {
  return function (dispatch) {
    dispatch({
      type: _GalleryActionTypes2.default.CLEAR_FILE_BADGE,
      payload: { id: id }
    });
  };
}

function setFileBadge(id, message, status, duration) {
  return function (dispatch, getState) {
    var _getState = getState(),
        assetAdmin = _getState.assetAdmin;

    var badge = assetAdmin.gallery.badges.find(function (item) {
      return item.id === id;
    });

    if (badge && badge.timer) {
      clearTimeout(badge.timer);
    }
    var timer = duration > 0 ? setTimeout(function () {
      return clearFileBadge(id)(dispatch);
    }, duration) : null;

    dispatch({
      type: _GalleryActionTypes2.default.SET_FILE_BADGE,
      payload: { id: id, message: message, status: status, timer: timer }
    });
  };
}

function activateModal(name) {
  return function (dispatch) {
    dispatch({
      type: _GalleryActionTypes2.default.ACTIVATE_MODAL,
      payload: name
    });
  };
}

function deactivateModal() {
  return function (dispatch) {
    dispatch({
      type: _GalleryActionTypes2.default.DEACTIVATE_MODAL
    });
  };
}

function setLoading(active) {
  return function (dispatch) {
    dispatch({
      type: _GalleryActionTypes2.default.SET_LOADING,
      payload: !!active
    });
  };
}

/***/ }),

/***/ "./client/src/state/gallery/GalleryReducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = galleryReducer;

var _deepFreezeStrict = __webpack_require__(15);

var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);

var _GalleryActionTypes = __webpack_require__("./client/src/state/gallery/GalleryActionTypes.js");

var _GalleryActionTypes2 = _interopRequireDefault(_GalleryActionTypes);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  selectedFiles: [],
  errorMessage: null,
  noticeMessage: null,
  enableDropzone: true,
  modal: null,
  badges: [],
  concatenateSelect: false,
  loading: false,

  sorters: [{
    field: 'title',
    direction: 'asc',
    label: _i18n2.default._t('AssetAdmin.FILTER_TITLE_ASC', 'title a-z')
  }, {
    field: 'title',
    direction: 'desc',
    label: _i18n2.default._t('AssetAdmin.FILTER_TITLE_DESC', 'title z-a')
  }, {
    field: 'lastEdited',
    direction: 'desc',
    label: _i18n2.default._t('AssetAdmin.FILTER_DATE_DESC', 'newest')
  }, {
    field: 'lastEdited',
    direction: 'asc',
    label: _i18n2.default._t('AssetAdmin.FILTER_DATE_ASC', 'oldest')
  }],
  lastSelected: null
};

function galleryReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _GalleryActionTypes2.default.SET_LAST_SELECTED:
      {
        return _extends({}, state, {
          lastSelected: payload.id
        });
      }
    case _GalleryActionTypes2.default.SET_FILE_BADGE:
      {
        return _extends({}, state, {
          badges: state.badges.filter(function (badge) {
            return badge.id !== payload.id;
          }).concat([payload])
        });
      }

    case _GalleryActionTypes2.default.CLEAR_FILE_BADGE:
      {
        return _extends({}, state, {
          badges: state.badges.filter(function (badge) {
            return badge.id !== payload.id;
          })
        });
      }

    case _GalleryActionTypes2.default.SET_ENABLE_DROPZONE:
      {
        return _extends({}, state, {
          enableDropzone: payload.enableDropzone
        });
      }

    case _GalleryActionTypes2.default.SET_NOTICE_MESSAGE:
      {
        return _extends({}, state, {
          noticeMessage: payload.message
        });
      }

    case _GalleryActionTypes2.default.SET_ERROR_MESSAGE:
      {
        return _extends({}, state, {
          errorMessage: payload.message
        });
      }

    case _GalleryActionTypes2.default.LOAD_FILE_SUCCESS:
      {
        var oldFile = state.files.find(function (file) {
          return file.id === payload.id;
        });
        if (oldFile) {
          var updatedFile = _extends({}, oldFile, payload.file);

          return (0, _deepFreezeStrict2.default)(_extends({}, state, {
            files: state.files.map(function (file) {
              return file.id === updatedFile.id ? updatedFile : file;
            })
          }));
        } else if (state.folder.id === payload.id) {
          return (0, _deepFreezeStrict2.default)(_extends({}, state, {
            folder: _extends({}, state.folder, payload.file)
          }));
        }
        return state;
      }

    case _GalleryActionTypes2.default.SET_SELECTED_FILES:
      {
        return (0, _deepFreezeStrict2.default)(_extends({}, state, {
          selectedFiles: Array.isArray(payload.files) ? payload.files : []
        }));
      }

    case _GalleryActionTypes2.default.SELECT_FILES:
      {
        var selectedFiles = null;

        if (payload.ids === null) {
          selectedFiles = state.files.map(function (file) {
            return file.id;
          });
        } else {
          selectedFiles = state.selectedFiles.concat(payload.ids.filter(function (id) {
            return state.selectedFiles.indexOf(id) === -1;
          }));
        }

        return (0, _deepFreezeStrict2.default)(_extends({}, state, {
          selectedFiles: selectedFiles
        }));
      }

    case _GalleryActionTypes2.default.DESELECT_FILES:
      {
        var _selectedFiles = null;
        if (payload.ids === null) {
          _selectedFiles = [];
        } else {
          _selectedFiles = state.selectedFiles.filter(function (id) {
            return payload.ids.indexOf(id) === -1;
          });
        }

        return (0, _deepFreezeStrict2.default)(_extends({}, state, {
          selectedFiles: _selectedFiles
        }));
      }

    case _GalleryActionTypes2.default.ACTIVATE_MODAL:
      {
        return (0, _deepFreezeStrict2.default)(_extends({}, state, {
          modal: payload
        }));
      }

    case _GalleryActionTypes2.default.DEACTIVATE_MODAL:
      {
        return (0, _deepFreezeStrict2.default)(_extends({}, state, {
          modal: null
        }));
      }

    case _GalleryActionTypes2.default.CONCATENATE_SELECT:
      {
        return (0, _deepFreezeStrict2.default)(_extends({}, state, {
          concatenateSelect: payload
        }));
      }

    case _GalleryActionTypes2.default.SET_LOADING:
      {
        return (0, _deepFreezeStrict2.default)(_extends({}, state, {
          loading: payload
        }));
      }

    default:
      return state;
  }
}

/***/ }),

/***/ "./client/src/state/imageLoad/ImageLoadActionHandler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultImageFactory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ImageLoadStatus = __webpack_require__("./client/src/state/imageLoad/ImageLoadStatus.js");

var _ImageLoadStatus2 = _interopRequireDefault(_ImageLoadStatus);

var _ImageLoadLocker = __webpack_require__("./client/src/state/imageLoad/ImageLoadLocker.js");

var _ImageLoadLocker2 = _interopRequireDefault(_ImageLoadLocker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultOptions = {
  minRetry: 0,
  maxRetry: 0,
  expiry: 0,

  onStatusChange: function onStatusChange() {
    return null;
  },
  onRetry: function onRetry() {
    return null;
  },
  onReset: function onReset() {
    return null;
  },
  onTimeout: function onTimeout() {
    return null;
  }
};

var defaultImageFactory = function defaultImageFactory(url, resolve, reject) {
  var img = new Image();
  img.onload = resolve;
  img.onerror = reject;
  img.src = url;
};

var ImageLoadActionHandler = function () {
  function ImageLoadActionHandler(options) {
    var factory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultImageFactory;

    _classCallCheck(this, ImageLoadActionHandler);

    this.options = _extends({}, defaultOptions, options);
    this.factory = factory;
  }

  _createClass(ImageLoadActionHandler, [{
    key: 'loadImage',
    value: function loadImage(url) {
      if (!this.options.minRetry) {
        return null;
      }

      if (!_ImageLoadLocker2.default.lock(url)) {
        return null;
      }

      return this.loadImageLoop(url, this.options.minRetry);
    }
  }, {
    key: 'loadImageLoop',
    value: function loadImageLoop(url, retryAfter) {
      var _this = this;

      this.options.onStatusChange(url, _ImageLoadStatus2.default.LOADING);

      return new Promise(function (resolve, reject) {
        return _this.factory(url, resolve, reject);
      }).then(function () {
        return _this.handleSuccess(url);
      }).catch(function () {
        return _this.handleError(url, retryAfter);
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset(url, resolve) {
      this.options.onReset(url);
      resolve();
    }
  }, {
    key: 'handleTimeout',
    value: function handleTimeout(callback, delay) {
      var id = setTimeout(callback, delay);
      this.options.onTimeout(id, delay);
      return id;
    }
  }, {
    key: 'handleSuccess',
    value: function handleSuccess(url) {
      _ImageLoadLocker2.default.unlock(url);
      this.options.onStatusChange(url, _ImageLoadStatus2.default.SUCCESS);
    }
  }, {
    key: 'handleFailure',
    value: function handleFailure(url) {
      var _this2 = this;

      _ImageLoadLocker2.default.unlock(url);
      this.options.onStatusChange(url, _ImageLoadStatus2.default.FAILED);

      if (this.options.expiry) {
        return new Promise(function (resolve) {
          _this2.handleTimeout(function () {
            return _this2.handleReset(url, resolve);
          }, _this2.options.expiry * 1000);
        });
      }

      return null;
    }
  }, {
    key: 'handleError',
    value: function handleError(url, retryAfter) {
      if (retryAfter > this.options.maxRetry) {
        return this.handleFailure(url);
      }

      this.options.onStatusChange(url, _ImageLoadStatus2.default.WAITING);

      return this.handleRetry(url, retryAfter);
    }
  }, {
    key: 'handleRetry',
    value: function handleRetry(url, retryAfter) {
      var _this3 = this;

      var promise = new Promise(function (resolve) {
        _this3.handleTimeout(function () {
          return resolve(_this3.loadImageLoop(url, retryAfter * 2));
        }, retryAfter * 1000);
      });
      this.options.onRetry(url, retryAfter, promise);
      return promise;
    }
  }, {
    key: 'setOnRetry',
    value: function setOnRetry(callback) {
      this.options.onRetry = callback;
    }
  }, {
    key: 'setOnReset',
    value: function setOnReset(callback) {
      this.options.onReset = callback;
    }
  }, {
    key: 'setOnStatusChange',
    value: function setOnStatusChange(callback) {
      this.options.onStatusChange = callback;
    }
  }, {
    key: 'setOnTimeout',
    value: function setOnTimeout(callback) {
      this.options.onTimeout = callback;
    }
  }]);

  return ImageLoadActionHandler;
}();

exports.defaultImageFactory = defaultImageFactory;
exports.default = ImageLoadActionHandler;

/***/ }),

/***/ "./client/src/state/imageLoad/ImageLoadActionTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  SET_STATUS: 'IMAGE_LOAD_SET_STATUS',
  RESET: 'IMAGE_LOAD_RESET' };

/***/ }),

/***/ "./client/src/state/imageLoad/ImageLoadActions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.loadImage = loadImage;

var _ImageLoadActionTypes = __webpack_require__("./client/src/state/imageLoad/ImageLoadActionTypes.js");

var _ImageLoadActionTypes2 = _interopRequireDefault(_ImageLoadActionTypes);

var _ImageLoadActionHandler = __webpack_require__("./client/src/state/imageLoad/ImageLoadActionHandler.js");

var _ImageLoadActionHandler2 = _interopRequireDefault(_ImageLoadActionHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadImage(url, options) {
  return function (dispatch, getState) {
    if (!url) {
      return null;
    }

    var state = getState();
    var currentFile = state.assetAdmin.imageLoad.files.find(function (file) {
      return file.url === url;
    });
    if (currentFile) {
      return null;
    }

    var loadOptions = _extends({}, options, {
      onStatusChange: function onStatusChange(statusURL, status) {
        return dispatch({
          type: _ImageLoadActionTypes2.default.SET_STATUS,
          payload: { status: status, url: statusURL }
        });
      },
      onReset: function onReset(statusURL) {
        return dispatch({
          type: _ImageLoadActionTypes2.default.RESET,
          payload: { url: statusURL }
        });
      }
    });

    var handler = new _ImageLoadActionHandler2.default(loadOptions);
    return handler.loadImage(url);
  };
}

/***/ }),

/***/ "./client/src/state/imageLoad/ImageLoadLocker.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageLoadLocker = function () {
  function ImageLoadLocker() {
    _classCallCheck(this, ImageLoadLocker);

    this.urls = [];
  }

  _createClass(ImageLoadLocker, [{
    key: "lock",
    value: function lock(url) {
      var index = this.urls.indexOf(url);
      if (index >= 0) {
        return false;
      }
      this.urls = [].concat(_toConsumableArray(this.urls), [url]);
      return true;
    }
  }, {
    key: "unlock",
    value: function unlock(url) {
      this.urls = this.urls.filter(function (next) {
        return next !== url;
      });
    }
  }]);

  return ImageLoadLocker;
}();

window.ss = window.ss || {};
window.ss.imagelocker = window.ss.imagelocker || new ImageLoadLocker();

exports.Component = ImageLoadLocker;
exports.default = window.ss.imagelocker;

/***/ }),

/***/ "./client/src/state/imageLoad/ImageLoadReducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = imageLoadReducer;

var _ImageLoadActionTypes = __webpack_require__("./client/src/state/imageLoad/ImageLoadActionTypes.js");

var _ImageLoadActionTypes2 = _interopRequireDefault(_ImageLoadActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  files: [] };

function imageLoadReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _ImageLoadActionTypes2.default.SET_STATUS:
      {
        return _extends({}, state, {
          files: [].concat(_toConsumableArray(state.files.filter(function (file) {
            return file.url !== payload.url;
          })), [payload])
        });
      }

    case _ImageLoadActionTypes2.default.RESET:
      {
        return _extends({}, state, {
          files: [].concat(_toConsumableArray(state.files.filter(function (file) {
            return file.url !== payload.url;
          })))
        });
      }

    default:
      return state;
  }
}

/***/ }),

/***/ "./client/src/state/imageLoad/ImageLoadStatus.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  DISABLED: 'DISABLED',
  NONE: 'NONE',
  SUCCESS: 'SUCCESS',
  LOADING: 'LOADING',
  WAITING: 'WAITING',
  FAILED: 'FAILED' };

/***/ }),

/***/ "./client/src/state/modal/ModalActionTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  DEFINE_IMAGE_SIZE_PRESETS: 'DEFINE_IMAGE_SIZE_PRESETS',
  INIT_FORM_SCHEMA_STACK: 'INIT_FORM_SCHEMA_STACK',
  POP_FORM_SCHEMA: 'POP_FORM_SCHEMA',
  PUSH_FORM_SCHEMA: 'PUSH_FORM_SCHEMA',
  RESET: 'RESET',
  RESET_FORM_STACK: 'RESET_FORM_STACK'
};

/***/ }),

/***/ "./client/src/state/modal/ModalActions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defineImageSizePresets = defineImageSizePresets;
exports.stashFormValues = stashFormValues;
exports.pushFormStackEntry = pushFormStackEntry;
exports.initFormStack = initFormStack;
exports.popFormStackEntry = popFormStackEntry;
exports.reset = reset;
exports.resetFormStack = resetFormStack;

var _ModalActionTypes = __webpack_require__("./client/src/state/modal/ModalActionTypes.js");

var _ModalActionTypes2 = _interopRequireDefault(_ModalActionTypes);

var _getIn = __webpack_require__("./node_modules/redux-form/lib/structure/plain/getIn.js");

var _getIn2 = _interopRequireDefault(_getIn);

var _SchemaActions = __webpack_require__(8);

var _helpers = __webpack_require__("./client/src/state/modal/helpers.js");

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defineImageSizePresets(imageSizePresets) {
  return {
    type: _ModalActionTypes2.default.DEFINE_IMAGE_SIZE_PRESETS,
    payload: { imageSizePresets: imageSizePresets }
  };
}

function stashFormValues(formIdentifier, schemaUrl) {
  return function (dispatch, getState) {
    var state = getState();
    var values = (0, _getIn2.default)(state.form.formState, formIdentifier + '.values');
    var fieldSchema = (0, _getIn2.default)(state.form.formSchemas, schemaUrl + '.schema.fields');

    if (values) {
      var fields = Object.keys(values).filter(function (name) {
        return values[name] !== null && (0, _helpers2.default)(name, fieldSchema);
      }).map(function (name) {
        return { name: name, value: values[name] };
      });

      dispatch((0, _SchemaActions.setSchemaStateOverrides)(schemaUrl, { fields: fields }));
    }
  };
}

function pushFormStackEntry(type) {
  var nextType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  return {
    type: _ModalActionTypes2.default.PUSH_FORM_SCHEMA,
    payload: { formSchema: { type: type, nextType: nextType } }
  };
}

function initFormStack(type) {
  var nextType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  return {
    type: _ModalActionTypes2.default.INIT_FORM_SCHEMA_STACK,
    payload: { formSchema: { type: type, nextType: nextType } }
  };
}

function popFormStackEntry() {
  return { type: _ModalActionTypes2.default.POP_FORM_SCHEMA };
}

function reset() {
  return { type: _ModalActionTypes2.default.RESET };
}

function resetFormStack() {
  return { type: _ModalActionTypes2.default.RESET_FORM_STACK };
}

/***/ }),

/***/ "./client/src/state/modal/ModalReducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ModalActionTypes = __webpack_require__("./client/src/state/modal/ModalActionTypes.js");

var _ModalActionTypes2 = _interopRequireDefault(_ModalActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = exports.initialState = {
  imageSizePresets: [],
  formSchemaStack: [],
  formSchema: undefined
};

function modalReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;
  var stack = state.formSchemaStack;


  switch (type) {
    case _ModalActionTypes2.default.DEFINE_IMAGE_SIZE_PRESETS:
      return _extends({}, state, { imageSizePresets: payload.imageSizePresets });
    case _ModalActionTypes2.default.PUSH_FORM_SCHEMA:
      return _extends({}, state, { formSchemaStack: [].concat(_toConsumableArray(stack), [payload.formSchema]) });
    case _ModalActionTypes2.default.INIT_FORM_SCHEMA_STACK:
      return _extends({}, state, { formSchemaStack: [payload.formSchema] });
    case _ModalActionTypes2.default.POP_FORM_SCHEMA:
      return _extends({}, state, { formSchemaStack: stack.slice(0, -1) });
    case _ModalActionTypes2.default.RESET:
      return initialState;
    case _ModalActionTypes2.default.RESET_FORM_STACK:
      return _extends({}, state, { formSchemaStack: stack.slice(0, 1) });
    default:
      return state;
  }
}

var popFormSchemaStackWrapper = function popFormSchemaStackWrapper(state) {
  return _extends({}, state, {
    formSchema: state.formSchemaStack.slice(-1).pop()
  });
};

exports.default = function () {
  return popFormSchemaStackWrapper(modalReducer.apply(undefined, arguments));
};

/***/ }),

/***/ "./client/src/state/modal/helpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findField = findField;
exports.default = isStashableField;
function findField(fieldName, fieldTree) {
  var i = void 0;
  for (i = 0; i < fieldTree.length; i++) {
    var field = fieldTree[i];
    if (field.name === fieldName) {
      return field;
    }

    if (field.children) {
      var child = findField(fieldName, field.children);
      if (child) {
        return child;
      }
    }
  }

  return false;
}

function isStashableField(fieldName, fieldTree) {
  var field = findField(fieldName, fieldTree);

  return field && field.type !== 'hidden' && field.schemaType !== 'Structural' && !field.readOnly && !field.disabled;
}

/***/ }),

/***/ "./client/src/state/previewField/PreviewFieldActionTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  PREVIEWFIELD_ADD_FILE: 'PREVIEWFIELD_ADD_FILE',
  PREVIEWFIELD_REMOVE_FILE: 'PREVIEWFIELD_REMOVE_FILE',
  PREVIEWFIELD_UPDATE_FILE: 'PREVIEWFIELD_UPDATE_FILE',
  PREVIEWFIELD_FAIL_UPLOAD: 'PREVIEWFIELD_FAIL_UPLOAD',
  PREVIEWFIELD_UPDATE_STATUS: 'PREVIEWFIELD_UPDATE_STATUS'
};

/***/ }),

/***/ "./client/src/state/previewField/PreviewFieldActions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFile = removeFile;
exports.addFile = addFile;
exports.failUpload = failUpload;
exports.updateFile = updateFile;
exports.updateStatus = updateStatus;

var _PreviewFieldActionTypes = __webpack_require__("./client/src/state/previewField/PreviewFieldActionTypes.js");

var _PreviewFieldActionTypes2 = _interopRequireDefault(_PreviewFieldActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function removeFile(id) {
  return {
    type: _PreviewFieldActionTypes2.default.PREVIEWFIELD_REMOVE_FILE,
    payload: { id: id }
  };
}

function addFile(id, file) {
  return {
    type: _PreviewFieldActionTypes2.default.PREVIEWFIELD_ADD_FILE,
    payload: { id: id, file: file }
  };
}

function failUpload(id, message) {
  return {
    type: _PreviewFieldActionTypes2.default.PREVIEWFIELD_FAIL_UPLOAD,
    payload: { id: id, message: message }
  };
}

function updateFile(id, data) {
  return {
    type: _PreviewFieldActionTypes2.default.PREVIEWFIELD_UPDATE_FILE,
    payload: { id: id, data: data }
  };
}

function updateStatus(id, status) {
  return {
    type: _PreviewFieldActionTypes2.default.PREVIEWFIELD_UPDATE_STATUS,
    payload: { id: id, status: status }
  };
}

/***/ }),

/***/ "./client/src/state/previewField/PreviewFieldReducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deepFreezeStrict = __webpack_require__(15);

var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);

var _PreviewFieldActionTypes = __webpack_require__("./client/src/state/previewField/PreviewFieldActionTypes.js");

var _PreviewFieldActionTypes2 = _interopRequireDefault(_PreviewFieldActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {};

function previewFieldReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _PreviewFieldActionTypes2.default.PREVIEWFIELD_ADD_FILE:
      {
        return (0, _deepFreezeStrict2.default)(Object.assign({}, state, _defineProperty({}, action.payload.id, action.payload.file)));
      }

    case _PreviewFieldActionTypes2.default.PREVIEWFIELD_FAIL_UPLOAD:
      {
        return (0, _deepFreezeStrict2.default)(Object.assign({}, state, _defineProperty({}, action.payload.id, Object.assign({}, state[action.payload.id], action.payload.message))));
      }

    case _PreviewFieldActionTypes2.default.PREVIEWFIELD_REMOVE_FILE:
      {
        return (0, _deepFreezeStrict2.default)(Object.assign({}, state, _defineProperty({}, action.payload.id, undefined)));
      }

    case _PreviewFieldActionTypes2.default.PREVIEWFIELD_UPDATE_FILE:
      {
        return (0, _deepFreezeStrict2.default)(Object.assign({}, state, _defineProperty({}, action.payload.id, Object.assign({}, state[action.payload.id], action.payload.data))));
      }

    case _PreviewFieldActionTypes2.default.PREVIEWFIELD_UPDATE_STATUS:
      {
        return (0, _deepFreezeStrict2.default)(Object.assign({}, state, _defineProperty({}, action.payload.id, Object.assign({}, state[action.payload.id], action.payload.status))));
      }

    default:
      return state;
  }
}

exports.default = previewFieldReducer;

/***/ }),

/***/ "./client/src/state/queuedFiles/QueuedFilesActionTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  ADD_QUEUED_FILE: 'ADD_QUEUED_FILE',
  FAIL_UPLOAD: 'FAIL_UPLOAD',
  PURGE_UPLOAD_QUEUE: 'PURGE_UPLOAD_QUEUE',
  REMOVE_QUEUED_FILE: 'REMOVE_QUEUED_FILE',
  SUCCEED_UPLOAD: 'SUCCEED_UPLOAD',
  UPDATE_QUEUED_FILE: 'UPDATE_QUEUED_FILE'
};

/***/ }),

/***/ "./client/src/state/queuedFiles/QueuedFilesActions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addQueuedFile = addQueuedFile;
exports.failUpload = failUpload;
exports.purgeUploadQueue = purgeUploadQueue;
exports.removeQueuedFile = removeQueuedFile;
exports.succeedUpload = succeedUpload;
exports.updateQueuedFile = updateQueuedFile;

var _QueuedFilesActionTypes = __webpack_require__("./client/src/state/queuedFiles/QueuedFilesActionTypes.js");

var _QueuedFilesActionTypes2 = _interopRequireDefault(_QueuedFilesActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addQueuedFile(file) {
  return function (dispatch) {
    return dispatch({
      type: _QueuedFilesActionTypes2.default.ADD_QUEUED_FILE,
      payload: { file: file }
    });
  };
}

function failUpload(queuedId, response, statusCodeMessage) {
  return function (dispatch) {
    var message = response.message;
    if (response.errors && response.errors.length) {
      message = response.errors[0];
    }

    if (typeof response === 'string') {
      message = {
        value: statusCodeMessage || response,
        type: 'error'
      };
    }
    return dispatch({
      type: _QueuedFilesActionTypes2.default.FAIL_UPLOAD,
      payload: {
        queuedId: queuedId,
        message: message
      }
    });
  };
}

function purgeUploadQueue() {
  return function (dispatch) {
    return dispatch({
      type: _QueuedFilesActionTypes2.default.PURGE_UPLOAD_QUEUE,
      payload: null
    });
  };
}

function removeQueuedFile(queuedId) {
  return function (dispatch) {
    return dispatch({
      type: _QueuedFilesActionTypes2.default.REMOVE_QUEUED_FILE,
      payload: { queuedId: queuedId }
    });
  };
}

function succeedUpload(queuedId, json) {
  return function (dispatch) {
    return dispatch({
      type: _QueuedFilesActionTypes2.default.SUCCEED_UPLOAD,
      payload: { queuedId: queuedId, json: json }
    });
  };
}

function updateQueuedFile(queuedId, updates) {
  return function (dispatch) {
    return dispatch({
      type: _QueuedFilesActionTypes2.default.UPDATE_QUEUED_FILE,
      payload: { queuedId: queuedId, updates: updates }
    });
  };
}

/***/ }),

/***/ "./client/src/state/queuedFiles/QueuedFilesReducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _deepFreezeStrict = __webpack_require__(15);

var _deepFreezeStrict2 = _interopRequireDefault(_deepFreezeStrict);

var _QueuedFilesActionTypes = __webpack_require__("./client/src/state/queuedFiles/QueuedFilesActionTypes.js");

var _QueuedFilesActionTypes2 = _interopRequireDefault(_QueuedFilesActionTypes);

var _fileStructure = __webpack_require__("./client/src/lib/fileStructure.js");

var _fileStructure2 = _interopRequireDefault(_fileStructure);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  items: []
};

function queuedFilesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _QueuedFilesActionTypes2.default.ADD_QUEUED_FILE:
      return (0, _deepFreezeStrict2.default)(_extends({}, state, {
        items: [].concat(_toConsumableArray(state.items), [_extends({}, _fileStructure2.default, action.payload.file)])
      }));

    case _QueuedFilesActionTypes2.default.FAIL_UPLOAD:
      return (0, _deepFreezeStrict2.default)(_extends({}, state, {
        items: state.items.map(function (file) {
          if (file.queuedId === action.payload.queuedId) {
            return _extends({}, file, {
              message: action.payload.message
            });
          }

          return file;
        })
      }));

    case _QueuedFilesActionTypes2.default.PURGE_UPLOAD_QUEUE:
      return (0, _deepFreezeStrict2.default)(_extends({}, state, {
        items: state.items.filter(function (file) {
          return !file.id;
        })
      }));

    case _QueuedFilesActionTypes2.default.REMOVE_QUEUED_FILE:
      return (0, _deepFreezeStrict2.default)(_extends({}, state, {
        items: state.items.filter(function (file) {
          return file.queuedId !== action.payload.queuedId;
        })
      }));

    case _QueuedFilesActionTypes2.default.SUCCEED_UPLOAD:
      return (0, _deepFreezeStrict2.default)(_extends({}, state, {
        items: state.items.map(function (file) {
          if (file.queuedId === action.payload.queuedId) {
            return _extends({}, file, action.payload.json, {
              messages: [{
                value: _i18n2.default._t('AssetAdmin.DROPZONE_SUCCESS_UPLOAD'),
                type: 'success',
                extraClass: 'success'
              }]
            });
          }
          return file;
        })
      }));

    case _QueuedFilesActionTypes2.default.UPDATE_QUEUED_FILE:
      return (0, _deepFreezeStrict2.default)(_extends({}, state, {
        items: state.items.map(function (file) {
          if (file.queuedId === action.payload.queuedId) {
            return _extends({}, file, action.payload.updates);
          }

          return file;
        })
      }));

    default:
      return state;
  }
}

exports.default = queuedFilesReducer;

/***/ }),

/***/ "./client/src/state/uploadField/UploadFieldActionTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  UPLOADFIELD_SET_FORM_SCHEMA_FILES_HASH: 'UPLOADFIELD_SET_FORM_SCHEMA_FILES_HASH',
  UPLOADFIELD_ADD_FILE: 'UPLOADFIELD_ADD_FILE',
  UPLOADFIELD_SET_FILES: 'UPLOADFIELD_SET_FILES',
  UPLOADFIELD_REMOVE_FILE: 'UPLOADFIELD_REMOVE_FILE',
  UPLOADFIELD_UPLOAD_FAILURE: 'UPLOADFIELD_UPLOAD_FAILURE',
  UPLOADFIELD_UPLOAD_SUCCESS: 'UPLOADFIELD_UPLOAD_SUCCESS',
  UPLOADFIELD_UPDATE_QUEUED_FILE: 'UPLOADFIELD_UPDATE_QUEUED_FILE'
};

/***/ }),

/***/ "./client/src/state/uploadField/UploadFieldActions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setFormSchemaFilesHash = setFormSchemaFilesHash;
exports.addFile = addFile;
exports.setFiles = setFiles;
exports.failUpload = failUpload;
exports.removeFile = removeFile;
exports.succeedUpload = succeedUpload;
exports.updateQueuedFile = updateQueuedFile;

var _UploadFieldActionTypes = __webpack_require__("./client/src/state/uploadField/UploadFieldActionTypes.js");

var _UploadFieldActionTypes2 = _interopRequireDefault(_UploadFieldActionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setFormSchemaFilesHash(fieldId, hash) {
  return function (dispatch) {
    return dispatch({
      type: _UploadFieldActionTypes2.default.UPLOADFIELD_SET_FORM_SCHEMA_FILES_HASH,
      payload: { fieldId: fieldId, hash: hash }
    });
  };
}

function addFile(fieldId, file) {
  return function (dispatch) {
    return dispatch({
      type: _UploadFieldActionTypes2.default.UPLOADFIELD_ADD_FILE,
      payload: { fieldId: fieldId, file: file }
    });
  };
}

function setFiles(fieldId, files) {
  return function (dispatch) {
    return dispatch({
      type: _UploadFieldActionTypes2.default.UPLOADFIELD_SET_FILES,
      payload: { fieldId: fieldId, files: files }
    });
  };
}

function failUpload(fieldId, queuedId, response, statusCodeMessage) {
  return function (dispatch) {
    var message = response.message;

    if (typeof response === 'string') {
      message = {
        value: statusCodeMessage || response,
        type: 'error'
      };
    }
    return dispatch({
      type: _UploadFieldActionTypes2.default.UPLOADFIELD_UPLOAD_FAILURE,
      payload: { fieldId: fieldId, queuedId: queuedId, message: message }
    });
  };
}

function removeFile(fieldId, file) {
  return function (dispatch) {
    return dispatch({
      type: _UploadFieldActionTypes2.default.UPLOADFIELD_REMOVE_FILE,
      payload: { fieldId: fieldId, file: file }
    });
  };
}

function succeedUpload(fieldId, queuedId, json) {
  return function (dispatch) {
    return dispatch({
      type: _UploadFieldActionTypes2.default.UPLOADFIELD_UPLOAD_SUCCESS,
      payload: { fieldId: fieldId, queuedId: queuedId, json: json }
    });
  };
}

function updateQueuedFile(fieldId, queuedId, updates) {
  return function (dispatch) {
    return dispatch({
      type: _UploadFieldActionTypes2.default.UPLOADFIELD_UPDATE_QUEUED_FILE,
      payload: { fieldId: fieldId, queuedId: queuedId, updates: updates }
    });
  };
}

/***/ }),

/***/ "./client/src/state/uploadField/UploadFieldReducer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _UploadFieldActionTypes = __webpack_require__("./client/src/state/uploadField/UploadFieldActionTypes.js");

var _UploadFieldActionTypes2 = _interopRequireDefault(_UploadFieldActionTypes);

var _fileStructure = __webpack_require__("./client/src/lib/fileStructure.js");

var _fileStructure2 = _interopRequireDefault(_fileStructure);

var _reduxFieldReducer = __webpack_require__(44);

var _reduxFieldReducer2 = _interopRequireDefault(_reduxFieldReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  fields: {}
};

var initialFieldState = { formSchemaFilesHash: null, files: [] };

function uploadFieldReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  var reduceField = (0, _reduxFieldReducer2.default)(state, action, initialFieldState);

  switch (action.type) {
    case _UploadFieldActionTypes2.default.UPLOADFIELD_SET_FORM_SCHEMA_FILES_HASH:
      return reduceField(function () {
        return { formSchemaFilesHash: action.payload.hash };
      });

    case _UploadFieldActionTypes2.default.UPLOADFIELD_ADD_FILE:
      return reduceField(function (field) {
        if (field.files.find(function (file) {
          return file.id === action.payload.file.id;
        })) {
          return field;
        }
        return _extends({}, field, {
          files: [].concat(_toConsumableArray(field.files), [_extends({}, _fileStructure2.default, action.payload.file)])
        });
      });

    case _UploadFieldActionTypes2.default.UPLOADFIELD_SET_FILES:
      return reduceField(function () {
        return { files: action.payload.files };
      });

    case _UploadFieldActionTypes2.default.UPLOADFIELD_UPLOAD_FAILURE:
      return reduceField(function (field) {
        return {
          files: field.files.map(function (file) {
            if (file.queuedId === action.payload.queuedId) {
              return Object.assign({}, file, {
                message: action.payload.message
              });
            }
            return file;
          })
        };
      });

    case _UploadFieldActionTypes2.default.UPLOADFIELD_REMOVE_FILE:
      return reduceField(function (field) {
        return {
          files: field.files.filter(function (file) {
            return !(action.payload.file.queuedId && file.queuedId === action.payload.file.queuedId || action.payload.file.id && file.id === action.payload.file.id);
          })
        };
      });

    case _UploadFieldActionTypes2.default.UPLOADFIELD_UPLOAD_SUCCESS:
      return reduceField(function (field) {
        return {
          files: field.files.map(function (file) {
            if (file.queuedId === action.payload.queuedId) {
              return Object.assign({}, file, action.payload.json);
            }
            return file;
          })
        };
      });

    case _UploadFieldActionTypes2.default.UPLOADFIELD_UPDATE_QUEUED_FILE:
      return reduceField(function (field) {
        return {
          files: field.files.map(function (file) {
            if (file.queuedId === action.payload.queuedId) {
              return Object.assign({}, file, action.payload.updates);
            }
            return file;
          })
        };
      });

    default:
      return state;
  }
}

exports.default = uploadFieldReducer;

/***/ }),

/***/ "./client/src/transforms/FormAction/ownerAwareUnpublish.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ownerAwareUnpublish = function ownerAwareUnpublish(FormAction) {
  return function (props) {
    var originalOnclick = props.onClick;
    var newProps = _extends({}, props, {
      onClick: function onClick(e, nameOrID) {
        var owners = props.data.owners;

        var message = null;
        if (owners && parseInt(owners, 10) > 0) {
          message = [_i18n2.default.inject(_i18n2.default._t('AssetAdmin.SINGLE_OWNED_WARNING_1', 'This file is being used in {count} other published section(s).'), { count: owners }), _i18n2.default._t('AssetAdmin.SINGLE_OWNED_WARNING_2', 'Ensure files are removed from content areas prior to unpublishing them. Otherwise, they will appear as broken links.'), _i18n2.default._t('AssetAdmin.SINGLE_OWNED_WARNING_3', 'Do you want to unpublish this file anyway?')].join('\n\n');
        } else {
          message = _i18n2.default._t('AssetAdmin.CONFIRMUNPUBLISH', 'Are you sure you want to unpublish this record?');
        }

        if (confirm(message)) {
          originalOnclick(e, nameOrID);
        } else {
          e.preventDefault();
        }
      }
    });

    return _react2.default.createElement(FormAction, newProps);
  };
};

exports.default = ownerAwareUnpublish;

/***/ }),

/***/ "./client/src/transforms/TreeDropdownField/moveTreeDropdownField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disabledTreeDropdownField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(4);

var _redux = __webpack_require__(5);

var _TreeDropdownField = __webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var disabledTreeDropdownField = function disabledTreeDropdownField(TreeDropdownField) {
  return function (props) {
    var disabledIDs = props.disabledIDs;

    var find = props.findTreeByPath || _TreeDropdownField.findTreeByPath;


    var newProps = _extends({}, props, {
      findTreeByPath: function findTreeByPath(tree, visible) {
        var visibleTree = find(tree, visible);
        var pathDisabled = visible.some(function (id) {
          return disabledIDs.includes(id);
        });
        return visibleTree ? _extends({}, visibleTree, {
          children: visibleTree.children.map(function (child) {
            return _extends({}, child, {
              disabled: pathDisabled || disabledIDs.includes(child.id)
            });
          })
        }) : null;
      }
    });

    return _react2.default.createElement(TreeDropdownField, newProps);
  };
};

var moveTreeDropdownField = (0, _redux.compose)((0, _reactRedux.connect)(function (state) {
  return {
    disabledIDs: state.assetAdmin.gallery.selectedFiles
  };
}), disabledTreeDropdownField);

exports.disabledTreeDropdownField = disabledTreeDropdownField;
exports.default = moveTreeDropdownField;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"presets\":[[\"env\",{\"modules\":false}],\"react\"],\"plugins\":[\"transform-object-rest-spread\"],\"comments\":false,\"cacheDirectory\":true}!./client/src/components/InsertEmbedModal/InsertEmbedModal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _FormBuilderModal = __webpack_require__(13);

var _FormBuilderModal2 = _interopRequireDefault(_FormBuilderModal);

var _SchemaActions = __webpack_require__(8);

var schemaActions = _interopRequireWildcard(_SchemaActions);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sectionConfigKey = 'SilverStripe\\AssetAdmin\\Controller\\AssetAdmin';

var InsertEmbedModal = function (_Component) {
  _inherits(InsertEmbedModal, _Component);

  function InsertEmbedModal(props) {
    _classCallCheck(this, InsertEmbedModal);

    var _this = _possibleConstructorReturn(this, (InsertEmbedModal.__proto__ || Object.getPrototypeOf(InsertEmbedModal)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(InsertEmbedModal, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setOverrides(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (props.isOpen && !this.props.isOpen) {
        this.setOverrides(props);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearOverrides();
    }
  }, {
    key: 'setOverrides',
    value: function setOverrides(props) {
      if (this.props.schemaUrl !== props.schemaUrl) {
        this.clearOverrides();
      }
      if (props.schemaUrl) {
        var attrs = Object.assign({}, props.fileAttributes);
        delete attrs.ID;

        var overrides = {
          fields: Object.entries(attrs).map(function (field) {
            var _field = _slicedToArray(field, 2),
                name = _field[0],
                value = _field[1];

            return { name: name, value: value };
          })
        };

        this.props.actions.schema.setSchemaStateOverrides(props.schemaUrl, overrides);
      }
    }
  }, {
    key: 'getModalProps',
    value: function getModalProps() {
      var props = Object.assign({
        onSubmit: this.handleSubmit,
        onLoadingError: this.handleLoadingError,
        showErrorMessage: true,
        responseClassBad: 'alert alert-danger',
        identifier: 'AssetAdmin.InsertEmbedModal'
      }, this.props, {
        className: 'insert-embed-modal ' + this.props.className,
        size: 'lg',
        onClosed: this.props.onClosed,
        title: this.props.targetUrl ? _i18n2.default._t('AssetAdmin.EditTitle', 'Media from the web') : _i18n2.default._t('AssetAdmin.CreateTitle', 'Insert new media from the web')
      });
      delete props.sectionConfig;
      delete props.onInsert;
      delete props.fileAttributes;

      return props;
    }
  }, {
    key: 'clearOverrides',
    value: function clearOverrides() {
      this.props.actions.schema.setSchemaStateOverrides(this.props.schemaUrl, null);
    }
  }, {
    key: 'handleLoadingError',
    value: function handleLoadingError(error) {
      if (typeof this.props.onLoadingError === 'function') {
        this.props.onLoadingError(error);
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(data, action) {
      switch (action) {
        case 'action_addmedia':
          {
            this.props.onCreate(data);
            break;
          }
        case 'action_insertmedia':
          {
            this.props.onInsert(data);
            break;
          }
        case 'action_cancel':
          {
            this.props.onClosed();
            break;
          }
        default:
          {}
      }

      return Promise.resolve();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_FormBuilderModal2.default, this.getModalProps());
    }
  }]);

  return InsertEmbedModal;
}(_react.Component);

InsertEmbedModal.propTypes = {
  sectionConfig: _propTypes2.default.shape({
    url: _propTypes2.default.string,
    form: _propTypes2.default.object
  }),
  isOpen: _propTypes2.default.bool,
  onInsert: _propTypes2.default.func.isRequired,
  onCreate: _propTypes2.default.func.isRequired,
  fileAttributes: _propTypes2.default.shape({
    Url: _propTypes2.default.string,
    CaptionText: _propTypes2.default.string,
    PreviewUrl: _propTypes2.default.string,
    Placement: _propTypes2.default.string,
    Width: _propTypes2.default.number,
    Height: _propTypes2.default.number
  }),
  onClosed: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  actions: _propTypes2.default.object,
  schemaUrl: _propTypes2.default.string.isRequired,
  targetUrl: _propTypes2.default.string,
  onLoadingError: _propTypes2.default.func
};

InsertEmbedModal.defaultProps = {
  className: '',
  fileAttributes: {}
};

function mapStateToProps(state, ownProps) {
  var sectionConfig = state.config.sections.find(function (section) {
    return section.name === sectionConfigKey;
  });

  var targetUrl = ownProps.fileAttributes ? ownProps.fileAttributes.Url : '';
  var baseEditUrl = sectionConfig.form.remoteEditForm.schemaUrl;

  var editUrl = targetUrl && baseEditUrl + '/?embedurl=' + encodeURIComponent(targetUrl);
  var createUrl = sectionConfig.form.remoteCreateForm.schemaUrl;

  var schemaUrl = editUrl || createUrl;

  return {
    sectionConfig: sectionConfig,
    schemaUrl: schemaUrl,
    targetUrl: targetUrl
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      schema: (0, _redux.bindActionCreators)(schemaActions, dispatch)
    }
  };
}

exports.Component = InsertEmbedModal;
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(InsertEmbedModal);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"presets\":[[\"env\",{\"modules\":false}],\"react\"],\"plugins\":[\"transform-object-rest-spread\"],\"comments\":false,\"cacheDirectory\":true}!./client/src/containers/InsertMediaModal/InsertMediaModal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _i18n = __webpack_require__(2);

var _i18n2 = _interopRequireDefault(_i18n);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _AssetAdmin = __webpack_require__("./client/src/containers/AssetAdmin/AssetAdmin.js");

var _AssetAdmin2 = _interopRequireDefault(_AssetAdmin);

var _stateRouter = __webpack_require__("./client/src/containers/AssetAdmin/stateRouter.js");

var _stateRouter2 = _interopRequireDefault(_stateRouter);

var _fileSchemaModalHandler = __webpack_require__(35);

var _fileSchemaModalHandler2 = _interopRequireDefault(_fileSchemaModalHandler);

var _GalleryActions = __webpack_require__("./client/src/state/gallery/GalleryActions.js");

var galleryActions = _interopRequireWildcard(_GalleryActions);

var _ModalActions = __webpack_require__("./client/src/state/modal/ModalActions.js");

var modalActions = _interopRequireWildcard(_ModalActions);

var _FormBuilderModal = __webpack_require__(13);

var _FormBuilderModal2 = _interopRequireDefault(_FormBuilderModal);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getFormSchema2 = __webpack_require__("./client/src/lib/getFormSchema.js");

var _getFormSchema3 = _interopRequireDefault(_getFormSchema2);

var _qs = __webpack_require__(17);

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsertMediaModal = function (_Component) {
  _inherits(InsertMediaModal, _Component);

  function InsertMediaModal(props) {
    _classCallCheck(this, InsertMediaModal);

    var _this = _possibleConstructorReturn(this, (InsertMediaModal.__proto__ || Object.getPrototypeOf(InsertMediaModal)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(InsertMediaModal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          isOpen = _props.isOpen,
          onBrowse = _props.onBrowse,
          setOverrides = _props.setOverrides,
          fileAttributes = _props.fileAttributes,
          folderId = _props.folderId;


      if (!isOpen) {
        onBrowse(folderId || 0);
      } else if (typeof setOverrides === 'function' && fileAttributes.ID) {
        setOverrides(this.props);
        onBrowse(folderId, fileAttributes.ID);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (!props.isOpen && this.props.isOpen) {
        props.onBrowse(props.folderId);
        props.actions.gallery.deselectFiles();
      }
      if (typeof this.props.setOverrides === 'function' && props.isOpen && !this.props.isOpen) {
        this.props.setOverrides(props);
        props.onBrowse(props.folderId, props.fileAttributes ? props.fileAttributes.ID : null);
      }
    }
  }, {
    key: 'getSectionProps',
    value: function getSectionProps() {
      return _extends({}, this.props, {
        dialog: true,
        toolbarChildren: this.renderToolbarChildren(),
        onSubmitEditor: this.handleSubmit,
        onReplaceUrl: this.props.onBrowse
      });
    }
  }, {
    key: 'getModalProps',
    value: function getModalProps() {
      var _props2 = this.props,
          onHide = _props2.onHide,
          onInsert = _props2.onInsert,
          sectionConfig = _props2.sectionConfig,
          schemaUrl = _props2.schemaUrl,
          className = _props2.className,
          props = _objectWithoutProperties(_props2, ['onHide', 'onInsert', 'sectionConfig', 'schemaUrl', 'className']);

      return _extends({}, props, {
        className: (0, _classnames2.default)('insert-media-modal', className),
        size: 'lg',
        showCloseButton: false
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(data, action, submitFn, file) {
      if (action === 'action_insert') {
        return this.props.onInsert(data, file);
      }

      return submitFn();
    }
  }, {
    key: 'renderToolbarChildren',
    value: function renderToolbarChildren() {
      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          className: 'close modal__close-button insert-media-modal__close-button',
          onClick: this.props.onClosed,
          'aria-label': _i18n2.default._t('FormBuilderModal.CLOSE', 'Close')
        },
        _react2.default.createElement(
          'span',
          { 'aria-hidden': 'true' },
          '\xD7'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var modalProps = this.getModalProps();
      var sectionProps = this.getSectionProps();

      var assetAdmin = this.props.isOpen ? _react2.default.createElement(_AssetAdmin2.default, sectionProps) : null;

      return _react2.default.createElement(
        _FormBuilderModal2.default,
        modalProps,
        assetAdmin
      );
    }
  }]);

  return InsertMediaModal;
}(_react.Component);

InsertMediaModal.propTypes = {
  sectionConfig: _propTypes2.default.shape({
    url: _propTypes2.default.string,
    form: _propTypes2.default.object
  }),
  type: _propTypes2.default.oneOf(['insert-media', 'insert-link', 'select', 'admin']),
  schemaUrl: _propTypes2.default.string,
  isOpen: _propTypes2.default.bool,
  setOverrides: _propTypes2.default.func,
  onInsert: _propTypes2.default.func.isRequired,
  fileAttributes: _propTypes2.default.shape({
    ID: _propTypes2.default.number,
    AltText: _propTypes2.default.string,
    Width: _propTypes2.default.number,
    Height: _propTypes2.default.number,
    Loading: _propTypes2.default.string,
    TitleTooltip: _propTypes2.default.string,
    Alignment: _propTypes2.default.string,
    Description: _propTypes2.default.string,
    TargetBlank: _propTypes2.default.bool
  }),
  requireLinkText: _propTypes2.default.bool,
  folderId: _propTypes2.default.number,
  fileId: _propTypes2.default.number,
  viewAction: _propTypes2.default.string,
  query: _propTypes2.default.object,
  getUrl: _propTypes2.default.func,
  onBrowse: _propTypes2.default.func.isRequired,
  onClosed: _propTypes2.default.func,
  className: _propTypes2.default.string,
  actions: _propTypes2.default.object,
  maxFiles: _propTypes2.default.number,
  fileSelected: _propTypes2.default.bool
};

InsertMediaModal.defaultProps = {
  className: '',
  fileAttributes: {},
  type: 'insert-media',
  folderId: 0,
  maxFiles: 1
};

function mapStateToProps(state, ownProps) {
  var config = ownProps.sectionConfig;

  if (!config) {
    return {};
  }

  var folderId = 0;
  if (ownProps.folderId !== null) {
    folderId = ownProps.folderId;
  } else if (ownProps.folder) {
    folderId = ownProps.folder.id;
  }
  var fileId = ownProps.fileAttributes ? ownProps.fileAttributes.ID : ownProps.fileId;

  var formSchema = state.assetAdmin.modal.formSchema;

  var props = {
    config: config,
    viewAction: ownProps.viewAction,
    folderId: folderId,
    type: formSchema && formSchema.type,
    fileId: fileId
  };

  var _getFormSchema = (0, _getFormSchema3.default)(props),
      schemaUrl = _getFormSchema.schemaUrl,
      targetId = _getFormSchema.targetId;

  if (!schemaUrl) {
    return {};
  }

  var queryMap = {};
  if (ownProps.requireLinkText) {
    queryMap.requireLinkText = true;
  }
  if (ownProps.fileSelected) {
    queryMap.fileSelected = true;
  }
  var query = _qs2.default.stringify(queryMap);
  query = query ? '?' + query : '';

  return {
    schemaUrl: schemaUrl + '/' + targetId + query,
    type: formSchema && formSchema.type
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      gallery: (0, _redux.bindActionCreators)(galleryActions, dispatch),
      modal: (0, _redux.bindActionCreators)(modalActions, dispatch)
    }
  };
}

exports.Component = InsertMediaModal;
exports.default = (0, _redux.compose)(_stateRouter2.default, (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _fileSchemaModalHandler2.default)(InsertMediaModal);

/***/ }),

/***/ "./node_modules/constants-browserify/constants.json":
/***/ (function(module, exports) {

module.exports = {"O_RDONLY":0,"O_WRONLY":1,"O_RDWR":2,"S_IFMT":61440,"S_IFREG":32768,"S_IFDIR":16384,"S_IFCHR":8192,"S_IFBLK":24576,"S_IFIFO":4096,"S_IFLNK":40960,"S_IFSOCK":49152,"O_CREAT":512,"O_EXCL":2048,"O_NOCTTY":131072,"O_TRUNC":1024,"O_APPEND":8,"O_DIRECTORY":1048576,"O_NOFOLLOW":256,"O_SYNC":128,"O_SYMLINK":2097152,"O_NONBLOCK":4,"S_IRWXU":448,"S_IRUSR":256,"S_IWUSR":128,"S_IXUSR":64,"S_IRWXG":56,"S_IRGRP":32,"S_IWGRP":16,"S_IXGRP":8,"S_IRWXO":7,"S_IROTH":4,"S_IWOTH":2,"S_IXOTH":1,"E2BIG":7,"EACCES":13,"EADDRINUSE":48,"EADDRNOTAVAIL":49,"EAFNOSUPPORT":47,"EAGAIN":35,"EALREADY":37,"EBADF":9,"EBADMSG":94,"EBUSY":16,"ECANCELED":89,"ECHILD":10,"ECONNABORTED":53,"ECONNREFUSED":61,"ECONNRESET":54,"EDEADLK":11,"EDESTADDRREQ":39,"EDOM":33,"EDQUOT":69,"EEXIST":17,"EFAULT":14,"EFBIG":27,"EHOSTUNREACH":65,"EIDRM":90,"EILSEQ":92,"EINPROGRESS":36,"EINTR":4,"EINVAL":22,"EIO":5,"EISCONN":56,"EISDIR":21,"ELOOP":62,"EMFILE":24,"EMLINK":31,"EMSGSIZE":40,"EMULTIHOP":95,"ENAMETOOLONG":63,"ENETDOWN":50,"ENETRESET":52,"ENETUNREACH":51,"ENFILE":23,"ENOBUFS":55,"ENODATA":96,"ENODEV":19,"ENOENT":2,"ENOEXEC":8,"ENOLCK":77,"ENOLINK":97,"ENOMEM":12,"ENOMSG":91,"ENOPROTOOPT":42,"ENOSPC":28,"ENOSR":98,"ENOSTR":99,"ENOSYS":78,"ENOTCONN":57,"ENOTDIR":20,"ENOTEMPTY":66,"ENOTSOCK":38,"ENOTSUP":45,"ENOTTY":25,"ENXIO":6,"EOPNOTSUPP":102,"EOVERFLOW":84,"EPERM":1,"EPIPE":32,"EPROTO":100,"EPROTONOSUPPORT":43,"EPROTOTYPE":41,"ERANGE":34,"EROFS":30,"ESPIPE":29,"ESRCH":3,"ESTALE":70,"ETIME":101,"ETIMEDOUT":60,"ETXTBSY":26,"EWOULDBLOCK":35,"EXDEV":18,"SIGHUP":1,"SIGINT":2,"SIGQUIT":3,"SIGILL":4,"SIGTRAP":5,"SIGABRT":6,"SIGIOT":6,"SIGBUS":10,"SIGFPE":8,"SIGKILL":9,"SIGUSR1":30,"SIGSEGV":11,"SIGUSR2":31,"SIGPIPE":13,"SIGALRM":14,"SIGTERM":15,"SIGCHLD":20,"SIGCONT":19,"SIGSTOP":17,"SIGTSTP":18,"SIGTTIN":21,"SIGTTOU":22,"SIGURG":16,"SIGXCPU":24,"SIGXFSZ":25,"SIGVTALRM":26,"SIGPROF":27,"SIGWINCH":28,"SIGIO":23,"SIGSYS":12,"SSL_OP_ALL":2147486719,"SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION":262144,"SSL_OP_CIPHER_SERVER_PREFERENCE":4194304,"SSL_OP_CISCO_ANYCONNECT":32768,"SSL_OP_COOKIE_EXCHANGE":8192,"SSL_OP_CRYPTOPRO_TLSEXT_BUG":2147483648,"SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS":2048,"SSL_OP_EPHEMERAL_RSA":0,"SSL_OP_LEGACY_SERVER_CONNECT":4,"SSL_OP_MICROSOFT_BIG_SSLV3_BUFFER":32,"SSL_OP_MICROSOFT_SESS_ID_BUG":1,"SSL_OP_MSIE_SSLV2_RSA_PADDING":0,"SSL_OP_NETSCAPE_CA_DN_BUG":536870912,"SSL_OP_NETSCAPE_CHALLENGE_BUG":2,"SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG":1073741824,"SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG":8,"SSL_OP_NO_COMPRESSION":131072,"SSL_OP_NO_QUERY_MTU":4096,"SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION":65536,"SSL_OP_NO_SSLv2":16777216,"SSL_OP_NO_SSLv3":33554432,"SSL_OP_NO_TICKET":16384,"SSL_OP_NO_TLSv1":67108864,"SSL_OP_NO_TLSv1_1":268435456,"SSL_OP_NO_TLSv1_2":134217728,"SSL_OP_PKCS1_CHECK_1":0,"SSL_OP_PKCS1_CHECK_2":0,"SSL_OP_SINGLE_DH_USE":1048576,"SSL_OP_SINGLE_ECDH_USE":524288,"SSL_OP_SSLEAY_080_CLIENT_DH_BUG":128,"SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG":0,"SSL_OP_TLS_BLOCK_PADDING_BUG":512,"SSL_OP_TLS_D5_BUG":256,"SSL_OP_TLS_ROLLBACK_BUG":8388608,"ENGINE_METHOD_DSA":2,"ENGINE_METHOD_DH":4,"ENGINE_METHOD_RAND":8,"ENGINE_METHOD_ECDH":16,"ENGINE_METHOD_ECDSA":32,"ENGINE_METHOD_CIPHERS":64,"ENGINE_METHOD_DIGESTS":128,"ENGINE_METHOD_STORE":256,"ENGINE_METHOD_PKEY_METHS":512,"ENGINE_METHOD_PKEY_ASN1_METHS":1024,"ENGINE_METHOD_ALL":65535,"ENGINE_METHOD_NONE":0,"DH_CHECK_P_NOT_SAFE_PRIME":2,"DH_CHECK_P_NOT_PRIME":1,"DH_UNABLE_TO_CHECK_GENERATOR":4,"DH_NOT_SUITABLE_GENERATOR":8,"NPN_ENABLED":1,"RSA_PKCS1_PADDING":1,"RSA_SSLV23_PADDING":2,"RSA_NO_PADDING":3,"RSA_PKCS1_OAEP_PADDING":4,"RSA_X931_PADDING":5,"RSA_PKCS1_PSS_PADDING":6,"POINT_CONVERSION_COMPRESSED":2,"POINT_CONVERSION_UNCOMPRESSED":4,"POINT_CONVERSION_HYBRID":6,"F_OK":0,"R_OK":4,"W_OK":2,"X_OK":1,"UV_UDP_REUSEADDR":4}

/***/ }),

/***/ "./node_modules/create-react-class/factory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__("./node_modules/object-assign/index.js");

// -- Inlined from fbjs --

var emptyObject = {};

if (true) {
  Object.freeze(emptyObject);
}

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function _invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var warning = function(){};

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

// /-- Inlined from fbjs --

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (true) {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillMount`.
     *
     * @optional
     */
    UNSAFE_componentWillMount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillReceiveProps`.
     *
     * @optional
     */
    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillUpdate`.
     *
     * @optional
     */
    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Similar to ReactClassInterface but for static methods.
   */
  var ReactClassStaticInterface = {
    /**
     * This method is invoked after a component is instantiated and when it
     * receives new props. Return an object to update state in response to
     * prop changes. Return null to indicate no change to state.
     *
     * If an object is returned, its keys will be merged into the existing state.
     *
     * @return {object || null}
     * @optional
     */
    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (true) {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (true) {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (true) {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (true) {
          warning(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames[location],
            propName
          );
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (true) {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if (true) {
          warning(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (true) {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }

    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isAlreadyDefined = name in Constructor;
      if (isAlreadyDefined) {
        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
          ? ReactClassStaticInterface[name]
          : null;

        _invariant(
          specPolicy === 'DEFINE_MANY_MERGED',
          'ReactClass: You are attempting to define ' +
            '`%s` on your component more than once. This conflict may be ' +
            'due to a mixin.',
          name
        );

        Constructor[name] = createMergedResultFunction(Constructor[name], property);

        return;
      }

      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (true) {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          if (true) {
            warning(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          if (true) {
            warning(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (true) {
        warning(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (true) {
        warning(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (true) {
        // We allow auto-mocks to proceed as if they're returning null.
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (true) {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (true) {
      warning(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
          'Did you mean UNSAFE_componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;


/***/ }),

/***/ "./node_modules/create-react-class/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(0);
var factory = __webpack_require__("./node_modules/create-react-class/factory.js");

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),

/***/ "./node_modules/crypto-js/core.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define([], factory);
	}
	else {
		// Global (browser)
		root.CryptoJS = factory();
	}
}(this, function () {

	/*globals window, global, require*/

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {

	    var crypto;

	    // Native crypto from window (Browser)
	    if (typeof window !== 'undefined' && window.crypto) {
	        crypto = window.crypto;
	    }

	    // Native crypto in web worker (Browser)
	    if (typeof self !== 'undefined' && self.crypto) {
	        crypto = self.crypto;
	    }

	    // Native crypto from worker
	    if (typeof globalThis !== 'undefined' && globalThis.crypto) {
	        crypto = globalThis.crypto;
	    }

	    // Native (experimental IE 11) crypto from window (Browser)
	    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
	        crypto = window.msCrypto;
	    }

	    // Native crypto from global (NodeJS)
	    if (!crypto && typeof global !== 'undefined' && global.crypto) {
	        crypto = global.crypto;
	    }

	    // Native crypto import via require (NodeJS)
	    if (!crypto && "function" === 'function') {
	        try {
	            crypto = __webpack_require__(47);
	        } catch (err) {}
	    }

	    /*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */
	    var cryptoSecureRandomInt = function () {
	        if (crypto) {
	            // Use getRandomValues method (Browser)
	            if (typeof crypto.getRandomValues === 'function') {
	                try {
	                    return crypto.getRandomValues(new Uint32Array(1))[0];
	                } catch (err) {}
	            }

	            // Use randomBytes method (NodeJS)
	            if (typeof crypto.randomBytes === 'function') {
	                try {
	                    return crypto.randomBytes(4).readInt32LE();
	                } catch (err) {}
	            }
	        }

	        throw new Error('Native crypto module could not be used to get secure random number.');
	    };

	    /*
	     * Local polyfill of Object.create

	     */
	    var create = Object.create || (function () {
	        function F() {}

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }());

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var j = 0; j < thatSigBytes; j += 4) {
	                    thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            for (var i = 0; i < nBytes; i += 4) {
	                words.push(cryptoSecureRandomInt());
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            var processedWords;

	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/crypto-js/md5.js":
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__("./node_modules/crypto-js/core.js"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working varialbes
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	return CryptoJS.MD5;

}));

/***/ }),

/***/ "./node_modules/dropzone/dist/dropzone.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, module) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
// The Emitter class provides the ability to call `.on()` on Dropzone to listen
// to events.
// It is strongly based on component's emitter class, and I removed the
// functionality because of the dependency hell with different frameworks.
var Emitter = /*#__PURE__*/function () {
  function Emitter() {
    _classCallCheck(this, Emitter);
  }

  _createClass(Emitter, [{
    key: "on",
    // Add an event listener for given event
    value: function on(event, fn) {
      this._callbacks = this._callbacks || {}; // Create namespace for this event

      if (!this._callbacks[event]) {
        this._callbacks[event] = [];
      }

      this._callbacks[event].push(fn);

      return this;
    }
  }, {
    key: "emit",
    value: function emit(event) {
      this._callbacks = this._callbacks || {};
      var callbacks = this._callbacks[event];

      if (callbacks) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var _iterator = _createForOfIteratorHelper(callbacks),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var callback = _step.value;
            callback.apply(this, args);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return this;
    } // Remove event listener for given event. If fn is not provided, all event
    // listeners for that event will be removed. If neither is provided, all
    // event listeners will be removed.

  }, {
    key: "off",
    value: function off(event, fn) {
      if (!this._callbacks || arguments.length === 0) {
        this._callbacks = {};
        return this;
      } // specific event


      var callbacks = this._callbacks[event];

      if (!callbacks) {
        return this;
      } // remove all handlers


      if (arguments.length === 1) {
        delete this._callbacks[event];
        return this;
      } // remove specific handler


      for (var i = 0; i < callbacks.length; i++) {
        var callback = callbacks[i];

        if (callback === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }

      return this;
    }
  }]);

  return Emitter;
}();

var Dropzone = /*#__PURE__*/function (_Emitter) {
  _inherits(Dropzone, _Emitter);

  var _super = _createSuper(Dropzone);

  _createClass(Dropzone, null, [{
    key: "initClass",
    value: function initClass() {
      // Exposing the emitter class, mainly for tests
      this.prototype.Emitter = Emitter;
      /*
       This is a list of all available events you can register on a dropzone object.
        You can register an event handler like this:
        dropzone.on("dragEnter", function() { });
        */

      this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];
      this.prototype.defaultOptions = {
        /**
         * Has to be specified on elements other than form (or when the form
         * doesn't have an `action` attribute). You can also
         * provide a function that will be called with `files` and
         * must return the url (since `v3.12.0`)
         */
        url: null,

        /**
         * Can be changed to `"put"` if necessary. You can also provide a function
         * that will be called with `files` and must return the method (since `v3.12.0`).
         */
        method: "post",

        /**
         * Will be set on the XHRequest.
         */
        withCredentials: false,

        /**
         * The timeout for the XHR requests in milliseconds (since `v4.4.0`).
         */
        timeout: 30000,

        /**
         * How many file uploads to process in parallel (See the
         * Enqueuing file uploads documentation section for more info)
         */
        parallelUploads: 2,

        /**
         * Whether to send multiple files in one request. If
         * this it set to true, then the fallback file input element will
         * have the `multiple` attribute as well. This option will
         * also trigger additional events (like `processingmultiple`). See the events
         * documentation section for more information.
         */
        uploadMultiple: false,

        /**
         * Whether you want files to be uploaded in chunks to your server. This can't be
         * used in combination with `uploadMultiple`.
         *
         * See [chunksUploaded](#config-chunksUploaded) for the callback to finalise an upload.
         */
        chunking: false,

        /**
         * If `chunking` is enabled, this defines whether **every** file should be chunked,
         * even if the file size is below chunkSize. This means, that the additional chunk
         * form data will be submitted and the `chunksUploaded` callback will be invoked.
         */
        forceChunking: false,

        /**
         * If `chunking` is `true`, then this defines the chunk size in bytes.
         */
        chunkSize: 2000000,

        /**
         * If `true`, the individual chunks of a file are being uploaded simultaneously.
         */
        parallelChunkUploads: false,

        /**
         * Whether a chunk should be retried if it fails.
         */
        retryChunks: false,

        /**
         * If `retryChunks` is true, how many times should it be retried.
         */
        retryChunksLimit: 3,

        /**
         * If not `null` defines how many files this Dropzone handles. If it exceeds,
         * the event `maxfilesexceeded` will be called. The dropzone element gets the
         * class `dz-max-files-reached` accordingly so you can provide visual feedback.
         */
        maxFilesize: 256,

        /**
         * The name of the file param that gets transferred.
         * **NOTE**: If you have the option  `uploadMultiple` set to `true`, then
         * Dropzone will append `[]` to the name.
         */
        paramName: "file",

        /**
         * Whether thumbnails for images should be generated
         */
        createImageThumbnails: true,

        /**
         * In MB. When the filename exceeds this limit, the thumbnail will not be generated.
         */
        maxThumbnailFilesize: 10,

        /**
         * If `null`, the ratio of the image will be used to calculate it.
         */
        thumbnailWidth: 120,

        /**
         * The same as `thumbnailWidth`. If both are null, images will not be resized.
         */
        thumbnailHeight: 120,

        /**
         * How the images should be scaled down in case both, `thumbnailWidth` and `thumbnailHeight` are provided.
         * Can be either `contain` or `crop`.
         */
        thumbnailMethod: 'crop',

        /**
         * If set, images will be resized to these dimensions before being **uploaded**.
         * If only one, `resizeWidth` **or** `resizeHeight` is provided, the original aspect
         * ratio of the file will be preserved.
         *
         * The `options.transformFile` function uses these options, so if the `transformFile` function
         * is overridden, these options don't do anything.
         */
        resizeWidth: null,

        /**
         * See `resizeWidth`.
         */
        resizeHeight: null,

        /**
         * The mime type of the resized image (before it gets uploaded to the server).
         * If `null` the original mime type will be used. To force jpeg, for example, use `image/jpeg`.
         * See `resizeWidth` for more information.
         */
        resizeMimeType: null,

        /**
         * The quality of the resized images. See `resizeWidth`.
         */
        resizeQuality: 0.8,

        /**
         * How the images should be scaled down in case both, `resizeWidth` and `resizeHeight` are provided.
         * Can be either `contain` or `crop`.
         */
        resizeMethod: 'contain',

        /**
         * The base that is used to calculate the filesize. You can change this to
         * 1024 if you would rather display kibibytes, mebibytes, etc...
         * 1024 is technically incorrect, because `1024 bytes` are `1 kibibyte` not `1 kilobyte`.
         * You can change this to `1024` if you don't care about validity.
         */
        filesizeBase: 1000,

        /**
         * Can be used to limit the maximum number of files that will be handled by this Dropzone
         */
        maxFiles: null,

        /**
         * An optional object to send additional headers to the server. Eg:
         * `{ "My-Awesome-Header": "header value" }`
         */
        headers: null,

        /**
         * If `true`, the dropzone element itself will be clickable, if `false`
         * nothing will be clickable.
         *
         * You can also pass an HTML element, a CSS selector (for multiple elements)
         * or an array of those. In that case, all of those elements will trigger an
         * upload when clicked.
         */
        clickable: true,

        /**
         * Whether hidden files in directories should be ignored.
         */
        ignoreHiddenFiles: true,

        /**
         * The default implementation of `accept` checks the file's mime type or
         * extension against this list. This is a comma separated list of mime
         * types or file extensions.
         *
         * Eg.: `image/*,application/pdf,.psd`
         *
         * If the Dropzone is `clickable` this option will also be used as
         * [`accept`](https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept)
         * parameter on the hidden file input as well.
         */
        acceptedFiles: null,

        /**
         * **Deprecated!**
         * Use acceptedFiles instead.
         */
        acceptedMimeTypes: null,

        /**
         * If false, files will be added to the queue but the queue will not be
         * processed automatically.
         * This can be useful if you need some additional user input before sending
         * files (or if you want want all files sent at once).
         * If you're ready to send the file simply call `myDropzone.processQueue()`.
         *
         * See the [enqueuing file uploads](#enqueuing-file-uploads) documentation
         * section for more information.
         */
        autoProcessQueue: true,

        /**
         * If false, files added to the dropzone will not be queued by default.
         * You'll have to call `enqueueFile(file)` manually.
         */
        autoQueue: true,

        /**
         * If `true`, this will add a link to every file preview to remove or cancel (if
         * already uploading) the file. The `dictCancelUpload`, `dictCancelUploadConfirmation`
         * and `dictRemoveFile` options are used for the wording.
         */
        addRemoveLinks: false,

        /**
         * Defines where to display the file previews – if `null` the
         * Dropzone element itself is used. Can be a plain `HTMLElement` or a CSS
         * selector. The element should have the `dropzone-previews` class so
         * the previews are displayed properly.
         */
        previewsContainer: null,

        /**
         * This is the element the hidden input field (which is used when clicking on the
         * dropzone to trigger file selection) will be appended to. This might
         * be important in case you use frameworks to switch the content of your page.
         *
         * Can be a selector string, or an element directly.
         */
        hiddenInputContainer: "body",

        /**
         * If null, no capture type will be specified
         * If camera, mobile devices will skip the file selection and choose camera
         * If microphone, mobile devices will skip the file selection and choose the microphone
         * If camcorder, mobile devices will skip the file selection and choose the camera in video mode
         * On apple devices multiple must be set to false.  AcceptedFiles may need to
         * be set to an appropriate mime type (e.g. "image/*", "audio/*", or "video/*").
         */
        capture: null,

        /**
         * **Deprecated**. Use `renameFile` instead.
         */
        renameFilename: null,

        /**
         * A function that is invoked before the file is uploaded to the server and renames the file.
         * This function gets the `File` as argument and can use the `file.name`. The actual name of the
         * file that gets used during the upload can be accessed through `file.upload.filename`.
         */
        renameFile: null,

        /**
         * If `true` the fallback will be forced. This is very useful to test your server
         * implementations first and make sure that everything works as
         * expected without dropzone if you experience problems, and to test
         * how your fallbacks will look.
         */
        forceFallback: false,

        /**
         * The text used before any files are dropped.
         */
        dictDefaultMessage: "Drop files here to upload",

        /**
         * The text that replaces the default message text it the browser is not supported.
         */
        dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",

        /**
         * The text that will be added before the fallback form.
         * If you provide a  fallback element yourself, or if this option is `null` this will
         * be ignored.
         */
        dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",

        /**
         * If the filesize is too big.
         * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
         */
        dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",

        /**
         * If the file doesn't match the file type.
         */
        dictInvalidFileType: "You can't upload files of this type.",

        /**
         * If the server response was invalid.
         * `{{statusCode}}` will be replaced with the servers status code.
         */
        dictResponseError: "Server responded with {{statusCode}} code.",

        /**
         * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
         */
        dictCancelUpload: "Cancel upload",

        /**
         * The text that is displayed if an upload was manually canceled
         */
        dictUploadCanceled: "Upload canceled.",

        /**
         * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
         */
        dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",

        /**
         * If `addRemoveLinks` is true, the text to be used to remove a file.
         */
        dictRemoveFile: "Remove file",

        /**
         * If this is not null, then the user will be prompted before removing a file.
         */
        dictRemoveFileConfirmation: null,

        /**
         * Displayed if `maxFiles` is st and exceeded.
         * The string `{{maxFiles}}` will be replaced by the configuration value.
         */
        dictMaxFilesExceeded: "You can not upload any more files.",

        /**
         * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
         * `b` for bytes.
         */
        dictFileSizeUnits: {
          tb: "TB",
          gb: "GB",
          mb: "MB",
          kb: "KB",
          b: "b"
        },

        /**
         * Called when dropzone initialized
         * You can add event listeners here
         */
        init: function init() {},

        /**
         * Can be an **object** of additional parameters to transfer to the server, **or** a `Function`
         * that gets invoked with the `files`, `xhr` and, if it's a chunked upload, `chunk` arguments. In case
         * of a function, this needs to return a map.
         *
         * The default implementation does nothing for normal uploads, but adds relevant information for
         * chunked uploads.
         *
         * This is the same as adding hidden input fields in the form element.
         */
        params: function params(files, xhr, chunk) {
          if (chunk) {
            return {
              dzuuid: chunk.file.upload.uuid,
              dzchunkindex: chunk.index,
              dztotalfilesize: chunk.file.size,
              dzchunksize: this.options.chunkSize,
              dztotalchunkcount: chunk.file.upload.totalChunkCount,
              dzchunkbyteoffset: chunk.index * this.options.chunkSize
            };
          }
        },

        /**
         * A function that gets a [file](https://developer.mozilla.org/en-US/docs/DOM/File)
         * and a `done` function as parameters.
         *
         * If the done function is invoked without arguments, the file is "accepted" and will
         * be processed. If you pass an error message, the file is rejected, and the error
         * message will be displayed.
         * This function will not be called if the file is too big or doesn't match the mime types.
         */
        accept: function accept(file, done) {
          return done();
        },

        /**
         * The callback that will be invoked when all chunks have been uploaded for a file.
         * It gets the file for which the chunks have been uploaded as the first parameter,
         * and the `done` function as second. `done()` needs to be invoked when everything
         * needed to finish the upload process is done.
         */
        chunksUploaded: function chunksUploaded(file, done) {
          done();
        },

        /**
         * Gets called when the browser is not supported.
         * The default implementation shows the fallback input field and adds
         * a text.
         */
        fallback: function fallback() {
          // This code should pass in IE7... :(
          var messageElement;
          this.element.className = "".concat(this.element.className, " dz-browser-not-supported");

          var _iterator2 = _createForOfIteratorHelper(this.element.getElementsByTagName("div")),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var child = _step2.value;

              if (/(^| )dz-message($| )/.test(child.className)) {
                messageElement = child;
                child.className = "dz-message"; // Removes the 'dz-default' class

                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          if (!messageElement) {
            messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
            this.element.appendChild(messageElement);
          }

          var span = messageElement.getElementsByTagName("span")[0];

          if (span) {
            if (span.textContent != null) {
              span.textContent = this.options.dictFallbackMessage;
            } else if (span.innerText != null) {
              span.innerText = this.options.dictFallbackMessage;
            }
          }

          return this.element.appendChild(this.getFallbackForm());
        },

        /**
         * Gets called to calculate the thumbnail dimensions.
         *
         * It gets `file`, `width` and `height` (both may be `null`) as parameters and must return an object containing:
         *
         *  - `srcWidth` & `srcHeight` (required)
         *  - `trgWidth` & `trgHeight` (required)
         *  - `srcX` & `srcY` (optional, default `0`)
         *  - `trgX` & `trgY` (optional, default `0`)
         *
         * Those values are going to be used by `ctx.drawImage()`.
         */
        resize: function resize(file, width, height, resizeMethod) {
          var info = {
            srcX: 0,
            srcY: 0,
            srcWidth: file.width,
            srcHeight: file.height
          };
          var srcRatio = file.width / file.height; // Automatically calculate dimensions if not specified

          if (width == null && height == null) {
            width = info.srcWidth;
            height = info.srcHeight;
          } else if (width == null) {
            width = height * srcRatio;
          } else if (height == null) {
            height = width / srcRatio;
          } // Make sure images aren't upscaled


          width = Math.min(width, info.srcWidth);
          height = Math.min(height, info.srcHeight);
          var trgRatio = width / height;

          if (info.srcWidth > width || info.srcHeight > height) {
            // Image is bigger and needs rescaling
            if (resizeMethod === 'crop') {
              if (srcRatio > trgRatio) {
                info.srcHeight = file.height;
                info.srcWidth = info.srcHeight * trgRatio;
              } else {
                info.srcWidth = file.width;
                info.srcHeight = info.srcWidth / trgRatio;
              }
            } else if (resizeMethod === 'contain') {
              // Method 'contain'
              if (srcRatio > trgRatio) {
                height = width / srcRatio;
              } else {
                width = height * srcRatio;
              }
            } else {
              throw new Error("Unknown resizeMethod '".concat(resizeMethod, "'"));
            }
          }

          info.srcX = (file.width - info.srcWidth) / 2;
          info.srcY = (file.height - info.srcHeight) / 2;
          info.trgWidth = width;
          info.trgHeight = height;
          return info;
        },

        /**
         * Can be used to transform the file (for example, resize an image if necessary).
         *
         * The default implementation uses `resizeWidth` and `resizeHeight` (if provided) and resizes
         * images according to those dimensions.
         *
         * Gets the `file` as the first parameter, and a `done()` function as the second, that needs
         * to be invoked with the file when the transformation is done.
         */
        transformFile: function transformFile(file, done) {
          if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {
            return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
          } else {
            return done(file);
          }
        },

        /**
         * A string that contains the template used for each dropped
         * file. Change it to fulfill your needs but make sure to properly
         * provide all elements.
         *
         * If you want to use an actual HTML element instead of providing a String
         * as a config option, you could create a div with the id `tpl`,
         * put the template inside it and provide the element like this:
         *
         *     document
         *       .querySelector('#tpl')
         *       .innerHTML
         *
         */
        previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>Check</title>\n      <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>Error</title>\n      <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>",
        // END OPTIONS
        // (Required by the dropzone documentation parser)

        /*
         Those functions register themselves to the events on init and handle all
         the user interface specific stuff. Overwriting them won't break the upload
         but can break the way it's displayed.
         You can overwrite them if you don't like the default behavior. If you just
         want to add an additional event handler, register it on the dropzone object
         and don't overwrite those options.
         */
        // Those are self explanatory and simply concern the DragnDrop.
        drop: function drop(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragstart: function dragstart(e) {},
        dragend: function dragend(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragenter: function dragenter(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragover: function dragover(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragleave: function dragleave(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        paste: function paste(e) {},
        // Called whenever there are no files left in the dropzone anymore, and the
        // dropzone should be displayed as if in the initial state.
        reset: function reset() {
          return this.element.classList.remove("dz-started");
        },
        // Called when a file is added to the queue
        // Receives `file`
        addedfile: function addedfile(file) {
          var _this2 = this;

          if (this.element === this.previewsContainer) {
            this.element.classList.add("dz-started");
          }

          if (this.previewsContainer) {
            file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
            file.previewTemplate = file.previewElement; // Backwards compatibility

            this.previewsContainer.appendChild(file.previewElement);

            var _iterator3 = _createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-name]")),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var node = _step3.value;
                node.textContent = file.name;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            var _iterator4 = _createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-size]")),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                node = _step4.value;
                node.innerHTML = this.filesize(file.size);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            if (this.options.addRemoveLinks) {
              file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>".concat(this.options.dictRemoveFile, "</a>"));
              file.previewElement.appendChild(file._removeLink);
            }

            var removeFileEvent = function removeFileEvent(e) {
              e.preventDefault();
              e.stopPropagation();

              if (file.status === Dropzone.UPLOADING) {
                return Dropzone.confirm(_this2.options.dictCancelUploadConfirmation, function () {
                  return _this2.removeFile(file);
                });
              } else {
                if (_this2.options.dictRemoveFileConfirmation) {
                  return Dropzone.confirm(_this2.options.dictRemoveFileConfirmation, function () {
                    return _this2.removeFile(file);
                  });
                } else {
                  return _this2.removeFile(file);
                }
              }
            };

            var _iterator5 = _createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-remove]")),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var removeLink = _step5.value;
                removeLink.addEventListener("click", removeFileEvent);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        },
        // Called whenever a file is removed.
        removedfile: function removedfile(file) {
          if (file.previewElement != null && file.previewElement.parentNode != null) {
            file.previewElement.parentNode.removeChild(file.previewElement);
          }

          return this._updateMaxFilesReachedClass();
        },
        // Called when a thumbnail has been generated
        // Receives `file` and `dataUrl`
        thumbnail: function thumbnail(file, dataUrl) {
          if (file.previewElement) {
            file.previewElement.classList.remove("dz-file-preview");

            var _iterator6 = _createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-thumbnail]")),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var thumbnailElement = _step6.value;
                thumbnailElement.alt = file.name;
                thumbnailElement.src = dataUrl;
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            return setTimeout(function () {
              return file.previewElement.classList.add("dz-image-preview");
            }, 1);
          }
        },
        // Called whenever an error occurs
        // Receives `file` and `message`
        error: function error(file, message) {
          if (file.previewElement) {
            file.previewElement.classList.add("dz-error");

            if (typeof message !== "string" && message.error) {
              message = message.error;
            }

            var _iterator7 = _createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-errormessage]")),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var node = _step7.value;
                node.textContent = message;
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        },
        errormultiple: function errormultiple() {},
        // Called when a file gets processed. Since there is a cue, not all added
        // files are processed immediately.
        // Receives `file`
        processing: function processing(file) {
          if (file.previewElement) {
            file.previewElement.classList.add("dz-processing");

            if (file._removeLink) {
              return file._removeLink.innerHTML = this.options.dictCancelUpload;
            }
          }
        },
        processingmultiple: function processingmultiple() {},
        // Called whenever the upload progress gets updated.
        // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
        // To get the total number of bytes of the file, use `file.size`
        uploadprogress: function uploadprogress(file, progress, bytesSent) {
          if (file.previewElement) {
            var _iterator8 = _createForOfIteratorHelper(file.previewElement.querySelectorAll("[data-dz-uploadprogress]")),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var node = _step8.value;
                node.nodeName === 'PROGRESS' ? node.value = progress : node.style.width = "".concat(progress, "%");
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
        },
        // Called whenever the total upload progress gets updated.
        // Called with totalUploadProgress (0-100), totalBytes and totalBytesSent
        totaluploadprogress: function totaluploadprogress() {},
        // Called just before the file is sent. Gets the `xhr` object as second
        // parameter, so you can modify it (for example to add a CSRF token) and a
        // `formData` object to add additional information.
        sending: function sending() {},
        sendingmultiple: function sendingmultiple() {},
        // When the complete upload is finished and successful
        // Receives `file`
        success: function success(file) {
          if (file.previewElement) {
            return file.previewElement.classList.add("dz-success");
          }
        },
        successmultiple: function successmultiple() {},
        // When the upload is canceled.
        canceled: function canceled(file) {
          return this.emit("error", file, this.options.dictUploadCanceled);
        },
        canceledmultiple: function canceledmultiple() {},
        // When the upload is finished, either with success or an error.
        // Receives `file`
        complete: function complete(file) {
          if (file._removeLink) {
            file._removeLink.innerHTML = this.options.dictRemoveFile;
          }

          if (file.previewElement) {
            return file.previewElement.classList.add("dz-complete");
          }
        },
        completemultiple: function completemultiple() {},
        maxfilesexceeded: function maxfilesexceeded() {},
        maxfilesreached: function maxfilesreached() {},
        queuecomplete: function queuecomplete() {},
        addedfiles: function addedfiles() {}
      };
      this.prototype._thumbnailQueue = [];
      this.prototype._processingThumbnail = false;
    } // global utility

  }, {
    key: "extend",
    value: function extend(target) {
      for (var _len2 = arguments.length, objects = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        objects[_key2 - 1] = arguments[_key2];
      }

      for (var _i = 0, _objects = objects; _i < _objects.length; _i++) {
        var object = _objects[_i];

        for (var key in object) {
          var val = object[key];
          target[key] = val;
        }
      }

      return target;
    }
  }]);

  function Dropzone(el, options) {
    var _this;

    _classCallCheck(this, Dropzone);

    _this = _super.call(this);
    var fallback, left;
    _this.element = el; // For backwards compatibility since the version was in the prototype previously

    _this.version = Dropzone.version;
    _this.defaultOptions.previewTemplate = _this.defaultOptions.previewTemplate.replace(/\n*/g, "");
    _this.clickableElements = [];
    _this.listeners = [];
    _this.files = []; // All files

    if (typeof _this.element === "string") {
      _this.element = document.querySelector(_this.element);
    } // Not checking if instance of HTMLElement or Element since IE9 is extremely weird.


    if (!_this.element || _this.element.nodeType == null) {
      throw new Error("Invalid dropzone element.");
    }

    if (_this.element.dropzone) {
      throw new Error("Dropzone already attached.");
    } // Now add this dropzone to the instances.


    Dropzone.instances.push(_assertThisInitialized(_this)); // Put the dropzone inside the element itself.

    _this.element.dropzone = _assertThisInitialized(_this);
    var elementOptions = (left = Dropzone.optionsForElement(_this.element)) != null ? left : {};
    _this.options = Dropzone.extend({}, _this.defaultOptions, elementOptions, options != null ? options : {}); // If the browser failed, just call the fallback and leave

    if (_this.options.forceFallback || !Dropzone.isBrowserSupported()) {
      return _possibleConstructorReturn(_this, _this.options.fallback.call(_assertThisInitialized(_this)));
    } // @options.url = @element.getAttribute "action" unless @options.url?


    if (_this.options.url == null) {
      _this.options.url = _this.element.getAttribute("action");
    }

    if (!_this.options.url) {
      throw new Error("No URL provided.");
    }

    if (_this.options.acceptedFiles && _this.options.acceptedMimeTypes) {
      throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
    }

    if (_this.options.uploadMultiple && _this.options.chunking) {
      throw new Error('You cannot set both: uploadMultiple and chunking.');
    } // Backwards compatibility


    if (_this.options.acceptedMimeTypes) {
      _this.options.acceptedFiles = _this.options.acceptedMimeTypes;
      delete _this.options.acceptedMimeTypes;
    } // Backwards compatibility


    if (_this.options.renameFilename != null) {
      _this.options.renameFile = function (file) {
        return _this.options.renameFilename.call(_assertThisInitialized(_this), file.name, file);
      };
    }

    if (typeof _this.options.method === 'string') {
      _this.options.method = _this.options.method.toUpperCase();
    }

    if ((fallback = _this.getExistingFallback()) && fallback.parentNode) {
      // Remove the fallback
      fallback.parentNode.removeChild(fallback);
    } // Display previews in the previewsContainer element or the Dropzone element unless explicitly set to false


    if (_this.options.previewsContainer !== false) {
      if (_this.options.previewsContainer) {
        _this.previewsContainer = Dropzone.getElement(_this.options.previewsContainer, "previewsContainer");
      } else {
        _this.previewsContainer = _this.element;
      }
    }

    if (_this.options.clickable) {
      if (_this.options.clickable === true) {
        _this.clickableElements = [_this.element];
      } else {
        _this.clickableElements = Dropzone.getElements(_this.options.clickable, "clickable");
      }
    }

    _this.init();

    return _this;
  } // Returns all files that have been accepted


  _createClass(Dropzone, [{
    key: "getAcceptedFiles",
    value: function getAcceptedFiles() {
      return this.files.filter(function (file) {
        return file.accepted;
      }).map(function (file) {
        return file;
      });
    } // Returns all files that have been rejected
    // Not sure when that's going to be useful, but added for completeness.

  }, {
    key: "getRejectedFiles",
    value: function getRejectedFiles() {
      return this.files.filter(function (file) {
        return !file.accepted;
      }).map(function (file) {
        return file;
      });
    }
  }, {
    key: "getFilesWithStatus",
    value: function getFilesWithStatus(status) {
      return this.files.filter(function (file) {
        return file.status === status;
      }).map(function (file) {
        return file;
      });
    } // Returns all files that are in the queue

  }, {
    key: "getQueuedFiles",
    value: function getQueuedFiles() {
      return this.getFilesWithStatus(Dropzone.QUEUED);
    }
  }, {
    key: "getUploadingFiles",
    value: function getUploadingFiles() {
      return this.getFilesWithStatus(Dropzone.UPLOADING);
    }
  }, {
    key: "getAddedFiles",
    value: function getAddedFiles() {
      return this.getFilesWithStatus(Dropzone.ADDED);
    } // Files that are either queued or uploading

  }, {
    key: "getActiveFiles",
    value: function getActiveFiles() {
      return this.files.filter(function (file) {
        return file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED;
      }).map(function (file) {
        return file;
      });
    } // The function that gets called when Dropzone is initialized. You
    // can (and should) setup event listeners inside this function.

  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      // In case it isn't set already
      if (this.element.tagName === "form") {
        this.element.setAttribute("enctype", "multipart/form-data");
      }

      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><button class=\"dz-button\" type=\"button\">".concat(this.options.dictDefaultMessage, "</button></div>")));
      }

      if (this.clickableElements.length) {
        var setupHiddenFileInput = function setupHiddenFileInput() {
          if (_this3.hiddenFileInput) {
            _this3.hiddenFileInput.parentNode.removeChild(_this3.hiddenFileInput);
          }

          _this3.hiddenFileInput = document.createElement("input");

          _this3.hiddenFileInput.setAttribute("type", "file");

          if (_this3.options.maxFiles === null || _this3.options.maxFiles > 1) {
            _this3.hiddenFileInput.setAttribute("multiple", "multiple");
          }

          _this3.hiddenFileInput.className = "dz-hidden-input";

          if (_this3.options.acceptedFiles !== null) {
            _this3.hiddenFileInput.setAttribute("accept", _this3.options.acceptedFiles);
          }

          if (_this3.options.capture !== null) {
            _this3.hiddenFileInput.setAttribute("capture", _this3.options.capture);
          } // Not setting `display="none"` because some browsers don't accept clicks
          // on elements that aren't displayed.


          _this3.hiddenFileInput.style.visibility = "hidden";
          _this3.hiddenFileInput.style.position = "absolute";
          _this3.hiddenFileInput.style.top = "0";
          _this3.hiddenFileInput.style.left = "0";
          _this3.hiddenFileInput.style.height = "0";
          _this3.hiddenFileInput.style.width = "0";
          Dropzone.getElement(_this3.options.hiddenInputContainer, 'hiddenInputContainer').appendChild(_this3.hiddenFileInput);
          return _this3.hiddenFileInput.addEventListener("change", function () {
            var files = _this3.hiddenFileInput.files;

            if (files.length) {
              var _iterator9 = _createForOfIteratorHelper(files),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var file = _step9.value;

                  _this3.addFile(file);
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
            }

            _this3.emit("addedfiles", files);

            return setupHiddenFileInput();
          });
        };

        setupHiddenFileInput();
      }

      this.URL = window.URL !== null ? window.URL : window.webkitURL; // Setup all event listeners on the Dropzone object itself.
      // They're not in @setupEventListeners() because they shouldn't be removed
      // again when the dropzone gets disabled.

      var _iterator10 = _createForOfIteratorHelper(this.events),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var eventName = _step10.value;
          this.on(eventName, this.options[eventName]);
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      this.on("uploadprogress", function () {
        return _this3.updateTotalUploadProgress();
      });
      this.on("removedfile", function () {
        return _this3.updateTotalUploadProgress();
      });
      this.on("canceled", function (file) {
        return _this3.emit("complete", file);
      }); // Emit a `queuecomplete` event if all files finished uploading.

      this.on("complete", function (file) {
        if (_this3.getAddedFiles().length === 0 && _this3.getUploadingFiles().length === 0 && _this3.getQueuedFiles().length === 0) {
          // This needs to be deferred so that `queuecomplete` really triggers after `complete`
          return setTimeout(function () {
            return _this3.emit("queuecomplete");
          }, 0);
        }
      });

      var containsFiles = function containsFiles(e) {
        if (e.dataTransfer.types) {
          // Because e.dataTransfer.types is an Object in
          // IE, we need to iterate like this instead of
          // using e.dataTransfer.types.some()
          for (var i = 0; i < e.dataTransfer.types.length; i++) {
            if (e.dataTransfer.types[i] === "Files") return true;
          }
        }

        return false;
      };

      var noPropagation = function noPropagation(e) {
        // If there are no files, we don't want to stop
        // propagation so we don't interfere with other
        // drag and drop behaviour.
        if (!containsFiles(e)) return;
        e.stopPropagation();

        if (e.preventDefault) {
          return e.preventDefault();
        } else {
          return e.returnValue = false;
        }
      }; // Create the listeners


      this.listeners = [{
        element: this.element,
        events: {
          "dragstart": function dragstart(e) {
            return _this3.emit("dragstart", e);
          },
          "dragenter": function dragenter(e) {
            noPropagation(e);
            return _this3.emit("dragenter", e);
          },
          "dragover": function dragover(e) {
            // Makes it possible to drag files from chrome's download bar
            // http://stackoverflow.com/questions/19526430/drag-and-drop-file-uploads-from-chrome-downloads-bar
            // Try is required to prevent bug in Internet Explorer 11 (SCRIPT65535 exception)
            var efct;

            try {
              efct = e.dataTransfer.effectAllowed;
            } catch (error) {}

            e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
            noPropagation(e);
            return _this3.emit("dragover", e);
          },
          "dragleave": function dragleave(e) {
            return _this3.emit("dragleave", e);
          },
          "drop": function drop(e) {
            noPropagation(e);
            return _this3.drop(e);
          },
          "dragend": function dragend(e) {
            return _this3.emit("dragend", e);
          }
        } // This is disabled right now, because the browsers don't implement it properly.
        // "paste": (e) =>
        //   noPropagation e
        //   @paste e

      }];
      this.clickableElements.forEach(function (clickableElement) {
        return _this3.listeners.push({
          element: clickableElement,
          events: {
            "click": function click(evt) {
              // Only the actual dropzone or the message element should trigger file selection
              if (clickableElement !== _this3.element || evt.target === _this3.element || Dropzone.elementInside(evt.target, _this3.element.querySelector(".dz-message"))) {
                _this3.hiddenFileInput.click(); // Forward the click

              }

              return true;
            }
          }
        });
      });
      this.enable();
      return this.options.init.call(this);
    } // Not fully tested yet

  }, {
    key: "destroy",
    value: function destroy() {
      this.disable();
      this.removeAllFiles(true);

      if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : undefined) {
        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
      }

      delete this.element.dropzone;
      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
    }
  }, {
    key: "updateTotalUploadProgress",
    value: function updateTotalUploadProgress() {
      var totalUploadProgress;
      var totalBytesSent = 0;
      var totalBytes = 0;
      var activeFiles = this.getActiveFiles();

      if (activeFiles.length) {
        var _iterator11 = _createForOfIteratorHelper(this.getActiveFiles()),
            _step11;

        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var file = _step11.value;
            totalBytesSent += file.upload.bytesSent;
            totalBytes += file.upload.total;
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }

        totalUploadProgress = 100 * totalBytesSent / totalBytes;
      } else {
        totalUploadProgress = 100;
      }

      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    } // @options.paramName can be a function taking one parameter rather than a string.
    // A parameter name for a file is obtained simply by calling this with an index number.

  }, {
    key: "_getParamName",
    value: function _getParamName(n) {
      if (typeof this.options.paramName === "function") {
        return this.options.paramName(n);
      } else {
        return "".concat(this.options.paramName).concat(this.options.uploadMultiple ? "[".concat(n, "]") : "");
      }
    } // If @options.renameFile is a function,
    // the function will be used to rename the file.name before appending it to the formData

  }, {
    key: "_renameFile",
    value: function _renameFile(file) {
      if (typeof this.options.renameFile !== "function") {
        return file.name;
      }

      return this.options.renameFile(file);
    } // Returns a form that can be used as fallback if the browser does not support DragnDrop
    //
    // If the dropzone is already a form, only the input field and button are returned. Otherwise a complete form element is provided.
    // This code has to pass in IE7 :(

  }, {
    key: "getFallbackForm",
    value: function getFallbackForm() {
      var existingFallback, form;

      if (existingFallback = this.getExistingFallback()) {
        return existingFallback;
      }

      var fieldsString = "<div class=\"dz-fallback\">";

      if (this.options.dictFallbackText) {
        fieldsString += "<p>".concat(this.options.dictFallbackText, "</p>");
      }

      fieldsString += "<input type=\"file\" name=\"".concat(this._getParamName(0), "\" ").concat(this.options.uploadMultiple ? 'multiple="multiple"' : undefined, " /><input type=\"submit\" value=\"Upload!\"></div>");
      var fields = Dropzone.createElement(fieldsString);

      if (this.element.tagName !== "FORM") {
        form = Dropzone.createElement("<form action=\"".concat(this.options.url, "\" enctype=\"multipart/form-data\" method=\"").concat(this.options.method, "\"></form>"));
        form.appendChild(fields);
      } else {
        // Make sure that the enctype and method attributes are set properly
        this.element.setAttribute("enctype", "multipart/form-data");
        this.element.setAttribute("method", this.options.method);
      }

      return form != null ? form : fields;
    } // Returns the fallback elements if they exist already
    //
    // This code has to pass in IE7 :(

  }, {
    key: "getExistingFallback",
    value: function getExistingFallback() {
      var getFallback = function getFallback(elements) {
        var _iterator12 = _createForOfIteratorHelper(elements),
            _step12;

        try {
          for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
            var el = _step12.value;

            if (/(^| )fallback($| )/.test(el.className)) {
              return el;
            }
          }
        } catch (err) {
          _iterator12.e(err);
        } finally {
          _iterator12.f();
        }
      };

      for (var _i2 = 0, _arr = ["div", "form"]; _i2 < _arr.length; _i2++) {
        var tagName = _arr[_i2];
        var fallback;

        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
          return fallback;
        }
      }
    } // Activates all listeners stored in @listeners

  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      return this.listeners.map(function (elementListeners) {
        return function () {
          var result = [];

          for (var event in elementListeners.events) {
            var listener = elementListeners.events[event];
            result.push(elementListeners.element.addEventListener(event, listener, false));
          }

          return result;
        }();
      });
    } // Deactivates all listeners stored in @listeners

  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      return this.listeners.map(function (elementListeners) {
        return function () {
          var result = [];

          for (var event in elementListeners.events) {
            var listener = elementListeners.events[event];
            result.push(elementListeners.element.removeEventListener(event, listener, false));
          }

          return result;
        }();
      });
    } // Removes all event listeners and cancels all files in the queue or being processed.

  }, {
    key: "disable",
    value: function disable() {
      var _this4 = this;

      this.clickableElements.forEach(function (element) {
        return element.classList.remove("dz-clickable");
      });
      this.removeEventListeners();
      this.disabled = true;
      return this.files.map(function (file) {
        return _this4.cancelUpload(file);
      });
    }
  }, {
    key: "enable",
    value: function enable() {
      delete this.disabled;
      this.clickableElements.forEach(function (element) {
        return element.classList.add("dz-clickable");
      });
      return this.setupEventListeners();
    } // Returns a nicely formatted filesize

  }, {
    key: "filesize",
    value: function filesize(size) {
      var selectedSize = 0;
      var selectedUnit = "b";

      if (size > 0) {
        var units = ['tb', 'gb', 'mb', 'kb', 'b'];

        for (var i = 0; i < units.length; i++) {
          var unit = units[i];
          var cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;

          if (size >= cutoff) {
            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
            selectedUnit = unit;
            break;
          }
        }

        selectedSize = Math.round(10 * selectedSize) / 10; // Cutting of digits
      }

      return "<strong>".concat(selectedSize, "</strong> ").concat(this.options.dictFileSizeUnits[selectedUnit]);
    } // Adds or removes the `dz-max-files-reached` class from the form.

  }, {
    key: "_updateMaxFilesReachedClass",
    value: function _updateMaxFilesReachedClass() {
      if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
        if (this.getAcceptedFiles().length === this.options.maxFiles) {
          this.emit('maxfilesreached', this.files);
        }

        return this.element.classList.add("dz-max-files-reached");
      } else {
        return this.element.classList.remove("dz-max-files-reached");
      }
    }
  }, {
    key: "drop",
    value: function drop(e) {
      if (!e.dataTransfer) {
        return;
      }

      this.emit("drop", e); // Convert the FileList to an Array
      // This is necessary for IE11

      var files = [];

      for (var i = 0; i < e.dataTransfer.files.length; i++) {
        files[i] = e.dataTransfer.files[i];
      } // Even if it's a folder, files.length will contain the folders.


      if (files.length) {
        var items = e.dataTransfer.items;

        if (items && items.length && items[0].webkitGetAsEntry != null) {
          // The browser supports dropping of folders, so handle items instead of files
          this._addFilesFromItems(items);
        } else {
          this.handleFiles(files);
        }
      }

      this.emit("addedfiles", files);
    }
  }, {
    key: "paste",
    value: function paste(e) {
      if (__guard__(e != null ? e.clipboardData : undefined, function (x) {
        return x.items;
      }) == null) {
        return;
      }

      this.emit("paste", e);
      var items = e.clipboardData.items;

      if (items.length) {
        return this._addFilesFromItems(items);
      }
    }
  }, {
    key: "handleFiles",
    value: function handleFiles(files) {
      var _iterator13 = _createForOfIteratorHelper(files),
          _step13;

      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var file = _step13.value;
          this.addFile(file);
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
    } // When a folder is dropped (or files are pasted), items must be handled
    // instead of files.

  }, {
    key: "_addFilesFromItems",
    value: function _addFilesFromItems(items) {
      var _this5 = this;

      return function () {
        var result = [];

        var _iterator14 = _createForOfIteratorHelper(items),
            _step14;

        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var item = _step14.value;
            var entry;

            if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
              if (entry.isFile) {
                result.push(_this5.addFile(item.getAsFile()));
              } else if (entry.isDirectory) {
                // Append all files from that directory to files
                result.push(_this5._addFilesFromDirectory(entry, entry.name));
              } else {
                result.push(undefined);
              }
            } else if (item.getAsFile != null) {
              if (item.kind == null || item.kind === "file") {
                result.push(_this5.addFile(item.getAsFile()));
              } else {
                result.push(undefined);
              }
            } else {
              result.push(undefined);
            }
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }

        return result;
      }();
    } // Goes through the directory, and adds each file it finds recursively

  }, {
    key: "_addFilesFromDirectory",
    value: function _addFilesFromDirectory(directory, path) {
      var _this6 = this;

      var dirReader = directory.createReader();

      var errorHandler = function errorHandler(error) {
        return __guardMethod__(console, 'log', function (o) {
          return o.log(error);
        });
      };

      var readEntries = function readEntries() {
        return dirReader.readEntries(function (entries) {
          if (entries.length > 0) {
            var _iterator15 = _createForOfIteratorHelper(entries),
                _step15;

            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var entry = _step15.value;

                if (entry.isFile) {
                  entry.file(function (file) {
                    if (_this6.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                      return;
                    }

                    file.fullPath = "".concat(path, "/").concat(file.name);
                    return _this6.addFile(file);
                  });
                } else if (entry.isDirectory) {
                  _this6._addFilesFromDirectory(entry, "".concat(path, "/").concat(entry.name));
                }
              } // Recursively call readEntries() again, since browser only handle
              // the first 100 entries.
              // See: https://developer.mozilla.org/en-US/docs/Web/API/DirectoryReader#readEntries

            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }

            readEntries();
          }

          return null;
        }, errorHandler);
      };

      return readEntries();
    } // If `done()` is called without argument the file is accepted
    // If you call it with an error message, the file is rejected
    // (This allows for asynchronous validation)
    //
    // This function checks the filesize, and if the file.type passes the
    // `acceptedFiles` check.

  }, {
    key: "accept",
    value: function accept(file, done) {
      if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1024 * 1024) {
        done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
        done(this.options.dictInvalidFileType);
      } else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
        this.emit("maxfilesexceeded", file);
      } else {
        this.options.accept.call(this, file, done);
      }
    }
  }, {
    key: "addFile",
    value: function addFile(file) {
      var _this7 = this;

      file.upload = {
        uuid: Dropzone.uuidv4(),
        progress: 0,
        // Setting the total upload size to file.size for the beginning
        // It's actual different than the size to be transmitted.
        total: file.size,
        bytesSent: 0,
        filename: this._renameFile(file) // Not setting chunking information here, because the acutal data — and
        // thus the chunks — might change if `options.transformFile` is set
        // and does something to the data.

      };
      this.files.push(file);
      file.status = Dropzone.ADDED;
      this.emit("addedfile", file);

      this._enqueueThumbnail(file);

      this.accept(file, function (error) {
        if (error) {
          file.accepted = false;

          _this7._errorProcessing([file], error); // Will set the file.status

        } else {
          file.accepted = true;

          if (_this7.options.autoQueue) {
            _this7.enqueueFile(file);
          } // Will set .accepted = true

        }

        _this7._updateMaxFilesReachedClass();
      });
    } // Wrapper for enqueueFile

  }, {
    key: "enqueueFiles",
    value: function enqueueFiles(files) {
      var _iterator16 = _createForOfIteratorHelper(files),
          _step16;

      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var file = _step16.value;
          this.enqueueFile(file);
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }

      return null;
    }
  }, {
    key: "enqueueFile",
    value: function enqueueFile(file) {
      var _this8 = this;

      if (file.status === Dropzone.ADDED && file.accepted === true) {
        file.status = Dropzone.QUEUED;

        if (this.options.autoProcessQueue) {
          return setTimeout(function () {
            return _this8.processQueue();
          }, 0); // Deferring the call
        }
      } else {
        throw new Error("This file can't be queued because it has already been processed or was rejected.");
      }
    }
  }, {
    key: "_enqueueThumbnail",
    value: function _enqueueThumbnail(file) {
      var _this9 = this;

      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
        this._thumbnailQueue.push(file);

        return setTimeout(function () {
          return _this9._processThumbnailQueue();
        }, 0); // Deferring the call
      }
    }
  }, {
    key: "_processThumbnailQueue",
    value: function _processThumbnailQueue() {
      var _this10 = this;

      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
        return;
      }

      this._processingThumbnail = true;

      var file = this._thumbnailQueue.shift();

      return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, function (dataUrl) {
        _this10.emit("thumbnail", file, dataUrl);

        _this10._processingThumbnail = false;
        return _this10._processThumbnailQueue();
      });
    } // Can be called by the user to remove a file

  }, {
    key: "removeFile",
    value: function removeFile(file) {
      if (file.status === Dropzone.UPLOADING) {
        this.cancelUpload(file);
      }

      this.files = without(this.files, file);
      this.emit("removedfile", file);

      if (this.files.length === 0) {
        return this.emit("reset");
      }
    } // Removes all files that aren't currently processed from the list

  }, {
    key: "removeAllFiles",
    value: function removeAllFiles(cancelIfNecessary) {
      // Create a copy of files since removeFile() changes the @files array.
      if (cancelIfNecessary == null) {
        cancelIfNecessary = false;
      }

      var _iterator17 = _createForOfIteratorHelper(this.files.slice()),
          _step17;

      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var file = _step17.value;

          if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
            this.removeFile(file);
          }
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }

      return null;
    } // Resizes an image before it gets sent to the server. This function is the default behavior of
    // `options.transformFile` if `resizeWidth` or `resizeHeight` are set. The callback is invoked with
    // the resized blob.

  }, {
    key: "resizeImage",
    value: function resizeImage(file, width, height, resizeMethod, callback) {
      var _this11 = this;

      return this.createThumbnail(file, width, height, resizeMethod, true, function (dataUrl, canvas) {
        if (canvas == null) {
          // The image has not been resized
          return callback(file);
        } else {
          var resizeMimeType = _this11.options.resizeMimeType;

          if (resizeMimeType == null) {
            resizeMimeType = file.type;
          }

          var resizedDataURL = canvas.toDataURL(resizeMimeType, _this11.options.resizeQuality);

          if (resizeMimeType === 'image/jpeg' || resizeMimeType === 'image/jpg') {
            // Now add the original EXIF information
            resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);
          }

          return callback(Dropzone.dataURItoBlob(resizedDataURL));
        }
      });
    }
  }, {
    key: "createThumbnail",
    value: function createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
      var _this12 = this;

      var fileReader = new FileReader();

      fileReader.onload = function () {
        file.dataURL = fileReader.result; // Don't bother creating a thumbnail for SVG images since they're vector

        if (file.type === "image/svg+xml") {
          if (callback != null) {
            callback(fileReader.result);
          }

          return;
        }

        _this12.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
      };

      fileReader.readAsDataURL(file);
    } // `mockFile` needs to have these attributes:
    // 
    //     { name: 'name', size: 12345, imageUrl: '' }
    //
    // `callback` will be invoked when the image has been downloaded and displayed.
    // `crossOrigin` will be added to the `img` tag when accessing the file.

  }, {
    key: "displayExistingFile",
    value: function displayExistingFile(mockFile, imageUrl, callback, crossOrigin) {
      var _this13 = this;

      var resizeThumbnail = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      this.emit("addedfile", mockFile);
      this.emit("complete", mockFile);

      if (!resizeThumbnail) {
        this.emit("thumbnail", mockFile, imageUrl);
        if (callback) callback();
      } else {
        var onDone = function onDone(thumbnail) {
          _this13.emit('thumbnail', mockFile, thumbnail);

          if (callback) callback();
        };

        mockFile.dataURL = imageUrl;
        this.createThumbnailFromUrl(mockFile, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.resizeMethod, this.options.fixOrientation, onDone, crossOrigin);
      }
    }
  }, {
    key: "createThumbnailFromUrl",
    value: function createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
      var _this14 = this;

      // Not using `new Image` here because of a bug in latest Chrome versions.
      // See https://github.com/enyo/dropzone/pull/226
      var img = document.createElement("img");

      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      } // fixOrientation is not needed anymore with browsers handling imageOrientation


      fixOrientation = getComputedStyle(document.body)['imageOrientation'] == 'from-image' ? false : fixOrientation;

      img.onload = function () {
        var loadExif = function loadExif(callback) {
          return callback(1);
        };

        if (typeof EXIF !== 'undefined' && EXIF !== null && fixOrientation) {
          loadExif = function loadExif(callback) {
            return EXIF.getData(img, function () {
              return callback(EXIF.getTag(this, 'Orientation'));
            });
          };
        }

        return loadExif(function (orientation) {
          file.width = img.width;
          file.height = img.height;

          var resizeInfo = _this14.options.resize.call(_this14, file, width, height, resizeMethod);

          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");
          canvas.width = resizeInfo.trgWidth;
          canvas.height = resizeInfo.trgHeight;

          if (orientation > 4) {
            canvas.width = resizeInfo.trgHeight;
            canvas.height = resizeInfo.trgWidth;
          }

          switch (orientation) {
            case 2:
              // horizontal flip
              ctx.translate(canvas.width, 0);
              ctx.scale(-1, 1);
              break;

            case 3:
              // 180° rotate left
              ctx.translate(canvas.width, canvas.height);
              ctx.rotate(Math.PI);
              break;

            case 4:
              // vertical flip
              ctx.translate(0, canvas.height);
              ctx.scale(1, -1);
              break;

            case 5:
              // vertical flip + 90 rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.scale(1, -1);
              break;

            case 6:
              // 90° rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.translate(0, -canvas.width);
              break;

            case 7:
              // horizontal flip + 90 rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.translate(canvas.height, -canvas.width);
              ctx.scale(-1, 1);
              break;

            case 8:
              // 90° rotate left
              ctx.rotate(-0.5 * Math.PI);
              ctx.translate(-canvas.height, 0);
              break;
          } // This is a bugfix for iOS' scaling bug.


          drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
          var thumbnail = canvas.toDataURL("image/png");

          if (callback != null) {
            return callback(thumbnail, canvas);
          }
        });
      };

      if (callback != null) {
        img.onerror = callback;
      }

      return img.src = file.dataURL;
    } // Goes through the queue and processes files if there aren't too many already.

  }, {
    key: "processQueue",
    value: function processQueue() {
      var parallelUploads = this.options.parallelUploads;
      var processingLength = this.getUploadingFiles().length;
      var i = processingLength; // There are already at least as many files uploading than should be

      if (processingLength >= parallelUploads) {
        return;
      }

      var queuedFiles = this.getQueuedFiles();

      if (!(queuedFiles.length > 0)) {
        return;
      }

      if (this.options.uploadMultiple) {
        // The files should be uploaded in one request
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
      } else {
        while (i < parallelUploads) {
          if (!queuedFiles.length) {
            return;
          } // Nothing left to process


          this.processFile(queuedFiles.shift());
          i++;
        }
      }
    } // Wrapper for `processFiles`

  }, {
    key: "processFile",
    value: function processFile(file) {
      return this.processFiles([file]);
    } // Loads the file, then calls finishedLoading()

  }, {
    key: "processFiles",
    value: function processFiles(files) {
      var _iterator18 = _createForOfIteratorHelper(files),
          _step18;

      try {
        for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
          var file = _step18.value;
          file.processing = true; // Backwards compatibility

          file.status = Dropzone.UPLOADING;
          this.emit("processing", file);
        }
      } catch (err) {
        _iterator18.e(err);
      } finally {
        _iterator18.f();
      }

      if (this.options.uploadMultiple) {
        this.emit("processingmultiple", files);
      }

      return this.uploadFiles(files);
    }
  }, {
    key: "_getFilesWithXhr",
    value: function _getFilesWithXhr(xhr) {
      var files;
      return files = this.files.filter(function (file) {
        return file.xhr === xhr;
      }).map(function (file) {
        return file;
      });
    } // Cancels the file upload and sets the status to CANCELED
    // **if** the file is actually being uploaded.
    // If it's still in the queue, the file is being removed from it and the status
    // set to CANCELED.

  }, {
    key: "cancelUpload",
    value: function cancelUpload(file) {
      if (file.status === Dropzone.UPLOADING) {
        var groupedFiles = this._getFilesWithXhr(file.xhr);

        var _iterator19 = _createForOfIteratorHelper(groupedFiles),
            _step19;

        try {
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            var groupedFile = _step19.value;
            groupedFile.status = Dropzone.CANCELED;
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }

        if (typeof file.xhr !== 'undefined') {
          file.xhr.abort();
        }

        var _iterator20 = _createForOfIteratorHelper(groupedFiles),
            _step20;

        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
            var _groupedFile = _step20.value;
            this.emit("canceled", _groupedFile);
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }

        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", groupedFiles);
        }
      } else if (file.status === Dropzone.ADDED || file.status === Dropzone.QUEUED) {
        file.status = Dropzone.CANCELED;
        this.emit("canceled", file);

        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", [file]);
        }
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    }
  }, {
    key: "resolveOption",
    value: function resolveOption(option) {
      if (typeof option === 'function') {
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }

        return option.apply(this, args);
      }

      return option;
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(file) {
      return this.uploadFiles([file]);
    }
  }, {
    key: "uploadFiles",
    value: function uploadFiles(files) {
      var _this15 = this;

      this._transformFiles(files, function (transformedFiles) {
        if (_this15.options.chunking) {
          // Chunking is not allowed to be used with `uploadMultiple` so we know
          // that there is only __one__file.
          var transformedFile = transformedFiles[0];
          files[0].upload.chunked = _this15.options.chunking && (_this15.options.forceChunking || transformedFile.size > _this15.options.chunkSize);
          files[0].upload.totalChunkCount = Math.ceil(transformedFile.size / _this15.options.chunkSize);
        }

        if (files[0].upload.chunked) {
          // This file should be sent in chunks!
          // If the chunking option is set, we **know** that there can only be **one** file, since
          // uploadMultiple is not allowed with this option.
          var file = files[0];
          var _transformedFile = transformedFiles[0];
          var startedChunkCount = 0;
          file.upload.chunks = [];

          var handleNextChunk = function handleNextChunk() {
            var chunkIndex = 0; // Find the next item in file.upload.chunks that is not defined yet.

            while (file.upload.chunks[chunkIndex] !== undefined) {
              chunkIndex++;
            } // This means, that all chunks have already been started.


            if (chunkIndex >= file.upload.totalChunkCount) return;
            startedChunkCount++;
            var start = chunkIndex * _this15.options.chunkSize;
            var end = Math.min(start + _this15.options.chunkSize, _transformedFile.size);
            var dataBlock = {
              name: _this15._getParamName(0),
              data: _transformedFile.webkitSlice ? _transformedFile.webkitSlice(start, end) : _transformedFile.slice(start, end),
              filename: file.upload.filename,
              chunkIndex: chunkIndex
            };
            file.upload.chunks[chunkIndex] = {
              file: file,
              index: chunkIndex,
              dataBlock: dataBlock,
              // In case we want to retry.
              status: Dropzone.UPLOADING,
              progress: 0,
              retries: 0 // The number of times this block has been retried.

            };

            _this15._uploadData(files, [dataBlock]);
          };

          file.upload.finishedChunkUpload = function (chunk) {
            var allFinished = true;
            chunk.status = Dropzone.SUCCESS; // Clear the data from the chunk

            chunk.dataBlock = null; // Leaving this reference to xhr intact here will cause memory leaks in some browsers

            chunk.xhr = null;

            for (var i = 0; i < file.upload.totalChunkCount; i++) {
              if (file.upload.chunks[i] === undefined) {
                return handleNextChunk();
              }

              if (file.upload.chunks[i].status !== Dropzone.SUCCESS) {
                allFinished = false;
              }
            }

            if (allFinished) {
              _this15.options.chunksUploaded(file, function () {
                _this15._finished(files, '', null);
              });
            }
          };

          if (_this15.options.parallelChunkUploads) {
            for (var i = 0; i < file.upload.totalChunkCount; i++) {
              handleNextChunk();
            }
          } else {
            handleNextChunk();
          }
        } else {
          var dataBlocks = [];

          for (var _i3 = 0; _i3 < files.length; _i3++) {
            dataBlocks[_i3] = {
              name: _this15._getParamName(_i3),
              data: transformedFiles[_i3],
              filename: files[_i3].upload.filename
            };
          }

          _this15._uploadData(files, dataBlocks);
        }
      });
    } /// Returns the right chunk for given file and xhr

  }, {
    key: "_getChunk",
    value: function _getChunk(file, xhr) {
      for (var i = 0; i < file.upload.totalChunkCount; i++) {
        if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].xhr === xhr) {
          return file.upload.chunks[i];
        }
      }
    } // This function actually uploads the file(s) to the server.
    // If dataBlocks contains the actual data to upload (meaning, that this could either be transformed
    // files, or individual chunks for chunked upload).

  }, {
    key: "_uploadData",
    value: function _uploadData(files, dataBlocks) {
      var _this16 = this;

      var xhr = new XMLHttpRequest(); // Put the xhr object in the file objects to be able to reference it later.

      var _iterator21 = _createForOfIteratorHelper(files),
          _step21;

      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var file = _step21.value;
          file.xhr = xhr;
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }

      if (files[0].upload.chunked) {
        // Put the xhr object in the right chunk object, so it can be associated later, and found with _getChunk
        files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
      }

      var method = this.resolveOption(this.options.method, files);
      var url = this.resolveOption(this.options.url, files);
      xhr.open(method, url, true); // Setting the timeout after open because of IE11 issue: https://gitlab.com/meno/dropzone/issues/8

      xhr.timeout = this.resolveOption(this.options.timeout, files); // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179

      xhr.withCredentials = !!this.options.withCredentials;

      xhr.onload = function (e) {
        _this16._finishedUploading(files, xhr, e);
      };

      xhr.ontimeout = function () {
        _this16._handleUploadError(files, xhr, "Request timedout after ".concat(_this16.options.timeout / 1000, " seconds"));
      };

      xhr.onerror = function () {
        _this16._handleUploadError(files, xhr);
      }; // Some browsers do not have the .upload property


      var progressObj = xhr.upload != null ? xhr.upload : xhr;

      progressObj.onprogress = function (e) {
        return _this16._updateFilesUploadProgress(files, xhr, e);
      };

      var headers = {
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "X-Requested-With": "XMLHttpRequest"
      };

      if (this.options.headers) {
        Dropzone.extend(headers, this.options.headers);
      }

      for (var headerName in headers) {
        var headerValue = headers[headerName];

        if (headerValue) {
          xhr.setRequestHeader(headerName, headerValue);
        }
      }

      var formData = new FormData(); // Adding all @options parameters

      if (this.options.params) {
        var additionalParams = this.options.params;

        if (typeof additionalParams === 'function') {
          additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null);
        }

        for (var key in additionalParams) {
          var value = additionalParams[key];

          if (Array.isArray(value)) {
            // The additional parameter contains an array,
            // so lets iterate over it to attach each value
            // individually.
            for (var i = 0; i < value.length; i++) {
              formData.append(key, value[i]);
            }
          } else {
            formData.append(key, value);
          }
        }
      } // Let the user add additional data if necessary


      var _iterator22 = _createForOfIteratorHelper(files),
          _step22;

      try {
        for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
          var _file = _step22.value;
          this.emit("sending", _file, xhr, formData);
        }
      } catch (err) {
        _iterator22.e(err);
      } finally {
        _iterator22.f();
      }

      if (this.options.uploadMultiple) {
        this.emit("sendingmultiple", files, xhr, formData);
      }

      this._addFormElementData(formData); // Finally add the files
      // Has to be last because some servers (eg: S3) expect the file to be the last parameter


      for (var _i4 = 0; _i4 < dataBlocks.length; _i4++) {
        var dataBlock = dataBlocks[_i4];
        formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
      }

      this.submitRequest(xhr, formData, files);
    } // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.

  }, {
    key: "_transformFiles",
    value: function _transformFiles(files, done) {
      var _this17 = this;

      var transformedFiles = []; // Clumsy way of handling asynchronous calls, until I get to add a proper Future library.

      var doneCounter = 0;

      var _loop = function _loop(i) {
        _this17.options.transformFile.call(_this17, files[i], function (transformedFile) {
          transformedFiles[i] = transformedFile;

          if (++doneCounter === files.length) {
            done(transformedFiles);
          }
        });
      };

      for (var i = 0; i < files.length; i++) {
        _loop(i);
      }
    } // Takes care of adding other input elements of the form to the AJAX request

  }, {
    key: "_addFormElementData",
    value: function _addFormElementData(formData) {
      // Take care of other input elements
      if (this.element.tagName === "FORM") {
        var _iterator23 = _createForOfIteratorHelper(this.element.querySelectorAll("input, textarea, select, button")),
            _step23;

        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var input = _step23.value;
            var inputName = input.getAttribute("name");
            var inputType = input.getAttribute("type");
            if (inputType) inputType = inputType.toLowerCase(); // If the input doesn't have a name, we can't use it.

            if (typeof inputName === 'undefined' || inputName === null) continue;

            if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
              // Possibly multiple values
              var _iterator24 = _createForOfIteratorHelper(input.options),
                  _step24;

              try {
                for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                  var option = _step24.value;

                  if (option.selected) {
                    formData.append(inputName, option.value);
                  }
                }
              } catch (err) {
                _iterator24.e(err);
              } finally {
                _iterator24.f();
              }
            } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked) {
              formData.append(inputName, input.value);
            }
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }
      }
    } // Invoked when there is new progress information about given files.
    // If e is not provided, it is assumed that the upload is finished.

  }, {
    key: "_updateFilesUploadProgress",
    value: function _updateFilesUploadProgress(files, xhr, e) {
      var progress;

      if (typeof e !== 'undefined') {
        progress = 100 * e.loaded / e.total;

        if (files[0].upload.chunked) {
          var file = files[0]; // Since this is a chunked upload, we need to update the appropriate chunk progress.

          var chunk = this._getChunk(file, xhr);

          chunk.progress = progress;
          chunk.total = e.total;
          chunk.bytesSent = e.loaded;
          var fileProgress = 0,
              fileTotal,
              fileBytesSent;
          file.upload.progress = 0;
          file.upload.total = 0;
          file.upload.bytesSent = 0;

          for (var i = 0; i < file.upload.totalChunkCount; i++) {
            if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].progress !== undefined) {
              file.upload.progress += file.upload.chunks[i].progress;
              file.upload.total += file.upload.chunks[i].total;
              file.upload.bytesSent += file.upload.chunks[i].bytesSent;
            }
          }

          file.upload.progress = file.upload.progress / file.upload.totalChunkCount;
        } else {
          var _iterator25 = _createForOfIteratorHelper(files),
              _step25;

          try {
            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
              var _file2 = _step25.value;
              _file2.upload.progress = progress;
              _file2.upload.total = e.total;
              _file2.upload.bytesSent = e.loaded;
            }
          } catch (err) {
            _iterator25.e(err);
          } finally {
            _iterator25.f();
          }
        }

        var _iterator26 = _createForOfIteratorHelper(files),
            _step26;

        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var _file3 = _step26.value;
            this.emit("uploadprogress", _file3, _file3.upload.progress, _file3.upload.bytesSent);
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }
      } else {
        // Called when the file finished uploading
        var allFilesFinished = true;
        progress = 100;

        var _iterator27 = _createForOfIteratorHelper(files),
            _step27;

        try {
          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var _file4 = _step27.value;

            if (_file4.upload.progress !== 100 || _file4.upload.bytesSent !== _file4.upload.total) {
              allFilesFinished = false;
            }

            _file4.upload.progress = progress;
            _file4.upload.bytesSent = _file4.upload.total;
          } // Nothing to do, all files already at 100%

        } catch (err) {
          _iterator27.e(err);
        } finally {
          _iterator27.f();
        }

        if (allFilesFinished) {
          return;
        }

        var _iterator28 = _createForOfIteratorHelper(files),
            _step28;

        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var _file5 = _step28.value;
            this.emit("uploadprogress", _file5, progress, _file5.upload.bytesSent);
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
      }
    }
  }, {
    key: "_finishedUploading",
    value: function _finishedUploading(files, xhr, e) {
      var response;

      if (files[0].status === Dropzone.CANCELED) {
        return;
      }

      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.responseType !== 'arraybuffer' && xhr.responseType !== 'blob') {
        response = xhr.responseText;

        if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
          try {
            response = JSON.parse(response);
          } catch (error) {
            e = error;
            response = "Invalid JSON response from server.";
          }
        }
      }

      this._updateFilesUploadProgress(files);

      if (!(200 <= xhr.status && xhr.status < 300)) {
        this._handleUploadError(files, xhr, response);
      } else {
        if (files[0].upload.chunked) {
          files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr));
        } else {
          this._finished(files, response, e);
        }
      }
    }
  }, {
    key: "_handleUploadError",
    value: function _handleUploadError(files, xhr, response) {
      if (files[0].status === Dropzone.CANCELED) {
        return;
      }

      if (files[0].upload.chunked && this.options.retryChunks) {
        var chunk = this._getChunk(files[0], xhr);

        if (chunk.retries++ < this.options.retryChunksLimit) {
          this._uploadData(files, [chunk.dataBlock]);

          return;
        } else {
          console.warn('Retried this chunk too often. Giving up.');
        }
      }

      this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
    }
  }, {
    key: "submitRequest",
    value: function submitRequest(xhr, formData, files) {
      xhr.send(formData);
    } // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.

  }, {
    key: "_finished",
    value: function _finished(files, responseText, e) {
      var _iterator29 = _createForOfIteratorHelper(files),
          _step29;

      try {
        for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
          var file = _step29.value;
          file.status = Dropzone.SUCCESS;
          this.emit("success", file, responseText, e);
          this.emit("complete", file);
        }
      } catch (err) {
        _iterator29.e(err);
      } finally {
        _iterator29.f();
      }

      if (this.options.uploadMultiple) {
        this.emit("successmultiple", files, responseText, e);
        this.emit("completemultiple", files);
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    } // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.

  }, {
    key: "_errorProcessing",
    value: function _errorProcessing(files, message, xhr) {
      var _iterator30 = _createForOfIteratorHelper(files),
          _step30;

      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
          var file = _step30.value;
          file.status = Dropzone.ERROR;
          this.emit("error", file, message, xhr);
          this.emit("complete", file);
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }

      if (this.options.uploadMultiple) {
        this.emit("errormultiple", files, message, xhr);
        this.emit("completemultiple", files);
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    }
  }], [{
    key: "uuidv4",
    value: function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }
  }]);

  return Dropzone;
}(Emitter);

Dropzone.initClass();
Dropzone.version = "5.7.2"; // This is a map of options for your different dropzones. Add configurations
// to this object for your different dropzone elemens.
//
// Example:
//
//     Dropzone.options.myDropzoneElementId = { maxFilesize: 1 };
//
// To disable autoDiscover for a specific element, you can set `false` as an option:
//
//     Dropzone.options.myDisabledElementId = false;
//
// And in html:
//
//     <form action="/upload" id="my-dropzone-element-id" class="dropzone"></form>

Dropzone.options = {}; // Returns the options for an element or undefined if none available.

Dropzone.optionsForElement = function (element) {
  // Get the `Dropzone.options.elementId` for this element if it exists
  if (element.getAttribute("id")) {
    return Dropzone.options[camelize(element.getAttribute("id"))];
  } else {
    return undefined;
  }
}; // Holds a list of all dropzone instances


Dropzone.instances = []; // Returns the dropzone for given element if any

Dropzone.forElement = function (element) {
  if (typeof element === "string") {
    element = document.querySelector(element);
  }

  if ((element != null ? element.dropzone : undefined) == null) {
    throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
  }

  return element.dropzone;
}; // Set to false if you don't want Dropzone to automatically find and attach to .dropzone elements.


Dropzone.autoDiscover = true; // Looks for all .dropzone elements and creates a dropzone for them

Dropzone.discover = function () {
  var dropzones;

  if (document.querySelectorAll) {
    dropzones = document.querySelectorAll(".dropzone");
  } else {
    dropzones = []; // IE :(

    var checkElements = function checkElements(elements) {
      return function () {
        var result = [];

        var _iterator31 = _createForOfIteratorHelper(elements),
            _step31;

        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
            var el = _step31.value;

            if (/(^| )dropzone($| )/.test(el.className)) {
              result.push(dropzones.push(el));
            } else {
              result.push(undefined);
            }
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }

        return result;
      }();
    };

    checkElements(document.getElementsByTagName("div"));
    checkElements(document.getElementsByTagName("form"));
  }

  return function () {
    var result = [];

    var _iterator32 = _createForOfIteratorHelper(dropzones),
        _step32;

    try {
      for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
        var dropzone = _step32.value;

        // Create a dropzone unless auto discover has been disabled for specific element
        if (Dropzone.optionsForElement(dropzone) !== false) {
          result.push(new Dropzone(dropzone));
        } else {
          result.push(undefined);
        }
      }
    } catch (err) {
      _iterator32.e(err);
    } finally {
      _iterator32.f();
    }

    return result;
  }();
}; // Since the whole Drag'n'Drop API is pretty new, some browsers implement it,
// but not correctly.
// So I created a blacklist of userAgents. Yes, yes. Browser sniffing, I know.
// But what to do when browsers *theoretically* support an API, but crash
// when using it.
//
// This is a list of regular expressions tested against navigator.userAgent
//
// ** It should only be used on browser that *do* support the API, but
// incorrectly **
//


Dropzone.blacklistedBrowsers = [// The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
/opera.*(Macintosh|Windows Phone).*version\/12/i]; // Checks if the browser is supported

Dropzone.isBrowserSupported = function () {
  var capableBrowser = true;

  if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
    if (!("classList" in document.createElement("a"))) {
      capableBrowser = false;
    } else {
      // The browser supports the API, but may be blacklisted.
      var _iterator33 = _createForOfIteratorHelper(Dropzone.blacklistedBrowsers),
          _step33;

      try {
        for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
          var regex = _step33.value;

          if (regex.test(navigator.userAgent)) {
            capableBrowser = false;
            continue;
          }
        }
      } catch (err) {
        _iterator33.e(err);
      } finally {
        _iterator33.f();
      }
    }
  } else {
    capableBrowser = false;
  }

  return capableBrowser;
};

Dropzone.dataURItoBlob = function (dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]); // separate out the mime component

  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to an ArrayBuffer

  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);

  for (var i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--) {
    ia[i] = byteString.charCodeAt(i);
  } // write the ArrayBuffer to a blob


  return new Blob([ab], {
    type: mimeString
  });
}; // Returns an array without the rejected item


var without = function without(list, rejectedItem) {
  return list.filter(function (item) {
    return item !== rejectedItem;
  }).map(function (item) {
    return item;
  });
}; // abc-def_ghi -> abcDefGhi


var camelize = function camelize(str) {
  return str.replace(/[\-_](\w)/g, function (match) {
    return match.charAt(1).toUpperCase();
  });
}; // Creates an element from string


Dropzone.createElement = function (string) {
  var div = document.createElement("div");
  div.innerHTML = string;
  return div.childNodes[0];
}; // Tests if given element is inside (or simply is) the container


Dropzone.elementInside = function (element, container) {
  if (element === container) {
    return true;
  } // Coffeescript doesn't support do/while loops


  while (element = element.parentNode) {
    if (element === container) {
      return true;
    }
  }

  return false;
};

Dropzone.getElement = function (el, name) {
  var element;

  if (typeof el === "string") {
    element = document.querySelector(el);
  } else if (el.nodeType != null) {
    element = el;
  }

  if (element == null) {
    throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector or a plain HTML element."));
  }

  return element;
};

Dropzone.getElements = function (els, name) {
  var el, elements;

  if (els instanceof Array) {
    elements = [];

    try {
      var _iterator34 = _createForOfIteratorHelper(els),
          _step34;

      try {
        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
          el = _step34.value;
          elements.push(this.getElement(el, name));
        }
      } catch (err) {
        _iterator34.e(err);
      } finally {
        _iterator34.f();
      }
    } catch (e) {
      elements = null;
    }
  } else if (typeof els === "string") {
    elements = [];

    var _iterator35 = _createForOfIteratorHelper(document.querySelectorAll(els)),
        _step35;

    try {
      for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
        el = _step35.value;
        elements.push(el);
      }
    } catch (err) {
      _iterator35.e(err);
    } finally {
      _iterator35.f();
    }
  } else if (els.nodeType != null) {
    elements = [els];
  }

  if (elements == null || !elements.length) {
    throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."));
  }

  return elements;
}; // Asks the user the question and calls accepted or rejected accordingly
//
// The default implementation just uses `window.confirm` and then calls the
// appropriate callback.


Dropzone.confirm = function (question, accepted, rejected) {
  if (window.confirm(question)) {
    return accepted();
  } else if (rejected != null) {
    return rejected();
  }
}; // Validates the mime type like this:
//
// https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept


Dropzone.isValidFile = function (file, acceptedFiles) {
  if (!acceptedFiles) {
    return true;
  } // If there are no accepted mime types, it's OK


  acceptedFiles = acceptedFiles.split(",");
  var mimeType = file.type;
  var baseMimeType = mimeType.replace(/\/.*$/, "");

  var _iterator36 = _createForOfIteratorHelper(acceptedFiles),
      _step36;

  try {
    for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
      var validType = _step36.value;
      validType = validType.trim();

      if (validType.charAt(0) === ".") {
        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
          return true;
        }
      } else if (/\/\*$/.test(validType)) {
        // This is something like a image/* mime type
        if (baseMimeType === validType.replace(/\/.*$/, "")) {
          return true;
        }
      } else {
        if (mimeType === validType) {
          return true;
        }
      }
    }
  } catch (err) {
    _iterator36.e(err);
  } finally {
    _iterator36.f();
  }

  return false;
}; // Augment jQuery


if (typeof jQuery !== 'undefined' && jQuery !== null) {
  jQuery.fn.dropzone = function (options) {
    return this.each(function () {
      return new Dropzone(this, options);
    });
  };
}

if (typeof module !== 'undefined' && module !== null) {
  module.exports = Dropzone;
} else {
  window.Dropzone = Dropzone;
} // Dropzone file status codes


Dropzone.ADDED = "added";
Dropzone.QUEUED = "queued"; // For backwards compatibility. Now, if a file is accepted, it's either queued
// or uploading.

Dropzone.ACCEPTED = Dropzone.QUEUED;
Dropzone.UPLOADING = "uploading";
Dropzone.PROCESSING = Dropzone.UPLOADING; // alias

Dropzone.CANCELED = "canceled";
Dropzone.ERROR = "error";
Dropzone.SUCCESS = "success";
/*

 Bugfix for iOS 6 and 7
 Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
 based on the work of https://github.com/stomita/ios-imagefile-megapixel

 */
// Detecting vertical squash in loaded image.
// Fixes a bug which squash image vertically while drawing into canvas for some images.
// This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel

var detectVerticalSquash = function detectVerticalSquash(img) {
  var iw = img.naturalWidth;
  var ih = img.naturalHeight;
  var canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = ih;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var _ctx$getImageData = ctx.getImageData(1, 0, 1, ih),
      data = _ctx$getImageData.data; // search image edge pixel position in case it is squashed vertically.


  var sy = 0;
  var ey = ih;
  var py = ih;

  while (py > sy) {
    var alpha = data[(py - 1) * 4 + 3];

    if (alpha === 0) {
      ey = py;
    } else {
      sy = py;
    }

    py = ey + sy >> 1;
  }

  var ratio = py / ih;

  if (ratio === 0) {
    return 1;
  } else {
    return ratio;
  }
}; // A replacement for context.drawImage
// (args are for source and destination).


var drawImageIOSFix = function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
  var vertSquashRatio = detectVerticalSquash(img);
  return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
}; // Based on MinifyJpeg
// Source: http://www.perry.cz/files/ExifRestorer.js
// http://elicon.blog57.fc2.com/blog-entry-206.html


var ExifRestore = /*#__PURE__*/function () {
  function ExifRestore() {
    _classCallCheck(this, ExifRestore);
  }

  _createClass(ExifRestore, null, [{
    key: "initClass",
    value: function initClass() {
      this.KEY_STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    }
  }, {
    key: "encode64",
    value: function encode64(input) {
      var output = '';
      var chr1 = undefined;
      var chr2 = undefined;
      var chr3 = '';
      var enc1 = undefined;
      var enc2 = undefined;
      var enc3 = undefined;
      var enc4 = '';
      var i = 0;

      while (true) {
        chr1 = input[i++];
        chr2 = input[i++];
        chr3 = input[i++];
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }

        output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';

        if (!(i < input.length)) {
          break;
        }
      }

      return output;
    }
  }, {
    key: "restore",
    value: function restore(origFileBase64, resizedFileBase64) {
      if (!origFileBase64.match('data:image/jpeg;base64,')) {
        return resizedFileBase64;
      }

      var rawImage = this.decode64(origFileBase64.replace('data:image/jpeg;base64,', ''));
      var segments = this.slice2Segments(rawImage);
      var image = this.exifManipulation(resizedFileBase64, segments);
      return "data:image/jpeg;base64,".concat(this.encode64(image));
    }
  }, {
    key: "exifManipulation",
    value: function exifManipulation(resizedFileBase64, segments) {
      var exifArray = this.getExifArray(segments);
      var newImageArray = this.insertExif(resizedFileBase64, exifArray);
      var aBuffer = new Uint8Array(newImageArray);
      return aBuffer;
    }
  }, {
    key: "getExifArray",
    value: function getExifArray(segments) {
      var seg = undefined;
      var x = 0;

      while (x < segments.length) {
        seg = segments[x];

        if (seg[0] === 255 & seg[1] === 225) {
          return seg;
        }

        x++;
      }

      return [];
    }
  }, {
    key: "insertExif",
    value: function insertExif(resizedFileBase64, exifArray) {
      var imageData = resizedFileBase64.replace('data:image/jpeg;base64,', '');
      var buf = this.decode64(imageData);
      var separatePoint = buf.indexOf(255, 3);
      var mae = buf.slice(0, separatePoint);
      var ato = buf.slice(separatePoint);
      var array = mae;
      array = array.concat(exifArray);
      array = array.concat(ato);
      return array;
    }
  }, {
    key: "slice2Segments",
    value: function slice2Segments(rawImageArray) {
      var head = 0;
      var segments = [];

      while (true) {
        var length;

        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {
          break;
        }

        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {
          head += 2;
        } else {
          length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
          var endPoint = head + length + 2;
          var seg = rawImageArray.slice(head, endPoint);
          segments.push(seg);
          head = endPoint;
        }

        if (head > rawImageArray.length) {
          break;
        }
      }

      return segments;
    }
  }, {
    key: "decode64",
    value: function decode64(input) {
      var output = '';
      var chr1 = undefined;
      var chr2 = undefined;
      var chr3 = '';
      var enc1 = undefined;
      var enc2 = undefined;
      var enc3 = undefined;
      var enc4 = '';
      var i = 0;
      var buf = []; // remove all characters that are not A-Z, a-z, 0-9, +, /, or =

      var base64test = /[^A-Za-z0-9\+\/\=]/g;

      if (base64test.exec(input)) {
        console.warn('There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, \'+\', \'/\',and \'=\'\nExpect errors in decoding.');
      }

      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

      while (true) {
        enc1 = this.KEY_STR.indexOf(input.charAt(i++));
        enc2 = this.KEY_STR.indexOf(input.charAt(i++));
        enc3 = this.KEY_STR.indexOf(input.charAt(i++));
        enc4 = this.KEY_STR.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        buf.push(chr1);

        if (enc3 !== 64) {
          buf.push(chr2);
        }

        if (enc4 !== 64) {
          buf.push(chr3);
        }

        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';

        if (!(i < input.length)) {
          break;
        }
      }

      return buf;
    }
  }]);

  return ExifRestore;
}();

ExifRestore.initClass();
/*
 * contentloaded.js
 *
 * Author: Diego Perini (diego.perini at gmail.com)
 * Summary: cross-browser wrapper for DOMContentLoaded
 * Updated: 20101020
 * License: MIT
 * Version: 1.2
 *
 * URL:
 * http://javascript.nwbox.com/ContentLoaded/
 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
 */
// @win window reference
// @fn function reference

var contentLoaded = function contentLoaded(win, fn) {
  var done = false;
  var top = true;
  var doc = win.document;
  var root = doc.documentElement;
  var add = doc.addEventListener ? "addEventListener" : "attachEvent";
  var rem = doc.addEventListener ? "removeEventListener" : "detachEvent";
  var pre = doc.addEventListener ? "" : "on";

  var init = function init(e) {
    if (e.type === "readystatechange" && doc.readyState !== "complete") {
      return;
    }

    (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);

    if (!done && (done = true)) {
      return fn.call(win, e.type || e);
    }
  };

  var poll = function poll() {
    try {
      root.doScroll("left");
    } catch (e) {
      setTimeout(poll, 50);
      return;
    }

    return init("poll");
  };

  if (doc.readyState !== "complete") {
    if (doc.createEventObject && root.doScroll) {
      try {
        top = !win.frameElement;
      } catch (error) {}

      if (top) {
        poll();
      }
    }

    doc[add](pre + "DOMContentLoaded", init, false);
    doc[add](pre + "readystatechange", init, false);
    return win[add](pre + "load", init, false);
  }
}; // As a single function to be able to write tests.


Dropzone._autoDiscoverFunction = function () {
  if (Dropzone.autoDiscover) {
    return Dropzone.discover();
  }
};

contentLoaded(window, Dropzone._autoDiscoverFunction);

function __guard__(value, transform) {
  return typeof value !== 'undefined' && value !== null ? transform(value) : undefined;
}

function __guardMethod__(obj, methodName, transform) {
  if (typeof obj !== 'undefined' && obj !== null && typeof obj[methodName] === 'function') {
    return transform(obj, methodName);
  } else {
    return undefined;
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7), __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/expose-loader/index.js?InsertEmbedModal!./client/src/components/InsertEmbedModal/InsertEmbedModal.js-exposed":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["InsertEmbedModal"] = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"presets\":[[\"env\",{\"modules\":false}],\"react\"],\"plugins\":[\"transform-object-rest-spread\"],\"comments\":false,\"cacheDirectory\":true}!./client/src/components/InsertEmbedModal/InsertEmbedModal.js");
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/expose-loader/index.js?InsertMediaModal!./client/src/containers/InsertMediaModal/InsertMediaModal.js-exposed":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["InsertMediaModal"] = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"presets\":[[\"env\",{\"modules\":false}],\"react\"],\"plugins\":[\"transform-object-rest-spread\"],\"comments\":false,\"cacheDirectory\":true}!./client/src/containers/InsertMediaModal/InsertMediaModal.js");
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/griddle-react/modules/columnProperties.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var map = __webpack_require__("./node_modules/lodash/map.js");
var filter = __webpack_require__("./node_modules/lodash/filter.js");
var find = __webpack_require__("./node_modules/lodash/find.js");
var sortBy = __webpack_require__("./node_modules/lodash/sortBy.js");
var difference = __webpack_require__("./node_modules/lodash/difference.js");

var ColumnProperties = (function () {
  function ColumnProperties() {
    var allColumns = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var filteredColumns = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
    var childrenColumnName = arguments.length <= 2 || arguments[2] === undefined ? "children" : arguments[2];
    var columnMetadata = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];
    var metadataColumns = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];

    _classCallCheck(this, ColumnProperties);

    this.allColumns = allColumns;
    this.filteredColumns = filteredColumns;
    this.childrenColumnName = childrenColumnName;
    this.columnMetadata = columnMetadata;
    this.metadataColumns = metadataColumns;
  }

  _createClass(ColumnProperties, [{
    key: 'getMetadataColumns',
    value: function getMetadataColumns() {
      var meta = map(filter(this.columnMetadata, { visible: false }), function (item) {
        return item.columnName;
      });
      if (meta.indexOf(this.childrenColumnName) < 0) {
        meta.push(this.childrenColumnName);
      }
      return meta.concat(this.metadataColumns);
    }
  }, {
    key: 'getVisibleColumnCount',
    value: function getVisibleColumnCount() {
      return this.getColumns().length;
    }
  }, {
    key: 'getColumnMetadataByName',
    value: function getColumnMetadataByName(name) {
      return find(this.columnMetadata, { columnName: name });
    }
  }, {
    key: 'hasColumnMetadata',
    value: function hasColumnMetadata() {
      return this.columnMetadata !== null && this.columnMetadata.length > 0;
    }
  }, {
    key: 'getMetadataColumnProperty',
    value: function getMetadataColumnProperty(columnName, propertyName, defaultValue) {
      var meta = this.getColumnMetadataByName(columnName);

      //send back the default value if meta isn't there
      if (typeof meta === "undefined" || meta === null) return defaultValue;

      return meta.hasOwnProperty(propertyName) ? meta[propertyName] : defaultValue;
    }
  }, {
    key: 'orderColumns',
    value: function orderColumns(cols) {
      var _this = this;

      var ORDER_MAX = 100;

      var orderedColumns = sortBy(cols, function (item) {
        var metaItem = find(_this.columnMetadata, { columnName: item });

        if (typeof metaItem === 'undefined' || metaItem === null || isNaN(metaItem.order)) {
          return ORDER_MAX;
        }

        return metaItem.order;
      });

      return orderedColumns;
    }
  }, {
    key: 'getColumns',
    value: function getColumns() {
      //if we didn't set default or filter
      var filteredColumns = this.filteredColumns.length === 0 ? this.allColumns : this.filteredColumns;

      filteredColumns = difference(filteredColumns, this.metadataColumns);

      filteredColumns = this.orderColumns(filteredColumns);

      return filteredColumns;
    }
  }]);

  return ColumnProperties;
})();

module.exports = ColumnProperties;


/***/ }),

/***/ "./node_modules/griddle-react/modules/customFilterContainer.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");

var CustomFilterContainer = createReactClass({
  getDefaultProps: function getDefaultProps() {
    return {
      "placeholderText": ""
    };
  },
  render: function render() {
    var that = this;

    if (typeof that.props.customFilterComponent !== 'function') {
      console.log("Couldn't find valid template.");
      return React.createElement('div', null);
    }

    return React.createElement(that.props.customFilterComponent, {
      changeFilter: this.props.changeFilter,
      results: this.props.results,
      currentResults: this.props.currentResults,
      placeholderText: this.props.placeholderText });
  }
});

module.exports = CustomFilterContainer;


/***/ }),

/***/ "./node_modules/griddle-react/modules/customPaginationContainer.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   Griddle - Simple Grid Component for React
   https://github.com/DynamicTyped/Griddle
   Copyright (c) 2014 Ryan Lanciaux | DynamicTyped

   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");

var CustomPaginationContainer = createReactClass({
  getDefaultProps: function getDefaultProps() {
    return {
      "maxPage": 0,
      "nextText": "",
      "previousText": "",
      "currentPage": 0,
      "customPagerComponent": {},
      "customPagerComponentOptions": {}
    };
  },
  render: function render() {
    var that = this;

    if (typeof that.props.customPagerComponent !== 'function') {
      console.log("Couldn't find valid template.");
      return React.createElement('div', null);
    }

    return React.createElement(that.props.customPagerComponent, _extends({}, this.props.customPagerComponentOptions, { maxPage: this.props.maxPage, nextText: this.props.nextText, previousText: this.props.previousText, currentPage: this.props.currentPage, setPage: this.props.setPage, previous: this.props.previous, next: this.props.next }));
  }
});

module.exports = CustomPaginationContainer;


/***/ }),

/***/ "./node_modules/griddle-react/modules/customRowComponentContainer.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   Griddle - Simple Grid Component for React
   https://github.com/DynamicTyped/Griddle
   Copyright (c) 2014 Ryan Lanciaux | DynamicTyped

   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");

var CustomRowComponentContainer = createReactClass({
  getDefaultProps: function getDefaultProps() {
    return {
      "data": [],
      "metadataColumns": [],
      "className": "",
      "customComponent": {},
      "globalData": {}
    };
  },
  render: function render() {
    var that = this;

    if (typeof that.props.customComponent !== 'function') {
      console.log("Couldn't find valid template.");
      return React.createElement('div', { className: this.props.className });
    }

    var nodes = this.props.data.map(function (row, index) {
      return React.createElement(that.props.customComponent, { data: row, metadataColumns: that.props.metadataColumns, key: index, globalData: that.props.globalData });
    });

    var footer = this.props.showPager && this.props.pagingContent;
    return React.createElement('div', { className: this.props.className, style: this.props.style }, nodes);
  }
});

module.exports = CustomRowComponentContainer;


/***/ }),

/***/ "./node_modules/griddle-react/modules/deep.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach = __webpack_require__("./node_modules/lodash/forEach.js");
var isObject = __webpack_require__("./node_modules/lodash/isObject.js");
var isArray = __webpack_require__("./node_modules/lodash/isArray.js");
var isFunction = __webpack_require__("./node_modules/lodash/isFunction.js");
var isPlainObject = __webpack_require__("./node_modules/lodash/isPlainObject.js");
var forOwn = __webpack_require__("./node_modules/lodash/forOwn.js");

// Credits: https://github.com/documentcloud/underscore-contrib
// Sub module: underscore.object.selectors
// License: MIT (https://github.com/documentcloud/underscore-contrib/blob/master/LICENSE)
// https://github.com/documentcloud/underscore-contrib/blob/master/underscore.object.selectors.js

// Will take a path like 'element[0][1].subElement["Hey!.What?"]["[hey]"]'
// and return ["element", "0", "1", "subElement", "Hey!.What?", "[hey]"]
function keysFromPath(path) {
  // from http://codereview.stackexchange.com/a/63010/8176
  /**
   * Repeatedly capture either:
   * - a bracketed expression, discarding optional matching quotes inside, or
   * - an unbracketed expression, delimited by a dot or a bracket.
   */
  var re = /\[("|')(.+)\1\]|([^.\[\]]+)/g;

  var elements = [];
  var result;
  while ((result = re.exec(path)) !== null) {
    elements.push(result[2] || result[3]);
  }
  return elements;
}

// Gets the value at any depth in a nested object based on the
// path described by the keys given. Keys may be given as an array
// or as a dot-separated string.
function getPath(obj, ks) {
  if (typeof ks == "string") {
    if (obj[ks] !== undefined) {
      return obj[ks];
    }
    ks = keysFromPath(ks);
  }

  var i = -1,
      length = ks.length;

  // If the obj is null or undefined we have to break as
  // a TypeError will result trying to access any property
  // Otherwise keep incrementally access the next property in
  // ks until complete
  while (++i < length && obj != null) {
    obj = obj[ks[i]];
  }
  return i === length ? obj : void 0;
}

// Based on the origin underscore _.pick function
// Credit: https://github.com/jashkenas/underscore/blob/master/underscore.js
function powerPick(object, keys) {
  var result = {},
      obj = object,
      iteratee;
  iteratee = function (key, obj) {
    return key in obj;
  };

  obj = Object(obj);

  for (var i = 0, length = keys.length; i < length; i++) {
    var key = keys[i];
    if (iteratee(key, obj)) result[key] = getPath(obj, key);
  }

  return result;
}

// Gets all the keys for a flattened object structure.
// Doesn't flatten arrays.
// Input:
// {
//  a: {
//    x: 1,
//    y: 2
//  },
//  b: [3, 4],
//  c: 5
// }
// Output:
// [
//  "a.x",
//  "a.y",
//  "b",
//  "c"
// ]
function getKeys(obj, prefix) {
  var keys = [];

  forEach(obj, function (value, key) {
    var fullKey = prefix ? prefix + "." + key : key;
    if (isObject(value) && !isArray(value) && !isFunction(value) && !(value instanceof Date)) {
      keys = keys.concat(getKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  });

  return keys;
}

// Recursivly traverse plain objects and arrays calling `fn` on each
// non-object/non-array leaf node.
function iterObject(thing, fn) {
  if (isArray(thing)) {
    forEach(thing, function (item) {
      iterObject(item, fn);
    });
  } else if (isPlainObject(thing)) {
    forOwn(thing, function (item) {
      iterObject(item, fn);
    });
  } else {
    fn(thing);
  }
}

// Recursivly traverse plain objects and arrays and build a list of all
// non-object/non-array leaf nodes.
//
// Input:
// { "array": [1, "two", {"tree": 3}], "string": "a string" }
//
// Output:
// [1, 'two', 3, 'a string']
//
function getObjectValues(thing) {
  var results = [];
  iterObject(thing, function (value) {
    results.push(value);
  });
  return results;
}

module.exports = {
  pick: powerPick,
  getAt: getPath,
  keys: getKeys,
  getObjectValues: getObjectValues
};


/***/ }),

/***/ "./node_modules/griddle-react/modules/gridFilter.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");

var GridFilter = createReactClass({
    getDefaultProps: function getDefaultProps() {
        return {
            "placeholderText": ""
        };
    },
    handleChange: function handleChange(event) {
        this.props.changeFilter(event.target.value);
    },
    render: function render() {
        return React.createElement('div', { className: 'filter-container' }, React.createElement('input', { type: 'text', name: 'filter', placeholder: this.props.placeholderText, className: 'form-control', onChange: this.handleChange }));
    }
});

module.exports = GridFilter;


/***/ }),

/***/ "./node_modules/griddle-react/modules/gridNoData.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");

var GridNoData = createReactClass({
    getDefaultProps: function getDefaultProps() {
        return {
            "noDataMessage": "No Data"
        };
    },
    render: function render() {
        var that = this;

        return React.createElement('div', null, this.props.noDataMessage);
    }
});

module.exports = GridNoData;


/***/ }),

/***/ "./node_modules/griddle-react/modules/gridPagination.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");
var assign = __webpack_require__("./node_modules/lodash/assign.js");

//needs props maxPage, currentPage, nextFunction, prevFunction
var GridPagination = createReactClass({
    getDefaultProps: function getDefaultProps() {
        return {
            "maxPage": 0,
            "nextText": "",
            "previousText": "",
            "currentPage": 0,
            "useGriddleStyles": true,
            "nextClassName": "griddle-next",
            "previousClassName": "griddle-previous",
            "nextIconComponent": null,
            "previousIconComponent": null
        };
    },
    pageChange: function pageChange(event) {
        this.props.setPage(parseInt(event.target.value, 10) - 1);
    },
    render: function render() {
        var previous = "";
        var next = "";

        if (this.props.currentPage > 0) {
            previous = React.createElement('button', { type: 'button', onClick: this.props.previous, style: this.props.useGriddleStyles ? { "color": "#222", border: "none", background: "none", margin: "0 0 0 10px" } : null }, this.props.previousIconComponent, this.props.previousText);
        }

        if (this.props.currentPage !== this.props.maxPage - 1) {
            next = React.createElement('button', { type: 'button', onClick: this.props.next, style: this.props.useGriddleStyles ? { "color": "#222", border: "none", background: "none", margin: "0 10px 0 0" } : null }, this.props.nextText, this.props.nextIconComponent);
        }

        var leftStyle = null;
        var middleStyle = null;
        var rightStyle = null;

        if (this.props.useGriddleStyles === true) {
            var baseStyle = {
                "float": "left",
                minHeight: "1px",
                marginTop: "5px"
            };

            rightStyle = assign({ textAlign: "right", width: "34%" }, baseStyle);
            middleStyle = assign({ textAlign: "center", width: "33%" }, baseStyle);
            leftStyle = assign({ width: "33%" }, baseStyle);
        }

        var options = [];

        for (var i = 1; i <= this.props.maxPage; i++) {
            options.push(React.createElement('option', { value: i, key: i }, i));
        }

        return React.createElement('div', { style: this.props.useGriddleStyles ? { minHeight: "35px" } : null }, React.createElement('div', { className: this.props.previousClassName, style: leftStyle }, previous), React.createElement('div', { className: 'griddle-page', style: middleStyle }, React.createElement('select', { value: this.props.currentPage + 1, onChange: this.pageChange }, options), ' / ', this.props.maxPage), React.createElement('div', { className: this.props.nextClassName, style: rightStyle }, next));
    }
});

module.exports = GridPagination;


/***/ }),

/***/ "./node_modules/griddle-react/modules/gridRow.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");
var ColumnProperties = __webpack_require__("./node_modules/griddle-react/modules/columnProperties.js");
var deep = __webpack_require__("./node_modules/griddle-react/modules/deep.js");
var isFunction = __webpack_require__("./node_modules/lodash/isFunction.js");
var zipObject = __webpack_require__("./node_modules/lodash/zipObject.js");
var assign = __webpack_require__("./node_modules/lodash/assign.js");
var defaults = __webpack_require__("./node_modules/lodash/defaults.js");
var toPairs = __webpack_require__("./node_modules/lodash/toPairs.js");
var without = __webpack_require__("./node_modules/lodash/without.js");

var GridRow = createReactClass({
    getDefaultProps: function getDefaultProps() {
        return {
            "isChildRow": false,
            "showChildren": false,
            "data": {},
            "columnSettings": null,
            "rowSettings": null,
            "hasChildren": false,
            "useGriddleStyles": true,
            "useGriddleIcons": true,
            "isSubGriddle": false,
            "paddingHeight": null,
            "rowHeight": null,
            "parentRowCollapsedClassName": "parent-row",
            "parentRowExpandedClassName": "parent-row expanded",
            "parentRowCollapsedComponent": "▶",
            "parentRowExpandedComponent": "▼",
            "onRowClick": null,
            "multipleSelectionSettings": null,
            "onRowMouseEnter": null,
            "onRowMouseLeave": null,
            "onRowWillMount": null,
            "onRowWillUnmount": null
        };
    },
    componentWillMount: function componentWillMount() {
        if (this.props.onRowWillMount !== null && isFunction(this.props.onRowWillMount)) {
            this.props.onRowWillMount(this);
        }
    },
    componentWillUnmount: function componentWillUnmount() {
        if (this.props.onRowWillUnmount !== null && isFunction(this.props.onRowWillUnmount)) {
            this.props.onRowWillUnmount(this);
        }
    },
    handleClick: function handleClick(e) {
        if (this.props.onRowClick !== null && isFunction(this.props.onRowClick)) {
            this.props.onRowClick(this, e);
        } else if (this.props.hasChildren) {
            this.props.toggleChildren();
        }
    },
    handleMouseEnter: function handleMouseEnter(e) {
        if (this.props.onRowMouseEnter !== null && isFunction(this.props.onRowMouseEnter)) {
            this.props.onRowMouseEnter(this, e);
        }
    },
    handleMouseLeave: function handleMouseLeave(e) {
        if (this.props.onRowMouseLeave !== null && isFunction(this.props.onRowMouseLeave)) {
            this.props.onRowMouseLeave(this, e);
        }
    },
    handleSelectionChange: function handleSelectionChange(e) {
        //hack to get around warning that's not super useful in this case
        return;
    },
    handleSelectClick: function handleSelectClick(e) {
        if (this.props.multipleSelectionSettings.isMultipleSelection) {
            if (e.target.type === "checkbox") {
                this.props.multipleSelectionSettings.toggleSelectRow(this.props.data, this.refs.selected.checked);
            } else {
                this.props.multipleSelectionSettings.toggleSelectRow(this.props.data, !this.refs.selected.checked);
            }
        }
    },
    verifyProps: function verifyProps() {
        if (this.props.columnSettings === null) {
            console.error("gridRow: The columnSettings prop is null and it shouldn't be");
        }
    },
    formatData: function formatData(data) {
        if (typeof data === 'boolean') {
            return String(data);
        }
        return data;
    },
    render: function render() {
        var _this = this;

        this.verifyProps();
        var that = this;
        var columnStyles = null;

        if (this.props.useGriddleStyles) {
            columnStyles = {
                margin: "0px",
                padding: that.props.paddingHeight + "px 5px " + that.props.paddingHeight + "px 5px",
                height: that.props.rowHeight ? this.props.rowHeight - that.props.paddingHeight * 2 + "px" : null,
                backgroundColor: "#FFF",
                borderTopColor: "#DDD",
                color: "#222"
            };
        }

        var columns = this.props.columnSettings.getColumns();

        // make sure that all the columns we need have default empty values
        // otherwise they will get clipped
        var defaultValues = zipObject(columns, []);

        // creates a 'view' on top the data so we will not alter the original data but will allow us to add default values to missing columns
        var dataView = assign({}, this.props.data);

        defaults(dataView, defaultValues);
        var data = toPairs(deep.pick(dataView, without(columns, 'children')));
        var nodes = data.map(function (col, index) {
            var returnValue = null;
            var meta = _this.props.columnSettings.getColumnMetadataByName(col[0]);

            //todo: Make this not as ridiculous looking
            var firstColAppend = index === 0 && _this.props.hasChildren && _this.props.showChildren === false && _this.props.useGriddleIcons ? React.createElement('span', { style: _this.props.useGriddleStyles ? { fontSize: "10px", marginRight: "5px" } : null }, _this.props.parentRowCollapsedComponent) : index === 0 && _this.props.hasChildren && _this.props.showChildren && _this.props.useGriddleIcons ? React.createElement('span', { style: _this.props.useGriddleStyles ? { fontSize: "10px" } : null }, _this.props.parentRowExpandedComponent) : "";

            if (index === 0 && _this.props.isChildRow && _this.props.useGriddleStyles) {
                columnStyles = assign(columnStyles, { paddingLeft: 10 });
            }

            if (_this.props.columnSettings.hasColumnMetadata() && typeof meta !== 'undefined' && meta !== null) {
                if (typeof meta.customComponent !== 'undefined' && meta.customComponent !== null) {
                    var customComponent = React.createElement(meta.customComponent, { data: col[1], rowData: dataView, metadata: meta });
                    returnValue = React.createElement('td', { onClick: _this.handleClick, onMouseEnter: _this.handleMouseEnter, onMouseLeave: _this.handleMouseLeave, className: meta.cssClassName, key: index, style: columnStyles }, customComponent);
                } else {
                    returnValue = React.createElement('td', { onClick: _this.handleClick, onMouseEnter: _this.handleMouseEnter, onMouseLeave: _this.handleMouseLeave, className: meta.cssClassName, key: index, style: columnStyles }, firstColAppend, _this.formatData(col[1]));
                }
            }

            return returnValue || React.createElement('td', { onClick: _this.handleClick, onMouseEnter: _this.handleMouseEnter, onMouseLeave: _this.handleMouseLeave, key: index, style: columnStyles }, firstColAppend, col[1]);
        });

        // Don't compete with onRowClick, but if no onRowClick function then
        // clicking on the row should trigger select
        var trOnClick, tdOnClick;
        if (this.props.onRowClick !== null && isFunction(this.props.onRowClick)) {
            trOnClick = null;
            tdOnClick = this.handleSelectClick;
        } else {
            if (this.props.multipleSelectionSettings && this.props.multipleSelectionSettings.isMultipleSelection) {
                trOnClick = this.handleSelectClick;
                tdOnClick = null;
            } else {
                trOnClick = null;
                tdOnClick = null;
            }
        }

        if (nodes && this.props.multipleSelectionSettings && this.props.multipleSelectionSettings.isMultipleSelection) {
            var selectedRowIds = this.props.multipleSelectionSettings.getSelectedRowIds();

            nodes.unshift(React.createElement('td', {
                key: 'selection',
                style: columnStyles,
                className: 'griddle-select griddle-select-cell',
                onClick: tdOnClick
            }, React.createElement('input', {
                type: 'checkbox',
                checked: this.props.multipleSelectionSettings.getIsRowChecked(dataView),
                onChange: this.handleSelectionChange,
                ref: 'selected'
            })));
        }

        //Get the row from the row settings.
        var className = that.props.rowSettings && that.props.rowSettings.getBodyRowMetadataClass(that.props.data) || "standard-row";

        if (that.props.isChildRow) {
            className = "child-row";
        } else if (that.props.hasChildren) {
            className = that.props.showChildren ? this.props.parentRowExpandedClassName : this.props.parentRowCollapsedClassName;
        }

        return React.createElement('tr', { onClick: trOnClick, className: className }, nodes);
    }
});

module.exports = GridRow;


/***/ }),

/***/ "./node_modules/griddle-react/modules/gridRowContainer.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");
var ColumnProperties = __webpack_require__("./node_modules/griddle-react/modules/columnProperties.js");
var pick = __webpack_require__("./node_modules/lodash/pick.js");

var GridRowContainer = createReactClass({
  getDefaultProps: function getDefaultProps() {
    return {
      "useGriddleStyles": true,
      "useGriddleIcons": true,
      "isSubGriddle": false,
      "columnSettings": null,
      "rowSettings": null,
      "paddingHeight": null,
      "rowHeight": null,
      "parentRowCollapsedClassName": "parent-row",
      "parentRowExpandedClassName": "parent-row expanded",
      "parentRowCollapsedComponent": "▶",
      "parentRowExpandedComponent": "▼",
      "onRowClick": null,
      "onRowMouseEnter": null,
      "onRowMouseLeave": null,
      "onRowWillMount": null,
      "onRowWillUnmount": null,
      "multipleSelectionSettings": null
    };
  },
  getInitialState: function getInitialState() {
    return {
      "data": {},
      "showChildren": false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps() {
    this.setShowChildren(false);
  },
  toggleChildren: function toggleChildren() {
    this.setShowChildren(this.state.showChildren === false);
  },
  setShowChildren: function setShowChildren(visible) {
    this.setState({
      showChildren: visible
    });
  },
  verifyProps: function verifyProps() {
    if (this.props.columnSettings === null) {
      console.error("gridRowContainer: The columnSettings prop is null and it shouldn't be");
    }
  },
  render: function render() {
    this.verifyProps();
    var that = this;
    if (typeof this.props.data === "undefined") {
      return React.createElement('tbody', null);
    }
    var arr = [];

    var columns = this.props.columnSettings.getColumns();

    arr.push(React.createElement(this.props.rowSettings.rowComponent, {
      useGriddleStyles: this.props.useGriddleStyles,
      isSubGriddle: this.props.isSubGriddle,
      data: this.props.rowSettings.isCustom ? pick(this.props.data, columns) : this.props.data,
      rowData: this.props.rowSettings.isCustom ? this.props.data : null,
      columnSettings: this.props.columnSettings,
      rowSettings: this.props.rowSettings,
      hasChildren: that.props.hasChildren,
      toggleChildren: that.toggleChildren,
      showChildren: that.state.showChildren,
      key: that.props.uniqueId + '_base_row',
      useGriddleIcons: that.props.useGriddleIcons,
      parentRowExpandedClassName: this.props.parentRowExpandedClassName,
      parentRowCollapsedClassName: this.props.parentRowCollapsedClassName,
      parentRowExpandedComponent: this.props.parentRowExpandedComponent,
      parentRowCollapsedComponent: this.props.parentRowCollapsedComponent,
      paddingHeight: that.props.paddingHeight,
      rowHeight: that.props.rowHeight,
      onRowClick: that.props.onRowClick,
      onRowMouseEnter: that.props.onRowMouseEnter,
      onRowMouseLeave: that.props.onRowMouseLeave,
      multipleSelectionSettings: this.props.multipleSelectionSettings,
      onRowWillMount: that.props.onRowWillMount,
      onRowWillUnmount: that.props.onRowWillUnmount }));

    var children = null;

    if (that.state.showChildren) {
      children = that.props.hasChildren && this.props.data["children"].map(function (row, index) {
        var key = that.props.rowSettings.getRowKey(row, index);

        if (typeof row["children"] !== "undefined") {
          var Griddle = that.constructor.Griddle;
          return React.createElement('tr', { key: key, style: { paddingLeft: 5 } }, React.createElement('td', { colSpan: that.props.columnSettings.getVisibleColumnCount(), className: 'griddle-parent', style: that.props.useGriddleStyles ? { border: "none", "padding": "0 0 0 5px" } : null }, React.createElement(Griddle, {
            rowMetadata: { key: 'id' },
            isSubGriddle: true,
            results: [row],
            columns: that.props.columnSettings.getColumns(),
            tableClassName: that.props.tableClassName,
            parentRowExpandedClassName: that.props.parentRowExpandedClassName,
            parentRowCollapsedClassName: that.props.parentRowCollapsedClassName,
            showTableHeading: false,
            showPager: false,
            columnMetadata: that.props.columnSettings.columnMetadata,
            parentRowExpandedComponent: that.props.parentRowExpandedComponent,
            parentRowCollapsedComponent: that.props.parentRowCollapsedComponent,
            paddingHeight: that.props.paddingHeight,
            rowHeight: that.props.rowHeight
          })));
        }

        return React.createElement(that.props.rowSettings.rowComponent, {
          useGriddleStyles: that.props.useGriddleStyles,
          isSubGriddle: that.props.isSubGriddle,
          data: row,
          columnSettings: that.props.columnSettings,
          isChildRow: true,
          columnMetadata: that.props.columnSettings.columnMetadata,
          key: key
        });
      });
    }

    return that.props.hasChildren === false ? arr[0] : React.createElement('tbody', null, that.state.showChildren ? arr.concat(children) : arr);
  }
});

module.exports = GridRowContainer;


/***/ }),

/***/ "./node_modules/griddle-react/modules/gridSettings.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");
var includes = __webpack_require__("./node_modules/lodash/includes.js");
var without = __webpack_require__("./node_modules/lodash/without.js");
var find = __webpack_require__("./node_modules/lodash/find.js");

var GridSettings = createReactClass({
    getDefaultProps: function getDefaultProps() {
        return {
            "columns": [],
            "columnMetadata": [],
            "selectedColumns": [],
            "settingsText": "",
            "maxRowsText": "",
            "resultsPerPage": 0,
            "enableToggleCustom": false,
            "useCustomComponent": false,
            "useGriddleStyles": true,
            "toggleCustomComponent": function toggleCustomComponent() {}
        };
    },
    setPageSize: function setPageSize(event) {
        var value = parseInt(event.target.value, 10);
        this.props.setPageSize(value);
    },
    handleChange: function handleChange(event) {
        var columnName = event.target.dataset ? event.target.dataset.name : event.target.getAttribute('data-name');
        if (event.target.checked === true && includes(this.props.selectedColumns, columnName) === false) {
            this.props.selectedColumns.push(columnName);
            this.props.setColumns(this.props.selectedColumns);
        } else {
            /* redraw with the selected columns minus the one just unchecked */
            this.props.setColumns(without(this.props.selectedColumns, columnName));
        }
    },
    render: function render() {
        var that = this;

        var nodes = [];
        //don't show column selector if we're on a custom component
        if (that.props.useCustomComponent === false) {
            nodes = this.props.columns.map(function (col, index) {
                var checked = includes(that.props.selectedColumns, col);
                //check column metadata -- if this one is locked make it disabled and don't put an onChange event
                var meta = find(that.props.columnMetadata, { columnName: col });
                var displayName = col;

                if (typeof meta !== "undefined" && typeof meta.displayName !== "undefined" && meta.displayName != null) {
                    displayName = meta.displayName;
                }

                if (typeof meta !== "undefined" && meta != null && meta.locked) {
                    return React.createElement('div', { className: 'column checkbox' }, React.createElement('label', null, React.createElement('input', { type: 'checkbox', disabled: true, name: 'check', checked: checked, 'data-name': col }), displayName));
                } else if (typeof meta !== "undefined" && meta != null && typeof meta.visible !== "undefined" && meta.visible === false) {
                    return null;
                }
                return React.createElement('div', { className: 'griddle-column-selection checkbox', key: col, style: that.props.useGriddleStyles ? { "float": "left", width: "20%" } : null }, React.createElement('label', null, React.createElement('input', { type: 'checkbox', name: 'check', onChange: that.handleChange, checked: checked, 'data-name': col }), displayName));
            });
        }

        var toggleCustom = that.props.enableToggleCustom ? React.createElement('div', { className: 'form-group' }, React.createElement('label', { htmlFor: 'maxRows' }, React.createElement('input', { type: 'checkbox', checked: this.props.useCustomComponent, onChange: this.props.toggleCustomComponent }), ' ', this.props.enableCustomFormatText)) : "";

        var setPageSize = this.props.showSetPageSize ? React.createElement('div', null, React.createElement('label', { htmlFor: 'maxRows' }, this.props.maxRowsText, ':', React.createElement('select', { onChange: this.setPageSize, value: this.props.resultsPerPage }, React.createElement('option', { value: '5' }, '5'), React.createElement('option', { value: '10' }, '10'), React.createElement('option', { value: '25' }, '25'), React.createElement('option', { value: '50' }, '50'), React.createElement('option', { value: '100' }, '100')))) : "";

        return React.createElement('div', { className: 'griddle-settings', style: this.props.useGriddleStyles ? { backgroundColor: "#FFF", border: "1px solid #DDD", color: "#222", padding: "10px", marginBottom: "10px" } : null }, React.createElement('h6', null, this.props.settingsText), React.createElement('div', { className: 'griddle-columns', style: this.props.useGriddleStyles ? { clear: "both", display: "table", width: "100%", borderBottom: "1px solid #EDEDED", marginBottom: "10px" } : null }, nodes), setPageSize, toggleCustom);
    }
});

module.exports = GridSettings;


/***/ }),

/***/ "./node_modules/griddle-react/modules/gridTable.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");
var GridTitle = __webpack_require__("./node_modules/griddle-react/modules/gridTitle.jsx.js");
var GridRowContainer = __webpack_require__("./node_modules/griddle-react/modules/gridRowContainer.jsx.js");
var ColumnProperties = __webpack_require__("./node_modules/griddle-react/modules/columnProperties.js");
var RowProperties = __webpack_require__("./node_modules/griddle-react/modules/rowProperties.js");

var GridTable = createReactClass({
  getDefaultProps: function getDefaultProps() {
    return {
      "data": [],
      "columnSettings": null,
      "rowSettings": null,
      "sortSettings": null,
      "multipleSelectionSettings": null,
      "className": "",
      "enableInfiniteScroll": false,
      "nextPage": null,
      "hasMorePages": false,
      "useFixedHeader": false,
      "useFixedLayout": true,
      "paddingHeight": null,
      "rowHeight": null,
      "filterByColumn": null,
      "infiniteScrollLoadTreshold": null,
      "bodyHeight": null,
      "useGriddleStyles": true,
      "useGriddleIcons": true,
      "isSubGriddle": false,
      "parentRowCollapsedClassName": "parent-row",
      "parentRowExpandedClassName": "parent-row expanded",
      "parentRowCollapsedComponent": "▶",
      "parentRowExpandedComponent": "▼",
      "externalLoadingComponent": null,
      "externalIsLoading": false,
      "onRowClick": null,
      "onRowMouseEnter": null,
      "onRowMouseLeave": null,
      "onRowWillMount": null,
      "onRowWillUnmount": null
    };
  },
  getInitialState: function getInitialState() {
    return {
      scrollTop: 0,
      scrollHeight: this.props.bodyHeight,
      clientHeight: this.props.bodyHeight
    };
  },
  componentDidMount: function componentDidMount() {
    // After the initial render, see if we need to load additional pages.
    this.gridScroll();
  },
  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
    // After the subsequent renders, see if we need to load additional pages.
    this.gridScroll();
  },
  gridScroll: function gridScroll() {
    if (this.props.enableInfiniteScroll && !this.props.externalIsLoading) {
      // If the scroll height is greater than the current amount of rows displayed, update the page.
      var scrollable = this.refs.scrollable;
      var scrollTop = scrollable.scrollTop;
      var scrollHeight = scrollable.scrollHeight;
      var clientHeight = scrollable.clientHeight;

      // If the scroll position changed and the difference is greater than a row height
      if (this.props.rowHeight !== null && this.state.scrollTop !== scrollTop && Math.abs(this.state.scrollTop - scrollTop) >= this.getAdjustedRowHeight()) {
        var newState = {
          scrollTop: scrollTop,
          scrollHeight: scrollHeight,
          clientHeight: clientHeight
        };

        // Set the state to the new state
        this.setState(newState);
      }

      // Determine the diff by subtracting the amount scrolled by the total height, taking into consideratoin
      // the spacer's height.
      var scrollHeightDiff = scrollHeight - (scrollTop + clientHeight) - this.props.infiniteScrollLoadTreshold;

      // Make sure that we load results a little before reaching the bottom.
      var compareHeight = scrollHeightDiff * 0.6;

      if (compareHeight <= this.props.infiniteScrollLoadTreshold) {
        this.props.nextPage();
      }
    }
  },
  verifyProps: function verifyProps() {
    if (this.props.columnSettings === null) {
      console.error("gridTable: The columnSettings prop is null and it shouldn't be");
    }
    if (this.props.rowSettings === null) {
      console.error("gridTable: The rowSettings prop is null and it shouldn't be");
    }
  },
  getAdjustedRowHeight: function getAdjustedRowHeight() {
    return this.props.rowHeight + this.props.paddingHeight * 2; // account for padding.
  },
  getNodeContent: function getNodeContent() {
    this.verifyProps();
    var that = this;

    //figure out if we need to wrap the group in one tbody or many
    var anyHasChildren = false;

    // If the data is still being loaded, don't build the nodes unless this is an infinite scroll table.
    if (!this.props.externalIsLoading || this.props.enableInfiniteScroll) {
      var nodeData = that.props.data;
      var aboveSpacerRow = null;
      var belowSpacerRow = null;
      var usingDefault = false;

      // If we have a row height specified, only render what's going to be visible.
      if (this.props.enableInfiniteScroll && this.props.rowHeight !== null && this.refs.scrollable !== undefined) {
        var adjustedHeight = that.getAdjustedRowHeight();
        var visibleRecordCount = Math.ceil(that.state.clientHeight / adjustedHeight);

        // Inspired by : http://jsfiddle.net/vjeux/KbWJ2/9/
        var displayStart = Math.max(0, Math.floor(that.state.scrollTop / adjustedHeight) - visibleRecordCount * 0.25);
        var displayEnd = Math.min(displayStart + visibleRecordCount * 1.25, this.props.data.length - 1);

        // Split the amount of nodes.
        nodeData = nodeData.slice(displayStart, displayEnd + 1);

        // Set the above and below nodes.
        var aboveSpacerRowStyle = { height: displayStart * adjustedHeight + "px" };
        aboveSpacerRow = React.createElement('tr', { key: 'above-' + aboveSpacerRowStyle.height, style: aboveSpacerRowStyle });
        var belowSpacerRowStyle = { height: (this.props.data.length - displayEnd) * adjustedHeight + "px" };
        belowSpacerRow = React.createElement('tr', { key: 'below-' + belowSpacerRowStyle.height, style: belowSpacerRowStyle });
      }

      var nodes = nodeData.map(function (row, index) {
        var hasChildren = typeof row["children"] !== "undefined" && row["children"].length > 0;
        var uniqueId = that.props.rowSettings.getRowKey(row, index);

        //at least one item in the group has children.
        if (hasChildren) {
          anyHasChildren = hasChildren;
        }

        return React.createElement(GridRowContainer, {
          useGriddleStyles: that.props.useGriddleStyles,
          isSubGriddle: that.props.isSubGriddle,
          parentRowExpandedClassName: that.props.parentRowExpandedClassName,
          parentRowCollapsedClassName: that.props.parentRowCollapsedClassName,
          parentRowExpandedComponent: that.props.parentRowExpandedComponent,
          parentRowCollapsedComponent: that.props.parentRowCollapsedComponent,
          data: row,
          key: uniqueId + '-container',
          uniqueId: uniqueId,
          columnSettings: that.props.columnSettings,
          rowSettings: that.props.rowSettings,
          paddingHeight: that.props.paddingHeight,
          multipleSelectionSettings: that.props.multipleSelectionSettings,
          rowHeight: that.props.rowHeight,
          hasChildren: hasChildren,
          tableClassName: that.props.className,
          onRowClick: that.props.onRowClick,
          onRowMouseEnter: that.props.onRowMouseEnter,
          onRowMouseLeave: that.props.onRowMouseLeave,
          onRowWillMount: that.props.onRowWillMount,
          onRowWillUnmount: that.props.onRowWillUnmount
        });
      });

      // no data section
      if (this.props.showNoData) {
        var colSpan = this.props.columnSettings.getVisibleColumnCount();
        nodes.push(React.createElement('tr', { key: 'no-data-section' }, React.createElement('td', { colSpan: colSpan }, this.props.noDataSection)));
      }

      // Add the spacer rows for nodes we're not rendering.
      if (aboveSpacerRow) {
        nodes.unshift(aboveSpacerRow);
      }
      if (belowSpacerRow) {
        nodes.push(belowSpacerRow);
      }

      // Send back the nodes.
      return {
        nodes: nodes,
        anyHasChildren: anyHasChildren
      };
    } else {
      return null;
    }
  },
  render: function render() {
    var that = this;
    var nodes = [];

    // for if we need to wrap the group in one tbody or many
    var anyHasChildren = false;

    // Grab the nodes to render
    var nodeContent = this.getNodeContent();
    if (nodeContent) {
      nodes = nodeContent.nodes;
      anyHasChildren = nodeContent.anyHasChildren;
    }

    var gridStyle = null;
    var loadingContent = null;
    var tableStyle = {
      width: "100%"
    };

    if (this.props.useFixedLayout) {
      tableStyle.tableLayout = "fixed";
    }

    if (this.props.enableInfiniteScroll) {
      // If we're enabling infinite scrolling, we'll want to include the max height of the grid body + allow scrolling.
      gridStyle = {
        "position": "relative",
        "overflowY": "scroll",
        "height": this.props.bodyHeight + "px",
        "width": "100%"
      };
    }

    // If we're currently loading, populate the loading content
    if (this.props.externalIsLoading) {
      var defaultLoadingStyle = null;
      var defaultColSpan = null;

      if (this.props.useGriddleStyles) {
        defaultLoadingStyle = {
          textAlign: "center",
          paddingBottom: "40px"
        };
      }

      defaultColSpan = this.props.columnSettings.getVisibleColumnCount();

      var loadingComponent = this.props.externalLoadingComponent ? React.createElement(this.props.externalLoadingComponent, null) : React.createElement('div', null, 'Loading...');

      loadingContent = React.createElement('tbody', null, React.createElement('tr', null, React.createElement('td', { style: defaultLoadingStyle, colSpan: defaultColSpan }, loadingComponent)));
    }

    //construct the table heading component
    var tableHeading = this.props.showTableHeading ? React.createElement(GridTitle, { useGriddleStyles: this.props.useGriddleStyles, useGriddleIcons: this.props.useGriddleIcons,
      sortSettings: this.props.sortSettings,
      multipleSelectionSettings: this.props.multipleSelectionSettings,
      columnSettings: this.props.columnSettings,
      filterByColumn: this.props.filterByColumn,
      rowSettings: this.props.rowSettings }) : undefined;

    //check to see if any of the rows have children... if they don't wrap everything in a tbody so the browser doesn't auto do this
    if (!anyHasChildren) {
      nodes = React.createElement('tbody', null, nodes);
    }

    var pagingContent = React.createElement('tbody', null);
    if (this.props.showPager) {
      var pagingStyles = this.props.useGriddleStyles ? {
        padding: "0px",
        backgroundColor: "#EDEDED",
        border: "0px",
        color: "#222",
        height: this.props.showNoData ? "20px" : null
      } : null;
      pagingContent = React.createElement('tbody', null, React.createElement('tr', null, React.createElement('td', { colSpan: this.props.multipleSelectionSettings.isMultipleSelection ? this.props.columnSettings.getVisibleColumnCount() + 1 : this.props.columnSettings.getVisibleColumnCount(), style: pagingStyles, className: 'footer-container' }, !this.props.showNoData ? this.props.pagingContent : null)));
    }

    // If we have a fixed header, split into two tables.
    if (this.props.useFixedHeader) {
      if (this.props.useGriddleStyles) {
        tableStyle.tableLayout = "fixed";
      }

      return React.createElement('div', null, React.createElement('table', { className: this.props.className, style: this.props.useGriddleStyles && tableStyle || null }, tableHeading), React.createElement('div', { ref: 'scrollable', onScroll: this.gridScroll, style: gridStyle }, React.createElement('table', { className: this.props.className, style: this.props.useGriddleStyles && tableStyle || null }, nodes, loadingContent, pagingContent)));
    }

    return React.createElement('div', { ref: 'scrollable', onScroll: this.gridScroll, style: gridStyle }, React.createElement('table', { className: this.props.className, style: this.props.useGriddleStyles && tableStyle || null }, tableHeading, nodes, loadingContent, pagingContent));
  }
});

module.exports = GridTable;


/***/ }),

/***/ "./node_modules/griddle-react/modules/gridTitle.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
 */


var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var React = __webpack_require__(0);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");
var ColumnProperties = __webpack_require__("./node_modules/griddle-react/modules/columnProperties.js");
var assign = __webpack_require__("./node_modules/lodash/assign.js");

var DefaultHeaderComponent = createReactClass({
    render: function render() {
        return React.createElement('span', null, this.props.displayName);
    }
});

var GridTitle = createReactClass({
    getDefaultProps: function getDefaultProps() {
        return {
            "columnSettings": null,
            "filterByColumn": function filterByColumn() {},
            "rowSettings": null,
            "sortSettings": null,
            "multipleSelectionSettings": null,
            "headerStyle": null,
            "useGriddleStyles": true,
            "useGriddleIcons": true,
            "headerStyles": {}
        };
    },
    componentWillMount: function componentWillMount() {
        this.verifyProps();
    },
    sort: function sort(column) {
        var that = this;
        return function (event) {
            that.props.sortSettings.changeSort(column);
        };
    },
    toggleSelectAll: function toggleSelectAll(event) {
        this.props.multipleSelectionSettings.toggleSelectAll();
    },
    handleSelectionChange: function handleSelectionChange(event) {
        //hack to get around warning message that's not helpful in this case
        return;
    },
    verifyProps: function verifyProps() {
        if (this.props.columnSettings === null) {
            console.error("gridTitle: The columnSettings prop is null and it shouldn't be");
        }

        if (this.props.sortSettings === null) {
            console.error("gridTitle: The sortSettings prop is null and it shouldn't be");
        }
    },
    render: function render() {
        this.verifyProps();
        var that = this;
        var titleStyles = {};

        var nodes = this.props.columnSettings.getColumns().map(function (col, index) {
            var defaultTitleStyles = {};
            var columnSort = "";
            var columnIsSortable = that.props.columnSettings.getMetadataColumnProperty(col, "sortable", true);
            var sortComponent = columnIsSortable ? that.props.sortSettings.sortDefaultComponent : null;

            if (that.props.sortSettings.sortColumn == col && that.props.sortSettings.sortDirection === 'asc') {
                columnSort = that.props.sortSettings.sortAscendingClassName;
                sortComponent = that.props.useGriddleIcons && that.props.sortSettings.sortAscendingComponent;
            } else if (that.props.sortSettings.sortColumn == col && that.props.sortSettings.sortDirection === 'desc') {
                columnSort += that.props.sortSettings.sortDescendingClassName;
                sortComponent = that.props.useGriddleIcons && that.props.sortSettings.sortDescendingComponent;
            }

            var meta = that.props.columnSettings.getColumnMetadataByName(col);
            var displayName = that.props.columnSettings.getMetadataColumnProperty(col, "displayName", col);
            var HeaderComponent = that.props.columnSettings.getMetadataColumnProperty(col, "customHeaderComponent", DefaultHeaderComponent);
            var headerProps = that.props.columnSettings.getMetadataColumnProperty(col, "customHeaderComponentProps", {});

            columnSort = meta == null ? columnSort : (columnSort && columnSort + " " || columnSort) + that.props.columnSettings.getMetadataColumnProperty(col, "cssClassName", "");

            if (that.props.useGriddleStyles) {
                defaultTitleStyles = {
                    backgroundColor: "#EDEDEF",
                    border: "0px",
                    borderBottom: "1px solid #DDD",
                    color: "#222",
                    padding: "5px",
                    cursor: columnIsSortable ? "pointer" : "default"
                };
            }
            titleStyles = meta && meta.titleStyles ? assign({}, defaultTitleStyles, meta.titleStyles) : assign({}, defaultTitleStyles);

            var ComponentClass = displayName ? 'th' : 'td';
            return React.createElement(ComponentClass, { onClick: columnIsSortable ? that.sort(col) : null, 'data-title': col, className: columnSort, key: col,
                style: titleStyles }, React.createElement(HeaderComponent, _extends({ columnName: col, displayName: displayName,
                filterByColumn: that.props.filterByColumn }, headerProps)), sortComponent);
        });

        if (nodes && this.props.multipleSelectionSettings.isMultipleSelection) {
            nodes.unshift(React.createElement('th', { key: 'selection', onClick: this.toggleSelectAll, style: titleStyles, className: 'griddle-select griddle-select-title' }, React.createElement('input', {
                type: 'checkbox',
                checked: this.props.multipleSelectionSettings.getIsSelectAllChecked(),
                onChange: this.handleSelectionChange
            })));
        }

        //Get the row from the row settings.
        var className = that.props.rowSettings && that.props.rowSettings.getHeaderRowMetadataClass() || null;

        return React.createElement('thead', null, React.createElement('tr', {
            className: className,
            style: this.props.headerStyles }, nodes));
    }
});

module.exports = GridTitle;


/***/ }),

/***/ "./node_modules/griddle-react/modules/griddle.jsx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
   Griddle - Simple Grid Component for React
   https://github.com/DynamicTyped/Griddle
   Copyright (c) 2014 Ryan Lanciaux | DynamicTyped

   See License / Disclaimer https://raw.githubusercontent.com/DynamicTyped/Griddle/master/LICENSE
*/


var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var React = __webpack_require__(0);
var PropTypes = __webpack_require__(1);
var createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");
var GridTable = __webpack_require__("./node_modules/griddle-react/modules/gridTable.jsx.js");
var GridFilter = __webpack_require__("./node_modules/griddle-react/modules/gridFilter.jsx.js");
var GridPagination = __webpack_require__("./node_modules/griddle-react/modules/gridPagination.jsx.js");
var GridSettings = __webpack_require__("./node_modules/griddle-react/modules/gridSettings.jsx.js");
var GridNoData = __webpack_require__("./node_modules/griddle-react/modules/gridNoData.jsx.js");
var GridRow = __webpack_require__("./node_modules/griddle-react/modules/gridRow.jsx.js");
var GridRowContainer = __webpack_require__("./node_modules/griddle-react/modules/gridRowContainer.jsx.js");
var CustomRowComponentContainer = __webpack_require__("./node_modules/griddle-react/modules/customRowComponentContainer.jsx.js");
var CustomPaginationContainer = __webpack_require__("./node_modules/griddle-react/modules/customPaginationContainer.jsx.js");
var CustomFilterContainer = __webpack_require__("./node_modules/griddle-react/modules/customFilterContainer.jsx.js");
var ColumnProperties = __webpack_require__("./node_modules/griddle-react/modules/columnProperties.js");
var RowProperties = __webpack_require__("./node_modules/griddle-react/modules/rowProperties.js");
var deep = __webpack_require__("./node_modules/griddle-react/modules/deep.js");

var drop = __webpack_require__("./node_modules/lodash/drop.js");
var dropRight = __webpack_require__("./node_modules/lodash/dropRight.js");
var find = __webpack_require__("./node_modules/lodash/find.js");
var first = __webpack_require__("./node_modules/lodash/take.js");
var forEach = __webpack_require__("./node_modules/lodash/forEach.js");
var initial = __webpack_require__("./node_modules/lodash/initial.js");
var intersection = __webpack_require__("./node_modules/lodash/intersection.js");
var isArray = __webpack_require__("./node_modules/lodash/isArray.js");
var isEmpty = __webpack_require__("./node_modules/lodash/isEmpty.js");
var isNull = __webpack_require__("./node_modules/lodash/isNull.js");
var isUndefined = __webpack_require__("./node_modules/lodash/isUndefined.js");
var omit = __webpack_require__("./node_modules/lodash/omit.js");
var map = __webpack_require__("./node_modules/lodash/map.js");
var extend = __webpack_require__("./node_modules/lodash/assign.js");
var _filter = __webpack_require__("./node_modules/lodash/filter.js");

var _orderBy = __webpack_require__("./node_modules/lodash/orderBy.js");
var _property = __webpack_require__("./node_modules/lodash/property.js");
var _get = __webpack_require__("./node_modules/lodash/get.js");
var _some = __webpack_require__("./node_modules/lodash/some.js");

var Griddle = createReactClass({
    statics: {
        GridTable: GridTable,
        GridFilter: GridFilter,
        GridPagination: GridPagination,
        GridSettings: GridSettings,
        GridRow: GridRow
    },
    columnSettings: null,
    rowSettings: null,
    getDefaultProps: function getDefaultProps() {
        return {
            "columns": [],
            "gridMetadata": null,
            "columnMetadata": [],
            "rowMetadata": null,
            "results": [], // Used if all results are already loaded.
            "initialSort": "",
            "gridClassName": "",
            "tableClassName": "",
            "customRowComponentClassName": "",
            "settingsText": "Settings",
            "filterPlaceholderText": "Filter Results",
            "nextText": "Next",
            "previousText": "Previous",
            "maxRowsText": "Rows per page",
            "enableCustomFormatText": "Enable Custom Formatting",
            //this column will determine which column holds subgrid data
            //it will be passed through with the data object but will not be rendered
            "childrenColumnName": "children",
            //Any column in this list will be treated as metadata and will be passed through with the data but won't be rendered
            "metadataColumns": [],
            "showFilter": false,
            "showSettings": false,
            "useCustomRowComponent": false,
            "useCustomGridComponent": false,
            "useCustomPagerComponent": false,
            "useCustomFilterer": false,
            "useCustomFilterComponent": false,
            "useGriddleStyles": true,
            "useGriddleIcons": true,
            "customRowComponent": null,
            "customGridComponent": null,
            "customPagerComponent": {},
            "customFilterComponent": null,
            "customFilterer": null,
            "globalData": null,
            "enableToggleCustom": false,
            "noDataMessage": "There is no data to display.",
            "noDataClassName": "griddle-nodata",
            "customNoDataComponent": null,
            "customNoDataComponentProps": null,
            "allowEmptyGrid": false,
            "showTableHeading": true,
            "showPager": true,
            "useFixedHeader": false,
            "useExternal": false,
            "externalSetPage": null,
            "externalChangeSort": null,
            "externalSetFilter": null,
            "externalSetPageSize": null,
            "externalMaxPage": null,
            "externalCurrentPage": null,
            "externalSortColumn": null,
            "externalSortAscending": true,
            "externalLoadingComponent": null,
            "externalIsLoading": false,
            "enableInfiniteScroll": false,
            "bodyHeight": null,
            "paddingHeight": 5,
            "rowHeight": 25,
            "infiniteScrollLoadTreshold": 50,
            "useFixedLayout": true,
            "isSubGriddle": false,
            "enableSort": true,
            "onRowClick": null,
            "onRowMouseEnter": null,
            "onRowMouseLeave": null,
            "onRowWillMount": null,
            "onRowWillUnmount": null,
            /* css class names */
            "sortAscendingClassName": "sort-ascending",
            "sortDescendingClassName": "sort-descending",
            "parentRowCollapsedClassName": "parent-row",
            "parentRowExpandedClassName": "parent-row expanded",
            "settingsToggleClassName": "settings",
            "nextClassName": "griddle-next",
            "previousClassName": "griddle-previous",
            "headerStyles": {},
            /* icon components */
            "sortAscendingComponent": " ▲",
            "sortDescendingComponent": " ▼",
            "sortDefaultComponent": null,
            "parentRowCollapsedComponent": "▶",
            "parentRowExpandedComponent": "▼",
            "settingsIconComponent": "",
            "nextIconComponent": "",
            "previousIconComponent": "",
            "isMultipleSelection": false, //currently does not support subgrids
            "selectedRowIds": [],
            "uniqueIdentifier": "id",
            "onSelectionChange": null,
            "columnFilterFunc": null
        };
    },
    propTypes: {
        isMultipleSelection: PropTypes.bool,
        selectedRowIds: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.number), PropTypes.arrayOf(PropTypes.string)]),
        uniqueIdentifier: PropTypes.string,
        onSelectionChange: PropTypes.func,
        columnFilterFunc: PropTypes.func
    },
    defaultFilter: function defaultFilter(results, filter) {
        var that = this;
        return _filter(results, function (item) {
            var arr = deep.keys(item);
            for (var i = 0; i < arr.length; i++) {
                var isFilterable = that.columnSettings.getMetadataColumnProperty(arr[i], "filterable", true);
                if (isFilterable && (deep.getAt(item, arr[i]) || "").toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                    return true;
                }
            }
            return false;
        });
    },

    defaultColumnFilter: function defaultColumnFilter(columnName, value, filter) {
        var filters = map(isArray(filter) ? filter : [filter], function (filter) {
            return (filter || '').toLowerCase();
        });
        return _some(deep.getObjectValues(value), function (value) {
            value = value.toString().toLowerCase();
            return _some(filters, function (filter) {
                return value.indexOf(filter) >= 0;
            });
        });
    },

    filterByColumnFilters: function filterByColumnFilters(columnFilters) {
        var filterFunction = this.props.columnFilterFunc || this.defaultColumnFilter;
        var filteredResults = Object.keys(columnFilters).reduce(function (previous, current) {
            return _filter(previous, function (item) {
                var value = deep.getAt(item, current || "");
                var filter = columnFilters[current];
                return filterFunction(current || '', value, filter);
            });
        }, this.props.results);

        var newState = {
            columnFilters: columnFilters
        };

        if (columnFilters) {
            newState.filteredResults = filteredResults;
            newState.maxPage = this.getMaxPage(newState.filteredResults);
        } else if (this.state.filter) {
            newState.filteredResults = this.props.useCustomFilterer ? this.props.customFilterer(this.props.results, filter) : this.defaultFilter(this.props.results, filter);
        } else {
            newState.filteredResults = null;
        }

        this.setState(newState);
    },

    filterByColumn: function filterByColumn(filter, column) {
        var columnFilters = this.state.columnFilters;

        //if filter is "" remove it from the columnFilters object
        if (columnFilters.hasOwnProperty(column) && !filter) {
            columnFilters = omit(columnFilters, column);
        } else {
            var newObject = {};
            newObject[column] = filter;
            columnFilters = extend({}, columnFilters, newObject);
        }

        this.filterByColumnFilters(columnFilters);
    },

    /* if we have a filter display the max page and results accordingly */
    setFilter: function setFilter(filter) {
        var updatedResults = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

        if (this.props.useExternal) {
            this.props.externalSetFilter(filter);
            return;
        }

        var that = this,
            updatedState = {
            page: 0,
            filter: filter
        };

        // Obtain the state results.
        updatedState.filteredResults = this.props.useCustomFilterer ? this.props.customFilterer(updatedResults || this.props.results, filter) : this.defaultFilter(updatedResults || this.props.results, filter);

        // Update the max page.
        updatedState.maxPage = that.getMaxPage(updatedState.filteredResults);

        //if filter is null or undefined reset the filter.
        if (isUndefined(filter) || isNull(filter) || isEmpty(filter)) {
            updatedState.filter = filter;
            updatedState.filteredResults = null;
        }

        // Set the state.
        that.setState(updatedState);

        this._resetSelectedRows();
    },
    setPageSize: function setPageSize(size) {
        if (this.props.useExternal) {
            this.setState({
                resultsPerPage: size
            });
            this.props.externalSetPageSize(size);
            return;
        }
        //make this better.
        this.state.resultsPerPage = size;
        this.setMaxPage();
    },
    toggleColumnChooser: function toggleColumnChooser() {
        this.setState({
            showColumnChooser: !this.state.showColumnChooser
        });
    },
    isNullOrUndefined: function isNullOrUndefined(value) {
        return value === undefined || value === null;
    },
    shouldUseCustomRowComponent: function shouldUseCustomRowComponent() {
        return this.isNullOrUndefined(this.state.useCustomRowComponent) ? this.props.useCustomRowComponent : this.state.useCustomRowComponent;
    },
    shouldUseCustomGridComponent: function shouldUseCustomGridComponent() {
        return this.isNullOrUndefined(this.state.useCustomGridComponent) ? this.props.useCustomGridComponent : this.state.useCustomGridComponent;
    },
    toggleCustomComponent: function toggleCustomComponent() {
        if (this.state.customComponentType === "grid") {
            this.setState({
                useCustomGridComponent: !this.shouldUseCustomGridComponent()
            });
        } else if (this.state.customComponentType === "row") {
            this.setState({
                useCustomRowComponent: !this.shouldUseCustomRowComponent()
            });
        }
    },
    getMaxPage: function getMaxPage(results, totalResults) {
        if (this.props.useExternal) {
            return this.props.externalMaxPage;
        }

        if (!totalResults) {
            totalResults = (results || this.getCurrentResults()).length;
        }
        var maxPage = Math.ceil(totalResults / this.state.resultsPerPage);
        return maxPage;
    },
    setMaxPage: function setMaxPage(results) {
        var maxPage = this.getMaxPage(results);
        //re-render if we have new max page value
        if (this.state.maxPage !== maxPage) {
            this.setState({ page: 0, maxPage: maxPage, filteredColumns: this.columnSettings.filteredColumns });
        }
    },
    setPage: function setPage(number) {
        if (this.props.useExternal) {
            this.props.externalSetPage(number);
            return;
        }

        //check page size and move the filteredResults to pageSize * pageNumber
        if (number * this.state.resultsPerPage <= this.state.resultsPerPage * this.state.maxPage) {
            var that = this,
                state = {
                page: number
            };

            that.setState(state);
        }

        //When infinite scrolling is enabled, uncheck the "select all" checkbox, since more unchecked rows will be appended at the end
        if (this.props.enableInfiniteScroll) {
            this.setState({
                isSelectAllChecked: false
            });
        }
    },
    setColumns: function setColumns(columns) {
        this.columnSettings.filteredColumns = isArray(columns) ? columns : [columns];

        this.setState({
            filteredColumns: this.columnSettings.filteredColumns
        });
    },
    nextPage: function nextPage() {
        var currentPage = this.getCurrentPage();
        if (currentPage < this.getCurrentMaxPage() - 1) {
            this.setPage(currentPage + 1);
        }
    },
    previousPage: function previousPage() {
        var currentPage = this.getCurrentPage();
        if (currentPage > 0) {
            this.setPage(currentPage - 1);
        }
    },
    changeSort: function changeSort(column) {
        if (this.props.enableSort === false) {
            return;
        }

        if (this.props.useExternal) {
            var isAscending = this.props.externalSortColumn === column ? !this.props.externalSortAscending : true;
            this.setState({
                sortColumn: column,
                sortDirection: isAscending ? 'asc' : 'desc'
            });
            this.props.externalChangeSort(column, isAscending);
            return;
        }
        var columnMeta = find(this.props.columnMetadata, { columnName: column }) || {};
        var sortDirectionCycle = columnMeta.sortDirectionCycle ? columnMeta.sortDirectionCycle : [null, 'asc', 'desc'];
        var sortDirection = null;
        // Find the current position in the cycle (or -1).
        var i = sortDirectionCycle.indexOf(this.state.sortDirection && column === this.state.sortColumn ? this.state.sortDirection : null);

        // Proceed to the next position in the cycle (or start at the beginning).
        i = (i + 1) % sortDirectionCycle.length;

        if (sortDirectionCycle[i]) {
            sortDirection = sortDirectionCycle[i];
        } else {
            sortDirection = null;
        }

        var state = {
            page: 0,
            sortColumn: column,
            sortDirection: sortDirection
        };

        this.setState(state);
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        // Check if results props changed
        if (nextProps.results !== this.props.results) {
            this.setFilter(this.state.filter, nextProps.results);
        }

        this.setMaxPage(nextProps.results);
        if (nextProps.resultsPerPage !== this.props.resultsPerPage) {
            this.setPageSize(nextProps.resultsPerPage);
        }
        //This will updaet the column Metadata
        this.columnSettings.columnMetadata = nextProps.columnMetadata;
        if (nextProps.results.length > 0) {
            var deepKeys = deep.keys(nextProps.results[0]);

            var is_same = this.columnSettings.allColumns.length == deepKeys.length && this.columnSettings.allColumns.every(function (element, index) {
                return element === deepKeys[index];
            });

            if (!is_same) {
                this.columnSettings.allColumns = deepKeys;
            }
        } else if (this.columnSettings.allColumns.length > 0) {
            this.columnSettings.allColumns = [];
        }

        if (nextProps.selectedRowIds) {
            var visibleRows = this.getDataForRender(this.getCurrentResults(nextProps.results), this.columnSettings.getColumns(), true);

            this.setState({
                isSelectAllChecked: this._getAreAllRowsChecked(nextProps.selectedRowIds, map(visibleRows, this.props.uniqueIdentifier)),
                selectedRowIds: nextProps.selectedRowIds
            });
        }
    },
    getInitialState: function getInitialState() {
        var state = {
            maxPage: 0,
            page: 0,
            filteredResults: null,
            filteredColumns: [],
            filter: "",
            //this sets the individual column filters
            columnFilters: {},
            resultsPerPage: this.props.resultsPerPage || 5,
            showColumnChooser: false,
            isSelectAllChecked: false,
            selectedRowIds: this.props.selectedRowIds
        };
        return state;
    },
    componentWillMount: function componentWillMount() {
        this.verifyExternal();
        this.verifyCustom();

        this.columnSettings = new ColumnProperties(this.props.results.length > 0 ? deep.keys(this.props.results[0]) : [], this.props.columns, this.props.childrenColumnName, this.props.columnMetadata, this.props.metadataColumns);

        this.rowSettings = new RowProperties(this.props.rowMetadata, this.props.useCustomTableRowComponent && this.props.customTableRowComponent ? this.props.customTableRowComponent : GridRow, this.props.useCustomTableRowComponent);

        if (this.props.initialSort) {
            // shouldn't change Sort on init for external
            if (this.props.useExternal) {
                this.setState({
                    sortColumn: this.props.externalSortColumn,
                    sortDirection: this.props.externalSortAscending ? 'asc' : 'desc'
                });
            } else {
                this.changeSort(this.props.initialSort);
            }
        }
        this.setMaxPage();

        //don't like the magic strings
        if (this.shouldUseCustomGridComponent()) {
            this.setState({
                customComponentType: "grid"
            });
        } else if (this.shouldUseCustomRowComponent()) {
            this.setState({
                customComponentType: "row"
            });
        } else {
            this.setState({
                filteredColumns: this.columnSettings.filteredColumns
            });
        }
    },
    componentDidMount: function componentDidMount() {
        if (this.props.componentDidMount && typeof this.props.componentDidMount === "function") {
            return this.props.componentDidMount();
        }
    },
    componentDidUpdate: function componentDidUpdate() {
        if (this.props.componentDidUpdate && typeof this.props.componentDidUpdate === "function") {
            return this.props.componentDidUpdate(this.state);
        }
    },
    //todo: clean these verify methods up
    verifyExternal: function verifyExternal() {
        if (this.props.useExternal === true) {
            //hooray for big ugly nested if
            if (this.props.externalSetPage === null) {
                console.error("useExternal is set to true but there is no externalSetPage function specified.");
            }

            if (this.props.externalChangeSort === null) {
                console.error("useExternal is set to true but there is no externalChangeSort function specified.");
            }

            if (this.props.externalSetFilter === null) {
                console.error("useExternal is set to true but there is no externalSetFilter function specified.");
            }

            if (this.props.externalSetPageSize === null) {
                console.error("useExternal is set to true but there is no externalSetPageSize function specified.");
            }

            if (this.props.externalMaxPage === null) {
                console.error("useExternal is set to true but externalMaxPage is not set.");
            }

            if (this.props.externalCurrentPage === null) {
                console.error("useExternal is set to true but externalCurrentPage is not set. Griddle will not page correctly without that property when using external data.");
            }
        }
    },
    //TODO: Do this with propTypes
    verifyCustom: function verifyCustom() {
        if (this.props.useCustomGridComponent === true && this.props.customGridComponent === null) {
            console.error("useCustomGridComponent is set to true but no custom component was specified.");
        }
        if (this.props.useCustomRowComponent === true && this.props.customRowComponent === null) {
            console.error("useCustomRowComponent is set to true but no custom component was specified.");
        }
        if (this.props.useCustomGridComponent === true && this.props.useCustomRowComponent === true) {
            console.error("Cannot currently use both customGridComponent and customRowComponent.");
        }
        if (this.props.useCustomFilterer === true && this.props.customFilterer === null) {
            console.error("useCustomFilterer is set to true but no custom filter function was specified.");
        }
        if (this.props.useCustomFilterComponent === true && this.props.customFilterComponent === null) {
            console.error("useCustomFilterComponent is set to true but no customFilterComponent was specified.");
        }
    },
    getDataForRender: function getDataForRender(data, cols, pageList) {
        var _this = this;

        var that = this;

        if (!this.props.useExternal) {
            if (this.state.sortColumn !== "") {
                var column = this.state.sortColumn;
                var sortColumn = _filter(this.props.columnMetadata, { columnName: column });
                var customCompareFn;
                var multiSort = {
                    columns: [],
                    orders: []
                };

                if (sortColumn.length > 0) {
                    customCompareFn = sortColumn[0].hasOwnProperty("customCompareFn") && sortColumn[0]["customCompareFn"];
                    if (sortColumn[0]["multiSort"]) {
                        multiSort = sortColumn[0]["multiSort"];
                    }
                }

                if (this.state.sortDirection) {
                    if (typeof customCompareFn === 'function') {
                        if (customCompareFn.length === 2) {
                            data = data.sort(function (a, b) {
                                return customCompareFn(_get(a, column), _get(b, column));
                            });

                            if (this.state.sortDirection === 'desc') {
                                data.reverse();
                            }
                        } else if (customCompareFn.length === 1) {
                            data = _orderBy(data, function (item) {
                                return customCompareFn(_get(item, column));
                            }, [this.state.sortDirection]);
                        }
                    } else {
                        var iteratees = [function (row) {
                            return (_get(row, column) || '').toString().toLowerCase();
                        }];
                        var orders = [this.state.sortDirection];
                        multiSort.columns.forEach(function (col, i) {
                            iteratees.push(function (row) {
                                return (_get(row, col) || '').toString().toLowerCase();
                            });
                            if (multiSort.orders[i] === 'asc' || multiSort.orders[i] === 'desc') {
                                orders.push(multiSort.orders[i]);
                            } else {
                                orders.push(_this.state.sortDirection);
                            }
                        });

                        data = _orderBy(data, iteratees, orders);
                    }
                }
            }

            var currentPage = this.getCurrentPage();

            if (!this.props.useExternal && pageList && this.state.resultsPerPage * (currentPage + 1) <= this.state.resultsPerPage * this.state.maxPage && currentPage >= 0) {
                if (this.isInfiniteScrollEnabled()) {
                    // If we're doing infinite scroll, grab all results up to the current page.
                    data = first(data, (currentPage + 1) * this.state.resultsPerPage);
                } else {
                    //the 'rest' is grabbing the whole array from index on and the 'initial' is getting the first n results
                    var rest = drop(data, currentPage * this.state.resultsPerPage);
                    data = (dropRight || initial)(rest, rest.length - this.state.resultsPerPage);
                }
            }
        }

        var transformedData = [];

        for (var i = 0; i < data.length; i++) {
            var mappedData = data[i];

            if (typeof mappedData[that.props.childrenColumnName] !== "undefined" && mappedData[that.props.childrenColumnName].length > 0) {
                //internally we're going to use children instead of whatever it is so we don't have to pass the custom name around
                mappedData["children"] = that.getDataForRender(mappedData[that.props.childrenColumnName], cols, false);

                if (that.props.childrenColumnName !== "children") {
                    delete mappedData[that.props.childrenColumnName];
                }
            }

            transformedData.push(mappedData);
        }
        return transformedData;
    },
    getCurrentResults: function getCurrentResults(results) {
        return this.state.filteredResults || results || this.props.results;
    },
    getCurrentPage: function getCurrentPage() {
        return this.props.externalCurrentPage || this.state.page;
    },
    getCurrentSort: function getCurrentSort() {
        return this.props.useExternal ? this.props.externalSortColumn : this.state.sortColumn;
    },
    getCurrentSortAscending: function getCurrentSortAscending() {
        return this.props.useExternal ? this.props.externalSortAscending : this.state.sortDirection === 'asc';
    },
    getCurrentMaxPage: function getCurrentMaxPage() {
        return this.props.useExternal ? this.props.externalMaxPage : this.state.maxPage;
    },
    //This takes the props relating to sort and puts them in one object
    getSortObject: function getSortObject() {
        return {
            enableSort: this.props.enableSort,
            changeSort: this.changeSort,
            sortColumn: this.getCurrentSort(),
            sortAscending: this.getCurrentSortAscending(),
            sortDirection: this.state.sortDirection,
            sortAscendingClassName: this.props.sortAscendingClassName,
            sortDescendingClassName: this.props.sortDescendingClassName,
            sortAscendingComponent: this.props.sortAscendingComponent,
            sortDescendingComponent: this.props.sortDescendingComponent,
            sortDefaultComponent: this.props.sortDefaultComponent
        };
    },
    _toggleSelectAll: function _toggleSelectAll() {
        var visibleRows = this.getDataForRender(this.getCurrentResults(), this.columnSettings.getColumns(), true),
            newIsSelectAllChecked = !this.state.isSelectAllChecked,
            newSelectedRowIds = JSON.parse(JSON.stringify(this.state.selectedRowIds));

        var self = this;
        forEach(visibleRows, function (row) {
            self._updateSelectedRowIds(row[self.props.uniqueIdentifier], newSelectedRowIds, newIsSelectAllChecked);
        }, this);

        this.setState({
            isSelectAllChecked: newIsSelectAllChecked,
            selectedRowIds: newSelectedRowIds
        });

        if (this.props.onSelectionChange) {
            this.props.onSelectionChange(newSelectedRowIds, newIsSelectAllChecked);
        }
    },
    _toggleSelectRow: function _toggleSelectRow(row, isChecked) {
        var visibleRows = this.getDataForRender(this.getCurrentResults(), this.columnSettings.getColumns(), true),
            newSelectedRowIds = JSON.parse(JSON.stringify(this.state.selectedRowIds));

        this._updateSelectedRowIds(row[this.props.uniqueIdentifier], newSelectedRowIds, isChecked);

        var newIsSelectAllChecked = this._getAreAllRowsChecked(newSelectedRowIds, map(visibleRows, this.props.uniqueIdentifier));

        this.setState({
            isSelectAllChecked: newIsSelectAllChecked,
            selectedRowIds: newSelectedRowIds
        });

        if (this.props.onSelectionChange) {
            this.props.onSelectionChange(newSelectedRowIds, newIsSelectAllChecked);
        }
    },
    _updateSelectedRowIds: function _updateSelectedRowIds(id, selectedRowIds, isChecked) {

        var isFound;

        if (isChecked) {
            isFound = find(selectedRowIds, function (item) {
                return id === item;
            });

            if (isFound === undefined) {
                selectedRowIds.push(id);
            }
        } else {
            selectedRowIds.splice(selectedRowIds.indexOf(id), 1);
        }
    },
    _getIsSelectAllChecked: function _getIsSelectAllChecked() {

        return this.state.isSelectAllChecked;
    },
    _getAreAllRowsChecked: function _getAreAllRowsChecked(selectedRowIds, visibleRowIds) {

        return visibleRowIds.length === intersection(visibleRowIds, selectedRowIds).length;
    },
    _getIsRowChecked: function _getIsRowChecked(row) {

        return this.state.selectedRowIds.indexOf(row[this.props.uniqueIdentifier]) > -1 ? true : false;
    },
    getSelectedRowIds: function getSelectedRowIds() {

        return this.state.selectedRowIds;
    },
    _resetSelectedRows: function _resetSelectedRows() {

        this.setState({
            isSelectAllChecked: false,
            selectedRowIds: []
        });
    },
    //This takes the props relating to multiple selection and puts them in one object
    getMultipleSelectionObject: function getMultipleSelectionObject() {

        return {
            isMultipleSelection: find(this.props.results, function (result) {
                return 'children' in result;
            }) ? false : this.props.isMultipleSelection, //does not support subgrids
            toggleSelectAll: this._toggleSelectAll,
            getIsSelectAllChecked: this._getIsSelectAllChecked,
            toggleSelectRow: this._toggleSelectRow,
            getSelectedRowIds: this.getSelectedRowIds,
            getIsRowChecked: this._getIsRowChecked
        };
    },
    isInfiniteScrollEnabled: function isInfiniteScrollEnabled() {
        // If a custom pager is included, don't allow for infinite scrolling.
        if (this.props.useCustomPagerComponent) {
            return false;
        }

        // Otherwise, send back the property.
        return this.props.enableInfiniteScroll;
    },
    getClearFixStyles: function getClearFixStyles() {
        return {
            clear: "both",
            display: "table",
            width: "100%"
        };
    },
    getSettingsStyles: function getSettingsStyles() {
        return {
            "float": "left",
            width: "50%",
            textAlign: "right"
        };
    },
    getFilterStyles: function getFilterStyles() {
        return {
            "float": "left",
            width: "50%",
            textAlign: "left",
            color: "#222",
            minHeight: "1px"
        };
    },
    getFilter: function getFilter() {
        return this.props.showFilter && this.shouldUseCustomGridComponent() === false ? this.props.useCustomFilterComponent ? React.createElement(CustomFilterContainer, { changeFilter: this.setFilter, placeholderText: this.props.filterPlaceholderText, customFilterComponent: this.props.customFilterComponent, results: this.props.results, currentResults: this.getCurrentResults() }) : React.createElement(GridFilter, { changeFilter: this.setFilter, placeholderText: this.props.filterPlaceholderText }) : "";
    },
    getSettings: function getSettings() {
        return this.props.showSettings ? React.createElement('button', { type: 'button', className: this.props.settingsToggleClassName, onClick: this.toggleColumnChooser,
            style: this.props.useGriddleStyles ? { background: "none", border: "none", padding: 0, margin: 0, fontSize: 14 } : null }, this.props.settingsText, this.props.settingsIconComponent) : "";
    },
    getTopSection: function getTopSection(filter, settings) {
        if (this.props.showFilter === false && this.props.showSettings === false) {
            return "";
        }

        var filterStyles = null,
            settingsStyles = null,
            topContainerStyles = null;

        if (this.props.useGriddleStyles) {
            filterStyles = this.getFilterStyles();
            settingsStyles = this.getSettingsStyles();

            topContainerStyles = this.getClearFixStyles();
        }

        return React.createElement('div', { className: 'top-section', style: topContainerStyles }, React.createElement('div', { className: 'griddle-filter', style: filterStyles }, filter), React.createElement('div', { className: 'griddle-settings-toggle', style: settingsStyles }, settings));
    },
    getPagingSection: function getPagingSection(currentPage, maxPage) {
        if ((this.props.showPager && !this.isInfiniteScrollEnabled() && !this.shouldUseCustomGridComponent()) === false) {
            return undefined;
        }

        return React.createElement('div', { className: 'griddle-footer' }, this.props.useCustomPagerComponent ? React.createElement(CustomPaginationContainer, { customPagerComponentOptions: this.props.customPagerComponentOptions, next: this.nextPage, previous: this.previousPage, currentPage: currentPage, maxPage: maxPage, setPage: this.setPage, nextText: this.props.nextText, previousText: this.props.previousText, customPagerComponent: this.props.customPagerComponent }) : React.createElement(GridPagination, { useGriddleStyles: this.props.useGriddleStyles, next: this.nextPage, previous: this.previousPage, nextClassName: this.props.nextClassName, nextIconComponent: this.props.nextIconComponent, previousClassName: this.props.previousClassName, previousIconComponent: this.props.previousIconComponent, currentPage: currentPage, maxPage: maxPage, setPage: this.setPage, nextText: this.props.nextText, previousText: this.props.previousText }));
    },
    getColumnSelectorSection: function getColumnSelectorSection(keys, cols) {
        return this.state.showColumnChooser ? React.createElement(GridSettings, { columns: keys, selectedColumns: cols, setColumns: this.setColumns, settingsText: this.props.settingsText,
            settingsIconComponent: this.props.settingsIconComponent, maxRowsText: this.props.maxRowsText, setPageSize: this.setPageSize,
            showSetPageSize: !this.shouldUseCustomGridComponent(), resultsPerPage: this.state.resultsPerPage, enableToggleCustom: this.props.enableToggleCustom,
            toggleCustomComponent: this.toggleCustomComponent, useCustomComponent: this.shouldUseCustomRowComponent() || this.shouldUseCustomGridComponent(),
            useGriddleStyles: this.props.useGriddleStyles, enableCustomFormatText: this.props.enableCustomFormatText, columnMetadata: this.props.columnMetadata }) : "";
    },
    getCustomGridSection: function getCustomGridSection() {
        return React.createElement(this.props.customGridComponent, _extends({ data: this.props.results, className: this.props.customGridComponentClassName }, this.props.gridMetadata));
    },
    getCustomRowSection: function getCustomRowSection(data, cols, meta, pagingContent, globalData) {
        return React.createElement('div', null, React.createElement(CustomRowComponentContainer, { data: data, columns: cols, metadataColumns: meta, globalData: globalData,
            className: this.props.customRowComponentClassName, customComponent: this.props.customRowComponent,
            style: this.props.useGriddleStyles ? this.getClearFixStyles() : null }), this.props.showPager && pagingContent);
    },
    getStandardGridSection: function getStandardGridSection(data, cols, meta, pagingContent, hasMorePages) {
        var sortProperties = this.getSortObject();
        var multipleSelectionProperties = this.getMultipleSelectionObject();

        // no data section
        var showNoData = this.shouldShowNoDataSection(data);
        var noDataSection = this.getNoDataSection();

        return React.createElement('div', { className: 'griddle-body' }, React.createElement(GridTable, { useGriddleStyles: this.props.useGriddleStyles,
            noDataSection: noDataSection,
            showNoData: showNoData,
            columnSettings: this.columnSettings,
            rowSettings: this.rowSettings,
            sortSettings: sortProperties,
            multipleSelectionSettings: multipleSelectionProperties,
            filterByColumn: this.filterByColumn,
            isSubGriddle: this.props.isSubGriddle,
            useGriddleIcons: this.props.useGriddleIcons,
            useFixedLayout: this.props.useFixedLayout,
            showPager: this.props.showPager,
            pagingContent: pagingContent,
            data: data,
            className: this.props.tableClassName,
            enableInfiniteScroll: this.isInfiniteScrollEnabled(),
            nextPage: this.nextPage,
            showTableHeading: this.props.showTableHeading,
            useFixedHeader: this.props.useFixedHeader,
            parentRowCollapsedClassName: this.props.parentRowCollapsedClassName,
            parentRowExpandedClassName: this.props.parentRowExpandedClassName,
            parentRowCollapsedComponent: this.props.parentRowCollapsedComponent,
            parentRowExpandedComponent: this.props.parentRowExpandedComponent,
            bodyHeight: this.props.bodyHeight,
            paddingHeight: this.props.paddingHeight,
            rowHeight: this.props.rowHeight,
            infiniteScrollLoadTreshold: this.props.infiniteScrollLoadTreshold,
            externalLoadingComponent: this.props.externalLoadingComponent,
            externalIsLoading: this.props.externalIsLoading,
            hasMorePages: hasMorePages,
            onRowClick: this.props.onRowClick,
            onRowMouseEnter: this.props.onRowMouseEnter,
            onRowMouseLeave: this.props.onRowMouseLeave,
            onRowWillMount: this.props.onRowWillMount,
            onRowWillUnmount: this.props.onRowWillUnmount }));
    },
    getContentSection: function getContentSection(data, cols, meta, pagingContent, hasMorePages, globalData) {
        if (this.shouldUseCustomGridComponent() && this.props.customGridComponent !== null) {
            return this.getCustomGridSection();
        } else if (this.shouldUseCustomRowComponent()) {
            return this.getCustomRowSection(data, cols, meta, pagingContent, globalData);
        } else {
            return this.getStandardGridSection(data, cols, meta, pagingContent, hasMorePages);
        }
    },
    getNoDataSection: function getNoDataSection() {
        if (this.props.customNoDataComponent != null) {
            return React.createElement('div', { className: this.props.noDataClassName }, React.createElement(this.props.customNoDataComponent, this.props.customNoDataComponentProps));
        }
        return React.createElement(GridNoData, { noDataMessage: this.props.noDataMessage });
    },
    shouldShowNoDataSection: function shouldShowNoDataSection(results) {
        if (this.props.allowEmptyGrid) {
            return false;
        }

        return this.props.useExternal === false && (typeof results === 'undefined' || results.length === 0) || this.props.useExternal === true && this.props.externalIsLoading === false && results.length === 0;
    },
    render: function render() {
        var that = this,
            results = this.getCurrentResults(); // Attempt to assign to the filtered results, if we have any.

        var headerTableClassName = this.props.tableClassName + " table-header";

        //figure out if we want to show the filter section
        var filter = this.getFilter();
        var settings = this.getSettings();

        //if we have neither filter or settings don't need to render this stuff
        var topSection = this.getTopSection(filter, settings);

        var keys = [];
        var cols = this.columnSettings.getColumns();
        //figure out which columns are displayed and show only those
        var data = this.getDataForRender(results, cols, true);

        var meta = this.columnSettings.getMetadataColumns();

        if (this.props.columnMetadata) {
            // Get column keys from column metadata
            forEach(this.props.columnMetadata, function (meta) {
                if (!(typeof meta.visible === 'boolean' && meta.visible === false)) {
                    keys.push(meta.columnName);
                }
            });
        } else {
            // Grab the column keys from the first results
            keys = deep.keys(omit(results[0], meta));
        }

        // sort keys by order
        keys = this.columnSettings.orderColumns(keys);

        // Grab the current and max page values.
        var currentPage = this.getCurrentPage();
        var maxPage = this.getCurrentMaxPage();

        // Determine if we need to enable infinite scrolling on the table.
        var hasMorePages = currentPage + 1 < maxPage;

        // Grab the paging content if it's to be displayed
        var pagingContent = this.getPagingSection(currentPage, maxPage);

        var resultContent = this.getContentSection(data, cols, meta, pagingContent, hasMorePages, this.props.globalData);

        var columnSelector = this.getColumnSelectorSection(keys, cols);

        var gridClassName = this.props.gridClassName.length > 0 ? "griddle " + this.props.gridClassName : "griddle";
        //add custom to the class name so we can style it differently
        gridClassName += this.shouldUseCustomRowComponent() ? " griddle-custom" : "";

        return React.createElement('div', { className: gridClassName }, topSection, columnSelector, React.createElement('div', { className: 'griddle-container', style: this.props.useGriddleStyles && !this.props.isSubGriddle ? { border: "1px solid #DDD" } : null }, resultContent));
    }
});

GridRowContainer.Griddle = module.exports = Griddle;


/***/ }),

/***/ "./node_modules/griddle-react/modules/rowProperties.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _uniqueId = __webpack_require__("./node_modules/lodash/uniqueId.js");

var RowProperties = (function () {
  function RowProperties() {
    var rowMetadata = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var rowComponent = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    var isCustom = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

    _classCallCheck(this, RowProperties);

    this.rowMetadata = rowMetadata;
    this.rowComponent = rowComponent;
    this.isCustom = isCustom;
    // assign unique Id to each griddle instance
  }

  _createClass(RowProperties, [{
    key: 'getRowKey',
    value: function getRowKey(row, key) {
      var uniqueId;

      if (this.hasRowMetadataKey()) {
        uniqueId = row[this.rowMetadata.key];
      } else {
        uniqueId = _uniqueId("grid_row");
      }

      //todo: add error handling

      return uniqueId;
    }
  }, {
    key: 'hasRowMetadataKey',
    value: function hasRowMetadataKey() {
      return this.hasRowMetadata() && this.rowMetadata.key !== null && this.rowMetadata.key !== undefined;
    }
  }, {
    key: 'getBodyRowMetadataClass',
    value: function getBodyRowMetadataClass(rowData) {
      if (this.hasRowMetadata() && this.rowMetadata.bodyCssClassName !== null && this.rowMetadata.bodyCssClassName !== undefined) {
        if (typeof this.rowMetadata.bodyCssClassName === 'function') {
          return this.rowMetadata.bodyCssClassName(rowData);
        } else {
          return this.rowMetadata.bodyCssClassName;
        }
      }
      return null;
    }
  }, {
    key: 'getHeaderRowMetadataClass',
    value: function getHeaderRowMetadataClass() {
      return this.hasRowMetadata() && this.rowMetadata.headerCssClassName !== null && this.rowMetadata.headerCssClassName !== undefined ? this.rowMetadata.headerCssClassName : null;
    }
  }, {
    key: 'hasRowMetadata',
    value: function hasRowMetadata() {
      return this.rowMetadata !== null;
    }
  }]);

  return RowProperties;
})();

module.exports = RowProperties;


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js"),
    root = __webpack_require__("./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__("./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__("./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__("./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__("./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__("./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__("./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__("./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__("./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__("./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__("./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js"),
    root = __webpack_require__("./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__("./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__("./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__("./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__("./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__("./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js"),
    root = __webpack_require__("./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js"),
    root = __webpack_require__("./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__("./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__("./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__("./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__("./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__("./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__("./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__("./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__("./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js"),
    root = __webpack_require__("./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__("./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__("./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__("./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__("./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__("./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__("./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__("./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__("./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__("./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__("./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__("./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__("./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__("./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__("./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__("./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__("./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__("./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__("./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__("./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__("./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__("./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__("./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__("./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__("./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__("./node_modules/lodash/isSet.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js"),
    keysIn = __webpack_require__("./node_modules/lodash/keysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseDifference.js":
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__("./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__("./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__("./node_modules/lodash/_arrayIncludesWith.js"),
    arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js"),
    baseUnary = __webpack_require__("./node_modules/lodash/_baseUnary.js"),
    cacheHas = __webpack_require__("./node_modules/lodash/_cacheHas.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee == null ? value : iteratee(value);

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__("./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__("./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseFilter.js":
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__("./node_modules/lodash/_baseEach.js");

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__("./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__("./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__("./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__("./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__("./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__("./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__("./node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__("./node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__("./node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseIntersection.js":
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__("./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__("./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__("./node_modules/lodash/_arrayIncludesWith.js"),
    arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js"),
    baseUnary = __webpack_require__("./node_modules/lodash/_baseUnary.js"),
    cacheHas = __webpack_require__("./node_modules/lodash/_cacheHas.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseIntersection;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__("./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__("./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__("./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__("./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__("./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__("./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__("./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__("./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__("./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__("./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__("./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__("./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__("./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__("./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__("./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__("./node_modules/lodash/identity.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    property = __webpack_require__("./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__("./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__("./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__("./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__("./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__("./node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__("./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__("./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__("./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__("./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__("./node_modules/lodash/get.js"),
    hasIn = __webpack_require__("./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__("./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__("./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__("./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__("./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseOrderBy.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js"),
    baseGet = __webpack_require__("./node_modules/lodash/_baseGet.js"),
    baseIteratee = __webpack_require__("./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__("./node_modules/lodash/_baseMap.js"),
    baseSortBy = __webpack_require__("./node_modules/lodash/_baseSortBy.js"),
    baseUnary = __webpack_require__("./node_modules/lodash/_baseUnary.js"),
    compareMultiple = __webpack_require__("./node_modules/lodash/_compareMultiple.js"),
    identity = __webpack_require__("./node_modules/lodash/identity.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js");

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ "./node_modules/lodash/_basePick.js":
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__("./node_modules/lodash/_basePickBy.js"),
    hasIn = __webpack_require__("./node_modules/lodash/hasIn.js");

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),

/***/ "./node_modules/lodash/_basePickBy.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("./node_modules/lodash/_baseGet.js"),
    baseSet = __webpack_require__("./node_modules/lodash/_baseSet.js"),
    castPath = __webpack_require__("./node_modules/lodash/_castPath.js");

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__("./node_modules/lodash/identity.js"),
    overRest = __webpack_require__("./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__("./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__("./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__("./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__("./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__("./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__("./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__("./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_baseSome.js":
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__("./node_modules/lodash/_baseEach.js");

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  baseEach(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

module.exports = baseSome;


/***/ }),

/***/ "./node_modules/lodash/_baseSortBy.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToPairs.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js");

/**
 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
 * of key-value pairs for `object` corresponding to the property names of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the key-value pairs.
 */
function baseToPairs(object, props) {
  return arrayMap(props, function(key) {
    return [key, object[key]];
  });
}

module.exports = baseToPairs;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__("./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseUnset.js":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("./node_modules/lodash/_castPath.js"),
    last = __webpack_require__("./node_modules/lodash/last.js"),
    parent = __webpack_require__("./node_modules/lodash/_parent.js"),
    toKey = __webpack_require__("./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ "./node_modules/lodash/_baseValues.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js");

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ "./node_modules/lodash/_baseZipObject.js":
/***/ (function(module, exports) {

/**
 * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
 *
 * @private
 * @param {Array} props The property identifiers.
 * @param {Array} values The property values.
 * @param {Function} assignFunc The function to assign values.
 * @returns {Object} Returns the new object.
 */
function baseZipObject(props, values, assignFunc) {
  var index = -1,
      length = props.length,
      valsLength = values.length,
      result = {};

  while (++index < length) {
    var value = index < valsLength ? values[index] : undefined;
    assignFunc(result, props[index], value);
  }
  return result;
}

module.exports = baseZipObject;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castArrayLikeObject.js":
/***/ (function(module, exports, __webpack_require__) {

var isArrayLikeObject = __webpack_require__("./node_modules/lodash/isArrayLikeObject.js");

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject(value) ? value : [];
}

module.exports = castArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/_castFunction.js":
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__("./node_modules/lodash/identity.js");

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__("./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__("./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__("./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__("./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_compareAscending.js":
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ "./node_modules/lodash/_compareMultiple.js":
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__("./node_modules/lodash/_compareAscending.js");

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__("./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__("./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__("./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__("./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__("./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_createFind.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__("./node_modules/lodash/_baseIteratee.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ "./node_modules/lodash/_createToPairs.js":
/***/ (function(module, exports, __webpack_require__) {

var baseToPairs = __webpack_require__("./node_modules/lodash/_baseToPairs.js"),
    getTag = __webpack_require__("./node_modules/lodash/_getTag.js"),
    mapToArray = __webpack_require__("./node_modules/lodash/_mapToArray.js"),
    setToPairs = __webpack_require__("./node_modules/lodash/_setToPairs.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Creates a `_.toPairs` or `_.toPairsIn` function.
 *
 * @private
 * @param {Function} keysFunc The function to get the keys of a given object.
 * @returns {Function} Returns the new pairs function.
 */
function createToPairs(keysFunc) {
  return function(object) {
    var tag = getTag(object);
    if (tag == mapTag) {
      return mapToArray(object);
    }
    if (tag == setTag) {
      return setToPairs(object);
    }
    return baseToPairs(object, keysFunc(object));
  };
}

module.exports = createToPairs;


/***/ }),

/***/ "./node_modules/lodash/_customOmitClone.js":
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__("./node_modules/lodash/isPlainObject.js");

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__("./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__("./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__("./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__("./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__("./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__("./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__("./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__("./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__("./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_flatRest.js":
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__("./node_modules/lodash/flatten.js"),
    overRest = __webpack_require__("./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__("./node_modules/lodash/_setToString.js");

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__("./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__("./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__("./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__("./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__("./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__("./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__("./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__("./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__("./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__("./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__("./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__("./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__("./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__("./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__("./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__("./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__("./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__("./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__("./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__("./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__("./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__("./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__("./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__("./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__("./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__("./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__("./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__("./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__("./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__("./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__("./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__("./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__("./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__("./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__("./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__("./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__("./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_parent.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("./node_modules/lodash/_baseGet.js"),
    baseSlice = __webpack_require__("./node_modules/lodash/_baseSlice.js");

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_setToPairs.js":
/***/ (function(module, exports) {

/**
 * Converts `set` to its value-value pairs.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the value-value pairs.
 */
function setToPairs(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = [value, value];
  });
  return result;
}

module.exports = setToPairs;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__("./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__("./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__("./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__("./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__("./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/assign.js":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("./node_modules/lodash/_assignValue.js"),
    copyObject = __webpack_require__("./node_modules/lodash/_copyObject.js"),
    createAssigner = __webpack_require__("./node_modules/lodash/_createAssigner.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    isPrototype = __webpack_require__("./node_modules/lodash/_isPrototype.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/defaults.js":
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__("./node_modules/lodash/_baseRest.js"),
    eq = __webpack_require__("./node_modules/lodash/eq.js"),
    isIterateeCall = __webpack_require__("./node_modules/lodash/_isIterateeCall.js"),
    keysIn = __webpack_require__("./node_modules/lodash/keysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/lodash/difference.js":
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__("./node_modules/lodash/_baseDifference.js"),
    baseFlatten = __webpack_require__("./node_modules/lodash/_baseFlatten.js"),
    baseRest = __webpack_require__("./node_modules/lodash/_baseRest.js"),
    isArrayLikeObject = __webpack_require__("./node_modules/lodash/isArrayLikeObject.js");

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `_.pullAll`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.without, _.xor
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
var difference = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true))
    : [];
});

module.exports = difference;


/***/ }),

/***/ "./node_modules/lodash/drop.js":
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__("./node_modules/lodash/_baseSlice.js"),
    toInteger = __webpack_require__("./node_modules/lodash/toInteger.js");

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.drop([1, 2, 3]);
 * // => [2, 3]
 *
 * _.drop([1, 2, 3], 2);
 * // => [3]
 *
 * _.drop([1, 2, 3], 5);
 * // => []
 *
 * _.drop([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
function drop(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  return baseSlice(array, n < 0 ? 0 : n, length);
}

module.exports = drop;


/***/ }),

/***/ "./node_modules/lodash/dropRight.js":
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__("./node_modules/lodash/_baseSlice.js"),
    toInteger = __webpack_require__("./node_modules/lodash/toInteger.js");

/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.dropRight([1, 2, 3]);
 * // => [1, 2]
 *
 * _.dropRight([1, 2, 3], 2);
 * // => [1]
 *
 * _.dropRight([1, 2, 3], 5);
 * // => []
 *
 * _.dropRight([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
function dropRight(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  n = length - n;
  return baseSlice(array, 0, n < 0 ? 0 : n);
}

module.exports = dropRight;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/filter.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__("./node_modules/lodash/_arrayFilter.js"),
    baseFilter = __webpack_require__("./node_modules/lodash/_baseFilter.js"),
    baseIteratee = __webpack_require__("./node_modules/lodash/_baseIteratee.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),

/***/ "./node_modules/lodash/find.js":
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__("./node_modules/lodash/_createFind.js"),
    findIndex = __webpack_require__("./node_modules/lodash/findIndex.js");

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ "./node_modules/lodash/findIndex.js":
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__("./node_modules/lodash/_baseFindIndex.js"),
    baseIteratee = __webpack_require__("./node_modules/lodash/_baseIteratee.js"),
    toInteger = __webpack_require__("./node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__("./node_modules/lodash/_baseFlatten.js");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "./node_modules/lodash/forEach.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__("./node_modules/lodash/_arrayEach.js"),
    baseEach = __webpack_require__("./node_modules/lodash/_baseEach.js"),
    castFunction = __webpack_require__("./node_modules/lodash/_castFunction.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),

/***/ "./node_modules/lodash/forOwn.js":
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__("./node_modules/lodash/_baseForOwn.js"),
    castFunction = __webpack_require__("./node_modules/lodash/_castFunction.js");

/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  return object && baseForOwn(object, castFunction(iteratee));
}

module.exports = forOwn;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__("./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__("./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/includes.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__("./node_modules/lodash/_baseIndexOf.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    isString = __webpack_require__("./node_modules/lodash/isString.js"),
    toInteger = __webpack_require__("./node_modules/lodash/toInteger.js"),
    values = __webpack_require__("./node_modules/lodash/values.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;


/***/ }),

/***/ "./node_modules/lodash/initial.js":
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__("./node_modules/lodash/_baseSlice.js");

/**
 * Gets all but the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.initial([1, 2, 3]);
 * // => [1, 2]
 */
function initial(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseSlice(array, 0, -1) : [];
}

module.exports = initial;


/***/ }),

/***/ "./node_modules/lodash/intersection.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js"),
    baseIntersection = __webpack_require__("./node_modules/lodash/_baseIntersection.js"),
    baseRest = __webpack_require__("./node_modules/lodash/_baseRest.js"),
    castArrayLikeObject = __webpack_require__("./node_modules/lodash/_castArrayLikeObject.js");

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = baseRest(function(arrays) {
  var mapped = arrayMap(arrays, castArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0])
    ? baseIntersection(mapped)
    : [];
});

module.exports = intersection;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__("./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__("./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__("./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isEmpty.js":
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__("./node_modules/lodash/_baseKeys.js"),
    getTag = __webpack_require__("./node_modules/lodash/_getTag.js"),
    isArguments = __webpack_require__("./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    isBuffer = __webpack_require__("./node_modules/lodash/isBuffer.js"),
    isPrototype = __webpack_require__("./node_modules/lodash/_isPrototype.js"),
    isTypedArray = __webpack_require__("./node_modules/lodash/isTypedArray.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__("./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__("./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__("./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isNull.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__("./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__("./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__("./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__("./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/isString.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__("./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__("./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__("./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__("./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/isUndefined.js":
/***/ (function(module, exports) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__("./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__("./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/last.js":
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ "./node_modules/lodash/map.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__("./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__("./node_modules/lodash/_baseMap.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js");

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__("./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/omit.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js"),
    baseClone = __webpack_require__("./node_modules/lodash/_baseClone.js"),
    baseUnset = __webpack_require__("./node_modules/lodash/_baseUnset.js"),
    castPath = __webpack_require__("./node_modules/lodash/_castPath.js"),
    copyObject = __webpack_require__("./node_modules/lodash/_copyObject.js"),
    customOmitClone = __webpack_require__("./node_modules/lodash/_customOmitClone.js"),
    flatRest = __webpack_require__("./node_modules/lodash/_flatRest.js"),
    getAllKeysIn = __webpack_require__("./node_modules/lodash/_getAllKeysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ "./node_modules/lodash/orderBy.js":
/***/ (function(module, exports, __webpack_require__) {

var baseOrderBy = __webpack_require__("./node_modules/lodash/_baseOrderBy.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js");

/**
 * This method is like `_.sortBy` except that it allows specifying the sort
 * orders of the iteratees to sort by. If `orders` is unspecified, all values
 * are sorted in ascending order. Otherwise, specify an order of "desc" for
 * descending or "asc" for ascending sort order of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @param {string[]} [orders] The sort orders of `iteratees`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 34 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 36 }
 * ];
 *
 * // Sort by `user` in ascending order and by `age` in descending order.
 * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 */
function orderBy(collection, iteratees, orders, guard) {
  if (collection == null) {
    return [];
  }
  if (!isArray(iteratees)) {
    iteratees = iteratees == null ? [] : [iteratees];
  }
  orders = guard ? undefined : orders;
  if (!isArray(orders)) {
    orders = orders == null ? [] : [orders];
  }
  return baseOrderBy(collection, iteratees, orders);
}

module.exports = orderBy;


/***/ }),

/***/ "./node_modules/lodash/pick.js":
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__("./node_modules/lodash/_basePick.js"),
    flatRest = __webpack_require__("./node_modules/lodash/_flatRest.js");

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__("./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__("./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__("./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__("./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/some.js":
/***/ (function(module, exports, __webpack_require__) {

var arraySome = __webpack_require__("./node_modules/lodash/_arraySome.js"),
    baseIteratee = __webpack_require__("./node_modules/lodash/_baseIteratee.js"),
    baseSome = __webpack_require__("./node_modules/lodash/_baseSome.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isIterateeCall = __webpack_require__("./node_modules/lodash/_isIterateeCall.js");

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = some;


/***/ }),

/***/ "./node_modules/lodash/sortBy.js":
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__("./node_modules/lodash/_baseFlatten.js"),
    baseOrderBy = __webpack_require__("./node_modules/lodash/_baseOrderBy.js"),
    baseRest = __webpack_require__("./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__("./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/take.js":
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__("./node_modules/lodash/_baseSlice.js"),
    toInteger = __webpack_require__("./node_modules/lodash/toInteger.js");

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.take([1, 2, 3]);
 * // => [1]
 *
 * _.take([1, 2, 3], 2);
 * // => [1, 2]
 *
 * _.take([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.take([1, 2, 3], 0);
 * // => []
 */
function take(array, n, guard) {
  if (!(array && array.length)) {
    return [];
  }
  n = (guard || n === undefined) ? 1 : toInteger(n);
  return baseSlice(array, 0, n < 0 ? 0 : n);
}

module.exports = take;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__("./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__("./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__("./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/lodash/toPairs.js":
/***/ (function(module, exports, __webpack_require__) {

var createToPairs = __webpack_require__("./node_modules/lodash/_createToPairs.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable string keyed-value pairs for `object`
 * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
 * entries are returned.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias entries
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the key-value pairs.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.toPairs(new Foo);
 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
 */
var toPairs = createToPairs(keys);

module.exports = toPairs;


/***/ }),

/***/ "./node_modules/lodash/toPath.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("./node_modules/lodash/_arrayMap.js"),
    copyArray = __webpack_require__("./node_modules/lodash/_copyArray.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__("./node_modules/lodash/isSymbol.js"),
    stringToPath = __webpack_require__("./node_modules/lodash/_stringToPath.js"),
    toKey = __webpack_require__("./node_modules/lodash/_toKey.js"),
    toString = __webpack_require__("./node_modules/lodash/toString.js");

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (isArray(value)) {
    return arrayMap(value, toKey);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
}

module.exports = toPath;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__("./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/uniqueId.js":
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__("./node_modules/lodash/toString.js");

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}

module.exports = uniqueId;


/***/ }),

/***/ "./node_modules/lodash/values.js":
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__("./node_modules/lodash/_baseValues.js"),
    keys = __webpack_require__("./node_modules/lodash/keys.js");

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ "./node_modules/lodash/without.js":
/***/ (function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__("./node_modules/lodash/_baseDifference.js"),
    baseRest = __webpack_require__("./node_modules/lodash/_baseRest.js"),
    isArrayLikeObject = __webpack_require__("./node_modules/lodash/isArrayLikeObject.js");

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

module.exports = without;


/***/ }),

/***/ "./node_modules/lodash/zipObject.js":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("./node_modules/lodash/_assignValue.js"),
    baseZipObject = __webpack_require__("./node_modules/lodash/_baseZipObject.js");

/**
 * This method is like `_.fromPairs` except that it accepts two arrays,
 * one of property identifiers and one of corresponding values.
 *
 * @static
 * @memberOf _
 * @since 0.4.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.zipObject(['a', 'b'], [1, 2]);
 * // => { 'a': 1, 'b': 2 }
 */
function zipObject(props, values) {
  return baseZipObject(props || [], values || [], assignValue);
}

module.exports = zipObject;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/react-selectable/dist/react-selectable.js":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t(__webpack_require__(0),__webpack_require__(6));else if("function"==typeof define&&define.amd)define(["react","react-dom"],t);else{var n="object"==typeof exports?t(require("react"),require("react-dom")):t(e.React,e.ReactDOM);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=12)}([function(e,t,n){"use strict";function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(s===setTimeout)return setTimeout(e,0);if((s===r||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function u(e){if(p===clearTimeout)return clearTimeout(e);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function a(){b&&y&&(b=!1,y.length?h=y.concat(h):v=-1,h.length&&c())}function c(){if(!b){var e=i(a);b=!0;for(var t=h.length;t;){for(y=h,h=[];++v<t;)y&&y[v].run();v=-1,t=h.length}y=null,b=!1,u(e)}}function f(e,t){this.fun=e,this.array=t}function l(){}var s,p,d=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:r}catch(e){s=r}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(e){p=o}}();var y,h=[],b=!1,v=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new f(e,t)),1!==h.length||b||i(c)},f.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";(function(t){function n(e,t,n,o,i,u,a,c){if(r(t),!e){var f;if(void 0===t)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,i,u,a,c],s=0;f=new Error(t.replace(/%s/g,function(){return l[s++]})),f.name="Invariant Violation"}throw f.framesToPop=1,f}}var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(0))},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if("function"!=typeof t)throw new Error("isNodeIn second parameter must be a function");for(var n=e;n;){if(t(n))return!0;n=n.parentNode}return!1};t.default=r},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";(function(t){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};if("production"!==t.env.NODE_ENV){var o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,i=function(e){return"object"===(void 0===e?"undefined":r(e))&&null!==e&&e.$$typeof===o};e.exports=n(14)(i,!0)}else e.exports=n(17)()}).call(t,n(0))},function(e,t,n){"use strict";(function(t){var r=n(1),o=r;if("production"!==t.env.NODE_ENV){var i=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(e){}};o=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];i.apply(void 0,[t].concat(r))}}}e.exports=o}).call(t,n(0))},function(e,t){(function(t){e.exports=t}).call(t,{})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=function(e,t){return(0,o.default)(e,function(e){return e===t})};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.getBoundingClientRect();return{top:t.top+document.body.scrollTop,left:t.left+document.body.scrollLeft,offsetWidth:e.offsetWidth,offsetHeight:e.offsetHeight}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.nodeInRoot=t.isNodeIn=t.createSelectable=t.SelectableGroup=void 0;var o=n(13),i=r(o),u=n(22),a=r(u),c=n(4),f=r(c),l=n(10),s=r(l);t.SelectableGroup=i.default,t.createSelectable=a.default,t.isNodeIn=f.default,t.nodeInRoot=s.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),f=r(c),l=n(6),s=n(7),p=r(s),d=n(18),y=r(d),h=n(10),b=r(h),v=n(4),m=r(v),g=n(11),_=r(g),w=n(19),x=r(w),O=n(20),S=r(O),j=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isBoxSelecting:!1,boxWidth:0,boxHeight:0},n._mouseDownData=null,n._rect=null,n._registry=[],n._openSelector=n._openSelector.bind(n),n._mouseDown=n._mouseDown.bind(n),n._mouseUp=n._mouseUp.bind(n),n._selectElements=n._selectElements.bind(n),n._registerSelectable=n._registerSelectable.bind(n),n._unregisterSelectable=n._unregisterSelectable.bind(n),n._throttledSelect=(0,S.default)(n._selectElements,50),n}return u(t,e),a(t,[{key:"getChildContext",value:function(){return{selectable:{register:this._registerSelectable,unregister:this._unregisterSelectable}}}},{key:"componentDidMount",value:function(){this._applyMousedown(this.props.enabled),this._rect=this._getInitialCoordinates()}},{key:"componentWillUnmount",value:function(){this._applyMousedown(!1)}},{key:"componentWillReceiveProps",value:function(e){e.enabled!==this.props.enabled&&this._applyMousedown(e.enabled)}},{key:"_registerSelectable",value:function(e,t){this._registry.push({key:e,domNode:t})}},{key:"_unregisterSelectable",value:function(e){this._registry=this._registry.filter(function(t){return t.key!==e})}},{key:"_applyMousedown",value:function(e){var t=e?"addEventListener":"removeEventListener";(0,l.findDOMNode)(this)[t]("mousedown",this._mouseDown)}},{key:"_openSelector",value:function(e){var t=Math.abs(this._mouseDownData.initialW-e.pageX+this._rect.x),n=Math.abs(this._mouseDownData.initialH-e.pageY+this._rect.y);this.setState({isBoxSelecting:!0,boxWidth:t,boxHeight:n,boxLeft:Math.min(e.pageX-this._rect.x,this._mouseDownData.initialW),boxTop:Math.min(e.pageY-this._rect.y,this._mouseDownData.initialH)}),this._throttledSelect(e)}},{key:"_getInitialCoordinates",value:function(){if(this.props.fixedPosition)return{x:0,y:0};var e=window.getComputedStyle(document.body),t=e.getPropertyValue("margin-top"),n=e.getPropertyValue("margin-left"),r=parseInt(n.slice(0,n.length-2),10),o=parseInt(t.slice(0,t.length-2),10),i=document.body.getBoundingClientRect(),u=(0,l.findDOMNode)(this).getBoundingClientRect();return{x:Math.round(u.left-i.left+r),y:Math.round(u.top-i.top+o)}}},{key:"_mouseDown",value:function(e){var t=this.props,n=t.onBeginSelection,r=t.preventDefault;if(!(0,m.default)(e.target,function(e){return!!e.draggable})&&("function"!=typeof n||!1!==n(e))){var o=(0,l.findDOMNode)(this),i=void 0;window.addEventListener("mouseup",this._mouseUp),3!==e.which&&2!==e.button&&((0,b.default)(e.target,o)||(i=(0,_.default)(o),(0,x.default)({top:i.top,left:i.left,bottom:i.offsetHeight,right:i.offsetWidth},{top:e.pageY-this._rect.y,left:e.pageX-this._rect.x,offsetWidth:0,offsetHeight:0})))&&(this._rect=this._getInitialCoordinates(),this._mouseDownData={boxLeft:e.pageX-this._rect.x,boxTop:e.pageY-this._rect.y,initialW:e.pageX-this._rect.x,initialH:e.pageY-this._rect.y},r&&e.preventDefault(),window.addEventListener("mousemove",this._openSelector))}}},{key:"_mouseUp",value:function(e){var t=this.props.onNonItemClick,n=this.state.isBoxSelecting;e.stopPropagation(),window.removeEventListener("mousemove",this._openSelector),window.removeEventListener("mouseup",this._mouseUp),this._mouseDownData&&(t&&!n&&(this._registry.some(function(t){var n=t.domNode;return(0,b.default)(e.target,n)})||t(e)),this._selectElements(e,!0),this._mouseDownData=null,this.setState({isBoxSelecting:!1,boxWidth:0,boxHeight:0}))}},{key:"_selectElements",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props,r=n.tolerance,o=n.onSelection,i=n.onEndSelection,u=[],a=(0,l.findDOMNode)(this.refs.selectbox);a&&(this._registry.forEach(function(e){e.domNode&&(0,x.default)(a,e.domNode,r)&&!u.includes(e.key)&&u.push(e.key)}),t?"function"==typeof i&&i(u,e):"function"==typeof o&&o(u,e))}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.enabled,r=e.fixedPosition,o=e.className,i=e.selectingClassName,u=this.state,a=u.isBoxSelecting,c=u.boxLeft,l=u.boxTop,s=u.boxWidth,p=u.boxHeight,d=this.props.component;if(!n)return f.default.createElement(d,{className:o},t);var h={left:c,top:l,width:s,height:p,zIndex:9e3,position:r?"fixed":"absolute",cursor:"default"},b={backgroundColor:"transparent",border:"1px dashed #999",width:"100%",height:"100%",float:"left"},v={position:"relative",overflow:"visible"};return f.default.createElement(d,{className:(0,y.default)(o,a?i:null),style:v},a?f.default.createElement("div",{style:h,ref:"selectbox"},f.default.createElement("span",{style:b})):null,t)}}]),t}(c.Component);j.propTypes={children:p.default.node,onBeginSelection:p.default.func,onEndSelection:p.default.func,onSelection:p.default.func,component:p.default.node,tolerance:p.default.number,fixedPosition:p.default.bool,preventDefault:p.default.bool,onNonItemClick:p.default.func,enabled:p.default.bool,className:p.default.string,selectingClassName:p.default.string},j.defaultProps={component:"div",tolerance:0,fixedPosition:!1,preventDefault:!0,enabled:!0},j.childContextTypes={selectable:p.default.object},t.default=j},function(e,t,n){"use strict";(function(t){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(1),i=n(2),u=n(8),a=n(15),c=n(3),f=n(16);e.exports=function(e,n){function l(e){var t=e&&(N&&e[N]||e[P]);if("function"==typeof t)return t}function s(e,t){return e===t?0!==e||1/e==1/t:e!==e&&t!==t}function p(e){this.message=e,this.stack=""}function d(e){function r(r,f,l,s,d,y,h){if(s=s||k,y=y||l,h!==c)if(n)i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var b=s+":"+l;!o[b]&&a<3&&(u(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",y,s),o[b]=!0,a++)}return null==f[l]?r?new p(null===f[l]?"The "+d+" `"+y+"` is marked as required in `"+s+"`, but its value is `null`.":"The "+d+" `"+y+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(f,l,s,d,y)}if("production"!==t.env.NODE_ENV)var o={},a=0;var f=r.bind(null,!1);return f.isRequired=r.bind(null,!0),f}function y(e){function t(t,n,r,o,i,u){var a=t[n];if(S(a)!==e)return new p("Invalid "+o+" `"+i+"` of type `"+j(a)+"` supplied to `"+r+"`, expected `"+e+"`.");return null}return d(t)}function h(e){function t(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){return new p("Invalid "+o+" `"+i+"` of type `"+S(u)+"` supplied to `"+r+"`, expected an array.")}for(var a=0;a<u.length;a++){var f=e(u,a,r,o,i+"["+a+"]",c);if(f instanceof Error)return f}return null}return d(t)}function b(e){function t(t,n,r,o,i){if(!(t[n]instanceof e)){var u=e.name||k;return new p("Invalid "+o+" `"+i+"` of type `"+T(t[n])+"` supplied to `"+r+"`, expected instance of `"+u+"`.")}return null}return d(t)}function v(e){function n(t,n,r,o,i){for(var u=t[n],a=0;a<e.length;a++)if(s(u,e[a]))return null;return new p("Invalid "+o+" `"+i+"` of value `"+u+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}return Array.isArray(e)?d(n):("production"!==t.env.NODE_ENV&&u(!1,"Invalid argument supplied to oneOf, expected an instance of array."),o.thatReturnsNull)}function m(e){function t(t,n,r,o,i){if("function"!=typeof e)return new p("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],a=S(u);if("object"!==a)return new p("Invalid "+o+" `"+i+"` of type `"+a+"` supplied to `"+r+"`, expected an object.");for(var f in u)if(u.hasOwnProperty(f)){var l=e(u,f,r,o,i+"."+f,c);if(l instanceof Error)return l}return null}return d(t)}function g(e){function n(t,n,r,o,i){for(var u=0;u<e.length;u++){if(null==(0,e[u])(t,n,r,o,i,c))return null}return new p("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&u(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),o.thatReturnsNull;for(var r=0;r<e.length;r++){var i=e[r];if("function"!=typeof i)return u(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",E(i),r),o.thatReturnsNull}return d(n)}function _(e){function t(t,n,r,o,i){var u=t[n],a=S(u);if("object"!==a)return new p("Invalid "+o+" `"+i+"` of type `"+a+"` supplied to `"+r+"`, expected `object`.");for(var f in e){var l=e[f];if(l){var s=l(u,f,r,o,i+"."+f,c);if(s)return s}}return null}return d(t)}function w(e){function t(t,n,r,o,i){var u=t[n],f=S(u);if("object"!==f)return new p("Invalid "+o+" `"+i+"` of type `"+f+"` supplied to `"+r+"`, expected `object`.");var l=a({},t[n],e);for(var s in l){var d=e[s];if(!d)return new p("Invalid "+o+" `"+i+"` key `"+s+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=d(u,s,r,o,i+"."+s,c);if(y)return y}return null}return d(t)}function x(t){switch(void 0===t?"undefined":r(t)){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(x);if(null===t||e(t))return!0;var n=l(t);if(!n)return!1;var o,i=n.call(t);if(n!==t.entries){for(;!(o=i.next()).done;)if(!x(o.value))return!1}else for(;!(o=i.next()).done;){var u=o.value;if(u&&!x(u[1]))return!1}return!0;default:return!1}}function O(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function S(e){var t=void 0===e?"undefined":r(e);return Array.isArray(e)?"array":e instanceof RegExp?"object":O(t,e)?"symbol":t}function j(e){if(void 0===e||null===e)return""+e;var t=S(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function E(e){var t=j(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function T(e){return e.constructor&&e.constructor.name?e.constructor.name:k}var N="function"==typeof Symbol&&Symbol.iterator,P="@@iterator",k="<<anonymous>>",D={array:y("array"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:function(){return d(o.thatReturnsNull)}(),arrayOf:h,element:function(){function t(t,n,r,o,i){var u=t[n];if(!e(u)){return new p("Invalid "+o+" `"+i+"` of type `"+S(u)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return d(t)}(),instanceOf:b,node:function(){function e(e,t,n,r,o){return x(e[t])?null:new p("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return d(e)}(),objectOf:m,oneOf:v,oneOfType:g,shape:_,exact:w};return p.prototype=Error.prototype,D.checkPropTypes=f,D.PropTypes=D,D}}).call(t,n(0))},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,c=r(e),f=1;f<arguments.length;f++){n=Object(arguments[f]);for(var l in n)i.call(n,l)&&(c[l]=n[l]);if(o){a=o(n);for(var s=0;s<a.length;s++)u.call(n,a[s])&&(c[a[s]]=n[a[s]])}}return c}},function(e,t,n){"use strict";(function(t){function r(e,n,r,f,l){if("production"!==t.env.NODE_ENV)for(var s in e)if(e.hasOwnProperty(s)){var p;try{i("function"==typeof e[s],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",f||"React class",r,s,o(e[s])),p=e[s](n,s,f,r,null,a)}catch(e){p=e}if(u(!p||p instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",f||"React class",r,s,void 0===p?"undefined":o(p)),p instanceof Error&&!(p.message in c)){c[p.message]=!0;var d=l?l():"";u(!1,"Failed %s type: %s%s",r,p.message,null!=d?d:"")}}}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};if("production"!==t.env.NODE_ENV)var i=n(2),u=n(8),a=n(3),c={};e.exports=r}).call(t,n(0))},function(e,t,n){"use strict";var r=n(1),o=n(2),i=n(3);e.exports=function(){function e(e,t,n,r,u,a){a!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";var r,o,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(){function u(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=void 0===n?"undefined":i(n);if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=u.apply(null,n);o&&e.push(o)}else if("object"===r)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}var a={}.hasOwnProperty;void 0!==e&&e.exports?(u.default=u,e.exports=u):"object"===i(n(9))&&n(9)?(r=[],void 0!==(o=function(){return u}.apply(t,r))&&(e.exports=o)):window.classNames=u}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),o=function(e){return e&&e.__esModule?e:{default:e}}(r),i=function(e,t,n,r,o,i,u,a,c){return!(e+i-c<n||e+c>n+a||t+o-c<r||t+c>r+u)};t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=e instanceof HTMLElement?(0,o.default)(e):e,u=t instanceof HTMLElement?(0,o.default)(t):t;return i(r.top,r.left,u.top,u.left,r.offsetWidth,r.offsetHeight,u.offsetWidth,u.offsetHeight,n)}},function(e,t,n){"use strict";(function(t){function n(e,t,n){function r(t){var n=h,r=b;return h=b=void 0,w=t,m=e.apply(r,n)}function i(e){return w=e,g=setTimeout(l,t),j?r(e):m}function u(e){var n=e-_,r=e-w,o=t-n;return E?O(o,v-r):o}function c(e){var n=e-_,r=e-w;return void 0===_||n>=t||n<0||E&&r>=v}function l(){var e=S();if(c(e))return s(e);g=setTimeout(l,u(e))}function s(e){return g=void 0,T&&h?r(e):(h=b=void 0,m)}function p(){void 0!==g&&clearTimeout(g),w=0,h=_=b=g=void 0}function d(){return void 0===g?m:s(S())}function y(){var e=S(),n=c(e);if(h=arguments,b=this,_=e,n){if(void 0===g)return i(_);if(E)return g=setTimeout(l,t),r(_)}return void 0===g&&(g=setTimeout(l,t)),m}var h,b,v,m,g,_,w=0,j=!1,E=!1,T=!0;if("function"!=typeof e)throw new TypeError(f);return t=a(t)||0,o(n)&&(j=!!n.leading,E="maxWait"in n,v=E?x(a(n.maxWait)||0,t):v,T="trailing"in n?!!n.trailing:T),y.cancel=p,y.flush=d,y}function r(e,t,r){var i=!0,u=!0;if("function"!=typeof e)throw new TypeError(f);return o(r)&&(i="leading"in r?!!r.leading:i,u="trailing"in r?!!r.trailing:u),n(e,t,{leading:i,maxWait:t,trailing:u})}function o(e){var t=void 0===e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==(void 0===e?"undefined":c(e))}function u(e){return"symbol"==(void 0===e?"undefined":c(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(u(e))return l;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var n=y.test(e);return n||h.test(e)?b(e.slice(2),n?2:8):d.test(e)?l:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",l=NaN,s="[object Symbol]",p=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,h=/^0o[0-7]+$/i,b=parseInt,v="object"==(void 0===t?"undefined":c(t))&&t&&t.Object===Object&&t,m="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,g=v||m||Function("return this")(),_=Object.prototype,w=_.toString,x=Math.max,O=Math.min,S=function(){return g.Date.now()};e.exports=r}).call(t,n(21))},function(e,t,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":o(window))&&(r=window)}e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(5),f=r(c),l=n(6),s=n(7),p=r(s),d=function(e){var t=function(t){function n(){return o(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,t),a(n,[{key:"componentDidMount",value:function(){this.context.selectable.register(this.props.selectableKey,(0,l.findDOMNode)(this))}},{key:"componentWillUnmount",value:function(){this.context.selectable.unregister(this.props.selectableKey)}},{key:"render",value:function(){return f.default.createElement("div",{id:"selectableItem-"+this.props.selectableKey},f.default.createElement(e,this.props,this.props.children))}}]),n}(f.default.Component);return t.contextTypes={selectable:p.default.object},t.propTypes={children:p.default.node,selectableKey:p.default.any.isRequired},t};t.default=d}])});

/***/ }),

/***/ "./node_modules/redux-form/lib/structure/plain/getIn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toPath2 = __webpack_require__("./node_modules/lodash/toPath.js");

var _toPath3 = _interopRequireDefault(_toPath2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getIn = function getIn(state, field) {
  if (!state) {
    return state;
  }

  var path = (0, _toPath3.default)(field);
  var length = path.length;
  if (!length) {
    return undefined;
  }

  var result = state;
  for (var i = 0; i < length && result; ++i) {
    result = result[path[i]];
  }

  return result;
};

exports.default = getIn;

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = PropTypes;

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = ReactApollo;

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = InsertMediaModal;

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

module.exports = FormBuilderModal;

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = DataFormat;

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = DeepFreezeStrict;

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

module.exports = Search;

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = qs;

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = Badge;

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports = FileStatusIcon;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = i18n;

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = GraphQLTag;

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

module.exports = ReactDND;

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = Reactstrap;

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = ToastsActions;

/***/ }),

/***/ 24:
/***/ (function(module, exports) {

module.exports = Backend;

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = Config;

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = FormBuilderLoader;

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports = NodeUrl;

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = ReduxForm;

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = getFormState;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = Injector;

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = BackButton;

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = Breadcrumb;

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = Button;

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = FieldHolder;

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = FileSchemaModalHandler;

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

module.exports = FormAlert;

/***/ }),

/***/ 37:
/***/ (function(module, exports) {

module.exports = ReactDNDHtml5Backend;

/***/ }),

/***/ 38:
/***/ (function(module, exports) {

module.exports = ReactRouteRegister;

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

module.exports = ReactRouterDom;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

module.exports = SearchToggle;

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

module.exports = Toolbar;

/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports = TreeDropdownField;

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports = UnsavedFormsActions;

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = reduxFieldReducer;

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = schemaFieldValues;

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = withDragDropContext;

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = Redux;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = ReactDom;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = SchemaActions;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports = classnames;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map