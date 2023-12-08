import { CalculadoraMilhas } from '@/components/CalculadoraMilhas';

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-amber-100 to-yellow-50 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <CalculadoraMilhas />
      </div>
    </main>
  );
}
