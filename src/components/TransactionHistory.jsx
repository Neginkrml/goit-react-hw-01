import TransCss from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={TransCss.transHistory}>
        <thead>
          <tr className={TransCss.transHead}>
            <th className={TransCss.transth}>Type</th>
            <th className={TransCss.transth}>Amount</th>
            <th className={TransCss.transth}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => {
            return (
              <tr className={TransCss.transList} key={index}>
                <td className={TransCss.transItemm}>{item.type}</td>
                <td className={TransCss.transItemm}>{item.amount}</td>
                <td className={TransCss.transItemm}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
