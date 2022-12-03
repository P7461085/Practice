import './App.css';
import React from 'react';

const orders = [
    {
        title: 'McSpicy',
        image: 'https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/04/04044056/product-mcspicy-350x350.png',
    },
    {
        title: 'Double Filet-o-Fish',
        image: 'https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/04/04033439/product-double-filet-o-fish-350x350.png',
    },
    {
        title: 'Chicken McCrispy (6pcs)',
        image: 'https://d1nqx6es26drid.cloudfront.net/app/uploads/2020/11/02110512/SOK-iconsUpright-bucket.png',
    },
    {
        title: 'Grilled Chicken McWrap',
        image: 'https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/04/04043135/product-skinless-grilled-chicken-mcwrap-350x350.png',
    },
];

const drinks = ['Milo (M)', 'Milo (L)', 'Coke (M)', 'Coke (L)'];

function OrderForm(props) {
    const [order, setOrder] = React.useState();
    // TODO: Add a drink state here
    const [upsize, setUpsize] = React.useState(false);
    const [imgSrc, setImgSrc] = React.useState('https://d1nqx6es26drid.cloudfront.net/app/assets/img/logo_mcd.png');
    return (
        <div>
            <h1>Place Order</h1>
            <select
                onChange={function (e) {
                    setOrder(e.target.value);
                    setImgSrc(orders[+e.target.value].image);
                }}
            >
                <option disabled selected>
                    Select Order
                </option>
                {orders.map(function (order, index) {
                    return <option value={index}>{order.title}</option>;
                })}
            </select>
            <input
                type="checkbox"
                checked={upsize}
                onChange={function (e) {
                    setUpsize(e.target.checked);
                }}
            />
            <label> Upsize? </label>
            <p>
                <img src={imgSrc}></img>
            </p>
            <p>
                <b>TODO:</b> Add a select here, set the onChange to update the drink state
                <br />
                Also, render the options use .map(...)
            </p>
            <p>
                <button
                    onClick={function () {
                        props.onCheckout({
                            order: order,
                            upsize: upsize,
                            // TODO: Add the drink state here
                        });
                    }}
                    disabled={!order}
                >
                    Confirm
                </button>
            </p>
        </div>
    );
}
function ConfirmationPage(props) {
    return (
        <div>
            <h1>Your Order</h1>
            <h2>
                {orders[props.order.order].title} - {!props.order.upsize && 'No'} Upsize
            </h2>
            <p>
                <img src={orders[props.order.order].image}></img>
            </p>
            <p>
                <b>TODO:</b> Display the selected drink here{' '}
            </p>
        </div>
    );
}
function App() {
    const [order, setOrder] = React.useState();

    return order ? (
        <ConfirmationPage order={order} />
    ) : (
        <OrderForm
            onCheckout={function (order) {
                setOrder(order);
            }}
        ></OrderForm>
    );
}

export default App;
