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
        return state.filter(item => item.id !== action.item.itemid);
      case 'INIT':
        if(action.data){
          const newstate = action.data.sort(function(a, b) { 
            return (b.id - a.id); 
          });
          return [...state, ...newstate];
        }
        else{
          return [];
        }
      case 'UPDATE_ITEM':
        const objIndex = state.findIndex((obj => obj.id == action.item.id))
        state[objIndex].name = action.item.name
        state[objIndex].category = action.item.category
        //state.find(v => v.id == action.item.id).name = action.item.name;
        return state;
      default:
        return state;
    }
  }