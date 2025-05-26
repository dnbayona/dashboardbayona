import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useState, useEffect } from "react";

export default function BayonaBotDashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    if (!authenticated) return;
    const fetchData = async () => {
      setTrades([
        { pair: "EURUSD", type: "BUY", lot: 0.01, price: 1.08504, pnl: 0.94 },
        { pair: "XAUUSD", type: "SELL", lot: 0.02, price: 2345.67, pnl: -1.12 },
        { pair: "AUDUSD", type: "BUY", lot: 0.05, price: 0.6621, pnl: 3.45 }
      ]);
    };
    fetchData();
  }, [authenticated]);

  const handleLogin = () => {
    if (password === "Lorenza2025.") setAuthenticated(true);
    else alert("Contraseña incorrecta");
  };

  if (!authenticated) {
    return (
      <div className="p-6 max-w-md mx-auto">
        <h1 className="text-xl font-bold mb-4">Acceso al Dashboard BayonaBot</h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresa la contraseña"
          className="border p-2 w-full mb-4"
        />
        <Button className="w-full" onClick={handleLogin}>Ingresar</Button>
      </div>
    );
  }

  return (
    <div className="p-6 grid gap-4">
      <h1 className="text-2xl font-bold">BayonaBot Dashboard – Múltiples Pares</h1>
      {trades.map((trade, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <p><strong>Par:</strong> {trade.pair}</p>
            <p><strong>Tipo:</strong> {trade.type}</p>
            <p><strong>Lote:</strong> {trade.lot}</p>
            <p><strong>Precio:</strong> {trade.price}</p>
            <p><strong>PnL:</strong> {trade.pnl >= 0 ? `+$${trade.pnl.toFixed(2)}` : `-$${Math.abs(trade.pnl).toFixed(2)}`}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
