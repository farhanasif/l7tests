import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';


export default function Item () {
    const { items } = useContext(ItemContext);
    //console.log(items);
    return items ? (
        <div className="row">
            <div className="col-lg-12">
                <div className="card border-success mb-3">
                    <div className="card-header">View All Items</div>
                    <div className="card-body">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
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
                                    <td>Edit / Delete</td>
                                </tr>
                                );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    ): (
        <div className="row">
            <div className="col-lg-12">
                <div className="card border-success mb-3">
                    <div className="card-header">View All Items</div>
                    <div className="card-body">
                        <p>No item found</p>
                    </div>
                </div>
            </div>
        </div>
    )
}