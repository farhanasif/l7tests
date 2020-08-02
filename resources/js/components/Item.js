import React, { useContext, useState } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'

const MySwal = withReactContent(Swal)

const Toast = MySwal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

export default function Item () {
    const { items, dispatch } = useContext(ItemContext);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [formerror, setFormerror] = useState(false);
    const [edit, setEdit] = useState(false);
    //console.log(items);

    const handleSubmit = async(e) => {
        if(name === '' || category === ''){
            setFormerror(true)
        }
        else{
            e.preventDefault();
    
            await fetch('http://localhost:8000/api/items', {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    category: category
                })
            }).then((response) => response.json())
            .then((json) => {
                //console.log(json)
                const id = json.id;
                const created_at = json.created_at;
                dispatch({ type: 'ADD_ITEM', item: { name, id, category, created_at}});
            })
            .catch((error) => {
                console.error(error);
            });
            
            setName('');
            setCategory('');
            setFormerror(false)
            Toast.fire({
                icon: 'success',
                title: 'Item added successfully'
            })
            $('#exampleModal').modal('hide')
        }
        
        
    }

    const openModal = () => {
        setEdit(false)
        $('#exampleModal').modal('show')
    }


    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card border-success mb-3">
                    <div className="card-header container-fluid">
                        <div className="row">
                            <div className="col-md-10">
                                <h5 className="w-25 p-1">View All Items</h5>
                            </div>
                            <div className="ml-md-auto">
                            <button type="button" className="btn btn-primary" onClick={openModal}>
                                New <FontAwesomeIcon icon={faPlus} color="white"/>
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        {items ? (
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Created</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map(item => {
                                    return (
                                        <tr key={item.id}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.name}</td>
                                        <td>{item.category}</td>
                                        <td>{moment(item.created_at).format('MMM Do YY, h:mm:ss a')}</td>
                                        <td>
                                            <FontAwesomeIcon icon={faEdit} color="blue" onClick={() => {
                                                setName(item.name)
                                                setCategory(item.category)
                                                setEdit(true)
                                                $('#exampleModal').modal('show')
                                            }}/> | <FontAwesomeIcon icon={faTrash} color="red"/></td>
                                    </tr>
                                    );
                                    })}
                                </tbody>
                            </table>
                        ) : (
                            <p>No item found</p>
                        )}
                        
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{edit ? 'Edit Item' : 'Add an Item'}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {formerror ? (
                            <div className="alert alert-dismissible alert-danger">
                                Name and Category cannot be empty!
                            </div>
                        ):(
                            <p hidden></p>
                        )}
                        
                        <div className="form-group">
                            <label>Item Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                aria-describedby="nameHelp" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <small id="nameHelp" className="form-text text-muted">Enter a name for the item</small>
                        </div>
                        <div className="form-group">
                            <label>Item Category</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="category" 
                                value={category}
                                onChange={(e) => setCategory(e.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>{edit ? 'Edit Changes' : 'Save Changes'}</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}