import React from 'react'
import lodash from 'lodash'

const style = {
    background: "whitesmoke",
    borderRadius: '4px',
    margin: '0 auto',
    width: '30%'
}

const loadResults = () => {
    return(
        <div className="container mx-auto">
            <div>


                <h3>Title of news</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            </div>

        </div>
    )
}


function Main() {
    return (
        <div>
            <div>
                <form>
                    <input placeholder="Search company here..." type="search"/>
                    <button type="submit">Search</button>
                </form>
            </div>
            <div style={{margin: '10px'}}>
                
                {loadResults()}
                
            </div>
            
        </div>
    )
}

export default Main
