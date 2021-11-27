import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/product';

describe('ProductTitle', () => {

  test('should match snapshot with img', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://hola.jpg" />
    );

    expect( wrapper.toJSON() ).toMatchSnapshot();

  });
  
  test('should display comp with no image', () => {
    const wrapper = renderer.create(
      <ProductCard product={ product2 }>
        {
          () => (
            <ProductImage />
          )
        }
      </ProductCard>
    );

    expect( wrapper.toJSON() ).toMatchSnapshot();

  });


});
