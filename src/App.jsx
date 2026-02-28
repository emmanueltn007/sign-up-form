import Form from "./components/Form"
import Intro from "./components/Intro"

function App () {
  return (
    <main className="h-screen w-screen bg-[hsl(0,100%,74%)] bg-[url('/images/bg-intro-mobile.png')] bg-cover bg-no-repeat bg-center">
      <Intro />
      <Form />
    </main>
  )
}

export default App