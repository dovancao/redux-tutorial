import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectFood } from '../actions/index';


//Chua tat ca container cua chuong trinh
class FoodDetail extends Component {
  render() {
    if(!this.props.activeFood){
        return (<h2>Select a food</h2>);
    }

    return (
        <div>
            <img src={this.props.activeFood.imageUrl ? 'http://'+ this.props.activeFood.imageUrl : ""}
                height={this.props.activeFood.imageUrl ? 200 : 0}
                width={this.props.activeFood.imageUrl ? 200 : 0}
            />
            <p>Name: {this.props.activeFood.name}</p>
            <p>created_data: {this.props.activeFood.created_data}</p>
        </div>
    )
  }
}


function mapStateToProps(state){
    return {
        activeFood : state.activeFood
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectFood : selectFood}, dispatch);
}

let FoodDetailContainer = connect(mapStateToProps)(FoodDetail);
export default FoodDetailContainer;