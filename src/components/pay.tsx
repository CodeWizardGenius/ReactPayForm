import React from "react";

function pay() {
  return (
    <div>
      <h1>Odeme Bilgileri</h1>
      <p>Kredi karti bilgilerinizi girizi</p>

      <h2>Kart Uzerindeki Isim</h2>
      <input type="text" placeholder="Baris Karapelit" />
      <h2>Kart Numarasi</h2>
      <input type="text" placeholder="1234 5678 9012 3456" />
      <div>
        <div>
          <h2>Ay</h2>
          <select name="" id="">
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <div>
          <h2>Yil</h2>
          <select name="" id="">
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </select>
        </div>
        <div>
          <h2>CVC</h2>
          <input type="text" placeholder="123" />
        </div>
      </div>
        <button>Simdi Ode</button>
    </div>
  );
}

export default pay;
