import Link from "next/link";

export default function Navbar(){
  return (
            <nav className=" bg-[#D1007F] text-white w-full md:flex sm:grid-cols-1 relative justify-between items-center mx-auto px-8 h-20 border-b-4 border-black">
           
            <div className="flex justify-center">
            <h1 className="font-extrabold text-2xl">
                
                PROYECTO               
                           
                </h1>   
            </div>
            <div className="flex justify-center">            
                <h2 className="font-extrabold text-xl">
                <Link href="https://ine-db-production.up.railway.app/admin/">
                    Ir al panel de administrador
                </Link>                    
                </h2>  
            </div>  
        </nav>
  )
}
