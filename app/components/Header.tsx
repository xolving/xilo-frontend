import Image from "next/image";

export default function Header(){
    return (
    <header className="min-h-screen drop-shadow-xl px-8 border rounded-full bg-stone-50 mx-5">
        <Image width={40} height={40} src={'/xilo.svg'} alt="xilo" className="py-14" />
        <div className="gap-y-3 grid">
            <a><p>POST</p></a>
            <a><p>GET</p></a>
        </div>
    </header>
    )
}