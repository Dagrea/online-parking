import React from 'react';
import { useParams } from "react-router-dom"

const posts = [
  { id: 1, label: "Как правильно парковаться", description: "Опытные автоводители знают, что навык правильно парковаться — один из главных при вождении авто. При обучении вождению этому навыку уделяется особое внимание. Разные типы парковок подразумевают разные маневры. Рассмотрим основные методы и правила парковки автомобиля, а также советы по выбору места для стоянки.",
   text: `Правила парковки авто в Украине
По украинским правилам дорожного движения к понятию парковки относится остановка машины длительностью более 5 минут. По правилам нельзя останавливаться:

на узких дорогах;
на железнодорожных и трамвайных рельсах;
на левосторонней части автотрассы с разделительной полосой;
на территории газонов;
возле остановок местного транспорта;
вдоль припаркованных авто вторым рядом.
Также недопустимо делать автоостановки на мостах, эстакадах, в тоннелях и на путепроводах. В темное время суток запрещена стоянка машин на обочинах и местах с ограниченной видимостью.

До пешеходных переходов, мест выполнения дорожных работ и перекрестков должно быть расстояние от места стоянки минимум 10 метров. Также нельзя припарковываться возле мусорных баков на расстоянии менее 5 м до них. На тротуарах останавливаться авто можно, однако пешеходы должны иметь возможность пройти по тротуару с шириной минимум 2 метра.

В Киеве есть некоторые особенности автопарковки. Прежде всего, платные автопарковки должны быть оборудованы паркоматом или шлагбаумом. На территории устанавливается информационная таблица о ценах и способах расчета. Оплачивают стоянку по специальным парковочным талонам.

Важно соблюдать установленные парковочные правила, чтобы избежать эвакуации авто. Подобрать и взять на прокат подходящую машину можно в компании NarsCars на лучших условиях аренды. Условия проката автомобилей детально изложены на сайте компании.

В Украине существует несколько способов автопарковки, которые выбираются в зависимости от ситуации и условий на дороге. Она может осуществляться либо движением вперед, либо с помощью задней передачи. При переднем движении должно быть достаточно много места для маневра. С помощью маневра задней частью можно парковаться на минимальной площади.

` },
  { id: 2, label: "Post 2", description: "Content of Post 2" },
  { id: 3, label: "Post 3", description: "Content of Post 3" },
  { id: 4, label: "Post 4", description: "Content of Post 4" },
  { id: 5, label: "Post 5", description: "Content of Post 5" },
  { id: 6, label: "Post 6", description: "Content of Post 6" },
  { id: 7, label: "Post 7", description: "Content of Post 7" },
  { id: 8, label: "Post 8", description: "Content of Post 8" },
  { id: 9, label: "Post 9", description: "Content of Post 9" },
  { id: 10, label: "Post 10", description: "Content of Post 10" },
  { id: 11, label: "Post 11", description: "Content of Post 11" },
  { id: 12, label: "Post 12", description: "Content of Post 12" }
];

function Blogs() {
  let params = useParams();
  return <div className="d-flex flex-column">
    <div className="border p-4 rounded align-self-center w-75 text-white">
  <h1>{posts[params.blogId].label}</h1><hr color="#cb1812" />
  <h2>{posts[params.blogId].description}</h2><hr color="#cb1812" />
  <p>{posts[params.blogId].text}</p><hr color="#cb1812" />
  </div></div>;
}

export default Blogs;