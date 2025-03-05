import { CircleDollarSign, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function index() {
  return (
    <Card className="flex-1">
        <CardHeader>
            <div className="flex items-center justify-center select-none">
                <CardTitle className="text-lg sm:text-xl text-gray-600">
                    Últimos clientes
                </CardTitle>
                <CircleDollarSign className="ml-auto w-5 h-5"></CircleDollarSign>
            </div>
        <CardDescription>
            Novos clientes nas últimas 24 horas
        </CardDescription>
        </CardHeader>

        <CardContent>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar>
                    <AvatarImage src='https://github.com/fossvncs.png'></AvatarImage>
                    <AvatarFallback>VF</AvatarFallback>
                </Avatar>
                <div className="">
                    <p className="text-sm sm:text-base font-semibold">Vinicius Foss</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">text@text.com</span>
                </div>
            </article>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar>
                    <AvatarImage src='https://github.com/DevMLM.png'></AvatarImage>
                    <AvatarFallback>ML</AvatarFallback>
                </Avatar>
                <div className="">
                    <p className="text-sm sm:text-base font-semibold">Mateus Luz</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">text@text.com</span>
                </div>
            </article>
        </CardContent>
    </Card>
  )
}
