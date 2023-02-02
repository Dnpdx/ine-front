
import Layout from '@/components/layout';
import { useRouter } from 'next/router';
import Entrada from '../components/entrada';



export default function Home({entradas}) { 
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
      return <div>Loading...</div>
  }

  return (
    
      <Layout
      title={'Inicio'}
      description={'Consultas de la Base de datos de Conductores'}
      >
       <div className="flex justify-center font-extrabold text-4xl bg-black overflow-hidden">
           <h2 className="text-left text-[#D1007F] p-4">Consultas</h2>
        </div>
        <main className="container grid md:grid-cols-2 gap-4 md:p-20 sm:p-4 sm:my-4 sm:grid-cols-1 ">
          
          {
            entradas?.map(entrada => (
              <Entrada 
                key={entrada.id}
                entrada={entrada.attributes}
              />
            ))
          }

        </main>
       
      </Layout>
      
        
    
  )
}

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/entradas?populate=*`)
  const {data: entradas} = await respuesta.json()

  return {
    props: {
      entradas
    }
  }
}