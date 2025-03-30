import React from "react";
import ClipboardJS from "clipboard";
import styles from "./DepositCoin.module.css";

const DepositCoin = () => {
  const [copiedMessages, setCopiedMessages] = React.useState({
    bitcoin: null,
    ethereum: null,
    tron: null,
  });

  React.useEffect(() => {
    const clipboard = new ClipboardJS(".copy-button");

    clipboard.on("success", (e) => {
      const coin = e.trigger.getAttribute("data-coin");
      setCopiedMessages((prev) => ({
        ...prev,
        [coin]: "Copiado",
      }));
      setTimeout(() => {
        setCopiedMessages((prev) => ({
          ...prev,
          [coin]: null,
        }));
      }, 2000);
      e.clearSelection();
    });

    return () => {
      clipboard.destroy();
    };
  }, []);

  const handleCopyClick = async (coin, id) => {
    setCopiedMessages((prev) => ({
      ...prev,
      [coin]: "Copiando...",
    }));
    setTimeout(async () => {
      try {
        await navigator.clipboard.writeText(id);
        setCopiedMessages((prev) => ({
          ...prev,
          [coin]: "Copiado",
        }));
      } catch (error) {
        setCopiedMessages((prev) => ({
          ...prev,
          [coin]: "Error al copiar",
        }));
      }
    }, 3000);
  };

  return (
    <div className={styles.coins_container}>
      <ul role="list" className="divide-y divide-gray-100">
        <li className="flex flex-col gap-y-2 sm:flex-row sm:items-center sm:gap-x-6 py-5">
          <div className="flex gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
              alt=""
            />
            <div className="min-w-0 flex-auto btn-copy">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Bitcoin
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500 ">
                1DpEe5tPkX4ZNCG5VraXdHkH1gYeGxt1ip
              </p>
              <button
                onClick={() => handleCopyClick("bitcoin", "1DpEe5tPkX4ZNCG5VraXdHkH1gYeGxt1ip")}
                className="ml-2 text-blue-500 hover:underline focus:outline-none copy-button"
                data-coin="bitcoin"
              >
                {copiedMessages.bitcoin === "Copiado" ? "Copiado" : "Copiar"}
              </button>
              {copiedMessages.bitcoin && <p className="text-green-500">{copiedMessages.bitcoin}</p>}
            </div>
          </div>
        </li>

        <li className="flex flex-col gap-y-2 sm:flex-row sm:items-center sm:gap-x-6 py-5">
          <div className="flex gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src="https://upload.wikimedia.org/wikipedia/commons/0/01/Ethereum_logo_translucent.svg"
              alt=""
            />
            <div className="min-w-0 flex-auto btn-copy">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Ethereum
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500 ">
                0x99429b84922a05fb5c85bf90b59607265e5daaf5
              </p>
              <button
                onClick={() => handleCopyClick("ethereum", "0x99429b84922a05fb5c85bf90b59607265e5daaf5")}
                className="ml-2 text-blue-500 hover:underline focus:outline-none copy-button"
                data-coin="ethereum"
              >
                {copiedMessages.ethereum === "Copiado" ? "Copiado" : "Copiar"}
              </button>
              {copiedMessages.ethereum && <p className="text-green-500">{copiedMessages.ethereum}</p>}
            </div>
          </div>
        </li>

        <li className="flex flex-col gap-y-2 sm:flex-row sm:items-center sm:gap-x-6 py-5">
          <div className="flex gap-x-4">
          <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABwCAMAAADhcojgAAAAKlBMVEX///9Qr5VGq4/J5t5ctJz0+fiMyril1ch8w6/i8e1puqO94deQzLzS6uSVRi6yAAAEP0lEQVRogcWa25aDIAxFVeTazv//7oR6acEEEoE2s+aplrN7iCSg04THY167xmwJISJ0mDvHqkUAj976s9AC1x9AZMEAA0QW9M+AGKv/rQESC55jABxX369jAOa/3xrAtsCP0udaMMwApgXDMiAGxwI7UH9+3jJgaQi5BZcMWIxqCJchVLPgasAirORp2NyDmgXXDOgMUMuCax3uDBDKVRkpQ50BKiUJaUR6AxQtwOpwb4CiBVgn1h2gYMEfot8fYH6QV6OtaH8A0gK8E+sPQGYB3osPACAsQDNgCACRBUQjMgIALUlUIzICAC1JZCMSDBIux9LYVcYQWxykJGm6E0M7jdxFjV9GjXndJQk7sSuArJW8WCDdDrYCXDaK0la0FSC3QPr1doAsC8S9eDtAYoH8QKAdIMkC+WakHSCxgG3A++Y2OUBIPmbER0kiylAuDbY5Y61S3utrPdNae6+UtS6s++WVeJekyplYHCw4q0D2EDEGW4oPOLhKAcdcgThnsWgADALaeopjmuPHFZZisCmAT0A7eWXKEIcF9IEA/HIDQ8Xfs87J9C6XHPhMwm267OurEaJsAWnAsho/abVp558VAXaKBSjAPG8ohEc5AwwYbwgPGQA7xWoBId8k7xFKBqxqmtRKuccFiJcGTzYmDzoDYiOkSX0JABDA54bqzcgM8B0BYNVQ+GcPOgNgBjpOwaTwkRx5D24Kvk8S0uXO0avAYl7LrbcOY+AALK9FbBslEAZoOgvnnT0yxOY2qzNQFuLa+4pXm5wqxzUgwEq0wVliIXCbAFmMAUHtVcfHAuDiUlw9l4tLcSwL5zcNlUnPo6TRzwdgCp3179J31iIHMCGs+x+Ec0c1+iiUWuETuMVHPSs1JGcpnK6hj0A+OgoIOXDSk1Vaoq0gxxqHcuTKsW5iBYTWZzVlyQxblesqe2RJWjd5+pAH7J6u1g+wAtnxcvqyD4q2phQ9IBA9K2sDIHb8EoImAPLEQUDQAlA48fjjZ+JtgJU+Jpxi0RgNsFYeGHDvhdsAxd8vmIW7AFV9LsFNAIY+5AHn7YVbAIH5AJ9zWnAHgKvPenh6A6CW/zICOYBEn7EeiAFk+jBe7cxACOD4L5AcUSYQAjjZa0zbiMVZkAHw8z8ZsuSBCOCefplAAnBXfyoe3vABGC8t3CDgA7DfHkKDnAU2wJ38T4Ig4AI061OzwATooE9smngATQ/cygQsgE766CxwANryv0LAAGi6//O4zEIdoKs+smkKXin1/vcqA2C1n00ELx/O/3xf3l1f+Fyps/9igm73XxrsQ5RB+txNk7T9lATrbcuB+qwjjAH5LyIYrA95UGyWR87/EaVNk+D99SEE39Ev3I3D579M8I35PwI7RAlf1Mfa9S7tZwNB5WXZAZHeC9/Kf4qgYfvZEPpsVb89/2c8f6y/bxw7tv/iiPfCb+b/TdDq/z+oazTrrEkqTAAAAABJRU5ErkJggg=="
              alt=""
            />
            <div className="min-w-0 flex-auto btn-copy">
              <p className="text-sm font-semibold leading-6 text-gray-900">
              Tron
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500 ">
             TYYHn9gSRjyFtngubfoHvKN4m8ePUeu9DX
              </p>
              <button
                onClick={() => handleCopyClick("tron", "TYYHn9gSRjyFtngubfoHvKN4m8ePUeu9DX")}
                className="ml-2 text-blue-500 hover:underline focus:outline-none copy-button"
                data-coin="ethereum"
              >
                {copiedMessages.tron === "Copiado" ? "Copiado" : "Copiar"}
              </button>
              {copiedMessages.tron && <p className="text-green-500">{copiedMessages.tron}</p>}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DepositCoin;
