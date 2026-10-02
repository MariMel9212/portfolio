import { asset } from "@/lib/asset"
const sf = "font-sf not-italic";

type Product = {
  image: string;
  imageClassName?: string;
  cropped?: boolean;
  price: string;
  safe?: boolean;
  meta: string;
  metaIcon?: boolean;
  title: string;
  highlighted?: boolean;
};

const nearby: Product[] = [
  {
    image: "/figma/yula-phone.webp",
    price: "13 200 ₽",
    safe: true,
    meta: "14.1 км, от 1 дня",
    metaIcon: true,
    title: "Смартфон Infinix HOT 50, 256 ГБ, 144 Гц, чёрный",
    highlighted: true,
  },
  {
    image: "/figma/yula-keyboard.webp",
    price: "6 000  ₽",
    safe: true,
    meta: "14.1 км, от 1 дня",
    metaIcon: true,
    title: "Механическая клавиатура Dareu EK87",
    highlighted: true,
  },
];

const feed: Product[] = [
  {
    image: "/figma/yula-crib.webp",
    price: "9 600 ₽",
    safe: true,
    meta: "Москва, улица Складочная 24",
    title: "Колыбель детская кроватка carrello prima",
  },
  {
    image: "/figma/yula-bike.webp",
    imageClassName: "h-[134.26%] left-[-10.7%] top-[-23.1%] w-[115.84%]",
    cropped: true,
    price: "56 000  ₽",
    meta: "Москва, улица Радиаторская 7",
    title: "Велосипед Welt Rambler 29",
  },
];

const bannerCrops = ["right-0 top-[calc(50%+0.36px)] -translate-y-1/2", "left-[0.73px] top-[0.73px]", "left-1/2 top-[calc(50%+0.36px)] -translate-x-1/2 -translate-y-1/2", "left-[calc(50%-65.47px)] top-[calc(50%+0.36px)] -translate-x-1/2 -translate-y-1/2"];
const bannerColors = ["bg-[#c6fcd7]", "bg-[#f5e7da]", "bg-[#e6e7ec]", "bg-[#dfeaf0]"];
const bannerOffsets = ["left-[-7.14%]", "left-[-114.29%]", "left-[-221.43%]", "left-[-328.57%]"];

function ProductCard({ product }: { product: Product }) {
  const frame = product.highlighted
    ? "border-[0.727px] border-[#ae80fe]"
    : "shadow-[0px_0px_2.91px_0px_rgba(0,0,0,0.06)]";
  return (
    <div className={`relative flex h-[216.767px] w-[136.025px] shrink-0 flex-col items-start overflow-clip rounded-[8px] bg-white ${frame}`}>
      <div className="relative flex h-[120.75px] w-[136.025px] shrink-0 items-start justify-end overflow-clip p-[5.819px]">
        {product.cropped ? (
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <img alt="" className={`absolute max-w-none ${product.imageClassName}`} src={asset(product.image)} />
          </div>
        ) : (
          <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-bottom" src={asset(product.image)} />
        )}
        <div className="relative size-[16.003px] shrink-0">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src={asset("/figma/ic-heart.svg")} />
        </div>
      </div>
      <div className="relative flex w-full shrink-0 flex-col items-start gap-[5.819px] px-[8.729px] pb-[8.729px] pt-[5.819px]">
        <div className="flex w-full flex-col items-start gap-[8.729px]">
          <div className="flex w-[96.018px] flex-col items-start gap-[2.91px]">
            <div className="flex w-full items-center justify-center pl-[0.727px]">
              <p className={`${sf} min-w-px flex-[1_0_0] whitespace-pre-wrap text-[11.64px] font-bold leading-[14.548px] tracking-[-0.41px] text-black/90`}>
                {product.price}
              </p>
            </div>
            {product.safe && (
              <div className="flex h-[14.548px] w-full items-center gap-[1.455px] rounded-[6px] bg-[#f5effe] pl-[2.91px] pr-[4.364px]">
                <div className="relative size-[13.093px] shrink-0">
                  <img alt="" className="absolute inset-0 block size-full max-w-none" src={asset("/figma/ic-trust-wallet.svg")} />
                </div>
                <p className={`${sf} whitespace-nowrap text-[8px] font-medium leading-none text-[#6e0ffb]`}>Сделка безопасна</p>
              </div>
            )}
          </div>
          <div className="flex w-full items-center gap-[2.91px] opacity-40">
            {product.metaIcon && (
              <div className="relative size-[11.639px] shrink-0">
                <img alt="" className="absolute inset-0 block size-full max-w-none" src={asset("/figma/ic-car.svg")} />
              </div>
            )}
            <p className={`${sf} min-w-px flex-[1_0_0] overflow-hidden text-ellipsis whitespace-nowrap text-[8.73px] leading-[11.639px] text-black`}>
              {product.meta}
            </p>
          </div>
        </div>
        <p className={`${sf} w-full overflow-hidden text-ellipsis text-[8.73px] leading-[11.639px] tracking-[-0.3px] text-[rgba(9,9,9,0.7)]`}>
          {product.title}
        </p>
      </div>
    </div>
  );
}

