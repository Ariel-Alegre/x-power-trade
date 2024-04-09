
import React, { useEffect, useRef } from "react";
import Identify from "../Identify/Identify";
import SideBar from "../Sidebar/index";
import AccountMenu from "../AccountMenu/AccountMenu";
import styles from './Platforms.module.css'
import DetailsMarkets from "./DetailsMarkets/DetailsMrkets";
import AllCoins from "../Coins/AllCoins";



let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_a06ab") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          width: "100%",
          symbol: "BITSTAMP:BTCUSDT",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "es",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          withdateranges: true,
          range: "YTD",
          hide_side_toolbar: false,
          allow_symbol_change: true,
          details: false,
          calendar: true,
          container_id: "tradingview_a06ab",
        });
      }
    }
  }, []);



  return (
    <div>
      <Identify />
      <div className={styles.graphic} >
      <div className="tradingview-widget-container">

        <div id="tradingview_a06ab" />
        <div className="tradingview-widget-copyright"></div>
      </div>
        <div>
     <AllCoins/>

        </div>



    </div>
    </div>
  );
}


/* const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = true;

    // Configuración del widget
    const widgetConfig = {
      "width": 1000,
      "height": 490,
      "defaultColumn": "overview",
      "screener_type": "crypto_mkt",
      "displayCurrency": "USD",
      "colorTheme": "dark",
      "locale": "es"
    };

    script.text = `{
      "width": ${widgetConfig.width},
      "height": ${widgetConfig.height},
      "defaultColumn": "${widgetConfig.defaultColumn}",
      "screener_type": "${widgetConfig.screener_type}",
      "displayCurrency": "${widgetConfig.displayCurrency}",
      "colorTheme": "${widgetConfig.colorTheme}",
      "locale": "${widgetConfig.locale}"
    }`;

    const container = document.querySelector('.tradingview-widget-container__widget');
    container.appendChild(script);

    // Limpieza al desmontar el componente
    return () => {
      container.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
 
      </div>
    </div>
  );
};
 */