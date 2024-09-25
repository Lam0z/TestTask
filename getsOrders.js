const API = "https://petstore3.swagger.io/api/v3/";
const API_ORDER = `${API}store/order/`;

const getData = async (orderId) => {
    try {
        const r = await fetch(`${API_ORDER}${orderId}`);
        const order = await r.json();

        console.log(order);
    } catch (err) {
        console.log(err);
    }
};

getData(10);
