import Button from "../Button/Button.jsx"
import MethodTag from "../MethodTag/MethodTag"

export default function GetAllProducts({ setResponse }) {

    const getAllProducts = async () => {
        const response = await fetch("https://cafe-de-altura.vercel.app/api/products");
        const data = await response.json();
        setResponse(data);
    }

    return (
        <article id="get-all-products" className="flex flex-col justify-start items-start gap-4 w-full pb-4 border-b">
            <div className="flex flex-col justify-start items-start gap-2">
                <h3 className="text-xl font-medium">Get All Products</h3>
                <p>This endpoint retrieves all coffees in the API.</p>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
                <h4 className="text-lg">HTTP Request</h4>
                <MethodTag method="GET" url="https://cafe-de-altura.vercel.app/api/products" />
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
                <h4 className="text-lg">Responses</h4>
                <ul className="pl-4">
                    <li>
                        <p>Code: 200</p>
                        <p>Payload: array with all coffees (object)</p>
                    </li>
                </ul>
            </div>
            <div>
                <Button handleClick={getAllProducts} />
            </div>
        </article>
    )
}
