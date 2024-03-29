import { useEffect, useState } from "react";
import mirageService from "../../service/mirageService";
import { Container } from "./styles";

export function TransactionTable() {
  const [transaction, setTransactions] = useState();

  useEffect(() => {
    mirageService
      .getTransactions()
      .then((response) => {
        console.log('response', response.data);
      })
      .catch((err) => {
        console.log("erro no get transaction", err);
      });
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de WebSite</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/20/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.100</td>
            <td>Casa</td>
            <td>17/20/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
