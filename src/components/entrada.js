import Image from "next/image";



export default function Entrada({entrada}){
  const {nombre, licencia, matriculaAuto, marcaAuto, modeloAuto, destino,direccion, url, urnas, mamparas, extenciones, lonas, imgAuto, imgDestino} = entrada;
  


  return (

        
        <div className="bg-white m-4 overflow-hidden rounded-xl shadow-lg hover:shadow-xl border-solid border-4 border-amber-300 flex flex-col content-center items-center justify-center">
            <div className="mx-4 mt-4">
              <Image className="w-auto rounded-lg" src={imgAuto.data.attributes.url} width={500} height={500} alt="imagen del auto" />
            </div>
            
            <div className="p-5">                
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Nombre: {nombre}</h5>                
                <p className="mb-3 font-normal text-gray-700 rounded-md border-gray-800 border">Numero de Licencia: {licencia}</p>
                <p className="mb-3 font-normal text-gray-700 rounded-md border-gray-800 border">Numero de Matricula: {matriculaAuto}</p>
                <p className="mb-3 font-normal text-gray-700 rounded-md border-gray-800 border">Marca del auto: {marcaAuto}</p>
                <p className="mb-3 font-normal text-gray-700 rounded-md border-gray-800 border">Modelo del auto: {modeloAuto}</p>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Destino: {destino}</h5> 
            </div>
            <div className="mx-4 mt-4">
              <Image className="w-auto rounded-lg" src={imgDestino.data.attributes.url} width={500} height={500} alt="imagen del destino" />
            </div>
            <div className="p-5">
                <p className="mb-3 font-normal text-gray-700 rounded-md border-gray-800 border">Direccion: {direccion}</p>
                <p className="mb-3 font-normal text-gray-700 rounded-md border-gray-800 border">Numero de Urnas: {urnas}</p>
                <p className="mb-3 font-normal text-gray-700 rounded-md border-gray-800 border">Numero de Mamparas: {mamparas}</p>
                <p className="mb-3 font-normal text-gray-700 rounded-md border-gray-800 border">Numero de Extenciones: {extenciones}</p>
                <p className="mb-3 font-normal text-gray-700 rounded-md border-gray-800 border">Numero de Lonas: {lonas}</p>
            </div>
        </div>
           
         
  )
}
