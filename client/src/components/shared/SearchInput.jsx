import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const SearchInput = () => {
    return (
        <div className="form-control">
            <div className="input-group">
                <input type="text" placeholder="Search…" className="input input-bordered" />
                <button className="btn btn-square">
                    <MagnifyingGlassIcon className="h-6 w-6" />
                </button>
            </div>
        </div>
    )
}

export default SearchInput