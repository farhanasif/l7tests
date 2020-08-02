export const itemReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        const newstate = [...state, {
            name: action.item.name,
            category: action.item.category,
            id: action.item.id,
            created_at: action.item.created_at
          }
        ]
        //sorting to descending order
        return newstate.sort(function(a, b) { 
            return (b.id - a.id); 
        });
      
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