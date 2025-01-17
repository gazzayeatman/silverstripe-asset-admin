/* global jest, describe, it, expect, beforeEach, Event */

// mock sub-components, as they could rely on a Redux store context and not necessary for unit test
jest.mock('components/FormAlert/FormAlert');
jest.mock('components/AssetDropzone/AssetDropzone');
jest.mock('components/BulkActions/BulkActions');
jest.mock('components/GalleryToolbar/GalleryToolbar');
jest.mock('../../MoveModal/MoveModal');
// mock jquery, as leaving it causes more problems than it solves
jest.mock('jquery', () => {
  const jqueryMock = {
    find: () => jqueryMock,
    change: () => jqueryMock,
    val: () => jqueryMock,
    trigger: () => null,
    chosen: () => null,
    on: () => null,
    off: () => null,
  };
  return () => jqueryMock;
});

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import { Component as Gallery } from '../Gallery';

describe('Gallery', () => {
  let props = null;

  beforeEach(() => {
    props = {
      actions: {
        gallery: {
          setLastSelected: () => {},
          selectFiles: () => {},
          deselectFiles: () => {},
          setPath: () => {},
          setLoading: () => {},
          onDelete: () => {},
          onPublish: () => {},
          onUnpublish: () => {},
          onPublishComplete: () => {},
          onUnpublishComplete: () => {},
        },
        queuedFiles: {
          addQueuedFile: () => null,
          failUpload: () => null,
          purgeUploadQueue: () => null,
          removeQueuedFile: () => null,
          succeedUpload: () => null,
        },
        mutate: {
          moveFiles: () => ({}),
          createFolder: () => ({}),
        },
        toasts: {
          display: jest.fn(),
          success: jest.fn(),
          error: jest.fn(),
        }
      },
      selectedFiles: [],
      highlightedFiles: [],
      combinedFiles: [],
      files: [],
      count: 0,
      folderId: 1,
      fileId: null,
      folder: {
        id: 1,
        title: 'container folder',
        parentId: null,
        canView: true,
        canEdit: true,
      },
      queuedFiles: {
        items: [],
      },
      sort: '',
      page: 2,
      onOpenFile: () => {},
      onOpenFolder: () => {},
      onSort: () => {},
      onSetPage: () => {},
      onViewChange: () => {},
      badges: [],
      sectionConfig: {},
      GalleryToolbar: () => null,
      sorters: [
        {
          field: 'title',
          direction: 'asc',
          label: 'title a-z',
        },
        {
          field: 'title',
          direction: 'desc',
          label: 'title z-a',
        },
        {
          field: 'lastEdited',
          direction: 'desc',
          label: 'newest',
        },
        {
          field: 'lastEdited',
          direction: 'asc',
          label: 'oldest',
        },
      ]
    };
  });

  describe('getSelection()', () => {
    let gallery = null;

    beforeEach(() => {
      props.files = [
        { id: 10, type: 'folder' },
        { id: 6, type: 'folder' },
        { id: 7 },
        { id: 4 },
        { id: 16 },
      ];
      gallery = ReactTestUtils.renderIntoDocument(<Gallery {...props} />);
    });

    it('should return just the truthy id if one is falsey', () => {
      let selection = gallery.getSelection(4, null);
      expect(selection).toEqual([4]);

      selection = gallery.getSelection(null, 7);
      expect(selection).toEqual([7]);

      selection = gallery.getSelection(null, null);
      expect(selection).toEqual([]);
    });

    it('should treat ids not found as falsey', () => {
      const selection = gallery.getSelection(4, 53);
      expect(selection).toEqual([4]);
    });

    it('should return the ids between two given ids in the list', () => {
      const selection = gallery.getSelection(7, 10);
      expect(selection).toEqual([10, 6, 7]);
    });

    it('should ignore ids not in the files list', () => {
      const selection = gallery.getSelection(7, 15);
      expect(selection).toEqual([7]);
    });

    it('should ignore folders if type is "select"', () => {
      props.type = 'select';
      gallery = ReactTestUtils.renderIntoDocument(<Gallery {...props} />);

      const selection = gallery.getSelection(10, 16, gallery.getSelectableFiles());
      expect(selection).toEqual([16]);
    });
  });

  describe('renderSearchAlert()', () => {
    let gallery = null;

    beforeEach(() => {
      gallery = ReactTestUtils.renderIntoDocument(<Gallery {...props} />);
    });

    it('should not show a message without filters', () => {
      const search = {};

      const message = gallery.getSearchMessage(search);

      expect(message).toBe('');
    });

    it('should show a message with filters', () => {
      const search = { currentFolderOnly: 1 };

      const message = gallery.getSearchMessage(search);

      expect(message).toContain('limited to');
    });

    it('should show a single message without conjoins with one item', () => {
      const search = { name: 'hi' };

      const message = gallery.getSearchMessage(search);

      expect(message).not.toContain(',');
      expect(message).not.toContain('and');
    });

    it('should show a message with "and" with two items', () => {
      const search = { name: 'hi', appCategory: 'IMAGE' };

      const message = gallery.getSearchMessage(search);

      expect(message).not.toContain(',');
      expect(message).toContain('and');
    });

    it('should show a message with "," and "and" with more than two items', () => {
      const search = { name: 'hi', appCategory: 'IMAGE', lastEditedFrom: '2016-03-17' };

      const message = gallery.getSearchMessage(search);

      expect(message).toContain(',');
      expect(message).toContain('and');
    });
  });

  describe('componentDidUpdate()', () => {
    let gallery = null;

    beforeEach(() => {
      props.files = [
        { id: 1 },
      ];
      gallery = ReactTestUtils.renderIntoDocument(<Gallery {...props} />);
      // these are called on componentDidMount()...
      props.actions.queuedFiles.purgeUploadQueue = jest.fn();
    });

    it('should not call purgeUploadQueue when receiving same files', () => {
      gallery.componentDidUpdate(Object.assign({}, props, {
        files: [
          { id: 1 },
        ],
      }));
      expect(props.actions.queuedFiles.purgeUploadQueue).not.toBeCalled();
    });

    it('should call purgeUploadQueue when changing folder', () => {
      gallery.componentDidUpdate(Object.assign({}, props, {
        folderId: 8,
        folder: {
          id: 8,
          title: 'subfolder',
          parentId: 1,
          canView: true,
          canEdit: true,
        },
      }));
      expect(props.actions.queuedFiles.purgeUploadQueue).toBeCalled();
    });
  });

  describe('handleSetPage', () => {
    it('should return the set page for callback', () => {
      props.onSetPage = jest.fn();
      const gallery = ReactTestUtils.renderIntoDocument(<Gallery {...props} />);

      gallery.handleSetPage(5);
      expect(props.onSetPage).toBeCalledWith(5);
    });
  });

  describe('renderBulkActions()', () => {
    beforeEach(() => {
      props.type = 'admin';
      props.selectedFiles = [15, 20];
      props.files = [
        { id: 15 },
        { id: 20 },
        { id: 45 },
      ];
    });

    it('should render bulk actions if there are selected files and admin type', () => {
      const gallery = ReactTestUtils.renderIntoDocument(<Gallery {...props} />);
      const bulkActions = gallery.renderBulkActions();

      expect(bulkActions).not.toBeNull();
    });

    it('should not render bulk actions if not admin type', () => {
      props.type = 'insert-media';
      const gallery = ReactTestUtils.renderIntoDocument(<Gallery {...props} />);
      const bulkActions = gallery.renderBulkActions();

      expect(bulkActions).toBeNull();
    });

    it('should not render bulk actions if no files were selected', () => {
      props.selectedFiles = [];
      const gallery = ReactTestUtils.renderIntoDocument(<Gallery {...props} />);
      const bulkActions = gallery.renderBulkActions();

      expect(bulkActions).toBeNull();
    });
  });

  describe('handleSuccessfulUpload()', () => {
    const file = {
      exists: true,
      category: 'image',
      filename: 'unclepaul.png',
      width: 10,
      height: 10,
      size: 123,
      xhr: { response: '[{"id":1}]' },
    };

    it('should not call an action to remove the file from the `queuedFiles` state', () => {
      props.actions.queuedFiles.removeQueuedFile = jest.fn();

      const gallery = ReactTestUtils.renderIntoDocument(<Gallery {...props} />);

      gallery.handleSuccessfulUpload(file);
      expect(props.actions.queuedFiles.removeQueuedFile).not.toBeCalled();
    });

    it('should not openFile if a file is open', () => {
      props.type = 'insert-media';
      props.fileId = 10;
      props.onOpenFile = jest.fn();

      const gallery = ReactTestUtils.renderIntoDocument(<Gallery {...props} />);

      gallery.handleSuccessfulUpload(file);
      expect(props.onOpenFile).not.toBeCalled();
    });

    it('should not openFile if items are still in the queue', () => {
      props.type = 'insert-media';
      props.queuedFiles.items.push({ _queuedAtTime: 35 });
      props.onOpenFile = jest.fn();

      const gallery = ReactTestUtils.renderIntoDocument(<Gallery {...props} />);

      gallery.handleSuccessfulUpload(file);
      expect(props.onOpenFile).not.toBeCalled();
    });
  });

  describe('handleSort()', () => {
    let gallery = null;

    beforeEach(() => {
      props.actions.queuedFiles.purgeUploadQueue = jest.fn();
      props.onSort = jest.fn();

      gallery = ReactTestUtils.renderIntoDocument(
        <Gallery {...props} />
      );
    });

    it('should purge the upload queue', () => {
      gallery.handleSort('title,asc');
      expect(props.actions.queuedFiles.purgeUploadQueue).toBeCalled();
      expect(props.onSort).toBeCalledWith('title,asc');
    });
  });

  describe('getBulkActionsComponent()', () => {
    let gallery = null;

    beforeEach(() => {
      props.bulkActions = true;

      gallery = ReactTestUtils.renderIntoDocument(
        <Gallery {...props} />
      );
    });

    it('should not return a BulkActionsComponent if there are no selected items', () => {
      expect(gallery.renderBulkActions()).toBe(null);
    });

    it(`should not return a BulkActionsComponent if there are items in the
        selectedFiles array that do not resolve to files.`, () => {
      props.selectedFiles = [1];
      gallery = ReactTestUtils.renderIntoDocument(
        <Gallery {...props} />
      );

      expect(gallery.renderBulkActions()).toBe(null);
    });

    it(`should return a BulkActionsComponent if there are items in the
        selectedFiles array that resolve to files.`, () => {
      props.files = [{ id: 1 }];
      props.selectedFiles = [1];
      gallery = ReactTestUtils.renderIntoDocument(
        <Gallery {...props} />
      );
      expect(gallery.renderBulkActions()).not.toBe(null);
    });
  });

  describe('itemIsSelected()', () => {
    let gallery = null;

    beforeEach(() => {
      props.selectedFiles = [1];

      gallery = ReactTestUtils.renderIntoDocument(
        <Gallery {...props} />
      );
    });

    it('should return true if the file is selected', () => {
      expect(gallery.itemIsSelected(1)).toBe(true);
    });

    it('should return false if the file is not selected', () => {
      expect(gallery.itemIsSelected(2)).toBe(false);
    });
  });

  describe('handleActivate()', () => {
    let gallery = null;

    beforeEach(() => {
      props.onOpenFolder = jest.fn();
      props.onOpenFile = jest.fn();
      gallery = ReactTestUtils.renderIntoDocument(
        <Gallery {...props} />
      );
    });

    it('should call onOpenFolder', () => {
      const folder = { id: 1 };
      const event = new Event('activate');

      gallery.handleOpenFolder(event, folder);
      expect(props.onOpenFolder).toBeCalledWith(1);
    });

    it('should call onOpenFile', () => {
      const file = { id: 1 };
      const event = new Event('activate');

      gallery.handleOpenFile(event, file);

      expect(props.onOpenFile).toBeCalledWith(1, file);
    });
  });

  describe('handleSelect()', () => {
    let gallery = null;
    const event = {};

    beforeEach(() => {
      props.files = [{ id: 2 }, { id: 3 }];
      props.actions.gallery.selectFiles = jest.fn();
      props.actions.gallery.deselectFiles = jest.fn();
      props.selectedFiles = [1];

      gallery = ReactTestUtils.renderIntoDocument(
        <Gallery {...props} />
      );
    });

    it('should set deselect the file is currently selected', () => {
      const item = { id: 1 };

      gallery.handleSelect(event, item);

      expect(props.actions.gallery.deselectFiles).toBeCalledWith([1]);
    });

    it('should set select the file is not currently selected', () => {
      const item = { id: 2 };

      gallery.handleSelect(event, item);

      expect(props.actions.gallery.selectFiles).toBeCalledWith([2]);
    });
  });

  describe('bulkActions', () => {
    let gallery = null;

    beforeEach(() => {
      props.onPublish = jest.fn((id) => Promise.resolve([{ id }]));
      props.onUnpublish = jest.fn((id) => Promise.resolve([{ id }]));
      props.onDelete = jest.fn((id) => Promise.resolve([id]));
      props.actions.gallery.setLoading = jest.fn();
      props.actions.gallery.deselectFiles = jest.fn();
      props.actions.confirmDeletion = { confirm: jest.fn() };
    });

    it('publishes a list of items if it was unpublished', () => {
      gallery = ReactTestUtils.renderIntoDocument(
        <Gallery {...props} />
      );
      return gallery.handleBulkPublish({}, [{ id: 5, published: false }])
        .then(() => {
          expect(props.actions.gallery.setLoading).toBeCalled();
          expect(props.actions.toasts.success).toBeCalled();
          expect(props.onPublish).toBeCalledWith([5]);
          expect(props.actions.gallery.deselectFiles).toBeCalled();
        });
    });

    it('unpublishes a list of items if it was published', () => {
      gallery = ReactTestUtils.renderIntoDocument(
        <Gallery {...props} />
      );
      return gallery.handleBulkUnpublish({}, [{ id: 5, published: true }])
        .then(() => {
          expect(props.actions.gallery.setLoading).toBeCalled();
          expect(props.actions.toasts.success).toBeCalled();
          expect(props.onUnpublish).toBeCalledWith([5]);
          expect(props.actions.gallery.deselectFiles).toBeCalled();
        });
    });

    it('does not unpublish an item if it was not published', () => {
      gallery = ReactTestUtils.renderIntoDocument(
        <Gallery {...props} />
      );
      return gallery.handleBulkUnpublish({}, [{ id: 5, published: false }])
        .then(() => {
          expect(props.actions.gallery.setLoading).not.toBeCalled();
          expect(props.actions.toasts.success).not.toBeCalled();
          expect(props.onUnpublish).not.toBeCalled();
          expect(props.actions.gallery.deselectFiles).toBeCalled();
        });
    });
  });

  describe('renderGalleryView()', () => {
    beforeEach(() => {
      props.type = 'admin';
      props.selectedFiles = [15];
      props.files = [
        { id: 15 },
        { id: 20, queuedId: 108 },
        { id: 45 },
      ];
    });

    it('should render selected files with different key', () => {
      const gallery = ReactTestUtils.renderIntoDocument(<Gallery {...props} />);
      const galleryView = gallery.renderGalleryView();

      expect(galleryView.props.files.map(({ key }) => key)).toEqual([
        'id15--selected',
        'queueId108',
        'id45'
      ]);
    });
  });
});
