import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductTitle } from '../../src/components';
import { product1 } from '../data/product';

describe('ProductTitle', () => {

  test('should display comp with custom title', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom product" className="custom-class" />
    );

    expect( wrapper.toJSON() ).toMatchSnapshot();

  });
  
  test('should display comp with product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={ product1 }>
        {
          () => (
            <ProductTitle />
          )
        }
      </ProductCard>
    );

    expect( wrapper.toJSON() ).toMatchSnapshot();

  });


});
