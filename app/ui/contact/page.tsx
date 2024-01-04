import Button from "../components/Button";

const Contact = () => {
    const buttonContact = 'Follow me'
    return ( 
        <main className="flex justify-between items-center flex-col m-20">
        <div className="card w-96 bg-neutral-900 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">F.I.N</h2>
                <p>follow me to know me more</p>
                <div className="card-actions">
                <Button text2={buttonContact}/>
                </div>
            </div>
        </div>
        </main>
     );
}
 
export default Contact;
