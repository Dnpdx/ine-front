import Layout from "@/components/layout";
import Link from "next/link";


export default function page404() {

    return (
        <Layout title="Pagina no encontrada">
             <div className="flex justify-center font-extrabold text-4xl bg-black overflow-hidden">
                <h2 className="text-left text-amber-300 p-4">Pagina no encontrada</h2>
            </div>
            <Link href='/'>
                <h3  className="text-center text-amber-300 p-4">
                    Ir al inicio
                </h3>
            </Link>
        </Layout>
    )
}