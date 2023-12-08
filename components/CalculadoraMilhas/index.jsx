'use client';
import React, { useEffect, useState } from 'react';
import shapeshifter from 'classnames';

export function CalculadoraMilhas() {
  //1. Quantas milhas serão convertidas de pontos adquiridos em compras bonificadas, como o Livelo
  //.. Transferência de bônus de compras para milhas
  const [quantidadeDePontos, setQuantidadeDePontos] = useState(1000);
  const [bonusTransferencia, setBonusTransferencia] = useState(1);
  const [quantidadeDeMilhas, setQuantidadeDeMilhas] = useState(0);

  //2. Quantos reais serão adquiridos vendendo milhas a milheiros, como agências de viagem
  //.. Venda das milhas para um terceiro
  const [precoComprador, setPrecoComprador] = useState(15);
  //KMilhas ... cálculo com vars existentes
  //Reais adquiridos ... cálculo com vars existentes

  //3. Quanto estarei economizando em uma passagem
  //.. Economia via utilização em passagem aérea
  const [passagemMilhas, setPassagemMilhas] = useState(0);
  const [passagemReais, setPassagemReais] = useState(0);

  const calcularMilhas = () => {
    const milhasConvertidas = quantidadeDePontos * bonusTransferencia;

    setQuantidadeDeMilhas(parseFloat(milhasConvertidas));
    // Faça o que precisar com as outras variáveis calculadas
  };

  useEffect(() => {
    calcularMilhas();
  }, [quantidadeDePontos, bonusTransferencia]);
  //01644493000165

  return (
    <div className="flex flex-col w-full items-center text-center justify-center gap-6 text-lg">
      {/* 1. Quantas milhas serão convertidas de pontos adquiridos em compras bonificadas, como o Livelo */}
      <p>Transferência de bônus de compras para milhas</p>
      <div className="flex flex-row gap-4">
        <label className="min-w-[240px] flex flex-col-reverse gap-1 text-center items-center">
          <p className="text-sm">Quantidade de Pontos</p>
          <input
            className={shapeshifter(
              'max-w-[120px] bg-transparent text-center border-slate-300 border-b-2 border-dashed',
              {
                'border-transparent bg-emerald-100': quantidadeDePontos > 0,
              }
            )}
            type="number"
            value={quantidadeDePontos}
            onChange={(e) => setQuantidadeDePontos(parseFloat(e.target.value))}
          />
        </label>

        <p>x</p>

        <label className="min-w-[240px] flex flex-col-reverse gap-1 text-center items-center">
          <p className="text-sm">Bônus de Transferência</p>
          <input
            type="number"
            step="any"
            className={shapeshifter(
              'max-w-[120px] bg-transparent text-center border-slate-300 border-b-2 border-dashed',
              {
                'border-transparent bg-emerald-100': bonusTransferencia >= 1,
              }
            )}
            onChange={(e) => setBonusTransferencia(parseFloat(e.target.value))}
          />
        </label>

        <p> = </p>

        {/* Exiba os resultados */}
        <label className="min-w-[240px] flex flex-col-reverse gap-1 text-center items-center">
          <p className="text-sm">Quantidade de Milhas</p>
          {quantidadeDeMilhas ? (
            <input
              type="number"
              step="any"
              className={shapeshifter(
                'max-w-[120px] bg-transparent text-center border-slate-300 border-b-2 border-dashed',
                {
                  'border-transparent bg-slate-200': quantidadeDeMilhas,
                }
              )}
              value={quantidadeDeMilhas}
              disabled
            />
          ) : (
            <div>...</div>
          )}
        </label>
      </div>

      {/* 2. Quantos reais serão adquiridos vendendo milhas a milheiros, como agências de viagem */}
      <p className="mt-8">Venda das milhas para um terceiro</p>
      <div className="flex flex-row gap-4">
        <label className="min-w-[240px] flex flex-col-reverse gap-1 text-center items-center">
          <p className="text-sm">Preço do comprador</p>
          <input
            className={shapeshifter(
              'max-w-[120px] bg-transparent text-center border-slate-300 border-b-2 border-dashed',
              {
                'border-transparent bg-emerald-100': precoComprador > 0,
              }
            )}
            type="number"
            value={precoComprador}
            onChange={(e) => setPrecoComprador(parseFloat(e.target.value))}
          />
        </label>

        <p> x </p>

        <label className="min-w-[240px] flex flex-col-reverse gap-1 text-center items-center">
          <p className="text-sm">
            <strong>K</strong> Milhas
          </p>
          {quantidadeDeMilhas ? (
            <input
              type="number"
              step="any"
              className={shapeshifter(
                'max-w-[120px] bg-transparent text-center border-slate-300 border-b-2 border-dashed',
                {
                  'border-transparent bg-slate-200': quantidadeDeMilhas,
                }
              )}
              value={quantidadeDeMilhas / 1000}
              disabled
            />
          ) : (
            <div>...</div>
          )}
        </label>

        <p> = </p>

        <label className="min-w-[240px] flex flex-col-reverse gap-1 text-center items-center">
          <p className="text-sm">Reais adquiridos</p>
          {quantidadeDeMilhas ? (
            <input
              type="number"
              step="any"
              className={shapeshifter(
                'max-w-[120px] bg-transparent text-center border-slate-300 border-b-2 border-dashed',
                {
                  'border-transparent bg-slate-200':
                    quantidadeDeMilhas && precoComprador,
                }
              )}
              value={(precoComprador * quantidadeDeMilhas) / 1000}
              disabled
            />
          ) : (
            <div>...</div>
          )}
        </label>
      </div>

      {/* 3. Quanto estarei economizando em uma passagem */}
      <p className="mt-8">Economia via utilização em passagem aérea </p>
      <div className="flex flex-row gap-4">
        <label className="min-w-[240px] flex flex-col-reverse gap-1 text-center items-center">
          <p className="text-sm">Custo da passagem em milhas</p>
          <input
            className={shapeshifter(
              'max-w-[120px] bg-transparent text-center border-slate-300 border-b-2 border-dashed',
              {
                'border-transparent bg-emerald-100': passagemMilhas > 0,
              }
            )}
            type="number"
            value={passagemMilhas}
            onChange={(e) => setPassagemMilhas(parseFloat(e.target.value))}
          />
        </label>

        <p> / </p>

        <label className="min-w-[240px] flex flex-col-reverse gap-1 text-center items-center">
          <p className="text-sm">Custo da passagem em reais</p>
          <input
            className={shapeshifter(
              'max-w-[120px] bg-transparent text-center border-slate-300 border-b-2 border-dashed',
              {
                'border-transparent bg-emerald-100': passagemReais > 0,
              }
            )}
            type="number"
            value={passagemReais}
            onChange={(e) => setPassagemReais(parseFloat(e.target.value))}
          />
        </label>

        <p> = </p>

        <label className="min-w-[240px] flex flex-col-reverse gap-1 text-center items-center">
          <p className="text-sm">Valor da milha</p>
          {passagemMilhas && passagemReais ? (
            <input
              type="number"
              step="any"
              className={shapeshifter(
                'max-w-[120px] bg-transparent text-center border-slate-300 border-b-2 border-dashed',
                {
                  'border-transparent bg-slate-200':
                    passagemMilhas && passagemReais,
                }
              )}
              value={passagemMilhas / passagemReais}
              disabled
            />
          ) : (
            <div>...</div>
          )}
        </label>
      </div>
    </div>
  );
}

/*
      <span>
        'quantidadeDePontos' {quantidadeDePontos} <br />
        'bonusTransferencia' {bonusTransferencia} <br />
        'quantidadeDeMilhas' {quantidadeDeMilhas} <br />
        'precoComprador' {precoComprador}
      </span>
*/
