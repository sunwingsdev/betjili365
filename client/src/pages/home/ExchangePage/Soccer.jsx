import ExchangeBanner from "@/components/exchange-page/ExchangeBanner";
import ExchangeFooter from "@/components/exchange-page/ExchangeFooter";
import kv02 from "../../../assets/exchange/KV02.jpg";

const Soccer = () => {
  return (
    <div>
      <ExchangeBanner img={kv02} />
      <ExchangeFooter />
    </div>
  );
};

export default Soccer;
