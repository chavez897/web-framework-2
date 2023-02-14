import React, { useState, useEffect } from "react";
import PriceSliderCSS from "../../assets/PriceSlider.module.css";
import propTypes, { ReactNodeLike } from "prop-types";

interface PriceSliderProps {
  highestPrice: number;
  setPriceFilter: (price: number[]) => void;
  ReactNodeLike: ReactNodeLike;
}

const PriceSlider = (props: PriceSliderProps) => {
  const { highestPrice, setPriceFilter } = props;
  const highestLimit = Math.ceil(highestPrice / 10) * 10; //Number(highestPrice) + sliderSteps;
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(highestLimit);

  const rangeGap = 5;
  const sliderSteps = 5;

  const leftProgressBarPercentage = (price: number) => {
    return (price / highestPrice) * 100 + "%";
  };

  const rightProgressBarPercentage = (price: number) => {
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
    setLeftPercentageProgressBar(leftProgressBarPercentage(Number(minPrice)));
    setRightPercentageProgressBar(rightProgressBarPercentage(Number(maxPrice)));
    setPriceFilter([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  return (
    <div className={PriceSliderCSS.container}>
      <div className={PriceSliderCSS.header}>Lesson price</div>
      <div className={PriceSliderCSS.priceInput}>
        <div className={PriceSliderCSS.field}>
          <input
            type="number"
            className="inputMin"
            value={minPrice}
            readOnly
            disabled="disabled"
          />
        </div>
        <div className={PriceSliderCSS.separator}>-</div>
        <div className={PriceSliderCSS.field}>
          <input
            type="number"
            className="inputMax"
            value={maxPrice}
            readOnly
            disabled="disabled"
          />
        </div>
      </div>
      <div className={PriceSliderCSS.slider}>
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
};

PriceSlider.propTypes = {
  highestPrice: propTypes.number.isRequired,
  setPriceFilter: propTypes.func.isRequired,
  minPrice: propTypes.number,
  maxPrice: propTypes.number,
  ReactNodeLike: propTypes.node,
};

export default PriceSlider;
