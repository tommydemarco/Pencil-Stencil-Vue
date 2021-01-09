import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'pc-stock-price',
  styleUrl: './stock-price.scss',
  shadow: true,
})
export class StockPrice {
  render() {
    const baseClass = 'pc-stock-price';
    const classes = [baseClass];
    return (
      <div class={classes.join(' ')}>
        <div class={baseClass + '__content'}></div>
      </div>
    );
  }
}
