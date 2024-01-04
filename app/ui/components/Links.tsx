import Link from "next/link";

const Links = () => {
    return ( 
        <div className="flex gap-3">
            <Link  href={'/'} className="link link-success">Home</Link>
            <Link  href={'/ui/about'} className="link link-success">About</Link>
            <Link  href={'/ui/contact'} className="link link-success">Contact</Link>
        </div>
     );
}
 
export default Links;