export function YulaHomeScreen({ locationIcon = "/figma/ic-location.svg" }: { locationIcon?: string }) {
  return (
    <div className="absolute left-[21.66px] top-[20.13px] h-[623.682px] w-[283.689px] overflow-clip rounded-[21px] bg-[#f7f7f7]">
      <div className="absolute left-0 top-[-186.32px] flex w-[283.689px] flex-col items-start gap-[8.729px]">
        <div className="flex w-full flex-col items-start gap-[10.184px]">
          <div className="flex w-full flex-col items-start">
            <div aria-hidden className="h-[34.916px] w-full" />
            <div className="flex w-full items-center gap-[8.729px] px-[8.729px] pb-[8.729px] pt-[4.364px]">
              <div className="relative h-[21.822px] w-[235.68px] shrink-0 rounded-[5.819px] bg-[#ebedf0]">
                <div className="absolute left-0 right-0 top-1/2 h-[26.187px] -translate-y-1/2">
                  <div className="absolute left-[12px] top-[calc(50%+4.91px)] size-[16px] -translate-y-1/2">
                    <img alt="" className="absolute inset-0 block size-full max-w-none" src={asset("/figma/ic-search.svg")} />
                  </div>
                  <p className={`${sf} absolute left-[26.19px] top-[calc(50%-8.37px)] whitespace-nowrap text-[12.366px] leading-[16.003px] tracking-[-0.2982px] text-[#818c99]`}>
                    Поиск
                  </p>
                </div>
              </div>
              <div className="relative size-[21.822px] shrink-0 overflow-clip rounded-full bg-[#dedddd]">
                <div className="absolute left-0 top-[-131.27px] h-[38.298px] w-[21.556px]">
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <img alt="" className="absolute left-[0.03%] top-[0.02%] h-[99.95%] w-[99.94%] max-w-none" src={asset("/figma/yula-avatar.webp")} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-[4.364px]">
              <div className="relative h-[92.381px] w-full shrink-0">
                <div className="absolute left-[-257.5px] top-0 h-[92.381px] w-[263.321px] rounded-[5.819px] bg-[#f2e7d4]" />
                <div className="absolute left-[10.18px] top-0 h-[92.381px] w-[263.321px] overflow-clip rounded-[5.819px] bg-[#d1dbfe]">
                  <div className="absolute left-[0.73px] top-[0.73px] h-[91.653px] w-[261.867px] rounded-[5.819px]">
                    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[5.819px]">
                      <img alt="" className="absolute left-[-4.17%] top-[-76.31%] h-[670.87%] w-[108.33%] max-w-none" src={asset("/figma/yula-banners.webp")} />
                    </div>
                  </div>
                </div>
                <div className="absolute left-[277.87px] top-0 h-[92.381px] w-[263.321px] rounded-[5.819px] bg-[#eaf4fe]" />
              </div>
              <div className="relative flex w-full shrink-0 items-center gap-[4.364px] overflow-clip pl-[5.092px]">
                {bannerColors.map((color, i) => (
                  <div key={color} className={`relative h-[82.197px] w-[82.924px] shrink-0 overflow-clip rounded-[5.819px] ${color}`}>
                    <div className={`absolute size-[81.47px] rounded-[5.819px] ${bannerCrops[i]}`}>
                      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[5.819px]">
                        <img alt="" className={`absolute top-[-205.49%] h-[754.73%] w-[348.21%] max-w-none ${bannerOffsets[i]}`} src={asset("/figma/yula-banners.webp")} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex w-full flex-col items-start px-[8.729px] py-[5.819px]">
              <div className="flex w-full items-center justify-between rounded-[5.819px] border-[0.727px] border-[#e0e0df] px-[5.819px] pb-[5.092px] pt-[5.819px]">
                <div className="flex items-center gap-[4.364px]">
                  <div className="relative size-[10.184px] shrink-0">
                    <img alt="" className="absolute inset-0 block size-full max-w-none" src={asset(locationIcon)} />
                  </div>
                  <p className={`${sf} whitespace-nowrap text-[8.729px] leading-[10.184px] text-[#707070]`}>Москва, улица Годовикова 10</p>
                </div>
                <div className="relative size-[10.184px] -scale-y-100">
                  <img alt="" className="absolute inset-0 block size-full max-w-none" src={asset("/figma/ic-arrow-up.svg")} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center px-[7.274px]">
            <p className={`${sf} whitespace-nowrap text-[12.366px] font-semibold leading-[16.003px] tracking-[-0.2982px] text-black`}>Интересное рядом</p>
          </div>
          <div className="flex w-full items-center justify-center gap-[2.91px] px-[4.364px]">
            {nearby.map((p) => (
              <ProductCard key={p.title} product={p} />
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-start px-[5.819px]">
          <div className="relative h-[101.837px] w-full overflow-clip rounded-[8.729px] drop-shadow-[0px_0px_2.91px_rgba(0,0,0,0.08)]">
            <div className="absolute left-[-19.33px] top-[-36.06px] flex h-[196.757px] w-[305.559px] items-center justify-center">
              <div className="flex-none rotate-[97.28deg]">
                <div className="relative h-[287.401px] w-[161.663px]">
                  <img alt="" className="pointer-events-none absolute inset-0 size-full max-w-none object-cover" src={asset("/figma/yula-safe-bg.webp")} />
                </div>
              </div>
            </div>
            <div className="absolute left-[138.29px] top-[-15.28px] flex h-[145.619px] w-[162.686px] items-center justify-center">
              <div className="flex-none rotate-[-1.36deg]">
                <div className="relative h-[141.881px] w-[159.367px]">
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <img alt="" className="absolute left-[-57.12%] top-0 h-full w-[157.12%] max-w-none" src={asset("/figma/yula-safe-shield.webp")} />
                  </div>
                </div>
              </div>
            </div>
            <p className={`${sf} absolute left-[7.27px] top-[13.09px] w-[142.572px] text-[12.366px] leading-[16.003px] tracking-[-0.2982px] text-white`}>
              Покупайте безопасно
            </p>
            <p className={`${sf} absolute left-[7.27px] top-[36.37px] w-[121.477px] text-[8.729px] leading-[10.184px] text-white opacity-80`}>
              Юла переведёт деньги продавцу только после получения товара
            </p>
            <p className={`${sf} absolute left-[7.27px] top-[84.38px] whitespace-nowrap text-[8.001px] font-medium leading-[10.184px] tracking-[0.0436px] text-[#f8f6f9]`}>
              О Безопасной Сделке
            </p>
          </div>
        </div>
        <div className="flex w-full items-center gap-[2.91px] px-[4.364px]">
          {feed.map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-[0.24px] left-1/2 flex -translate-x-1/2 items-center justify-center gap-[39.28px] border-t-[0.727px] border-black/5 bg-white px-[18.913px] pb-[26.187px] pt-[7.274px]">
        <div className="relative size-[17.458px] shrink-0">
          <div className="absolute inset-[11.8%_13.71%_11.81%_13.72%]">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={asset("/figma/ic-home.svg")} />
          </div>
        </div>
        <div className="relative size-[17.458px] shrink-0">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src={asset("/figma/ic-search-menu.svg")} />
        </div>
        <div className="flex h-[20.367px] items-center justify-center rounded-full bg-[linear-gradient(213.45deg,#00e5ff_7.1%,#de66ff_93.6%)] px-[1.455px]">
          <div className="relative size-[17.458px] shrink-0">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={asset("/figma/ic-plus.svg")} />
          </div>
        </div>
        <div className="relative flex items-center gap-[7.274px]">
          <div className="relative size-[17.458px] shrink-0">
            <img alt="" className="absolute inset-0 block size-full max-w-none" src={asset("/figma/ic-email.svg")} />
          </div>
          <div className="absolute left-[9.46px] top-[-4.36px] flex h-[11.639px] w-[14.548px] items-center justify-center rounded-full border-[1.091px] border-white bg-[#ff3d52] p-[2.91px]">
            <p className={`${sf} whitespace-nowrap text-[8.001px] font-medium leading-none text-white`}>13</p>
          </div>
        </div>
        <div className="relative size-[16.003px] shrink-0">
          <img alt="" className="absolute inset-0 block size-full max-w-none" src={asset("/figma/ic-heart-tab.svg")} />
        </div>
      </div>
    </div>
  );
}
