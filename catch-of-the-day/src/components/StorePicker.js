import React from 'react';
import {getFunName} from '../helpers'
class StorePicker extends React.Component {

    // constructor(){     super();     this.goToStore = this.goToStore.bind(this) }

    goToStore(event) {
        event.preventDefault()
        //first grab the etext from the box
        console.log('💩')
        const storeId = this.storeInput.value;
        //transittion from / to  /store/storeid
        this
            .context
            .router
            .transitionTo(`/store/${storeId}`)

    }
    render() {
        return (
            <div>

                <form
                    className="store-selector"
                    onSubmit={this
                    .goToStore
                    .bind(this)}>
                    <h2>Please Enter A Store</h2>

                    <input
                        type="text"
                        required
                        placeholder="Store Name"
                        defaultValue={getFunName()}
                        ref
                        ={(input) => {
                        this.storeInput = input
                    }}/>
                    <button type="submit">Visit Store</button>

                </form>

            </div>

        )
    }
}
StorePicker.contextTypes = {
    router: React.PropTypes.object
}
export default StorePicker