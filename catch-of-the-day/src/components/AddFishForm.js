import React from 'react';

class AddFishForm extends React.Component {

    createFish(event) {
        event.preventDefault()

        const fish={
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            image: this.image.value
        }

        // We can call addFish now from props which is an Inventory component

        this
            .props
            .addFish(fish)

        this.fishForm.reset()     
        //console.log(fish)
    }

    render() {

        return (

            <form
                ref=
                {(input)=> this.fishForm=input}
                className="fish-edit"
                onSubmit={this
                .createFish
                .bind(this)}>
                <input type="text" ref={(input)=>{this.name=input}} placeholder="Fish Name"/>
                <input
                    type="text"
                    ref=
                    {(input)=>{this.price=input}}
                    placeholder="Fish Price"/>
                <select ref={(input)=>{this.status=input}} placeholder="Fish Status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea ref={(input)=>{this.desc=input}} placeholder="Fish Desc"></textarea>
                <input
                    type="text"
                    ref={(input)=>{this.image=input}}
                    placeholder="Fish Image"/>
                <button type="submit">+ Add item</button>
            </form>

        )
    }
}
AddFishForm.propTypes = {
    addFish: React.PropTypes.func.isRequired
}
export default AddFishForm;