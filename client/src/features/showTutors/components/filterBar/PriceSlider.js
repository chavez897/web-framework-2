import React, { useState, useEffect } from "react";
import PriceSliderCSS from "../../assets/PriceSlider.module.css";
import propTypes from "prop-types";

const PriceSliderModal = ({ highestPrice }) => {
  console.log("highestPrice", highestPrice);
  const highestLimit = Math.ceil(highestPrice / 10) * 10; //Number(highestPrice) + sliderSteps;
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(highestLimit);

  const rangeGap = 5;
  const sliderSteps = 5;

  const leftProgressBarPercentage = (price) => {
    console.log("price", price);
    return (price / highestPrice) * 100 + "%";
  };

  const rightProgressBarPercentage = (price) => {
    return 100 - (price / highestLimit) * 100 + "%";
  };

  const [leftPercentageProgressBar, setLeftPercentageProgressBar] =
    useState("0%");
  const [rightPercentageProgressBar, setRightPercentageProgressBar] = useState(
    rightProgressBarPercentage(highestLimit)
  );

  useEffect(() => {
    setMinPrice(0);
    setMaxPrice(Math.ceil(highestPrice / 10) * 10);
  }, [highestPrice]);

  useEffect(() => {
    console.log("Entre");
    setLeftPercentageProgressBar(leftProgressBarPercentage(Number(minPrice)));
    setRightPercentageProgressBar(rightProgressBarPercentage(Number(maxPrice)));
  }, [minPrice, maxPrice]);

  console.log("minPrice", minPrice);
  console.log("maxPrice", maxPrice);

  return (
    <div className={PriceSliderCSS.container}>
      <div className={PriceSliderCSS.header}>Lesson price</div>
      <div className={PriceSliderCSS.priceInput}>
        <div className={PriceSliderCSS.field}>
          <input
            type="number"
            className="inputMin"
            value={minPrice}
            readonly
            disabled="disabled"
          />
        </div>
        <div className={PriceSliderCSS.separator}>-</div>
        <div className={PriceSliderCSS.field}>
          <input
            type="number"
            className="inputMax"
            value={maxPrice}
            readonly
            disabled="disabled"
          />
        </div>
      </div>
      <div class={PriceSliderCSS.slider}>
        <div
          className={PriceSliderCSS.progress}
          style={{
            left: leftPercentageProgressBar,
            right: rightPercentageProgressBar,
          }}
        ></div>
      </div>
      <div className={PriceSliderCSS.rangeInput}>
        <input
          className={PriceSliderCSS.rangeMin}
          type="range"
          min="0"
          max={highestPrice}
          step={sliderSteps}
          value={minPrice}
          onChange={(e) => {
            if (e && e.target && e.target.value) {
              let lowPrice = e.target.value;
              if (Number(lowPrice) >= Number(maxPrice))
                setMinPrice(Number(maxPrice) - rangeGap);
              else {
                setMinPrice(lowPrice);
              }
            }
          }}
        />
        <input
          className={PriceSliderCSS.rangeMax}
          type="range"
          min="0"
          max={highestLimit}
          step={sliderSteps}
          value={maxPrice}
          onChange={(e) => {
            if (e && e.target && e.target.value) {
              let maxPrice = e.target.value;
              if (Number(maxPrice) <= Number(minPrice)) {
                setMaxPrice(Number(minPrice) + rangeGap);
              } else {
                setMaxPrice(maxPrice);
              }
            }
          }}
        />
      </div>
    </div>
  );

  const changeProgressBar = (e) => {
    if (e && e.target && e.target.value) {
      if (maxPrice - minPrice < rangeGap) {
        if (e.target.className === "rangeMin") {
          setMinPrice(maxPrice - rangeGap);
        } else {
          setMaxPrice(minPrice + rangeGap);
        }
      } else {
        if (e.target.className === "rangeMin")
          setLeftPercentageProgressBar((e.target.value / 100) * 100 + "%");
        if (e.target.className === "rangeMax")
          setRightPercentageProgressBar(
            100 - (e.target.value / 100) * 100 + "%"
          );
      }
    }
  };
};

PriceSliderModal.propTypes = {
  minPrice: propTypes.number,
  maxPrice: propTypes.number,
};

export default PriceSliderModal;
