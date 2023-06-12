
import React, { useEffect, useRef } from "react";
import Identify from "../Identify/Identify";
import SideBar from "../Sidebar/index";
import AccountMenu from "../AccountMenu/AccountMenu";
import styles from './Platforms.module.scss'
import DetailsMarkets from "./DetailsMarkets/DetailsMrkets";



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
          width: 980,
          height: 610,
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
          details: true,
          calendar: true,
          container_id: "tradingview_a06ab",
        });
      }
    }
  }, []);

  return (
    <div>
      <SideBar />
      <Identify />
      <AccountMenu />
      <div className={styles.graphic}>

      <div className="tradingview-widget-container">
        <div id="tradingview_a06ab" />
        <div className="tradingview-widget-copyright"></div>
      </div>

      </div>
    </div>
  );
}
