import Link from "next/link"

const Button = (props : any) =>{
    return(
        <div className="border-b border-b-success font-bold mt-3  text-center">
            <Link href={'/ui/contact'} className="text-white text-lg">{props.text}</Link>
            <Link href={'/ui/about'} className="text-white text-lg">{props.text1}</Link>
            <Link href={'https://github.com/fathularifin-6800'} className="text-success text-lg">{props.text2}</Link>
        </div>
    )
}
export default Button