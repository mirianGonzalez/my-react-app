import React, { useContext, useState } from 'react';
import { WonderItemContext } from '../contexts/WonderItem';
import ListItems from './ListItems';
import NewListItem from './NewListItem';

const ListDetails = ({ list }) => {
  const { dispatch } = useContext(WonderItemContext);

  const [newItemShown, showNewItemForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editView, showEditView] = useState(false);
  const [listNewName, setListNewName] = useState('');

  const handleSubmit = () => {
    if (listNewName.trim().length === 0) return;
    dispatch({
      type: 'RENAME_LIST',
      payload: {
        id: list.id,
        name: listNewName,
      },
    });
    showEditView(false);
  };

  const keyPressed = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      <div
        className={`list ${list.items.length === 0 ? 'empty' : ''} ${
          list.pinned ? 'pinned' : ''
        }`}
      >
        <div className={`list-header ${editView ? 'edit-mode' : ''}`}>
          <div className="title">
            <div className="view">
              <span className="name">{list.name}</span>
              <span
                className="edit"
                role="button"
                onClick={() => showEditView(() => !editView)}
              ></span>
            </div>
            <div className="edit">
              <input
                type="text"
                autoFocus
                value={listNewName}
                placeholder={list.name}
                onChange={(e) => setListNewName(e.target.value)}
                onKeyPress={keyPressed}
                onBlur={() => showEditView(false)}
              />
            </div>
          </div>
          <div className="actions">
            {list.pinned && (
              <button
                className="ico-btn pin pinned"
                title="Unpin List"
                type="button"
                onClick={() => dispatch({ type: 'UNPIN_LIST', id: list.id })}
              ></button>
            )}
            {!list.pinned && (
              <button
                className="ico-btn pin"
                title="Pin List"
                type="button"
                onClick={() => dispatch({ type: 'PIN_LIST', id: list.id })}
              ></button>
            )}
            <button
              className="ico-btn delete"
              type="button"
              title="Delete List"
              onClick={() => dispatch({ type: 'REMOVE_LIST', id: list.id })}
            ></button>
            <button
              className="ico-btn save"
              type="button"
              title="Save List"
              onClick={handleSubmit}
              disabled={listNewName.trim() === ''}
            ></button>
          </div>
        </div>
        <div className="list-content-wrapper">
          <div className="list-content">
            <ListItems
              items={list.items}
              editing={editMode}
              onRemove={(itemId, isLast) => {
                dispatch({
                  type: 'REMOVE_LIST_ITEM',
                  payload: { listId: list.id, itemId },
                });
                if (!isLast) {
                  setEditMode(false);
                }
              }}
              onComplete={(completed, itemId) => {
                dispatch({
                  type: completed ? 'MARK_AS_COMPLETE' : 'MARK_AS_INCOMPLETE',
                  payload: { listId: list.id, itemId },
                });
              }}
            />
            {newItemShown && (
              <NewListItem
                listId={list.id}
                onFocusOut={() => showNewItemForm(() => !newItemShown)}
              />
            )}
          </div>
          <div className="list-footer">
            <button
              type="button"
              title="Add Item"
              onClick={() => showNewItemForm(() => !newItemShown)}
              disabled={newItemShown || (editMode && list.items.length > 0)}
            >
              Add Item
            </button>
            {list.items.length > 0 && (
              <button
                className="rmv"
                type="button"
                title="Remove Items"
                onClick={() => setEditMode(() => !editMode)}
                disabled={newItemShown}
              >
                Remove Items
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListDetails;
