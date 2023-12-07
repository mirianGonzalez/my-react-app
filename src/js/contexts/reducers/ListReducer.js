import uuid from 'uuid/dist/v1';

export const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NEW_LIST':
      return [
        ...state,
        {
          ...action.list,
          id: uuid(),
        },
      ];
    case 'RENAME_LIST':
      return state.map((list) =>
        list.id === action.payload.id
          ? {
              ...list,
              name: action.payload.name,
              lastUpdated: Date.now(),
            }
          : list
      );
    case 'PIN_LIST':
      return state.map((list) =>
        list.id === action.id
          ? {
              ...list,
              pinned: true,
              lastUpdated: Date.now(),
            }
          : list
      );
    case 'UNPIN_LIST':
      return state.map((list) =>
        list.id === action.id
          ? {
              ...list,
              pinned: false,
              lastUpdated: Date.now(),
            }
          : list
      );
    case 'REMOVE_LIST':
      return state
        .map((list) => ({ ...list, lastUpdated: Date.now() }))
        .filter((list) => list.id !== action.id);
    case 'ADD_LIST_ITEM':
      return state.map((list) =>
        list.id === action.payload.listId
          ? {
              ...list,
              lastUpdated: Date.now(),
              items: [
                ...list.items,
                {
                  id: uuid(),
                  name: action.payload.itemName,
                  completed: action.payload.completed,
                },
              ],
            }
          : list
      );
    case 'MARK_AS_COMPLETE':
      return state.map((list) =>
        list.id === action.payload.listId
          ? {
              ...list,
              lastUpdated: Date.now(),
              items: [
                ...list.items.map((item) => {
                  if (item.id === action.payload.itemId) {
                    item.completed = true;
                  }
                  return item;
                }),
              ],
            }
          : list
      );
    case 'MARK_AS_INCOMPLETE':
      return state.map((list) =>
        list.id === action.payload.listId
          ? {
              ...list,
              lastUpdated: Date.now(),
              items: [
                ...list.items.map((item) => {
                  if (item.id === action.payload.itemId) {
                    item.completed = false;
                  }
                  return item;
                }),
              ],
            }
          : list
      );
    case 'REMOVE_LIST_ITEM':
      return state.map((list) =>
        list.id === action.payload.listId
          ? {
              ...list,
              lastUpdated: Date.now(),
              items: list.items.filter(
                (item) => item.id !== action.payload.itemId
              ),
            }
          : list
      );
    default:
      return state;
  }
};
