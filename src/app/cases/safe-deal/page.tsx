import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { asset } from "@/lib/asset";
import { CaseOutline } from "@/components/cases/case-outline";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Улучшение сценария Безопасной сделки — Мария Мельничук",
  description: "Кейс: как повысить доверие к сделкам на C2C-маркетплейсе и довести покупку до конца внутри приложения.",
};

const col = "ml-[clamp(16px,24.027vw,346px)] mr-4 max-w-[834px] max-md:ml-4";
const h1 = "text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-white";
const h2 = "text-[22px] font-semibold leading-[1.3] tracking-[-0.005em] text-white";
const body = "text-[16px] leading-[1.65] text-white/80";
const hrCls = "ml-[clamp(16px,24.027vw,346px)] mr-4 max-w-[834px] border-0 h-px bg-white/15 max-md:ml-4";

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className={`${col} mt-8`}>
      <h2 className={h2}>{title}</h2>
      <div className={`${body} mt-3 space-y-3`}>{children}</div>
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1">
      {items.map((t) => (
        <li key={t}>– {t}</li>
      ))}
    </ul>
  );
}

export default function SafeDealCasePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#161616] text-[#fffbfb]">
      <style>{`html,body{background:#161616;overflow-x:clip;overscroll-behavior-x:none}`}</style>
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="absolute inset-x-0 top-0 z-20">
          <SiteHeader tone="case" />
          <CaseOutline
            items={[
              { id: "task", label: "Задача", level: 1, desc: "Проверить, что пользователи отказываются от сделок из-за недоверия, и предложить сценарий, который это исправит" },
              { id: "research", label: "Исследование", level: 1, desc: "Личный эксперимент, UX-аудит и бенчмаркинг" },
              { id: "solution", label: "Решение", level: 1, desc: "Как вынести безопасность на поверхность: карточки, товар, чат и оплата" },
              { id: "next", label: "Следующий этап", level: 1, desc: "Как бы я проверила решение на реальных пользователях" },
            ]}
          />
        </div>

        <div className="relative z-10 pb-[120px] pt-[120px] max-md:pt-[96px]">
          {/* Обложка */}
          <div className={col}>
            <h1 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.015em] text-white max-md:text-[30px]">
              Улучшение сценария Безопасной сделки
            </h1>
            <p className={`${body} mt-4`}>
              Как сделать так, чтобы пользователи C2C-сервиса понимали, где безопасно, и доводили покупку до конца внутри приложения.
            </p>
            <dl className="mt-6 flex flex-col gap-1 text-[15px] text-white/60">
              <div className="flex gap-3">
                <dt>Дата</dt>
                <dd>2026</dd>
              </div>
              <div className="flex gap-3">
                <dt>Роль</dt>
                <dd>Product designer</dd>
              </div>
            </dl>
          </div>
          <div className={`${col} mt-10`}>
            <div className="overflow-hidden rounded-[22px] bg-white/[0.06]">
              <img alt="Улучшение сценария Безопасной сделки" src={asset("/figma/cover-yula.webp")} className="block w-full" />
            </div>
          </div>

          <hr className={`${hrCls} mt-14`} />

          {/* 1. Задача */}
          <div className={`${col} mt-12`}>
            <h1 id="task" className={h1 + " w-fit scroll-mt-24"}>Задача</h1>
          </div>
          <Block title="Вводные">
            <p>
              На C2C-маркетплейсе «Юла» пользователи покупают и продают товары с рук. В приложении есть механизм «Безопасной сделки» и доставки, который должен защищать деньги пользователей и гарантировать честность покупки.
            </p>
          </Block>
          <Block title="Проблема">
            <p>
              У платформы подпорченная репутация из-за высокой активности мошенников. Пользователи часто не доводят сделки до конца внутри приложения, потому что не понимают, где безопасный сценарий, а где риск. Люди сталкиваются с фишинговыми ссылками, боятся переводить деньги и не чувствуют защиты, поддержки и гарантий со стороны сервиса.
            </p>
          </Block>
          <Block title="Что нужно было сделать">
            <List
              items={[
                "Проверить, действительно ли пользователи отказываются от сделок из-за недостатка доверия и непонимания процесса",
                "Предложить сценарий покупки и продажи, который понятно объясняет безопасный алгоритм сделки, снижает страх неопределённости и усиливает ощущение защиты",
                "Подумать, как увеличить конверсию в успешно завершённую сделку внутри сервиса",
              ]}
            />
          </Block>

          <hr className={`${hrCls} mt-14`} />

          {/* 2. Исследование */}
          <div className={`${col} mt-12`}>
            <h1 id="research" className={h1 + " w-fit scroll-mt-24"}>Исследование</h1>
          </div>
          <Block title="Личный эксперимент">
            <p>
              Я опубликовала объявление о продаже техники: PS5. Такой товар хорошо пользуется спросом на рынке перепродажи, а под критерии «Безопасной сделки» не подходит.
            </p>
            <List
              items={[
                "За первые сутки было четыре попытки увести диалог в сторонние мессенджеры",
                "Интерфейс приложения пассивен: нет ни предупреждений, ни системных сообщений",
              ]}
            />
          </Block>
          <Block title="UX-аудит">
            <List
              items={[
                "Интерфейс чата никак не реагирует на фразы-триггеры",
                "У пользователя включается туннельное мышление и ложное доверие",
                "Информация о «Безопасной сделке» спрятана от пользователей",
              ]}
            />
          </Block>
          <Block title="Гипотезы">
            <List
              items={[
                "Контекстные алерты. Если система фиксирует стоп-слова, показываем предупреждение прямо в диалоге",
                "Траст-сигналы. Выносим рейтинг, стаж и верификацию продавца прямо в чат",
                "Запрос «Безопасной сделки». Даём возможность быстро запросить её из чата",
                "P2P-сценарий. Добавляем альтернативный способ оплаты товаров дороже 20 тысяч рублей",
              ]}
            />
          </Block>
          <Block title="Бенчмаркинг">
            <List
              items={[
                "Аналоги и конкуренты (Авито, Дром). Траст-сигналы должны быть в поле зрения пользователя ещё до начала диалога",
                "Западный ресейл (Vinted, StockX). «Безопасная сделка» там полноценный функциональный блок: в приоритете целевые действия и минимум взаимодействия между пользователями",
                "Крипта (Bybit). Есть варианты легализации P2P-переводов и использования верифицированных реквизитов",
              ]}
            />
          </Block>

          <hr className={`${hrCls} mt-14`} />

          {/* 3. Решение */}
          <div className={`${col} mt-12`}>
            <h1 id="solution" className={h1 + " w-fit scroll-mt-24"}>Решение</h1>
          </div>
          <Block title="Выводим безопасность из тени">
            <List
              items={[
                "Заметные бейджи в карточках: цветная маркировка товаров с «Безопасной сделкой» для быстрого сканирования",
                "Контекстный онбординг: информативный баннер в потоке контента вместо всплывающих окон",
              ]}
            />
          </Block>
          <Block title="Подтверждаем надёжность">
            <List
              items={[
                "Блок о «Безопасной сделке» сразу после цены снимает страх потери денег в момент первого касания с ценой",
                "Смена паттерна: кнопки «Купить» и «В корзину» приоритетнее, чем «Написать» и «Позвонить»",
                "Доверие к продавцу: уровень надёжности виден прямо в карточке товара",
              ]}
            />
          </Block>
          <Block title="Чат">
            <List
              items={[
                "Рассказываем о новых фичах прямо в диалоге",
                "Быстрый запрос «Безопасной сделки» из чата",
                "Альтернативный вариант: «Сделка напрямую» для товаров, где «Безопасная сделка» недоступна",
              ]}
            />
          </Block>
          <Block title="P2P и последний шаг перед оплатой">
            <List
              items={[
                "Легализация прямых переводов: безопасное предоставление реквизитов через верификацию счёта",
                "Пошаговое информирование: доступно рассказываем, как проходит процесс сделки",
              ]}
            />
          </Block>

          <hr className={`${hrCls} mt-14`} />

          {/* 4. Следующий этап */}
          <div className={`${col} mt-12`}>
            <h1 id="next" className={h1 + " w-fit scroll-mt-24"}>Следующий этап</h1>
            <p className={`${body} mt-4`}>
              Решение пока не проверялось на пользователях. Здесь будут метрики и критерии успеха.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
