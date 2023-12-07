/* eslint-disable no-undef */
import React, { useContext } from 'react';
import { WonderItemContext } from '../contexts/WonderItem';

const NewList = () => {
  const { dispatch, showNewListForm } = useContext(WonderItemContext);


  const handleFocusOut = () => {
    if (listName.trim().length === 0) {
      showNewListForm(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_NEW_LIST',
      list: {
        name: listName,
        pinned: false,
        lastUpdated: Date.now(),
        items: [],
      },
    });
    setListName('');
    showNewListForm(false);
  };
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="list new-list">
        <div className="list-header edit-mode">
          <div className="title">
            <div className="edit">
              <input
                type="text"
                value={listName}
                autoFocus
                placeholder="List Name"
                onBlur={() => handleFocusOut()}
                onChange={(e) => setListName(e.target.value)}
              />
            </div>
          </div>
          <div className="actions">
            <button className="ico-btn save" type="submit" disabled={listName.trim() === ''}></button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewList;