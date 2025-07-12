import { useState } from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
//import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          XD
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              XD
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                XD
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">       
      </CardFooter>
    </Card>
      <div className="flex justify-center">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
      <div className="bg-gray-100 text-center py-8">
        <h1 className="text-2xl font-bold text-blue-600">¡Hola Tailwind!</h1>
      </div>
      <div className="bg-red-500 text-white p-4">Test Tailwind</div>
    </>
  );
}

export default App;
