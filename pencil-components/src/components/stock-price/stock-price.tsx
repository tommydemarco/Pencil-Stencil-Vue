import { Component, Prop, State, Element, h } from '@stencil/core';

import { API_KEY } from '../../../api-keys.js';

@Component({
  tag: 'pc-stock-price',
  styleUrl: './stock-price.scss',
  shadow: true,
})
export class StockPrice {
  //=====> COMPONENT STATIC PROPERTIES
  baseClass: string = 'pc-stock-price';
  checkboxElement: HTMLInputElement;

  //=====> HOST ELEMENT REFERENCE
  @Element() hostElement: HTMLElement;

  //=====> PROPS
  @Prop() searchPlaceholder: string;
  @Prop() buttonText: string;
  @Prop() eurosText: string;
  @Prop() dollarText: string;
  @Prop() checkboxText: string;

  //=====> STATE
  @State() searchState: string = '';
  @State() searchDisabled: boolean = false;

  //=====> LIFECYCLE METHODS

  //=====> UTILS METHODS
  getUrl(symbol: string) {
    return `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&${symbol}=IBM&outputsize=full&apikey=${API_KEY}`;
  }

  //=====> CLASS METHODS
  handleInput = (event: Event) => {
    this.searchState = (event.target as HTMLInputElement).value;
  };

  handleStockSearch = async () => {
    const currency = (this.hostElement.shadowRoot.querySelector('input[name="currrency"]:checked') as HTMLInputElement).value;

    try {
      const response = await fetch(this.getUrl(this.searchState));
      if (!response.ok) {
        throw 'a stone';
      }
      const responseData = await response.json();
      console.log(responseData);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const classes = [this.baseClass];
    return (
      <div class={classes.join(' ')}>
        <input class={this.baseClass + '__input'} type="text" placeholder={this.searchPlaceholder} value={this.searchState} onChange={this.handleInput} />
        <div class={this.baseClass + '__input-group'}>
          <div class={this.baseClass + '__radio-group'}>
            <input type="radio" name="currrency" id="euros" value="euros" class={this.baseClass + '__radio-group'} checked />
            <label htmlFor="euros" class={this.baseClass + '__radio-label'}>
              {this.eurosText}
            </label>
          </div>
          <div class={this.baseClass + '__radio-group'}>
            <input type="radio" name="currrency" id="dollars" value="dollars" class={this.baseClass + '__radio-button'} />
            <label htmlFor="dollars" class={this.baseClass + '__radio-label'}>
              {this.dollarText}
            </label>
          </div>
        </div>
        <div class={this.baseClass + '__input-group'}>
          <div>
            <input type="checkbox" id="checkbox" ref={element => (this.checkboxElement = element)} />
            <label htmlFor="checkbox">{this.checkboxText}</label>
          </div>
        </div>

        <button class={this.baseClass + '__button'} onClick={this.handleStockSearch} disabled={this.searchDisabled}>
          {this.buttonText}
        </button>
        <div class={this.baseClass + '__content'}></div>
      </div>
    );
  }
}
