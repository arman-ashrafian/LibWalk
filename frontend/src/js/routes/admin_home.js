import react from 'react'
import NavBar from "../navbar";


class AdminHome extends react.Component {
    render() {
        return (
            <div>
                {/*create navigation bar*/}
                <NavBar {...this.props}/>

                {/*start the rest of the page*/}
                <main className='mt-5 pt-5'>
                    <h2 className="h1 text-center mb-5">Notifications</h2>
                    <h5 className="text-center mb-5">Messages from organizations you subscribe to are listed below. </h5>
                </main>
            </div>
        );
    }

    constructor(props) {
        super(props);
        console.log('AdminHome element created with props', props)
    };


}