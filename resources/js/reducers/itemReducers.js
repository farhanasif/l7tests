export const itemReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return [...state, {
            title: action.book.title,
            id: action.book.id
          }
        ]
      case 'REMOVE_ITEM':
        return state.filter(book => book.id !== action.id);
      case 'INIT':
        if(action.data){
          return [...state, ...action.data];
        }
        else{
          return [];
        }
      default:
        return state;
    }
  }