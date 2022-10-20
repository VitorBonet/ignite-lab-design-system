import axios from 'axios';
import { Envelope, Lock } from "phosphor-react";
import { Checkbox } from "../components/Checkbox";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import Logo from "../Logo";
import { FormEvent, useState } from "react";


export function SingIn() {
  const [isIserSignedIn, setIsIserSignedIn] = useState(false)

  async function handleSingIn(event: FormEvent) {
    event.preventDefault();

    await axios.post('/sessions', {
      email: 'contact@vbsoftbr.com',
      password: '123456',
    })

    setIsIserSignedIn(true);
  }

  return (
    <div className='w-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100 p-10' >
      <header className="flex flex-col items-center" >
        <Logo />

        <Heading size="lg" className="mt-4">Ignite Lab</Heading>

        <Text size="lg" className="text-gray-400 mt-1">Faça login e comece a usar!</Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10">
        {isIserSignedIn && <Text>Login realizado</Text>}
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon><Envelope /></TextInput.Icon>
            <TextInput.Input type="email" placeholder="Digite seu e-mail"/>
          </TextInput.Root>
        </label>

        <label htmlFor="passsword" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon><Lock /></TextInput.Icon>
            <TextInput.Input type="passsword" placeholder="*******"/>
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex flex-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-4" onClick={handleSingIn}>Entrar na plataforma</Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild>
          <a href="" className="text-gray-400 underline hover:text-gray-100">Esqueceu sua senha?</a>
        </Text>
        <Text asChild>
          <a href="" className="text-gray-400 underline hover:text-gray-100">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}
