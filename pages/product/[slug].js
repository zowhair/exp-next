import Link from 'next/link';
import { Arrange } from '../../components/Arrange';

export async function getServerSideProps(context) {
    console.log(context)
    return {
        props: {
            title: "This is title and rest is data",
            slug: context.params.slug,
        },
    }
}

function Product({title, slug}) {
    async function handleClick() {
        let email_data = JSON.stringify({
            email: "zowhair@gmail.com",
            message: "This is a dev test message"
        })

        await fetch("/api/email/route", {
            method: "POST",
            body: email_data
        })
    } 
    return (
        <>
            <Arrange data={slug} />
            <div className="productDetailPageContainer">
                <div className="productPageTopHead">
                    <div className="productHeading">
                    </div>
                    <div className="productDescription">
                    </div>
                </div>
                <div className="productPageBottomHead">
                    <div className="productLeftContainer">
                        <div className="productTabs">
                            <h1>{title} {slug}</h1>

                        </div>

                    </div>
                    <div className="productRightContainer">
                        {/* make card here, checkout and price */}
                        <button onClick={handleClick}>send test</button>
                    </div>
                </div>
            </div>
            <style jsx global>{`
                html,
                body {
                    query: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }
                * {
                    box-sizing: border-box;
                }
            `}</style>
        </>

    )
}


export default Product;