/* import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle
} from 'reactstrap';
import DishDetails from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    render() {
        const menu = this
            .props
            .dishes
            .map((dish) => {
                return (
                    <div className="col-12 col-md-2 m-1">
                        <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>
                );
            });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetails dish={this.state.selectedDish} />
            </div>
        );
    }
}

export default Menu;
 */


import React, {  useState/* , useEffect */ } from 'react';
import {
    Card,
    CardBody,
    CardImg,
    /* CardImgOverlay, */
    CardTitle
} from 'reactstrap';
import DishDetails from './DishdetailComponent';

export default function MenuComponent(props) {

    let [selectedDish,setselectedDish] = useState(null)

    const onDishSelect=(dish)=> {
        setselectedDish(dish);
        // console.log(dish);
        
    }

    // useEffect(() => {
    //     console.log(selectedDish);
    // }, [selectedDish]);

    
    return (
    <div className="container">
            <div className="row">
            {props.dishes.map((dish) => {
                return (
                    <div className="col-12 col-md-2 m-1">
                        <Card key={dish.id} onClick={() => onDishSelect(dish)}>

                            <CardImg width="150px" height="150px" src={dish.image} alt={dish.name} />
                            
                            <div>{dish.price}</div>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                            </CardBody>

                        </Card>
                    </div>
                );
            })}
            </div>

            <DishDetails dish={selectedDish} />
    </div>
    )
}
