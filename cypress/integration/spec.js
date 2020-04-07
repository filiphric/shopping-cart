const helloTest = {
  html: `
  <div class="c-cart__item__t">
  <h4 class="c-cart__text__title"><a href="/p/testitem-1" class="no-underline">Test Product 1</a></h4>
  <h4 class="c-cart__text__title"><a href="/p/testitem-2" class="no-underline">Test Product 2</a></h4>
  <h4 class="c-cart__text__title"><a href="/p/testitem-3" class="no-underline">Test Product 3</a></h4>
  <h4 class="c-cart__text__title"><a href="/p/testitem-4" class="no-underline">Test Product 4</a></h4>
</div>
  `,
  test: `
    cy.get('.c-cart__text__title').then( item => {
      // test texts
      expect(item[0]).to.contain.text('Test Product 1')
      expect(item[1]).to.contain.text('Test Product 2')
      expect(item[2]).to.contain.text('Test Product 3')
      expect(item[3]).to.contain.text('Test Product 4')      
    })
  `
}

it('tests hello', () => {
  cy.runExample(helloTest)
})