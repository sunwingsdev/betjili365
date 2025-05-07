import ExchangeBanner from "@/components/exchange-page/ExchangeBanner";
import ExchangeFooter from "@/components/exchange-page/ExchangeFooter";
import kv03 from "../../../assets/exchange/KV03.jpg";

const Tennis = () => {
  return (
    <div>
      <ExchangeBanner img={kv03} />
      <ExchangeFooter />
    </div>
  );
};

export default Tennis;
