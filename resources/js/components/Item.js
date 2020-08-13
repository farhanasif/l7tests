import React, { useContext, useState } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';

const { SearchBar, ClearSearchButton } = Search;
const { ExportCSVButton } = CSVExport;


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

function dateFormatter(cell, row){
    return moment(cell).format('MMM Do YY, h:mm:ss a');
}


export default function Item () {
    const { items, dispatch, refreshContent } = useContext(ItemContext);
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [formerror, setFormerror] = useState(false);
    const [edit, setEdit] = useState(false);
    //console.log(items);
    
    const columns = [
        {
            dataField: 'id',
            text: 'ID'
        }, 
        {
            dataField: 'name',
            text: 'Item Name'
        },
        {
            dataField: 'category',
            text: 'Item Category',
            formatter: (cellcontent, row) => {
                return (
                    <h5><span className="badge badge-warning">
                        {row.category}
                    </span></h5>
                )
            }
        },
        {
            dataField: 'created_at',
            text: 'Created At',
            formatter: dateFormatter
        },
        {
            dataField: 'df1',
            isDummyField: true,
            text: 'Action',
            formatter: (cellContent, row) => {
              return (
                  <span>
                      <FontAwesomeIcon icon={faEdit} color="blue" onClick={() => {
                            setId(row.id)
                            setName(row.name)
                            setCategory(row.category)
                            setEdit(true)
                            $('#exampleModal').modal('show')
                        }}/> | <FontAwesomeIcon icon={faTrash} color="red" onClick={() => handleDelete(row.id)}/>
                  </span>
              )
            }
          }
    ];

    

    const handleSubmit = async(e) => {
        if(name === '' || category === ''){
            setFormerror(true)
        }
        else{
            e.preventDefault();
            if(edit){
                //edit the item
                await fetch('http://localhost:8000/api/items/'+id, {
                    method: 'PUT',
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
                    console.log(json)
                    //refresh the table
                    //refreshContent();
                    dispatch({ type: 'UPDATE_ITEM', item: { name, id, category}});
                    setName('');
                    setCategory('');
                    setId(0)
                    setEdit(false)
                    setFormerror(false)
                    Toast.fire({
                        icon: 'success',
                        title: 'Item updated successfully'
                    })
                })
                .catch((error) => {
                    console.error(error);
                });
                
                
            }
            else{
                //insert item
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
                    setName('');
                    setCategory('');
                    setId(0)
                    setEdit(false)
                    setFormerror(false)
                    Toast.fire({
                        icon: 'success',
                        title: 'Item added successfully'
                    })
                })
                .catch((error) => {
                    console.error(error);
                });
            }
            
            $('#exampleModal').modal('hide')
        }
        
        
    }

    const openModal = () => {
        setName('');
        setCategory('');
        setId(0)
        setEdit(false)
        $('#exampleModal').modal('show')
    }

    const handleDelete = async(itemid) => {
        if(itemid){
            //edit the item
            await fetch('http://localhost:8000/api/items/'+itemid, {
                method: 'DELETE',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
                }
            })
            .then(() => {
                dispatch({ type: 'REMOVE_ITEM', item: { itemid }});
                setName('');
                setCategory('');
                setId(0)
                setEdit(false)
                setFormerror(false)
                Toast.fire({
                    icon: 'success',
                    title: 'Item deleted successfully'
                })
            })
            .catch((error) => {
                console.error(error);
            });
            
            
        }
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
                            <ToolkitProvider
                                keyField="id"
                                data={ items }
                                columns={ columns }
                                search
                                
                            >
                                {
                                props => (
                                    <div>
                                    <SearchBar { ...props.searchProps } />
                                    <ClearSearchButton
                                     className="btn btn-outline-secondary ml-2"
                                     { ...props.searchProps } />
                                    <ExportCSVButton className="btn btn-outline-secondary ml-2" { ...props.csvProps }>Export CSV!!</ExportCSVButton>
                                    <BootstrapTable
                                        bootstrap4
                                        striped
                                        hover
                                        condensed
                                        pagination={ paginationFactory()}
                                        { ...props.baseProps }
                                    />
                                    </div>
                                )
                                }
                            </ToolkitProvider>
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