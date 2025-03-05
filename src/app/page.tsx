import ChartOverview from "@/components/chart";
import Sales from "@/components/sales";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, DollarSign, Percent, PercentCircle, ReceiptCent, Users } from "lucide-react";


export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                Total Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-5 h-5"></DollarSign>
            </div>

            <CardDescription className="select-none">
              Total vendas em 90 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$ 36.798,00</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                Novos clientes
              </CardTitle>
              <Users className="ml-auto w-5 h-5"></Users>
            </div>

            <CardDescription className="select-none">
              Novos clientes em 30 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex flex-row">
              <p className="text-base sm:text-lg font-bold text-green-600">+ 328</p>
              <Users className="h-6 w-6 text-green-600 ml-2"></Users>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                Pedidos hoje
              </CardTitle>
              <Percent className="ml-auto w-5 h-5"></Percent>
            </div>

            <CardDescription className="select-none">
              Pedidos realizados no dia de hoje
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">77</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                Total pedidos
              </CardTitle>
              <BadgeDollarSign className="ml-auto w-5 h-5"></BadgeDollarSign>
            </div>

            <CardDescription className="select-none">
              Número total de pedidos em 30 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">6155</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">  
        <ChartOverview/>
        <Sales/>
      </section>
    </main>
  )
}
