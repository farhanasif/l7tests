export const itemReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return [...state, {
            name: action.item.name,
            category: action.item.category,
            id: action.item.id
          }
        ]
      case 'REMOVE_ITEM':
        return state.filter(item => item.id !== action.id);
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