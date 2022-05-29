import React, { useEffect, useState } from 'react';
import { Chart } from './Chart';

interface ITile {
  name: string; // tile title
  price: number; // tile price
  isActive: boolean; // tile status
}

interface IResult {
  totalPriceSum: number; // summary price of all active tiles
  tileCount: number; // summary active tile's amount
  averagePriceSum: number; // average price amount of all active tiles
}

const tileArr: Array<ITile> = [
  {
    name: 'tile_1',
    price: 70,
    isActive: true,
  },
  {
    name: 'tile_2',
    price: 50,
    isActive: false,
  },
  {
    name: 'tile_3',
    price: 20,
    isActive: true,
  },
  {
    name: 'tile_4',
    price: 110,
    isActive: true,
  },
  {
    name: 'tile_5',
    price: 85,
    isActive: true,
  },
  {
    name: 'tile_6',
    price: 25,
    isActive: false,
  },
  {
    name: 'tile_7',
    price: 5,
    isActive: true,
  },
];

// write You code here
// const result: IResult = ...

type Props = {};

export default function Task({}: Props) {
  const [result, setResult] = useState<IResult>({} as IResult);
  const getObject = (obj: Array<ITile>): IResult => {
    let result: IResult = {
      totalPriceSum: 0,
      tileCount: 0,
      averagePriceSum: 0,
    };
    let temp: number = 0;
    obj.map((item: ITile) => {
      result.totalPriceSum += item.price;
      result.tileCount += item.isActive ? 1 : 0;
      if (item.isActive) {
        temp += item.price;
      }
    });
    result.averagePriceSum = temp / result.tileCount;
    return result;
  };

  useEffect((): void => {
    setResult(getObject(tileArr));
  }, []);

  return (
    <>
      <Chart
        data={{
          labels: [
            'Total price summ',
            'Average price active tiles',
            'Tile count',
          ],
          datasets: [
            {
              label: 'dataset1',
              data: [
                result.totalPriceSum,
                result.averagePriceSum,
                result.tileCount,
              ],
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],
        }}
      />
    </>
  );
}
