function App() {
  /* 1. 가맹점 식별하기 */
  const { IMP } = window;
  IMP.init("imp23142044");
  const requestPay = () => {
    IMP.request_pay(
      {
        // param
        pg: "kcp.{nictest04m}",
        pay_method: "card",
        merchant_uid: "ORD20180131-0000011",
        name: "노르웨이 회전 의자",
        amount: 64900,
        buyer_email: "kksltv123@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
        } else {
          console.log(rsp);
        }
      }
    );
  };
  return (
    <div>
      <button onClick={requestPay}>결제하기</button>
    </div>
  );
}

export default App;
