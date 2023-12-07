import React from 'react';

const ListItems = ({ items, editing, onRemove, onComplete }) => {
  return items.length ? (
    <>
      {items.map((item, i) => {
        return (
          <div className="list-item" key={item.id}>
            <input
              className="inp-cbx"
              id={'cbx' + item.id}
              type="checkbox"
              checked={item.completed}
              onChange={() =>
                !editing ? onComplete(!item.completed, item.id) : null
              }
              style={{ display: 'none' }}
            />
            <label className="cbx" htmlFor={'cbx' + item.id}>
              <span>
                <svg width="12px" height="9px" viewBox="0 0 12 9">
                  <polyline points="1 5 4 8 11 1"></polyline>
                </svg>
              </span>
              <span>{item.name}</span>
            </label>
            {editing && (
              <span
                className="delete-item-btn"
                onClick={() => onRemove(item.id, items.length > 1)}
              >
                &times;
              </span>
            )}
          </div>
        );
      })}
    </>
  ) : null;
};

export default ListItems;
