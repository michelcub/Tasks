import BrowserImage from "@/components/landingPage/BrowserImage"
import ButtonGetStarted from "@/components/landingPage/ButtonGetStarted"
import HeaderLading from "@/components/landingPage/HeaderLading"

export default function Home() {
  return (
    <main className="min-h-screen w-screen flex-col ">
      <HeaderLading/>
      <section className="flex w-screen px-10">
        <div className="w-[50%] h-[80vh] flex items-center">
          <div className="w-[80%] h-[80%]">
            <BrowserImage/>
          </div>
          
        </div>
        <div className="w-[50%] flex flex-nowrap flex-col gap-8 justify-center h-[80vh]">
          <h1 className="text-primary text-[2rem] font-bold">Organiza y Colabora: <br/> Tu Solución para Tareas en Equipo</h1>
          <p className="text-white">¿Estás cansado de las interminables cadenas de correos electrónicos, los mensajes dispersos y la falta de coordinación en tu equipo de trabajo? ¡Nosotros también lo estábamos! Es por eso que creamos [Nombre de la Aplicación], la herramienta perfecta para simplificar la gestión de tareas y potenciar la colaboración en tu equipo.</p>
          <div>
            <ButtonGetStarted route="/auth/login" text="Comienza ya!"/>
          </div>
        </div>
      </section>
    </main>
  )
}
