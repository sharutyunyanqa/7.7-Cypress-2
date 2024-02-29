
import tests from '../fixtures/seats'
import selectors from '../fixtures/selectors'

describe('Homepage display', () => {
  beforeEach(()=> {
    cy.visit("/");
  })

  it('should display homepage correctly', () => {
    cy.get(selectors.navigateWeekDays).should("have.length", 7)
  });
  it('should select day', ()=>{
    cy.get(selectors.navigateWeekDays + ':nth-of-type(4)').click();
  });
  it('should select the session', ()=> {
    cy.get(selectors.navigateWeekDays + ':nth-of-type(4)').click();
    cy.get(selectors.movieTime).contains("12:00").click();
  });
  tests.forEach((test) => {
    it(test.name, () => {
        cy.get(selectors.navigateWeekDays + ':nth-of-type(4)').click();
        cy.get(selectors.movieTime).contains("12:00").click();
        test.data.forEach((seat) => {
          cy.get(`${selectors.buyingScheme} >:nth-child(${seat.raw}) >:nth-child(${seat.seat})`).click();
        });
  
        cy.get(selectors.acceptinButton).click();
        cy.contains(selectors.ticketConfirmationMessage).should('be.visible');
      });
    });
  });