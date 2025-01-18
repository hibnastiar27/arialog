import Link from "next/link"
const NotFound = () => {
    return (
        <>
            <h1>404 - Page Not Found</h1>
            <Link href='/'>Go Back Home</Link>
        </>
    )
}

export default NotFound