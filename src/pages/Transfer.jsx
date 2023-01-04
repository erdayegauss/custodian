import { Navbar, Footer, Loader, Services, Transactions, Welcome } from "../components"

const Transfer = (props) => {
    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                {/*<Navbar />*/}
                <Welcome publicKey={props.publicKey} amount={props.amount} sign={props.sign} note={props.note} receiverId={props.receiverId} receiverName={props.receiverName}  />
            </div>
            {/*<Services />*/}
            <Transactions />
            {/*<Footer />*/}
        </div>
    )
}

export default Transfer
