# AC-Product-Card

This is a npm package deployment test 

## Aaron Carrasco

## Example:

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'ac-product-card'
```

```
<ProductCard
  product={ product }
  initialValues={{
    count: 4,
    // maxCount: 10,
  }}
>
  {
    ({ count, maxCount, isMaxCountReached, reset, increaseBy }) => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )
  }
</ProductCard>
```