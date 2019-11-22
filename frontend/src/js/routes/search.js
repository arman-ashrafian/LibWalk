import React from "react";
import NavBar from "../navbar";
import {MdSearch} from 'react-icons/md';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar/>
                <main className='mt-5 pt-5'>
                    <MdSearch/>
                    <input type="text" className="input"
                           placeholder="Search..."
                           style={{margin: '0 auto', width: 500, fontSize: 25, paddingLeft: 20}}
                    />
                </main>
            </div>
        );
    }
}


export default Search;